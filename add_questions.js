const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'questions.json');
let questions = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Helper to generate mock questions
function generateMockQuestions(category, startIndex, count) {
  const newQ = [];
  const subjects = {
    fullstack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Git", "REST APIs", "Webpack", "TypeScript", "Docker", "AWS", "CI/CD"],
    aiml: ["Neural Networks", "Gradient Descent", "Overfitting", "Backpropagation", "Decision Trees", "SVM", "K-Means", "Random Forest", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Data Preprocessing", "Feature Scaling", "Loss Functions"],
    mechanical: ["Thermodynamics", "Fluid Mechanics", "Statics", "Dynamics", "Heat Transfer", "Material Science", "Machine Design", "Kinematics", "HVAC", "Manufacturing", "Robotics", "CAD", "FEA", "Mechanics of Materials", "Control Systems"],
    science: ["Physics", "Chemistry", "Biology", "Astronomy", "Geology", "Quantum Mechanics", "Genetics", "Evolution", "Ecology", "Botany", "Zoology", "Meteorology", "Oceanography", "Paleontology", "Neuroscience"],
    geography: ["Capitals", "Mountains", "Rivers", "Oceans", "Continents", "Deserts", "Countries", "Population", "Climate", "Maps", "Cultures", "Borders", "Flags", "Landmarks", "Economics"]
  };
  
  const diffs = ['easy', 'medium', 'hard'];
  const baseTopics = subjects[category] || ["Topic A", "Topic B", "Topic C"];

  for (let i = 0; i < count; i++) {
    const topic = baseTopics[i % baseTopics.length];
    const diff = diffs[i % diffs.length];
    newQ.push({
      id: startIndex + i,
      category: category,
      difficulty: diff,
      question: `This is a generated question about ${topic} in the ${category} category. Which option is correct?`,
      options: [
        `Incorrect Option 1 about ${topic}`,
        `Correct Option about ${topic}`,
        `Incorrect Option 2 about ${topic}`,
        `Incorrect Option 3 about ${topic}`
      ],
      answer: 1
    });
  }
  return newQ;
}

const categories = ['fullstack', 'aiml', 'mechanical', 'science', 'geography'];
let currentId = 5000;

categories.forEach(cat => {
  const catCount = questions.filter(q => q.category === cat).length;
  const needed = Math.max(0, 16 - catCount); // ensure at least 16 so they have 15 random ones
  if (needed > 0) {
    const mocks = generateMockQuestions(cat, currentId, needed);
    questions.push(...mocks);
    currentId += needed;
  }
});

fs.writeFileSync(filePath, JSON.stringify(questions, null, 2));
console.log(`Updated questions database to total ${questions.length} questions.`);
