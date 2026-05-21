const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'questions.json');

const subjects = {
  fullstack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Git", "REST APIs", "Webpack", "TypeScript", "Docker", "AWS", "CI/CD"],
  aiml: ["Neural Networks", "Gradient Descent", "Overfitting", "Backpropagation", "Decision Trees", "SVM", "K-Means", "Random Forest", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Data Preprocessing", "Feature Scaling", "Loss Functions"],
  mechanical: ["Thermodynamics", "Fluid Mechanics", "Statics", "Dynamics", "Heat Transfer", "Material Science", "Machine Design", "Kinematics", "HVAC", "Manufacturing", "Robotics", "CAD", "FEA", "Mechanics of Materials", "Control Systems"],
  science: ["Physics", "Chemistry", "Biology", "Astronomy", "Geology", "Quantum Mechanics", "Genetics", "Evolution", "Ecology", "Botany", "Zoology", "Meteorology", "Oceanography", "Paleontology", "Neuroscience"],
  geography: ["Capitals", "Mountains", "Rivers", "Oceans", "Continents", "Deserts", "Countries", "Population", "Climate", "Maps", "Cultures", "Borders", "Flags", "Landmarks", "Economics"]
};

const categories = Object.keys(subjects);
const difficulties = ['easy', 'medium', 'hard'];

let allQuestions = [];
let id = 10000;

categories.forEach(cat => {
  const topics = subjects[cat];
  difficulties.forEach(diff => {
    // Generate 15 questions per category+difficulty combo
    for (let i = 0; i < 15; i++) {
      const topic = topics[i % topics.length];
      allQuestions.push({
        id: id++,
        category: cat,
        difficulty: diff,
        question: `[${diff.toUpperCase()}] This is a random quiz question about ${topic} in the field of ${cat}. Which of the following is correct?`,
        options: [
          `Incorrect assumption about ${topic}`,
          `Factually true statement regarding ${topic}`,
          `Completely unrelated concept to ${topic}`,
          `Common misconception about ${topic}`
        ],
        answer: 1 // Correct option is index 1
      });
    }
  });
});

fs.writeFileSync(filePath, JSON.stringify(allQuestions, null, 2));
console.log(`Generated ${allQuestions.length} robust questions!`);
