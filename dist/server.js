const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static frontend files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Paths to our local database files
const QUESTIONS_FILE = path.join(__dirname, 'data', 'questions.json');
const LEADERBOARD_FILE = path.join(__dirname, 'data', 'leaderboard.json');

// Helper to read JSON file
const readJSONFile = (filePath, fallback = []) => {
  try {
    if (!fs.existsSync(filePath)) {
      // Ensure directory exists
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2));
      return fallback;
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return fallback;
  }
};

// Helper to write JSON file
const writeJSONFile = (filePath, data) => {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    return false;
  }
};

// API: Get questions (optional filtering by category and difficulty, support source parameter)
app.get('/api/questions', async (req, res) => {
  const { category, difficulty, source } = req.query;

  if (source === 'api') {
    try {
      // Map frontend category to Open Trivia DB category ID
      let catId = '';
      if (category === 'fullstack') {
        catId = '18'; // Science: Computers
      } else if (category === 'aiml') {
        catId = '18'; // Science: Computers
      } else if (category === 'mechanical') {
        catId = '30'; // Science: Gadgets / Devices
      } else if (category === 'science') {
        catId = '17'; // Science & Nature
      } else if (category === 'geography') {
        catId = '22'; // Geography
      }

      let url = 'https://opentdb.com/api.php?amount=10&type=multiple';
      if (catId) url += `&category=${catId}`;
      if (difficulty && difficulty !== 'all') url += `&difficulty=${difficulty}`;

      console.log('Fetching from Open Trivia DB:', url);
      const apiRes = await fetch(url);
      if (!apiRes.ok) {
        const errorText = await apiRes.text().catch(() => '');
        throw new Error(`Failed to fetch from Open Trivia DB. Status: ${apiRes.status} ${apiRes.statusText}. Response: ${errorText}`);
      }
      
      const data = await apiRes.json();
      if (data.response_code !== 0) {
        throw new Error(`Open Trivia DB returned response code ${data.response_code}`);
      }

      const decode = (text) => {
        if (typeof text !== 'string') return text;
        return text
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&eacute;/g, 'é')
          .replace(/&rsquo;/g, "'")
          .replace(/&oacute;/g, 'ó')
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"')
          .replace(/&aring;/g, 'å')
          .replace(/&Oslash;/g, 'Ø')
          .replace(/&uuml;/g, 'ü')
          .replace(/&amp;/g, '&');
      };

      const mappedQuestions = data.results.map((q, idx) => {
        const correct = decode(q.correct_answer);
        const incorrect = q.incorrect_answers.map(decode);
        
        // Combine correct and incorrect options
        const options = [...incorrect];
        // Insert correct answer at random index
        const correctIdx = Math.floor(Math.random() * 4);
        options.splice(correctIdx, 0, correct);

        return {
          id: 1000 + idx,
          category: decode(q.category),
          difficulty: decode(q.difficulty),
          question: decode(q.question),
          options: options,
          answer: correctIdx
        };
      });

      return res.json(mappedQuestions);
    } catch (error) {
      console.log('Error fetching from Open Trivia DB, falling back to local database:', error.message || error);
      // Fall through to local database logic on error
    }
  }

  // Local database logic (original logic)
  let questions = readJSONFile(QUESTIONS_FILE);

  if (category && category !== 'all') {
    questions = questions.filter(q => q.category.toLowerCase() === category.toLowerCase());
  }

  if (difficulty && difficulty !== 'all') {
    questions = questions.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  // Shuffle questions array to make each quiz attempt fresh
  const shuffled = questions.sort(() => 0.5 - Math.random());
  
  // Return a maximum of 15 questions per quiz session
  res.json(shuffled.slice(0, 15));
});

// API: Get leaderboard (sorted by score descending)
app.get('/api/leaderboard', (req, res) => {
  const scores = readJSONFile(LEADERBOARD_FILE);
  
  // Sort descending by score, then by date (most recent first)
  const sortedScores = scores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.date) - new Date(a.date);
  });

  // Limit to top 10
  res.json(sortedScores.slice(0, 10));
});

// API: Submit a score to leaderboard
app.post('/api/scores', (req, res) => {
  const { name, email, score, category, difficulty, streak } = req.body;

  if (!name || typeof score !== 'number') {
    return res.status(400).json({ error: 'Name and score are required parameters.' });
  }

  const scores = readJSONFile(LEADERBOARD_FILE);
  
  const newEntry = {
    name: name.trim().substring(0, 20), // Max 20 chars
    email: email ? email.trim().substring(0, 50) : '', // Max 50 chars
    score: Math.max(0, Math.min(100, score)), // Limit 0 - 100
    category: category || 'all',
    difficulty: difficulty || 'all',
    streak: typeof streak === 'number' ? streak : 0,
    date: new Date().toISOString()
  };

  scores.push(newEntry);
  writeJSONFile(LEADERBOARD_FILE, scores);

  // Return the top scores back as a convenience
  const sortedScores = scores.sort((a, b) => b.score - a.score).slice(0, 10);
  res.json({ success: true, leaderboard: sortedScores });
});

// Fallback route to serve index.html for SPA router (optional but nice)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Quiz App Server is running on port ${PORT}`);
  console.log(`Local URL: http://localhost:${PORT}`);
});
