// Local/Offline Fallback Questions Dataset
const FALLBACK_QUESTIONS = [
  {
    "id": 10000,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about HTML in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about HTML",
      "Factually true statement regarding HTML",
      "Completely unrelated concept to HTML",
      "Common misconception about HTML"
    ],
    "answer": 1
  },
  {
    "id": 10001,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about CSS in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CSS",
      "Factually true statement regarding CSS",
      "Completely unrelated concept to CSS",
      "Common misconception about CSS"
    ],
    "answer": 1
  },
  {
    "id": 10002,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about JavaScript in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about JavaScript",
      "Factually true statement regarding JavaScript",
      "Completely unrelated concept to JavaScript",
      "Common misconception about JavaScript"
    ],
    "answer": 1
  },
  {
    "id": 10003,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about React in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about React",
      "Factually true statement regarding React",
      "Completely unrelated concept to React",
      "Common misconception about React"
    ],
    "answer": 1
  },
  {
    "id": 10004,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Node.js in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Node.js",
      "Factually true statement regarding Node.js",
      "Completely unrelated concept to Node.js",
      "Common misconception about Node.js"
    ],
    "answer": 1
  },
  {
    "id": 10005,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Express in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Express",
      "Factually true statement regarding Express",
      "Completely unrelated concept to Express",
      "Common misconception about Express"
    ],
    "answer": 1
  },
  {
    "id": 10006,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about MongoDB in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about MongoDB",
      "Factually true statement regarding MongoDB",
      "Completely unrelated concept to MongoDB",
      "Common misconception about MongoDB"
    ],
    "answer": 1
  },
  {
    "id": 10007,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about SQL in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about SQL",
      "Factually true statement regarding SQL",
      "Completely unrelated concept to SQL",
      "Common misconception about SQL"
    ],
    "answer": 1
  },
  {
    "id": 10008,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Git in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Git",
      "Factually true statement regarding Git",
      "Completely unrelated concept to Git",
      "Common misconception about Git"
    ],
    "answer": 1
  },
  {
    "id": 10009,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about REST APIs in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about REST APIs",
      "Factually true statement regarding REST APIs",
      "Completely unrelated concept to REST APIs",
      "Common misconception about REST APIs"
    ],
    "answer": 1
  },
  {
    "id": 10010,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Webpack in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Webpack",
      "Factually true statement regarding Webpack",
      "Completely unrelated concept to Webpack",
      "Common misconception about Webpack"
    ],
    "answer": 1
  },
  {
    "id": 10011,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about TypeScript in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about TypeScript",
      "Factually true statement regarding TypeScript",
      "Completely unrelated concept to TypeScript",
      "Common misconception about TypeScript"
    ],
    "answer": 1
  },
  {
    "id": 10012,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Docker in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Docker",
      "Factually true statement regarding Docker",
      "Completely unrelated concept to Docker",
      "Common misconception about Docker"
    ],
    "answer": 1
  },
  {
    "id": 10013,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about AWS in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about AWS",
      "Factually true statement regarding AWS",
      "Completely unrelated concept to AWS",
      "Common misconception about AWS"
    ],
    "answer": 1
  },
  {
    "id": 10014,
    "category": "fullstack",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about CI/CD in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CI/CD",
      "Factually true statement regarding CI/CD",
      "Completely unrelated concept to CI/CD",
      "Common misconception about CI/CD"
    ],
    "answer": 1
  },
  {
    "id": 10015,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about HTML in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about HTML",
      "Factually true statement regarding HTML",
      "Completely unrelated concept to HTML",
      "Common misconception about HTML"
    ],
    "answer": 1
  },
  {
    "id": 10016,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about CSS in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CSS",
      "Factually true statement regarding CSS",
      "Completely unrelated concept to CSS",
      "Common misconception about CSS"
    ],
    "answer": 1
  },
  {
    "id": 10017,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about JavaScript in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about JavaScript",
      "Factually true statement regarding JavaScript",
      "Completely unrelated concept to JavaScript",
      "Common misconception about JavaScript"
    ],
    "answer": 1
  },
  {
    "id": 10018,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about React in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about React",
      "Factually true statement regarding React",
      "Completely unrelated concept to React",
      "Common misconception about React"
    ],
    "answer": 1
  },
  {
    "id": 10019,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Node.js in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Node.js",
      "Factually true statement regarding Node.js",
      "Completely unrelated concept to Node.js",
      "Common misconception about Node.js"
    ],
    "answer": 1
  },
  {
    "id": 10020,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Express in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Express",
      "Factually true statement regarding Express",
      "Completely unrelated concept to Express",
      "Common misconception about Express"
    ],
    "answer": 1
  },
  {
    "id": 10021,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about MongoDB in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about MongoDB",
      "Factually true statement regarding MongoDB",
      "Completely unrelated concept to MongoDB",
      "Common misconception about MongoDB"
    ],
    "answer": 1
  },
  {
    "id": 10022,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about SQL in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about SQL",
      "Factually true statement regarding SQL",
      "Completely unrelated concept to SQL",
      "Common misconception about SQL"
    ],
    "answer": 1
  },
  {
    "id": 10023,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Git in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Git",
      "Factually true statement regarding Git",
      "Completely unrelated concept to Git",
      "Common misconception about Git"
    ],
    "answer": 1
  },
  {
    "id": 10024,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about REST APIs in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about REST APIs",
      "Factually true statement regarding REST APIs",
      "Completely unrelated concept to REST APIs",
      "Common misconception about REST APIs"
    ],
    "answer": 1
  },
  {
    "id": 10025,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Webpack in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Webpack",
      "Factually true statement regarding Webpack",
      "Completely unrelated concept to Webpack",
      "Common misconception about Webpack"
    ],
    "answer": 1
  },
  {
    "id": 10026,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about TypeScript in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about TypeScript",
      "Factually true statement regarding TypeScript",
      "Completely unrelated concept to TypeScript",
      "Common misconception about TypeScript"
    ],
    "answer": 1
  },
  {
    "id": 10027,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Docker in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Docker",
      "Factually true statement regarding Docker",
      "Completely unrelated concept to Docker",
      "Common misconception about Docker"
    ],
    "answer": 1
  },
  {
    "id": 10028,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about AWS in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about AWS",
      "Factually true statement regarding AWS",
      "Completely unrelated concept to AWS",
      "Common misconception about AWS"
    ],
    "answer": 1
  },
  {
    "id": 10029,
    "category": "fullstack",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about CI/CD in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CI/CD",
      "Factually true statement regarding CI/CD",
      "Completely unrelated concept to CI/CD",
      "Common misconception about CI/CD"
    ],
    "answer": 1
  },
  {
    "id": 10030,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about HTML in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about HTML",
      "Factually true statement regarding HTML",
      "Completely unrelated concept to HTML",
      "Common misconception about HTML"
    ],
    "answer": 1
  },
  {
    "id": 10031,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about CSS in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CSS",
      "Factually true statement regarding CSS",
      "Completely unrelated concept to CSS",
      "Common misconception about CSS"
    ],
    "answer": 1
  },
  {
    "id": 10032,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about JavaScript in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about JavaScript",
      "Factually true statement regarding JavaScript",
      "Completely unrelated concept to JavaScript",
      "Common misconception about JavaScript"
    ],
    "answer": 1
  },
  {
    "id": 10033,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about React in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about React",
      "Factually true statement regarding React",
      "Completely unrelated concept to React",
      "Common misconception about React"
    ],
    "answer": 1
  },
  {
    "id": 10034,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Node.js in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Node.js",
      "Factually true statement regarding Node.js",
      "Completely unrelated concept to Node.js",
      "Common misconception about Node.js"
    ],
    "answer": 1
  },
  {
    "id": 10035,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Express in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Express",
      "Factually true statement regarding Express",
      "Completely unrelated concept to Express",
      "Common misconception about Express"
    ],
    "answer": 1
  },
  {
    "id": 10036,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about MongoDB in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about MongoDB",
      "Factually true statement regarding MongoDB",
      "Completely unrelated concept to MongoDB",
      "Common misconception about MongoDB"
    ],
    "answer": 1
  },
  {
    "id": 10037,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about SQL in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about SQL",
      "Factually true statement regarding SQL",
      "Completely unrelated concept to SQL",
      "Common misconception about SQL"
    ],
    "answer": 1
  },
  {
    "id": 10038,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Git in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Git",
      "Factually true statement regarding Git",
      "Completely unrelated concept to Git",
      "Common misconception about Git"
    ],
    "answer": 1
  },
  {
    "id": 10039,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about REST APIs in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about REST APIs",
      "Factually true statement regarding REST APIs",
      "Completely unrelated concept to REST APIs",
      "Common misconception about REST APIs"
    ],
    "answer": 1
  },
  {
    "id": 10040,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Webpack in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Webpack",
      "Factually true statement regarding Webpack",
      "Completely unrelated concept to Webpack",
      "Common misconception about Webpack"
    ],
    "answer": 1
  },
  {
    "id": 10041,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about TypeScript in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about TypeScript",
      "Factually true statement regarding TypeScript",
      "Completely unrelated concept to TypeScript",
      "Common misconception about TypeScript"
    ],
    "answer": 1
  },
  {
    "id": 10042,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Docker in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Docker",
      "Factually true statement regarding Docker",
      "Completely unrelated concept to Docker",
      "Common misconception about Docker"
    ],
    "answer": 1
  },
  {
    "id": 10043,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about AWS in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about AWS",
      "Factually true statement regarding AWS",
      "Completely unrelated concept to AWS",
      "Common misconception about AWS"
    ],
    "answer": 1
  },
  {
    "id": 10044,
    "category": "fullstack",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about CI/CD in the field of fullstack. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CI/CD",
      "Factually true statement regarding CI/CD",
      "Completely unrelated concept to CI/CD",
      "Common misconception about CI/CD"
    ],
    "answer": 1
  },
  {
    "id": 10045,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Neural Networks in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Neural Networks",
      "Factually true statement regarding Neural Networks",
      "Completely unrelated concept to Neural Networks",
      "Common misconception about Neural Networks"
    ],
    "answer": 1
  },
  {
    "id": 10046,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Gradient Descent in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Gradient Descent",
      "Factually true statement regarding Gradient Descent",
      "Completely unrelated concept to Gradient Descent",
      "Common misconception about Gradient Descent"
    ],
    "answer": 1
  },
  {
    "id": 10047,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Overfitting in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Overfitting",
      "Factually true statement regarding Overfitting",
      "Completely unrelated concept to Overfitting",
      "Common misconception about Overfitting"
    ],
    "answer": 1
  },
  {
    "id": 10048,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Backpropagation in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Backpropagation",
      "Factually true statement regarding Backpropagation",
      "Completely unrelated concept to Backpropagation",
      "Common misconception about Backpropagation"
    ],
    "answer": 1
  },
  {
    "id": 10049,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Decision Trees in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Decision Trees",
      "Factually true statement regarding Decision Trees",
      "Completely unrelated concept to Decision Trees",
      "Common misconception about Decision Trees"
    ],
    "answer": 1
  },
  {
    "id": 10050,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about SVM in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about SVM",
      "Factually true statement regarding SVM",
      "Completely unrelated concept to SVM",
      "Common misconception about SVM"
    ],
    "answer": 1
  },
  {
    "id": 10051,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about K-Means in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about K-Means",
      "Factually true statement regarding K-Means",
      "Completely unrelated concept to K-Means",
      "Common misconception about K-Means"
    ],
    "answer": 1
  },
  {
    "id": 10052,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Random Forest in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Random Forest",
      "Factually true statement regarding Random Forest",
      "Completely unrelated concept to Random Forest",
      "Common misconception about Random Forest"
    ],
    "answer": 1
  },
  {
    "id": 10053,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about NLP in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about NLP",
      "Factually true statement regarding NLP",
      "Completely unrelated concept to NLP",
      "Common misconception about NLP"
    ],
    "answer": 1
  },
  {
    "id": 10054,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Computer Vision in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Computer Vision",
      "Factually true statement regarding Computer Vision",
      "Completely unrelated concept to Computer Vision",
      "Common misconception about Computer Vision"
    ],
    "answer": 1
  },
  {
    "id": 10055,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about TensorFlow in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about TensorFlow",
      "Factually true statement regarding TensorFlow",
      "Completely unrelated concept to TensorFlow",
      "Common misconception about TensorFlow"
    ],
    "answer": 1
  },
  {
    "id": 10056,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about PyTorch in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about PyTorch",
      "Factually true statement regarding PyTorch",
      "Completely unrelated concept to PyTorch",
      "Common misconception about PyTorch"
    ],
    "answer": 1
  },
  {
    "id": 10057,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Data Preprocessing in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Data Preprocessing",
      "Factually true statement regarding Data Preprocessing",
      "Completely unrelated concept to Data Preprocessing",
      "Common misconception about Data Preprocessing"
    ],
    "answer": 1
  },
  {
    "id": 10058,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Feature Scaling in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Feature Scaling",
      "Factually true statement regarding Feature Scaling",
      "Completely unrelated concept to Feature Scaling",
      "Common misconception about Feature Scaling"
    ],
    "answer": 1
  },
  {
    "id": 10059,
    "category": "aiml",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Loss Functions in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Loss Functions",
      "Factually true statement regarding Loss Functions",
      "Completely unrelated concept to Loss Functions",
      "Common misconception about Loss Functions"
    ],
    "answer": 1
  },
  {
    "id": 10060,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Neural Networks in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Neural Networks",
      "Factually true statement regarding Neural Networks",
      "Completely unrelated concept to Neural Networks",
      "Common misconception about Neural Networks"
    ],
    "answer": 1
  },
  {
    "id": 10061,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Gradient Descent in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Gradient Descent",
      "Factually true statement regarding Gradient Descent",
      "Completely unrelated concept to Gradient Descent",
      "Common misconception about Gradient Descent"
    ],
    "answer": 1
  },
  {
    "id": 10062,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Overfitting in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Overfitting",
      "Factually true statement regarding Overfitting",
      "Completely unrelated concept to Overfitting",
      "Common misconception about Overfitting"
    ],
    "answer": 1
  },
  {
    "id": 10063,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Backpropagation in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Backpropagation",
      "Factually true statement regarding Backpropagation",
      "Completely unrelated concept to Backpropagation",
      "Common misconception about Backpropagation"
    ],
    "answer": 1
  },
  {
    "id": 10064,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Decision Trees in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Decision Trees",
      "Factually true statement regarding Decision Trees",
      "Completely unrelated concept to Decision Trees",
      "Common misconception about Decision Trees"
    ],
    "answer": 1
  },
  {
    "id": 10065,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about SVM in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about SVM",
      "Factually true statement regarding SVM",
      "Completely unrelated concept to SVM",
      "Common misconception about SVM"
    ],
    "answer": 1
  },
  {
    "id": 10066,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about K-Means in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about K-Means",
      "Factually true statement regarding K-Means",
      "Completely unrelated concept to K-Means",
      "Common misconception about K-Means"
    ],
    "answer": 1
  },
  {
    "id": 10067,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Random Forest in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Random Forest",
      "Factually true statement regarding Random Forest",
      "Completely unrelated concept to Random Forest",
      "Common misconception about Random Forest"
    ],
    "answer": 1
  },
  {
    "id": 10068,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about NLP in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about NLP",
      "Factually true statement regarding NLP",
      "Completely unrelated concept to NLP",
      "Common misconception about NLP"
    ],
    "answer": 1
  },
  {
    "id": 10069,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Computer Vision in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Computer Vision",
      "Factually true statement regarding Computer Vision",
      "Completely unrelated concept to Computer Vision",
      "Common misconception about Computer Vision"
    ],
    "answer": 1
  },
  {
    "id": 10070,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about TensorFlow in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about TensorFlow",
      "Factually true statement regarding TensorFlow",
      "Completely unrelated concept to TensorFlow",
      "Common misconception about TensorFlow"
    ],
    "answer": 1
  },
  {
    "id": 10071,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about PyTorch in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about PyTorch",
      "Factually true statement regarding PyTorch",
      "Completely unrelated concept to PyTorch",
      "Common misconception about PyTorch"
    ],
    "answer": 1
  },
  {
    "id": 10072,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Data Preprocessing in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Data Preprocessing",
      "Factually true statement regarding Data Preprocessing",
      "Completely unrelated concept to Data Preprocessing",
      "Common misconception about Data Preprocessing"
    ],
    "answer": 1
  },
  {
    "id": 10073,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Feature Scaling in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Feature Scaling",
      "Factually true statement regarding Feature Scaling",
      "Completely unrelated concept to Feature Scaling",
      "Common misconception about Feature Scaling"
    ],
    "answer": 1
  },
  {
    "id": 10074,
    "category": "aiml",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Loss Functions in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Loss Functions",
      "Factually true statement regarding Loss Functions",
      "Completely unrelated concept to Loss Functions",
      "Common misconception about Loss Functions"
    ],
    "answer": 1
  },
  {
    "id": 10075,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Neural Networks in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Neural Networks",
      "Factually true statement regarding Neural Networks",
      "Completely unrelated concept to Neural Networks",
      "Common misconception about Neural Networks"
    ],
    "answer": 1
  },
  {
    "id": 10076,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Gradient Descent in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Gradient Descent",
      "Factually true statement regarding Gradient Descent",
      "Completely unrelated concept to Gradient Descent",
      "Common misconception about Gradient Descent"
    ],
    "answer": 1
  },
  {
    "id": 10077,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Overfitting in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Overfitting",
      "Factually true statement regarding Overfitting",
      "Completely unrelated concept to Overfitting",
      "Common misconception about Overfitting"
    ],
    "answer": 1
  },
  {
    "id": 10078,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Backpropagation in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Backpropagation",
      "Factually true statement regarding Backpropagation",
      "Completely unrelated concept to Backpropagation",
      "Common misconception about Backpropagation"
    ],
    "answer": 1
  },
  {
    "id": 10079,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Decision Trees in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Decision Trees",
      "Factually true statement regarding Decision Trees",
      "Completely unrelated concept to Decision Trees",
      "Common misconception about Decision Trees"
    ],
    "answer": 1
  },
  {
    "id": 10080,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about SVM in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about SVM",
      "Factually true statement regarding SVM",
      "Completely unrelated concept to SVM",
      "Common misconception about SVM"
    ],
    "answer": 1
  },
  {
    "id": 10081,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about K-Means in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about K-Means",
      "Factually true statement regarding K-Means",
      "Completely unrelated concept to K-Means",
      "Common misconception about K-Means"
    ],
    "answer": 1
  },
  {
    "id": 10082,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Random Forest in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Random Forest",
      "Factually true statement regarding Random Forest",
      "Completely unrelated concept to Random Forest",
      "Common misconception about Random Forest"
    ],
    "answer": 1
  },
  {
    "id": 10083,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about NLP in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about NLP",
      "Factually true statement regarding NLP",
      "Completely unrelated concept to NLP",
      "Common misconception about NLP"
    ],
    "answer": 1
  },
  {
    "id": 10084,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Computer Vision in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Computer Vision",
      "Factually true statement regarding Computer Vision",
      "Completely unrelated concept to Computer Vision",
      "Common misconception about Computer Vision"
    ],
    "answer": 1
  },
  {
    "id": 10085,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about TensorFlow in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about TensorFlow",
      "Factually true statement regarding TensorFlow",
      "Completely unrelated concept to TensorFlow",
      "Common misconception about TensorFlow"
    ],
    "answer": 1
  },
  {
    "id": 10086,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about PyTorch in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about PyTorch",
      "Factually true statement regarding PyTorch",
      "Completely unrelated concept to PyTorch",
      "Common misconception about PyTorch"
    ],
    "answer": 1
  },
  {
    "id": 10087,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Data Preprocessing in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Data Preprocessing",
      "Factually true statement regarding Data Preprocessing",
      "Completely unrelated concept to Data Preprocessing",
      "Common misconception about Data Preprocessing"
    ],
    "answer": 1
  },
  {
    "id": 10088,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Feature Scaling in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Feature Scaling",
      "Factually true statement regarding Feature Scaling",
      "Completely unrelated concept to Feature Scaling",
      "Common misconception about Feature Scaling"
    ],
    "answer": 1
  },
  {
    "id": 10089,
    "category": "aiml",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Loss Functions in the field of aiml. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Loss Functions",
      "Factually true statement regarding Loss Functions",
      "Completely unrelated concept to Loss Functions",
      "Common misconception about Loss Functions"
    ],
    "answer": 1
  },
  {
    "id": 10090,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Thermodynamics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Thermodynamics",
      "Factually true statement regarding Thermodynamics",
      "Completely unrelated concept to Thermodynamics",
      "Common misconception about Thermodynamics"
    ],
    "answer": 1
  },
  {
    "id": 10091,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Fluid Mechanics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Fluid Mechanics",
      "Factually true statement regarding Fluid Mechanics",
      "Completely unrelated concept to Fluid Mechanics",
      "Common misconception about Fluid Mechanics"
    ],
    "answer": 1
  },
  {
    "id": 10092,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Statics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Statics",
      "Factually true statement regarding Statics",
      "Completely unrelated concept to Statics",
      "Common misconception about Statics"
    ],
    "answer": 1
  },
  {
    "id": 10093,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Dynamics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Dynamics",
      "Factually true statement regarding Dynamics",
      "Completely unrelated concept to Dynamics",
      "Common misconception about Dynamics"
    ],
    "answer": 1
  },
  {
    "id": 10094,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Heat Transfer in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Heat Transfer",
      "Factually true statement regarding Heat Transfer",
      "Completely unrelated concept to Heat Transfer",
      "Common misconception about Heat Transfer"
    ],
    "answer": 1
  },
  {
    "id": 10095,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Material Science in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Material Science",
      "Factually true statement regarding Material Science",
      "Completely unrelated concept to Material Science",
      "Common misconception about Material Science"
    ],
    "answer": 1
  },
  {
    "id": 10096,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Machine Design in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Machine Design",
      "Factually true statement regarding Machine Design",
      "Completely unrelated concept to Machine Design",
      "Common misconception about Machine Design"
    ],
    "answer": 1
  },
  {
    "id": 10097,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Kinematics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Kinematics",
      "Factually true statement regarding Kinematics",
      "Completely unrelated concept to Kinematics",
      "Common misconception about Kinematics"
    ],
    "answer": 1
  },
  {
    "id": 10098,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about HVAC in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about HVAC",
      "Factually true statement regarding HVAC",
      "Completely unrelated concept to HVAC",
      "Common misconception about HVAC"
    ],
    "answer": 1
  },
  {
    "id": 10099,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Manufacturing in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Manufacturing",
      "Factually true statement regarding Manufacturing",
      "Completely unrelated concept to Manufacturing",
      "Common misconception about Manufacturing"
    ],
    "answer": 1
  },
  {
    "id": 10100,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Robotics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Robotics",
      "Factually true statement regarding Robotics",
      "Completely unrelated concept to Robotics",
      "Common misconception about Robotics"
    ],
    "answer": 1
  },
  {
    "id": 10101,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about CAD in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CAD",
      "Factually true statement regarding CAD",
      "Completely unrelated concept to CAD",
      "Common misconception about CAD"
    ],
    "answer": 1
  },
  {
    "id": 10102,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about FEA in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about FEA",
      "Factually true statement regarding FEA",
      "Completely unrelated concept to FEA",
      "Common misconception about FEA"
    ],
    "answer": 1
  },
  {
    "id": 10103,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Mechanics of Materials in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Mechanics of Materials",
      "Factually true statement regarding Mechanics of Materials",
      "Completely unrelated concept to Mechanics of Materials",
      "Common misconception about Mechanics of Materials"
    ],
    "answer": 1
  },
  {
    "id": 10104,
    "category": "mechanical",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Control Systems in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Control Systems",
      "Factually true statement regarding Control Systems",
      "Completely unrelated concept to Control Systems",
      "Common misconception about Control Systems"
    ],
    "answer": 1
  },
  {
    "id": 10105,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Thermodynamics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Thermodynamics",
      "Factually true statement regarding Thermodynamics",
      "Completely unrelated concept to Thermodynamics",
      "Common misconception about Thermodynamics"
    ],
    "answer": 1
  },
  {
    "id": 10106,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Fluid Mechanics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Fluid Mechanics",
      "Factually true statement regarding Fluid Mechanics",
      "Completely unrelated concept to Fluid Mechanics",
      "Common misconception about Fluid Mechanics"
    ],
    "answer": 1
  },
  {
    "id": 10107,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Statics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Statics",
      "Factually true statement regarding Statics",
      "Completely unrelated concept to Statics",
      "Common misconception about Statics"
    ],
    "answer": 1
  },
  {
    "id": 10108,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Dynamics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Dynamics",
      "Factually true statement regarding Dynamics",
      "Completely unrelated concept to Dynamics",
      "Common misconception about Dynamics"
    ],
    "answer": 1
  },
  {
    "id": 10109,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Heat Transfer in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Heat Transfer",
      "Factually true statement regarding Heat Transfer",
      "Completely unrelated concept to Heat Transfer",
      "Common misconception about Heat Transfer"
    ],
    "answer": 1
  },
  {
    "id": 10110,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Material Science in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Material Science",
      "Factually true statement regarding Material Science",
      "Completely unrelated concept to Material Science",
      "Common misconception about Material Science"
    ],
    "answer": 1
  },
  {
    "id": 10111,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Machine Design in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Machine Design",
      "Factually true statement regarding Machine Design",
      "Completely unrelated concept to Machine Design",
      "Common misconception about Machine Design"
    ],
    "answer": 1
  },
  {
    "id": 10112,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Kinematics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Kinematics",
      "Factually true statement regarding Kinematics",
      "Completely unrelated concept to Kinematics",
      "Common misconception about Kinematics"
    ],
    "answer": 1
  },
  {
    "id": 10113,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about HVAC in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about HVAC",
      "Factually true statement regarding HVAC",
      "Completely unrelated concept to HVAC",
      "Common misconception about HVAC"
    ],
    "answer": 1
  },
  {
    "id": 10114,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Manufacturing in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Manufacturing",
      "Factually true statement regarding Manufacturing",
      "Completely unrelated concept to Manufacturing",
      "Common misconception about Manufacturing"
    ],
    "answer": 1
  },
  {
    "id": 10115,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Robotics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Robotics",
      "Factually true statement regarding Robotics",
      "Completely unrelated concept to Robotics",
      "Common misconception about Robotics"
    ],
    "answer": 1
  },
  {
    "id": 10116,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about CAD in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CAD",
      "Factually true statement regarding CAD",
      "Completely unrelated concept to CAD",
      "Common misconception about CAD"
    ],
    "answer": 1
  },
  {
    "id": 10117,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about FEA in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about FEA",
      "Factually true statement regarding FEA",
      "Completely unrelated concept to FEA",
      "Common misconception about FEA"
    ],
    "answer": 1
  },
  {
    "id": 10118,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Mechanics of Materials in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Mechanics of Materials",
      "Factually true statement regarding Mechanics of Materials",
      "Completely unrelated concept to Mechanics of Materials",
      "Common misconception about Mechanics of Materials"
    ],
    "answer": 1
  },
  {
    "id": 10119,
    "category": "mechanical",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Control Systems in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Control Systems",
      "Factually true statement regarding Control Systems",
      "Completely unrelated concept to Control Systems",
      "Common misconception about Control Systems"
    ],
    "answer": 1
  },
  {
    "id": 10120,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Thermodynamics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Thermodynamics",
      "Factually true statement regarding Thermodynamics",
      "Completely unrelated concept to Thermodynamics",
      "Common misconception about Thermodynamics"
    ],
    "answer": 1
  },
  {
    "id": 10121,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Fluid Mechanics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Fluid Mechanics",
      "Factually true statement regarding Fluid Mechanics",
      "Completely unrelated concept to Fluid Mechanics",
      "Common misconception about Fluid Mechanics"
    ],
    "answer": 1
  },
  {
    "id": 10122,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Statics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Statics",
      "Factually true statement regarding Statics",
      "Completely unrelated concept to Statics",
      "Common misconception about Statics"
    ],
    "answer": 1
  },
  {
    "id": 10123,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Dynamics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Dynamics",
      "Factually true statement regarding Dynamics",
      "Completely unrelated concept to Dynamics",
      "Common misconception about Dynamics"
    ],
    "answer": 1
  },
  {
    "id": 10124,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Heat Transfer in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Heat Transfer",
      "Factually true statement regarding Heat Transfer",
      "Completely unrelated concept to Heat Transfer",
      "Common misconception about Heat Transfer"
    ],
    "answer": 1
  },
  {
    "id": 10125,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Material Science in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Material Science",
      "Factually true statement regarding Material Science",
      "Completely unrelated concept to Material Science",
      "Common misconception about Material Science"
    ],
    "answer": 1
  },
  {
    "id": 10126,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Machine Design in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Machine Design",
      "Factually true statement regarding Machine Design",
      "Completely unrelated concept to Machine Design",
      "Common misconception about Machine Design"
    ],
    "answer": 1
  },
  {
    "id": 10127,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Kinematics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Kinematics",
      "Factually true statement regarding Kinematics",
      "Completely unrelated concept to Kinematics",
      "Common misconception about Kinematics"
    ],
    "answer": 1
  },
  {
    "id": 10128,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about HVAC in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about HVAC",
      "Factually true statement regarding HVAC",
      "Completely unrelated concept to HVAC",
      "Common misconception about HVAC"
    ],
    "answer": 1
  },
  {
    "id": 10129,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Manufacturing in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Manufacturing",
      "Factually true statement regarding Manufacturing",
      "Completely unrelated concept to Manufacturing",
      "Common misconception about Manufacturing"
    ],
    "answer": 1
  },
  {
    "id": 10130,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Robotics in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Robotics",
      "Factually true statement regarding Robotics",
      "Completely unrelated concept to Robotics",
      "Common misconception about Robotics"
    ],
    "answer": 1
  },
  {
    "id": 10131,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about CAD in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about CAD",
      "Factually true statement regarding CAD",
      "Completely unrelated concept to CAD",
      "Common misconception about CAD"
    ],
    "answer": 1
  },
  {
    "id": 10132,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about FEA in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about FEA",
      "Factually true statement regarding FEA",
      "Completely unrelated concept to FEA",
      "Common misconception about FEA"
    ],
    "answer": 1
  },
  {
    "id": 10133,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Mechanics of Materials in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Mechanics of Materials",
      "Factually true statement regarding Mechanics of Materials",
      "Completely unrelated concept to Mechanics of Materials",
      "Common misconception about Mechanics of Materials"
    ],
    "answer": 1
  },
  {
    "id": 10134,
    "category": "mechanical",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Control Systems in the field of mechanical. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Control Systems",
      "Factually true statement regarding Control Systems",
      "Completely unrelated concept to Control Systems",
      "Common misconception about Control Systems"
    ],
    "answer": 1
  },
  {
    "id": 10135,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Physics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Physics",
      "Factually true statement regarding Physics",
      "Completely unrelated concept to Physics",
      "Common misconception about Physics"
    ],
    "answer": 1
  },
  {
    "id": 10136,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Chemistry in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Chemistry",
      "Factually true statement regarding Chemistry",
      "Completely unrelated concept to Chemistry",
      "Common misconception about Chemistry"
    ],
    "answer": 1
  },
  {
    "id": 10137,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Biology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Biology",
      "Factually true statement regarding Biology",
      "Completely unrelated concept to Biology",
      "Common misconception about Biology"
    ],
    "answer": 1
  },
  {
    "id": 10138,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Astronomy in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Astronomy",
      "Factually true statement regarding Astronomy",
      "Completely unrelated concept to Astronomy",
      "Common misconception about Astronomy"
    ],
    "answer": 1
  },
  {
    "id": 10139,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Geology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Geology",
      "Factually true statement regarding Geology",
      "Completely unrelated concept to Geology",
      "Common misconception about Geology"
    ],
    "answer": 1
  },
  {
    "id": 10140,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Quantum Mechanics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Quantum Mechanics",
      "Factually true statement regarding Quantum Mechanics",
      "Completely unrelated concept to Quantum Mechanics",
      "Common misconception about Quantum Mechanics"
    ],
    "answer": 1
  },
  {
    "id": 10141,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Genetics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Genetics",
      "Factually true statement regarding Genetics",
      "Completely unrelated concept to Genetics",
      "Common misconception about Genetics"
    ],
    "answer": 1
  },
  {
    "id": 10142,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Evolution in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Evolution",
      "Factually true statement regarding Evolution",
      "Completely unrelated concept to Evolution",
      "Common misconception about Evolution"
    ],
    "answer": 1
  },
  {
    "id": 10143,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Ecology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Ecology",
      "Factually true statement regarding Ecology",
      "Completely unrelated concept to Ecology",
      "Common misconception about Ecology"
    ],
    "answer": 1
  },
  {
    "id": 10144,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Botany in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Botany",
      "Factually true statement regarding Botany",
      "Completely unrelated concept to Botany",
      "Common misconception about Botany"
    ],
    "answer": 1
  },
  {
    "id": 10145,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Zoology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Zoology",
      "Factually true statement regarding Zoology",
      "Completely unrelated concept to Zoology",
      "Common misconception about Zoology"
    ],
    "answer": 1
  },
  {
    "id": 10146,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Meteorology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Meteorology",
      "Factually true statement regarding Meteorology",
      "Completely unrelated concept to Meteorology",
      "Common misconception about Meteorology"
    ],
    "answer": 1
  },
  {
    "id": 10147,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Oceanography in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Oceanography",
      "Factually true statement regarding Oceanography",
      "Completely unrelated concept to Oceanography",
      "Common misconception about Oceanography"
    ],
    "answer": 1
  },
  {
    "id": 10148,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Paleontology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Paleontology",
      "Factually true statement regarding Paleontology",
      "Completely unrelated concept to Paleontology",
      "Common misconception about Paleontology"
    ],
    "answer": 1
  },
  {
    "id": 10149,
    "category": "science",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Neuroscience in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Neuroscience",
      "Factually true statement regarding Neuroscience",
      "Completely unrelated concept to Neuroscience",
      "Common misconception about Neuroscience"
    ],
    "answer": 1
  },
  {
    "id": 10150,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Physics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Physics",
      "Factually true statement regarding Physics",
      "Completely unrelated concept to Physics",
      "Common misconception about Physics"
    ],
    "answer": 1
  },
  {
    "id": 10151,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Chemistry in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Chemistry",
      "Factually true statement regarding Chemistry",
      "Completely unrelated concept to Chemistry",
      "Common misconception about Chemistry"
    ],
    "answer": 1
  },
  {
    "id": 10152,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Biology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Biology",
      "Factually true statement regarding Biology",
      "Completely unrelated concept to Biology",
      "Common misconception about Biology"
    ],
    "answer": 1
  },
  {
    "id": 10153,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Astronomy in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Astronomy",
      "Factually true statement regarding Astronomy",
      "Completely unrelated concept to Astronomy",
      "Common misconception about Astronomy"
    ],
    "answer": 1
  },
  {
    "id": 10154,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Geology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Geology",
      "Factually true statement regarding Geology",
      "Completely unrelated concept to Geology",
      "Common misconception about Geology"
    ],
    "answer": 1
  },
  {
    "id": 10155,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Quantum Mechanics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Quantum Mechanics",
      "Factually true statement regarding Quantum Mechanics",
      "Completely unrelated concept to Quantum Mechanics",
      "Common misconception about Quantum Mechanics"
    ],
    "answer": 1
  },
  {
    "id": 10156,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Genetics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Genetics",
      "Factually true statement regarding Genetics",
      "Completely unrelated concept to Genetics",
      "Common misconception about Genetics"
    ],
    "answer": 1
  },
  {
    "id": 10157,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Evolution in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Evolution",
      "Factually true statement regarding Evolution",
      "Completely unrelated concept to Evolution",
      "Common misconception about Evolution"
    ],
    "answer": 1
  },
  {
    "id": 10158,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Ecology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Ecology",
      "Factually true statement regarding Ecology",
      "Completely unrelated concept to Ecology",
      "Common misconception about Ecology"
    ],
    "answer": 1
  },
  {
    "id": 10159,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Botany in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Botany",
      "Factually true statement regarding Botany",
      "Completely unrelated concept to Botany",
      "Common misconception about Botany"
    ],
    "answer": 1
  },
  {
    "id": 10160,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Zoology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Zoology",
      "Factually true statement regarding Zoology",
      "Completely unrelated concept to Zoology",
      "Common misconception about Zoology"
    ],
    "answer": 1
  },
  {
    "id": 10161,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Meteorology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Meteorology",
      "Factually true statement regarding Meteorology",
      "Completely unrelated concept to Meteorology",
      "Common misconception about Meteorology"
    ],
    "answer": 1
  },
  {
    "id": 10162,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Oceanography in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Oceanography",
      "Factually true statement regarding Oceanography",
      "Completely unrelated concept to Oceanography",
      "Common misconception about Oceanography"
    ],
    "answer": 1
  },
  {
    "id": 10163,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Paleontology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Paleontology",
      "Factually true statement regarding Paleontology",
      "Completely unrelated concept to Paleontology",
      "Common misconception about Paleontology"
    ],
    "answer": 1
  },
  {
    "id": 10164,
    "category": "science",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Neuroscience in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Neuroscience",
      "Factually true statement regarding Neuroscience",
      "Completely unrelated concept to Neuroscience",
      "Common misconception about Neuroscience"
    ],
    "answer": 1
  },
  {
    "id": 10165,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Physics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Physics",
      "Factually true statement regarding Physics",
      "Completely unrelated concept to Physics",
      "Common misconception about Physics"
    ],
    "answer": 1
  },
  {
    "id": 10166,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Chemistry in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Chemistry",
      "Factually true statement regarding Chemistry",
      "Completely unrelated concept to Chemistry",
      "Common misconception about Chemistry"
    ],
    "answer": 1
  },
  {
    "id": 10167,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Biology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Biology",
      "Factually true statement regarding Biology",
      "Completely unrelated concept to Biology",
      "Common misconception about Biology"
    ],
    "answer": 1
  },
  {
    "id": 10168,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Astronomy in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Astronomy",
      "Factually true statement regarding Astronomy",
      "Completely unrelated concept to Astronomy",
      "Common misconception about Astronomy"
    ],
    "answer": 1
  },
  {
    "id": 10169,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Geology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Geology",
      "Factually true statement regarding Geology",
      "Completely unrelated concept to Geology",
      "Common misconception about Geology"
    ],
    "answer": 1
  },
  {
    "id": 10170,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Quantum Mechanics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Quantum Mechanics",
      "Factually true statement regarding Quantum Mechanics",
      "Completely unrelated concept to Quantum Mechanics",
      "Common misconception about Quantum Mechanics"
    ],
    "answer": 1
  },
  {
    "id": 10171,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Genetics in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Genetics",
      "Factually true statement regarding Genetics",
      "Completely unrelated concept to Genetics",
      "Common misconception about Genetics"
    ],
    "answer": 1
  },
  {
    "id": 10172,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Evolution in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Evolution",
      "Factually true statement regarding Evolution",
      "Completely unrelated concept to Evolution",
      "Common misconception about Evolution"
    ],
    "answer": 1
  },
  {
    "id": 10173,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Ecology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Ecology",
      "Factually true statement regarding Ecology",
      "Completely unrelated concept to Ecology",
      "Common misconception about Ecology"
    ],
    "answer": 1
  },
  {
    "id": 10174,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Botany in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Botany",
      "Factually true statement regarding Botany",
      "Completely unrelated concept to Botany",
      "Common misconception about Botany"
    ],
    "answer": 1
  },
  {
    "id": 10175,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Zoology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Zoology",
      "Factually true statement regarding Zoology",
      "Completely unrelated concept to Zoology",
      "Common misconception about Zoology"
    ],
    "answer": 1
  },
  {
    "id": 10176,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Meteorology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Meteorology",
      "Factually true statement regarding Meteorology",
      "Completely unrelated concept to Meteorology",
      "Common misconception about Meteorology"
    ],
    "answer": 1
  },
  {
    "id": 10177,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Oceanography in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Oceanography",
      "Factually true statement regarding Oceanography",
      "Completely unrelated concept to Oceanography",
      "Common misconception about Oceanography"
    ],
    "answer": 1
  },
  {
    "id": 10178,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Paleontology in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Paleontology",
      "Factually true statement regarding Paleontology",
      "Completely unrelated concept to Paleontology",
      "Common misconception about Paleontology"
    ],
    "answer": 1
  },
  {
    "id": 10179,
    "category": "science",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Neuroscience in the field of science. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Neuroscience",
      "Factually true statement regarding Neuroscience",
      "Completely unrelated concept to Neuroscience",
      "Common misconception about Neuroscience"
    ],
    "answer": 1
  },
  {
    "id": 10180,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Capitals in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Capitals",
      "Factually true statement regarding Capitals",
      "Completely unrelated concept to Capitals",
      "Common misconception about Capitals"
    ],
    "answer": 1
  },
  {
    "id": 10181,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Mountains in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Mountains",
      "Factually true statement regarding Mountains",
      "Completely unrelated concept to Mountains",
      "Common misconception about Mountains"
    ],
    "answer": 1
  },
  {
    "id": 10182,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Rivers in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Rivers",
      "Factually true statement regarding Rivers",
      "Completely unrelated concept to Rivers",
      "Common misconception about Rivers"
    ],
    "answer": 1
  },
  {
    "id": 10183,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Oceans in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Oceans",
      "Factually true statement regarding Oceans",
      "Completely unrelated concept to Oceans",
      "Common misconception about Oceans"
    ],
    "answer": 1
  },
  {
    "id": 10184,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Continents in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Continents",
      "Factually true statement regarding Continents",
      "Completely unrelated concept to Continents",
      "Common misconception about Continents"
    ],
    "answer": 1
  },
  {
    "id": 10185,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Deserts in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Deserts",
      "Factually true statement regarding Deserts",
      "Completely unrelated concept to Deserts",
      "Common misconception about Deserts"
    ],
    "answer": 1
  },
  {
    "id": 10186,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Countries in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Countries",
      "Factually true statement regarding Countries",
      "Completely unrelated concept to Countries",
      "Common misconception about Countries"
    ],
    "answer": 1
  },
  {
    "id": 10187,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Population in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Population",
      "Factually true statement regarding Population",
      "Completely unrelated concept to Population",
      "Common misconception about Population"
    ],
    "answer": 1
  },
  {
    "id": 10188,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Climate in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Climate",
      "Factually true statement regarding Climate",
      "Completely unrelated concept to Climate",
      "Common misconception about Climate"
    ],
    "answer": 1
  },
  {
    "id": 10189,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Maps in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Maps",
      "Factually true statement regarding Maps",
      "Completely unrelated concept to Maps",
      "Common misconception about Maps"
    ],
    "answer": 1
  },
  {
    "id": 10190,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Cultures in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Cultures",
      "Factually true statement regarding Cultures",
      "Completely unrelated concept to Cultures",
      "Common misconception about Cultures"
    ],
    "answer": 1
  },
  {
    "id": 10191,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Borders in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Borders",
      "Factually true statement regarding Borders",
      "Completely unrelated concept to Borders",
      "Common misconception about Borders"
    ],
    "answer": 1
  },
  {
    "id": 10192,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Flags in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Flags",
      "Factually true statement regarding Flags",
      "Completely unrelated concept to Flags",
      "Common misconception about Flags"
    ],
    "answer": 1
  },
  {
    "id": 10193,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Landmarks in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Landmarks",
      "Factually true statement regarding Landmarks",
      "Completely unrelated concept to Landmarks",
      "Common misconception about Landmarks"
    ],
    "answer": 1
  },
  {
    "id": 10194,
    "category": "geography",
    "difficulty": "easy",
    "question": "[EASY] This is a random quiz question about Economics in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Economics",
      "Factually true statement regarding Economics",
      "Completely unrelated concept to Economics",
      "Common misconception about Economics"
    ],
    "answer": 1
  },
  {
    "id": 10195,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Capitals in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Capitals",
      "Factually true statement regarding Capitals",
      "Completely unrelated concept to Capitals",
      "Common misconception about Capitals"
    ],
    "answer": 1
  },
  {
    "id": 10196,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Mountains in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Mountains",
      "Factually true statement regarding Mountains",
      "Completely unrelated concept to Mountains",
      "Common misconception about Mountains"
    ],
    "answer": 1
  },
  {
    "id": 10197,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Rivers in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Rivers",
      "Factually true statement regarding Rivers",
      "Completely unrelated concept to Rivers",
      "Common misconception about Rivers"
    ],
    "answer": 1
  },
  {
    "id": 10198,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Oceans in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Oceans",
      "Factually true statement regarding Oceans",
      "Completely unrelated concept to Oceans",
      "Common misconception about Oceans"
    ],
    "answer": 1
  },
  {
    "id": 10199,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Continents in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Continents",
      "Factually true statement regarding Continents",
      "Completely unrelated concept to Continents",
      "Common misconception about Continents"
    ],
    "answer": 1
  },
  {
    "id": 10200,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Deserts in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Deserts",
      "Factually true statement regarding Deserts",
      "Completely unrelated concept to Deserts",
      "Common misconception about Deserts"
    ],
    "answer": 1
  },
  {
    "id": 10201,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Countries in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Countries",
      "Factually true statement regarding Countries",
      "Completely unrelated concept to Countries",
      "Common misconception about Countries"
    ],
    "answer": 1
  },
  {
    "id": 10202,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Population in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Population",
      "Factually true statement regarding Population",
      "Completely unrelated concept to Population",
      "Common misconception about Population"
    ],
    "answer": 1
  },
  {
    "id": 10203,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Climate in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Climate",
      "Factually true statement regarding Climate",
      "Completely unrelated concept to Climate",
      "Common misconception about Climate"
    ],
    "answer": 1
  },
  {
    "id": 10204,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Maps in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Maps",
      "Factually true statement regarding Maps",
      "Completely unrelated concept to Maps",
      "Common misconception about Maps"
    ],
    "answer": 1
  },
  {
    "id": 10205,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Cultures in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Cultures",
      "Factually true statement regarding Cultures",
      "Completely unrelated concept to Cultures",
      "Common misconception about Cultures"
    ],
    "answer": 1
  },
  {
    "id": 10206,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Borders in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Borders",
      "Factually true statement regarding Borders",
      "Completely unrelated concept to Borders",
      "Common misconception about Borders"
    ],
    "answer": 1
  },
  {
    "id": 10207,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Flags in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Flags",
      "Factually true statement regarding Flags",
      "Completely unrelated concept to Flags",
      "Common misconception about Flags"
    ],
    "answer": 1
  },
  {
    "id": 10208,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Landmarks in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Landmarks",
      "Factually true statement regarding Landmarks",
      "Completely unrelated concept to Landmarks",
      "Common misconception about Landmarks"
    ],
    "answer": 1
  },
  {
    "id": 10209,
    "category": "geography",
    "difficulty": "medium",
    "question": "[MEDIUM] This is a random quiz question about Economics in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Economics",
      "Factually true statement regarding Economics",
      "Completely unrelated concept to Economics",
      "Common misconception about Economics"
    ],
    "answer": 1
  },
  {
    "id": 10210,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Capitals in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Capitals",
      "Factually true statement regarding Capitals",
      "Completely unrelated concept to Capitals",
      "Common misconception about Capitals"
    ],
    "answer": 1
  },
  {
    "id": 10211,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Mountains in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Mountains",
      "Factually true statement regarding Mountains",
      "Completely unrelated concept to Mountains",
      "Common misconception about Mountains"
    ],
    "answer": 1
  },
  {
    "id": 10212,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Rivers in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Rivers",
      "Factually true statement regarding Rivers",
      "Completely unrelated concept to Rivers",
      "Common misconception about Rivers"
    ],
    "answer": 1
  },
  {
    "id": 10213,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Oceans in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Oceans",
      "Factually true statement regarding Oceans",
      "Completely unrelated concept to Oceans",
      "Common misconception about Oceans"
    ],
    "answer": 1
  },
  {
    "id": 10214,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Continents in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Continents",
      "Factually true statement regarding Continents",
      "Completely unrelated concept to Continents",
      "Common misconception about Continents"
    ],
    "answer": 1
  },
  {
    "id": 10215,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Deserts in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Deserts",
      "Factually true statement regarding Deserts",
      "Completely unrelated concept to Deserts",
      "Common misconception about Deserts"
    ],
    "answer": 1
  },
  {
    "id": 10216,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Countries in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Countries",
      "Factually true statement regarding Countries",
      "Completely unrelated concept to Countries",
      "Common misconception about Countries"
    ],
    "answer": 1
  },
  {
    "id": 10217,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Population in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Population",
      "Factually true statement regarding Population",
      "Completely unrelated concept to Population",
      "Common misconception about Population"
    ],
    "answer": 1
  },
  {
    "id": 10218,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Climate in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Climate",
      "Factually true statement regarding Climate",
      "Completely unrelated concept to Climate",
      "Common misconception about Climate"
    ],
    "answer": 1
  },
  {
    "id": 10219,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Maps in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Maps",
      "Factually true statement regarding Maps",
      "Completely unrelated concept to Maps",
      "Common misconception about Maps"
    ],
    "answer": 1
  },
  {
    "id": 10220,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Cultures in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Cultures",
      "Factually true statement regarding Cultures",
      "Completely unrelated concept to Cultures",
      "Common misconception about Cultures"
    ],
    "answer": 1
  },
  {
    "id": 10221,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Borders in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Borders",
      "Factually true statement regarding Borders",
      "Completely unrelated concept to Borders",
      "Common misconception about Borders"
    ],
    "answer": 1
  },
  {
    "id": 10222,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Flags in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Flags",
      "Factually true statement regarding Flags",
      "Completely unrelated concept to Flags",
      "Common misconception about Flags"
    ],
    "answer": 1
  },
  {
    "id": 10223,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Landmarks in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Landmarks",
      "Factually true statement regarding Landmarks",
      "Completely unrelated concept to Landmarks",
      "Common misconception about Landmarks"
    ],
    "answer": 1
  },
  {
    "id": 10224,
    "category": "geography",
    "difficulty": "hard",
    "question": "[HARD] This is a random quiz question about Economics in the field of geography. Which of the following is correct?",
    "options": [
      "Incorrect assumption about Economics",
      "Factually true statement regarding Economics",
      "Completely unrelated concept to Economics",
      "Common misconception about Economics"
    ],
    "answer": 1
  }
];

const FALLBACK_LEADERBOARD = [
  { "name": "Quiz Master", "score": 90, "category": "fullstack", "difficulty": "hard", "date": new Date().toISOString() },
  { "name": "AI Wizard", "score": 85, "category": "aiml", "difficulty": "medium", "date": new Date().toISOString() },
  { "name": "Gear Head", "score": 80, "category": "mechanical", "difficulty": "easy", "date": new Date().toISOString() }
];

// --- APP STATE ---
const state = {
  playerName: '',
  playerEmail: '',
  maintainStreak: false,
  category: 'all',
  difficulty: 'all',
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  correctCount: 0,
  totalTimeSpent: 0,
  questionTimer: null,
  timeLeft: 15,
  maxTime: 15,
  isAudioEnabled: true,
  isMusicEnabled: false,
  masterVolume: 0.5,
  audioCtx: null,
  bgmGainNode: null,
  bgmInterval: null,
  userAnswers: [], // Keeps track of review results
  isOfflineMode: false, // Flag if API endpoints are unreachable
  
  // Game Lifelines state
  lifelines: {
    fiftyFifty: { used: false },
    timeFreeze: { used: false }
  },
  isTimerFrozen: false,
  
  // Performance Analytics trackers
  streak: 0,
  maxStreak: 0,
  responseTimes: [], // array of integers (seconds spent per question)
  
  // Cached Leaderboard for live filter/search
  leaderboardData: []
};

// --- DOM ELEMENTS ---
const screens = {
  setup: document.getElementById('screen-setup'),
  profile: document.getElementById('screen-profile'),
  qbank: document.getElementById('screen-qbank'),
  quiz: document.getElementById('screen-quiz'),
  results: document.getElementById('screen-results'),
  dashboard: document.getElementById('screen-dashboard')
};

const setupForm = document.getElementById('setup-form');
const playerNameInput = document.getElementById('player-name');
const playerEmailInput = document.getElementById('player-email');

const badgeCategory = document.getElementById('badge-category');
const badgeDifficulty = document.getElementById('badge-difficulty');
const liveScoreVal = document.getElementById('live-score-val');
const progressText = document.getElementById('progress-text');
const progressPercentage = document.getElementById('progress-percentage');
const progressBarFill = document.getElementById('progress-bar-fill');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

const timerText = document.getElementById('timer-text');
const timerIndicator = document.getElementById('timer-ring-indicator');

const resultTitle = document.getElementById('result-title');
const resultSubtitle = document.getElementById('result-subtitle');
const statScore = document.getElementById('stat-score');
const statCorrect = document.getElementById('stat-correct');
const statTime = document.getElementById('stat-time');

// Tab Buttons & Panels
const tabLeaderboardBtn = document.getElementById('tab-leaderboard-btn');
const tabAnalyticsBtn = document.getElementById('tab-analytics-btn');
const tabReviewBtn = document.getElementById('tab-review-btn');
const panelLeaderboard = document.getElementById('tab-leaderboard-content');
const panelAnalytics = document.getElementById('tab-analytics-content');
const panelReview = document.getElementById('tab-review-content');

const leaderboardBody = document.getElementById('leaderboard-body');
const reviewList = document.getElementById('review-list');
const restartBtn = document.getElementById('restart-btn');

// Audio Controls
const audioSettingsToggle = document.getElementById('audio-settings-toggle');
const audioDropdown = document.getElementById('audio-dropdown');
const toggleAudioCheckbox = document.getElementById('toggle-audio-checkbox');
const toggleMusicCheckbox = document.getElementById('toggle-music-checkbox');
const volumeSlider = document.getElementById('volume-slider');

// Lifelines Buttons
const fiftyFiftyBtn = document.getElementById('lifeline-fifty-fifty');
const timeFreezeBtn = document.getElementById('lifeline-time-freeze');

// Search & Filters
const leaderboardSearchInput = document.getElementById('leaderboard-search');
const leaderboardFilterCategory = document.getElementById('leaderboard-filter-category');

// Circular timer dimensions for SVG stroke dasharray calculations
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 28; // ~175.93

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
  // Load local settings
  const savedAudio = localStorage.getItem('wise_audio');
  if (savedAudio !== null) {
    state.isAudioEnabled = savedAudio === 'true';
    toggleAudioCheckbox.checked = state.isAudioEnabled;
  }
  
  const savedVolume = localStorage.getItem('wise_volume');
  if (savedVolume !== null) {
    state.masterVolume = parseFloat(savedVolume);
    volumeSlider.value = Math.round(state.masterVolume * 100);
  }

  // Pre-check if backend API is online
  checkAPIStatus();

  // Top Navigation Logic
  const navDashboard = document.getElementById('nav-dashboard');
  const navHome = document.getElementById('nav-home');
  const navProfile = document.getElementById('nav-profile');
  const navQbank = document.getElementById('nav-qbank');
  const appTopNav = document.getElementById('app-top-nav');
  const headerUserInfo = document.getElementById('header-user-info');
  const headerUserName = document.getElementById('header-user-name');

  function showAppNav() {
    if (appTopNav) appTopNav.classList.remove('hide');
    if (headerUserInfo) headerUserInfo.classList.remove('hide');
  }

  function switchScreen(activeScreenId) {
    Object.values(screens).forEach(screen => {
      if (screen) screen.classList.add('hide');
    });
    if (screens[activeScreenId]) {
      screens[activeScreenId].classList.remove('hide');
    }
    // Widen app container on dashboard
    if (activeScreenId === 'dashboard') {
      document.body.classList.add('on-dashboard');
    } else {
      document.body.classList.remove('on-dashboard');
    }
  }

  function handleNavClick(e) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    if (e.target.id === 'nav-dashboard') {
      switchScreen('dashboard');
      updateDashboardUI();
    } else if (e.target.id === 'nav-home') {
      // Go directly to category selection — user is already logged in
      const step1 = document.getElementById('setup-step-1');
      const step2 = document.getElementById('setup-step-2');
      if (step1) step1.classList.add('hide');
      if (step2) step2.classList.remove('hide');
      switchScreen('setup');
    } else if (e.target.id === 'nav-profile') {
      switchScreen('profile');
      if (typeof renderProfileStats === 'function') renderProfileStats();
    } else if (e.target.id === 'nav-qbank') {
      switchScreen('qbank');
    }
  }

  if (navDashboard) navDashboard.addEventListener('click', handleNavClick);
  if (navHome) navHome.addEventListener('click', handleNavClick);
  if (navProfile) navProfile.addEventListener('click', handleNavClick);
  if (navQbank) navQbank.addEventListener('click', handleNavClick);

  // Wire up Event Listeners
  setupForm.addEventListener('submit', handleQuizStart);
  nextBtn.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);

  // Wizard Navigation
  const setupStep1 = document.getElementById('setup-step-1');
  const setupStep2 = document.getElementById('setup-step-2');
  const continueBtn = document.getElementById('continue-step-1');
  const backBtn = document.getElementById('back-step-2');
  
  // Custom Choice Menus
  const mainCategoryMenu = document.getElementById('main-category-menu');
  const subcategoryGroup = document.getElementById('subcategory-group');
  const subcategoryMenu = document.getElementById('subcategory-menu');
  const difficultyMenu = document.getElementById('difficulty-menu');

  continueBtn.addEventListener('click', () => {
    const name = playerNameInput.value.trim();
    const email = playerEmailInput.value.trim();
    if (!name || !email) {
      alert("Please fill in your Name and Email ID before continuing.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid Email ID.");
      return;
    }

    // Store player info
    state.playerName = name;
    state.playerEmail = email;

    // Update header
    if (headerUserName) headerUserName.textContent = name;
    // Load saved profile photo into header avatar
    const savedPhoto = localStorage.getItem(`wise_photo_${email}`);
    const headerAvatarDisplay = document.getElementById('header-avatar-display');
    if (savedPhoto && headerAvatarDisplay) {
      headerAvatarDisplay.innerHTML = `<img src="${savedPhoto}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    }

    // Show nav and go to Dashboard
    showAppNav();
    switchScreen('dashboard');
    updateDashboardUI();

    // Set Dashboard as active nav
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (navDashboard) navDashboard.classList.add('active');
  });

  backBtn.addEventListener('click', () => {
    // "Dashboard" button — go back to dashboard
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (navDashboard) navDashboard.classList.add('active');
    switchScreen('dashboard');
    updateDashboardUI();
  });

  // Main Category Menu handler
  mainCategoryMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-card, .menu-choice-btn');
    if (!btn) return;
    
    mainCategoryMenu.querySelectorAll('.cat-card, .menu-choice-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const category = btn.dataset.category;
    if (category === 'technology') {
      subcategoryGroup.classList.remove('hide');
    } else {
      subcategoryGroup.classList.add('hide');
    }
  });

  // Subcategory Menu handler
  subcategoryMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-card, .menu-choice-btn');
    if (!btn) return;
    subcategoryMenu.querySelectorAll('.cat-card, .menu-choice-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  // Difficulty Menu handler
  difficultyMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.diff-btn, .menu-choice-btn');
    if (!btn) return;
    difficultyMenu.querySelectorAll('.diff-btn, .menu-choice-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  // Audio Panel events
  audioSettingsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    audioDropdown.classList.toggle('hide');
  });

  document.addEventListener('click', (e) => {
    if (!audioDropdown.classList.contains('hide') && !e.target.closest('.audio-panel-wrapper')) {
      audioDropdown.classList.add('hide');
    }
  });

  toggleAudioCheckbox.addEventListener('change', () => {
    state.isAudioEnabled = toggleAudioCheckbox.checked;
    localStorage.setItem('wise_audio', state.isAudioEnabled);
  });

  toggleMusicCheckbox.addEventListener('change', () => {
    state.isMusicEnabled = toggleMusicCheckbox.checked;
    if (state.isMusicEnabled) {
      startBGM();
    } else {
      stopBGM();
    }
  });

  volumeSlider.addEventListener('input', () => {
    state.masterVolume = volumeSlider.value / 100;
    localStorage.setItem('wise_volume', state.masterVolume);
    if (state.bgmGainNode) {
      state.bgmGainNode.gain.setValueAtTime(state.masterVolume * 0.05, state.audioCtx.currentTime);
    }
  });

  // Lifelines events
  fiftyFiftyBtn.addEventListener('click', applyFiftyFifty);
  timeFreezeBtn.addEventListener('click', applyTimeFreeze);

  // Leaderboard Filtering events
  leaderboardSearchInput.addEventListener('input', filterLeaderboard);
  leaderboardFilterCategory.addEventListener('change', filterLeaderboard);

  // Tab navigation
  tabLeaderboardBtn.addEventListener('click', () => switchTab('leaderboard'));
  tabAnalyticsBtn.addEventListener('click', () => switchTab('analytics'));
  tabReviewBtn.addEventListener('click', () => switchTab('review'));
});

// --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
function initAudioContext() {
  if (!state.audioCtx) {
    state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSynthesizedSound(type) {
  if (!state.isAudioEnabled) return;
  
  try {
    initAudioContext();
    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }

    const osc = state.audioCtx.createOscillator();
    const gainNode = state.audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(state.audioCtx.destination);

    const now = state.audioCtx.currentTime;
    const vol = state.masterVolume;

    if (type === 'correct') {
      // Pleasant upward chime (Arpeggio: C5 -> G5 -> C6)
      osc.type = 'sine';
      gainNode.gain.setValueAtTime(0.01 * vol, now);
      gainNode.gain.linearRampToValueAtTime(0.15 * vol, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01 * vol, now + 0.4);

      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(783.99, now + 0.08); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.16); // C6

      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'wrong') {
      // Warm synth buzz/slide downwards
      osc.type = 'sawtooth';
      gainNode.gain.setValueAtTime(0.01 * vol, now);
      gainNode.gain.linearRampToValueAtTime(0.12 * vol, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01 * vol, now + 0.35);

      osc.frequency.setValueAtTime(130, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.3);

      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'timeup') {
      // Neutral double alert chime
      osc.type = 'triangle';
      gainNode.gain.setValueAtTime(0.01 * vol, now);
      gainNode.gain.linearRampToValueAtTime(0.15 * vol, now + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.01 * vol, now + 0.15);
      gainNode.gain.linearRampToValueAtTime(0.15 * vol, now + 0.18);
      gainNode.gain.exponentialRampToValueAtTime(0.01 * vol, now + 0.3);

      osc.frequency.setValueAtTime(440, now); // A4
      osc.frequency.setValueAtTime(440, now + 0.18);

      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'lifeline_5050') {
      // Upward sweeping sci-fi chime
      osc.type = 'sine';
      gainNode.gain.setValueAtTime(0.01 * vol, now);
      gainNode.gain.linearRampToValueAtTime(0.12 * vol, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01 * vol, now + 0.5);

      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.4);

      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'lifeline_freeze') {
      // Cool ringing frozen bell chime
      osc.type = 'sine';
      gainNode.gain.setValueAtTime(0.01 * vol, now);
      gainNode.gain.linearRampToValueAtTime(0.18 * vol, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001 * vol, now + 1.2);

      osc.frequency.setValueAtTime(880, now); // A5
      osc.frequency.setValueAtTime(987.77, now + 0.05); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.1); // E6

      osc.start(now);
      osc.stop(now + 1.2);
    }
  } catch (error) {
    console.error('Audio Synthesis Error:', error);
  }
}

// Synthesizer background music generator
const BGM_CHORDS = [
  [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
  [220.00, 261.63, 329.63, 392.00], // Am7 (A3, C4, E4, G4)
  [174.61, 261.63, 349.23, 440.00], // Fmaj7 (F3, C4, F4, A4)
  [196.00, 246.94, 293.66, 392.00]  // G7 (G3, B3, D4, G4)
];
let currentChordIndex = 0;

function startBGM() {
  if (!state.isMusicEnabled) return;
  initAudioContext();
  if (state.audioCtx.state === 'suspended') {
    state.audioCtx.resume();
  }
  
  stopBGM(); // ensure clean restart
  
  // Custom gain node specifically for music to maintain low volumes
  state.bgmGainNode = state.audioCtx.createGain();
  state.bgmGainNode.gain.setValueAtTime(state.masterVolume * 0.05, state.audioCtx.currentTime);
  state.bgmGainNode.connect(state.audioCtx.destination);
  
  playNextChord();
  state.bgmInterval = setInterval(playNextChord, 4000); // Trigger chord loop
}

function playNextChord() {
  if (!state.isMusicEnabled || !state.bgmGainNode || !state.audioCtx) return;
  
  const now = state.audioCtx.currentTime;
  const notes = BGM_CHORDS[currentChordIndex];
  
  notes.forEach(freq => {
    const osc = state.audioCtx.createOscillator();
    const oscGain = state.audioCtx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    
    // Slow volume swell and decay
    oscGain.gain.setValueAtTime(0, now);
    oscGain.gain.linearRampToValueAtTime(0.04, now + 1.2);
    oscGain.gain.setValueAtTime(0.04, now + 3.0);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 4.0);
    
    osc.connect(oscGain);
    oscGain.connect(state.bgmGainNode);
    
    osc.start(now);
    osc.stop(now + 4.0);
  });
  
  currentChordIndex = (currentChordIndex + 1) % BGM_CHORDS.length;
}

function stopBGM() {
  if (state.bgmInterval) {
    clearInterval(state.bgmInterval);
    state.bgmInterval = null;
  }
  if (state.bgmGainNode) {
    try {
      state.bgmGainNode.disconnect();
    } catch(e) {}
    state.bgmGainNode = null;
  }
}

// --- API COMMUNICATIONS ---
async function checkAPIStatus() {
  try {
    const res = await fetch('/api/leaderboard', { method: 'GET', signal: AbortSignal.timeout(2000) });
    if (res.ok) {
      state.isOfflineMode = false;
      console.log('Backend API endpoints online. Running in live mode.');
    } else {
      throw new Error();
    }
  } catch (err) {
    state.isOfflineMode = true;
    console.warn('Backend API offline or unreachable. Falling back to local storage browser mode.');
  }
}

async function fetchQuestions(category, difficulty, source) {
  if (state.isOfflineMode) {
    // Process offline filters
    let list = [...FALLBACK_QUESTIONS];
    if (category && category !== 'all') {
      list = list.filter(q => q.category === category);
    }
    if (difficulty && difficulty !== 'all') {
      list = list.filter(q => q.difficulty === difficulty);
    }
    return list.sort(() => 0.5 - Math.random()).slice(0, 15);
  }

  try {
    const url = `https://wisequiz-yn4c.onrender.com/api/questions?category=${category}&difficulty=${difficulty}&source=${source}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('API failed');
    return await res.json();
  } catch (error) {
    console.error('Fetch questions API error, applying offline fallback', error);
    state.isOfflineMode = true;
    return fetchQuestions(category, difficulty, source);
  }
}

async function fetchLeaderboard() {
  if (state.isOfflineMode) {
    const localLboard = localStorage.getItem('wise_leaderboard');
    if (localLboard) {
      return JSON.parse(localLboard);
    }
    localStorage.setItem('wise_leaderboard', JSON.stringify(FALLBACK_LEADERBOARD));
    return FALLBACK_LEADERBOARD;
  }

  try {
    const res = await fetch('/api/leaderboard');
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (error) {
    console.error('Fetch leaderboard API error, falling back to local leaderboard', error);
    state.isOfflineMode = true;
    return fetchLeaderboard();
  }
}

async function submitScore(scoreData) {
  if (state.isOfflineMode) {
    const scores = await fetchLeaderboard();
    const newEntry = {
      name: scoreData.name,
      email: scoreData.email,
      score: scoreData.score,
      category: scoreData.category,
      difficulty: scoreData.difficulty,
      streak: scoreData.streak,
      date: new Date().toISOString()
    };
    scores.push(newEntry);
    const sorted = scores.sort((a, b) => b.score - a.score).slice(0, 10);
    localStorage.setItem('wise_leaderboard', JSON.stringify(sorted));
    return { success: true, leaderboard: sorted };
  }

  try {
    const res = await fetch('/api/scores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scoreData)
    });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (error) {
    console.error('Submit score API error, saving locally instead', error);
    state.isOfflineMode = true;
    return submitScore(scoreData);
  }
}

// --- QUIZ START AND SETUP ---
async function handleQuizStart(e) {
  e.preventDefault();

  // Use stored state (set at login) or fall back to input fields
  const name  = state.playerName  || playerNameInput.value.trim();
  const email = state.playerEmail || playerEmailInput.value.trim();
  if (!name || !email) {
    alert("Please log in first before starting a quiz.");
    return;
  }

  state.playerName  = name;
  state.playerEmail = email;

  // Determine category from active custom selection button
  const activeCatBtn = document.querySelector('#main-category-menu .cat-card.active, #main-category-menu .menu-choice-btn.active');
  const catValue = activeCatBtn ? activeCatBtn.dataset.category : 'technology';
  if (catValue === 'technology') {
    const activeSubBtn = document.querySelector('#subcategory-menu .cat-card.active, #subcategory-menu .menu-choice-btn.active');
    state.category = activeSubBtn ? activeSubBtn.dataset.subcategory : 'fullstack';
  } else {
    state.category = catValue;
  }

  // Determine difficulty from active button
  const activeDiffBtn = document.querySelector('#difficulty-menu .diff-btn.active, #difficulty-menu .menu-choice-btn.active');
  state.difficulty = activeDiffBtn ? activeDiffBtn.dataset.difficulty : 'medium';
  
  const source = 'local';

  // Show loading state on start button
  const startBtn = document.getElementById('start-btn');
  const originalHtml = startBtn.innerHTML;
  startBtn.disabled = true;
  startBtn.innerHTML = `<span>Loading Trivia...</span> <div class="loading-spinner"></div>`;

  try {
    // Fetch appropriate questions
    state.questions = await fetchQuestions(state.category, state.difficulty, source);
    
    if (state.questions.length === 0) {
      alert("No questions found for the selected category/difficulty combination. Please try another selection.");
      startBtn.disabled = false;
      startBtn.innerHTML = originalHtml;
      return;
    }

    // Set dynamic Category Theme
    document.body.className = ''; // clear previous theme class
    const cleanCat = state.category.toLowerCase();
    if (cleanCat && cleanCat !== 'all') {
      document.body.classList.add(`theme-${cleanCat}`);
    } else {
      document.body.classList.add('theme-all');
    }

    // Reset game state variables
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.correctCount = 0;
    state.totalTimeSpent = 0;
    state.userAnswers = [];
    state.responseTimes = [];

    // Maintain streak logic
    let initialStreak = 0;
    if (state.maintainStreak && state.playerEmail) {
      const savedStreak = localStorage.getItem(`wise_streak_${state.playerEmail}`);
      if (savedStreak) {
        initialStreak = parseInt(savedStreak) || 0;
      }
    }
    state.streak = initialStreak;
    state.maxStreak = initialStreak;

    
    // Reset Lifelines state & UI buttons
    state.lifelines.fiftyFifty.used = false;
    state.lifelines.timeFreeze.used = false;
    fiftyFiftyBtn.disabled = false;
    fiftyFiftyBtn.classList.remove('used');
    timeFreezeBtn.disabled = false;
    timeFreezeBtn.classList.remove('used');

    liveScoreVal.textContent = '0';

    // Start background music loop if toggled
    if (state.isMusicEnabled) {
      startBGM();
    }

    // Transition Screens
    transitionScreen(screens.setup, screens.quiz);
    
    // Load first question
    loadQuestion();
    
  } catch (error) {
    console.error('Error starting quiz:', error);
    alert('An error occurred while loading questions. Please try again.');
  } finally {
    startBtn.disabled = false;
    startBtn.innerHTML = originalHtml;
  }
}

// --- QUESTION GAMEPLAY LOOP ---
function loadQuestion() {
  // Clear any existing timer
  clearInterval(state.questionTimer);

  // Reset question timer state
  state.isTimerFrozen = false;
  timerText.classList.remove('frozen');
  timerIndicator.classList.remove('frozen');

  const activeQuestion = state.questions[state.currentQuestionIndex];
  
  // Set Badges
  badgeCategory.textContent = activeQuestion.category;
  badgeDifficulty.textContent = activeQuestion.difficulty;
  
  // Update Question Info
  const qNum = state.currentQuestionIndex + 1;
  const qTotal = state.questions.length;
  progressText.textContent = `Question ${qNum} of ${qTotal}`;
  
  const percent = Math.round((qNum / qTotal) * 100);
  progressPercentage.textContent = `${percent}% Complete`;
  progressBarFill.style.width = `${percent}%`;

  // Display text
  questionText.textContent = activeQuestion.question;

  // Shuffle options if not already shuffled
  if (!activeQuestion._shuffled) {
    const originalAnswerText = activeQuestion.options[activeQuestion.answer];
    for (let i = activeQuestion.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [activeQuestion.options[i], activeQuestion.options[j]] = [activeQuestion.options[j], activeQuestion.options[i]];
    }
    activeQuestion.answer = activeQuestion.options.indexOf(originalAnswerText);
    activeQuestion._shuffled = true;
  }

  // Clear options and render new ones
  optionsContainer.innerHTML = '';
  activeQuestion.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span>${optionText}</span>`;
    btn.addEventListener('click', () => handleOptionSelection(index));
    optionsContainer.appendChild(btn);
  });

  // Reset next button
  nextBtn.classList.add('hide');

  // Start question timer
  state.timeLeft = 15;
  timerText.textContent = state.timeLeft;
  timerIndicator.style.strokeDashoffset = 0; // reset svg fill
  
  state.questionTimer = setInterval(() => {
    if (!state.isTimerFrozen) {
      state.timeLeft--;
    }
    state.totalTimeSpent++;

    // Update circular timer UI
    timerText.textContent = state.timeLeft;
    const offset = TIMER_CIRCUMFERENCE - (state.timeLeft / state.maxTime) * TIMER_CIRCUMFERENCE;
    timerIndicator.style.strokeDashoffset = offset;

    // Time-out logic
    if (state.timeLeft <= 0) {
      clearInterval(state.questionTimer);
      playSynthesizedSound('timeup');
      handleTimeout();
    }
  }, 1000);
}

function handleOptionSelection(selectedIndex) {
  // Stop Timer
  clearInterval(state.questionTimer);

  const activeQuestion = state.questions[state.currentQuestionIndex];
  const correctIndex = activeQuestion.answer;
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');

  // Disable all option buttons
  optionButtons.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIndex === correctIndex;
  
  // Mark option classes
  optionButtons[selectedIndex].classList.add('selected');
  
  // Track answer speed
  const secondsElapsed = 15 - state.timeLeft;
  state.responseTimes.push(secondsElapsed);

  if (isCorrect) {
    optionButtons[selectedIndex].classList.add('correct');
    state.correctCount++;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);

    // Scoring: Base 10 points per question + dynamic time bonus (up to 5 points)
    const timeBonus = Math.max(0, Math.ceil(state.timeLeft / 3));
    const questionScore = 10 + timeBonus;
    state.score += questionScore;
    liveScoreVal.textContent = state.score;
    playSynthesizedSound('correct');
  } else {
    optionButtons[selectedIndex].classList.add('wrong');
    optionButtons[correctIndex].classList.add('correct');
    state.streak = 0; // Reset streak
    
    // Soft shake animation on card for tactile feedback
    screens.quiz.classList.add('shake');
    setTimeout(() => screens.quiz.classList.remove('shake'), 500);
    playSynthesizedSound('wrong');
  }

  // Record user selection for Review Answers tab
  state.userAnswers.push({
    questionText: activeQuestion.question,
    options: activeQuestion.options,
    selectedIndex: selectedIndex,
    correctIndex: correctIndex,
    isCorrect: isCorrect,
    timedOut: false
  });

  // Reveal navigation controls
  nextBtn.classList.remove('hide');
  nextBtn.focus();
}

function handleTimeout() {
  const activeQuestion = state.questions[state.currentQuestionIndex];
  const correctIndex = activeQuestion.answer;
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');

  optionButtons.forEach(btn => btn.disabled = true);
  optionButtons[correctIndex].classList.add('correct'); // Reveal correct choice

  state.streak = 0; // Reset streak
  state.responseTimes.push(15); // Maximum time recorded

  // Record timeout
  state.userAnswers.push({
    questionText: activeQuestion.question,
    options: activeQuestion.options,
    selectedIndex: -1,
    correctIndex: correctIndex,
    isCorrect: false,
    timedOut: true
  });

  // Vibe feedback
  screens.quiz.classList.add('shake');
  setTimeout(() => screens.quiz.classList.remove('shake'), 500);

  nextBtn.classList.remove('hide');
  nextBtn.focus();
}

function nextQuestion() {
  state.currentQuestionIndex++;
  
  if (state.currentQuestionIndex < state.questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

// --- LIFELINES LOGIC ---
function applyFiftyFifty() {
  if (state.lifelines.fiftyFifty.used || state.timeLeft <= 0) return;
  state.lifelines.fiftyFifty.used = true;
  fiftyFiftyBtn.disabled = true;
  fiftyFiftyBtn.classList.add('used');

  playSynthesizedSound('lifeline_5050');

  const activeQuestion = state.questions[state.currentQuestionIndex];
  const correctIndex = activeQuestion.answer;
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');

  // Gather index of incorrect choices
  let incorrectIndices = [];
  activeQuestion.options.forEach((_, idx) => {
    if (idx !== correctIndex) incorrectIndices.push(idx);
  });

  // Pick exactly 2 wrong indices to eliminate
  incorrectIndices = incorrectIndices.sort(() => 0.5 - Math.random()).slice(0, 2);

  // Eliminate option elements from screen
  incorrectIndices.forEach(idx => {
    optionButtons[idx].disabled = true;
    optionButtons[idx].classList.add('eliminated');
  });
}

function applyTimeFreeze() {
  if (state.lifelines.timeFreeze.used || state.timeLeft <= 0) return;
  state.lifelines.timeFreeze.used = true;
  timeFreezeBtn.disabled = true;
  timeFreezeBtn.classList.add('used');

  playSynthesizedSound('lifeline_freeze');

  state.isTimerFrozen = true;
  timerText.classList.add('frozen');
  timerIndicator.classList.add('frozen');
}

// --- COMPLETION & RESULTS ---
async function finishQuiz() {
  clearInterval(state.questionTimer);
  stopBGM(); // Stop music at results screen

  // Calculate stats
  const scorePercentage = Math.round((state.correctCount / state.questions.length) * 100);
  
  // Format time display
  const minutes = Math.floor(state.totalTimeSpent / 60);
  const seconds = state.totalTimeSpent % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Update metrics UI
  statScore.textContent = `${scorePercentage}%`;
  statCorrect.textContent = `${state.correctCount}/${state.questions.length}`;
  statTime.textContent = timeFormatted;

  // Set celebratory visual cues depending on score
  if (scorePercentage >= 80) {
    resultTitle.textContent = 'Spectacular Work!';
    resultSubtitle.textContent = `You're a master trivia wizard, ${state.playerName}!`;
  } else if (scorePercentage >= 50) {
    resultTitle.textContent = 'Well Played!';
    resultSubtitle.textContent = `Good effort, ${state.playerName}. Try again to top the charts!`;
  } else {
    resultTitle.textContent = 'Keep Practicing!';
    resultSubtitle.textContent = `Keep learning, ${state.playerName}. Practice makes perfect!`;
  }

  // Pre-generate and render answers review sheet
  renderAnswersReview();

  // Load analytics dashboard metrics
  document.getElementById('val-streak').textContent = state.maxStreak;
  
  const avgSpeed = state.responseTimes.length > 0 ? (state.responseTimes.reduce((a, b) => a + b, 0) / state.responseTimes.length) : 0;
  document.getElementById('val-speed').textContent = `${avgSpeed.toFixed(1)}s`;
  
  // Time efficiency: percent of total timer allocated that the player didn't use for correct questions
  const totalTimerLimit = state.questions.length * 15;
  const timeSavedPercent = Math.max(0, Math.round(((totalTimerLimit - state.totalTimeSpent) / totalTimerLimit) * 100));
  document.getElementById('val-efficiency').textContent = `${timeSavedPercent}%`;

  // Draw concentric accuracy chart
  renderSVGChart();

  // Transition screen
  transitionScreen(screens.quiz, screens.results);

  // Trigger chocolate splash if score >= 8 correct out of 15 (>= 53%)
  if (state.correctCount >= 8) {
    setTimeout(() => triggerChocolateSplash(), 600);
  }

  // Save activity and update streak
  if (state.playerEmail) {
    updateActivityLog(state.playerEmail, scorePercentage);
    const log = JSON.parse(localStorage.getItem(`wise_activity_${state.playerEmail}`) || '{}');
    state.maxStreak = calculateStreak(log);
  }

  // Submit score to leaderboard and render leaderboard view
  try {
    const payload = {
      name: state.playerName,
      email: state.playerEmail,
      score: scorePercentage,
      category: state.category,
      difficulty: state.difficulty,
      streak: state.maxStreak
    };
    
    const response = await submitScore(payload);
    state.leaderboardData = response.leaderboard;
  } catch (error) {
    console.error('Failed to update leaderboard:', error);
    state.leaderboardData = await fetchLeaderboard();
  }
  
  // Reset filters and render filtered list
  leaderboardSearchInput.value = '';
  leaderboardFilterCategory.value = 'all';
  renderLeaderboardTable(state.leaderboardData);
}

// --- RENDER DYNAMIC REVIEWS & TABLES ---
function renderAnswersReview() {
  reviewList.innerHTML = '';
  
  state.userAnswers.forEach((ans, idx) => {
    const item = document.createElement('div');
    item.className = `review-item ${ans.isCorrect ? 'correct' : 'incorrect'}`;

    let statusLine = '';
    if (ans.isCorrect) {
      statusLine = `<div class="review-answer-line user-choice" style="color: var(--color-success);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Your Answer: ${ans.options[ans.selectedIndex]} (Correct)</span>
      </div>`;
    } else if (ans.timedOut) {
      statusLine = `<div class="review-answer-line user-choice" style="color: var(--color-error);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>Timed Out (No option selected)</span>
      </div>
      <div class="review-answer-line correct-choice" style="color: var(--text-muted);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Correct Answer: ${ans.options[ans.correctIndex]}</span>
      </div>`;
    } else {
      statusLine = `<div class="review-answer-line user-choice" style="color: var(--color-error);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span>Your Answer: ${ans.options[ans.selectedIndex]}</span>
      </div>
      <div class="review-answer-line correct-choice" style="color: var(--color-success);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Correct Answer: ${ans.options[ans.correctIndex]}</span>
      </div>`;
    }

    item.innerHTML = `
      <div class="review-question">Q${idx + 1}: ${ans.questionText}</div>
      <div class="review-answers-grid">
        ${statusLine}
      </div>
    `;

    reviewList.appendChild(item);
  });
}

function renderLeaderboardTable(board) {
  leaderboardBody.innerHTML = '';
  
  if (!board || board.length === 0) {
    leaderboardBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No match found.</td></tr>`;
    return;
  }

  board.forEach((entry, idx) => {
    const tr = document.createElement('tr');
    
    // Rank Icon / Badge
    let rankHtml = `<span class="rank-badge">${idx + 1}</span>`;

    // Format Category/Difficulty
    const cat = entry.category === 'all' ? 'mixed' : entry.category;
    const diff = entry.difficulty === 'all' ? 'mixed' : entry.difficulty;

    // Mask/format email for UI clean look
    const emailInfo = entry.email ? `<br><span style="font-size:11px; color:var(--text-muted); font-weight:normal;">${escapeHTML(entry.email)}</span>` : '';
    const streakVal = typeof entry.streak === 'number' ? entry.streak : 0;
    const streakHtml = streakVal;

    tr.innerHTML = `
      <td>${rankHtml}</td>
      <td class="font-bold">${escapeHTML(entry.name)}${emailInfo}</td>
      <td><span class="category-badge">${escapeHTML(cat)}</span></td>
      <td style="text-transform: capitalize; color: var(--text-muted);">${escapeHTML(diff)}</td>
      <td class="font-bold" style="color: var(--color-warning);">${streakHtml}</td>
      <td><span class="score-badge">${entry.score}%</span></td>
    `;
    leaderboardBody.appendChild(tr);
  });
}

// --- LIVE FILTER LEADERBOARD ---
function filterLeaderboard() {
  const searchQuery = leaderboardSearchInput.value.toLowerCase();
  const filterCat = leaderboardFilterCategory.value.toLowerCase();

  const filtered = state.leaderboardData.filter(entry => {
    const nameMatches = entry.name.toLowerCase().includes(searchQuery);
    const entryCat = entry.category === 'all' ? 'mixed' : entry.category.toLowerCase();
    const catMatches = filterCat === 'all' || entryCat.includes(filterCat);
    return nameMatches && catMatches;
  });

  renderLeaderboardTable(filtered);
}

// --- DYNAMIC SVG ACCURACY CONCENTRIC CHART ---
function renderSVGChart() {
  const wrapper = document.getElementById('svg-chart-wrapper');
  if (!wrapper) return;

  // Track accuracy dynamically per category in current session
  const stats = {};
  state.questions.forEach((q, idx) => {
    const cat = q.category.toLowerCase();
    if (!stats[cat]) {
      stats[cat] = { correct: 0, total: 0 };
    }
    const ans = state.userAnswers[idx];
    if (ans) {
      stats[cat].total++;
      if (ans.isCorrect) {
        stats[cat].correct++;
      }
    }
  });

  // Sort categories by total count so the most prominent categories get the outer rings
  const activeCats = Object.keys(stats).sort((a, b) => stats[b].total - stats[a].total).slice(0, 3);

  // If there are less than 3 categories, fill up with empty states
  while (activeCats.length < 3) {
    activeCats.push('');
  }

  // Ring configurations
  const rings = [
    { r: 80, gradId: 'ringGrad0' },
    { r: 60, gradId: 'ringGrad1' },
    { r: 40, gradId: 'ringGrad2' }
  ];

  const themeGradients = {
    fullstack: { start: 'HSL(190, 90%, 50%)', end: 'HSL(220, 90%, 55%)', glow: 'HSLA(190, 90%, 50%, 0.6)' },
    aiml: { start: 'HSL(292, 90%, 60%)', end: 'HSL(262, 90%, 65%)', glow: 'HSLA(292, 90%, 60%, 0.6)' },
    mechanical: { start: 'HSL(28, 95%, 55%)', end: 'HSL(48, 95%, 50%)', glow: 'HSLA(28, 95%, 55%, 0.6)' },
    science: { start: 'HSL(142, 70%, 45%)', end: 'HSL(280, 80%, 60%)', glow: 'HSLA(142, 70%, 45%, 0.6)' },
    geography: { start: 'HSL(35, 90%, 55%)', end: 'HSL(175, 80%, 40%)', glow: 'HSLA(35, 90%, 55%, 0.6)' }
  };

  let svgContent = '';
  let defsContent = '';
  let legendContent = '';

  activeCats.forEach((cat, index) => {
    const ring = rings[index];
    const circumference = 2 * Math.PI * ring.r;
    
    let percent = 0;
    let label = 'Empty';
    let gradInfo = { start: 'HSL(240, 20%, 30%)', end: 'HSL(240, 20%, 20%)', glow: 'transparent' };

    if (cat && stats[cat]) {
      percent = stats[cat].correct / stats[cat].total;
      label = cat === 'fullstack' ? 'Full Stack' : cat === 'aiml' ? 'AI/ML' : cat;
      gradInfo = themeGradients[cat] || { start: 'HSL(271, 91%, 65%)', end: 'HSL(239, 84%, 67%)', glow: 'HSLA(271, 91%, 65%, 0.6)' };
    }

    const offset = circumference - (percent * circumference);

    svgContent += `
      <circle cx="100" cy="100" r="${ring.r}" stroke="${percent > 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)'}" stroke-width="10" fill="none"/>
      ${percent > 0 ? `
        <circle cx="100" cy="100" r="${ring.r}" stroke="url(#${ring.gradId})" stroke-width="10" fill="none"
          stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"
          transform="rotate(-90 100 100)" style="transition: stroke-dashoffset 1.2s ease-out; filter: drop-shadow(0 0 5px ${gradInfo.glow});"/>
      ` : ''}
    `;

    defsContent += `
      <linearGradient id="${ring.gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stop-color="${gradInfo.start}"/>
        <stop offset="100%" stop-color="${gradInfo.end}"/>
      </linearGradient>
    `;

    if (cat) {
      legendContent += `
        <span style="color: ${gradInfo.start}; display: flex; align-items: center; gap: 4px; text-transform: capitalize;">
          ● ${label}: ${Math.round(percent * 100)}%
        </span>
      `;
    }
  });

  const svgHtml = `
    <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
      <svg width="200" height="200" viewBox="0 0 200 200" style="overflow: visible;">
        ${svgContent}
        <text x="100" y="97" text-anchor="middle" fill="var(--text-main)" font-size="11" font-weight="700" style="letter-spacing: 0.5px;">ACCURACY</text>
        <text x="100" y="112" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="600" style="letter-spacing: 0.5px;">METRICS</text>
        <defs>
          ${defsContent}
        </defs>
      </svg>
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 15px; font-size: 11px; font-weight: 700;">
        ${legendContent}
      </div>
    </div>
  `;
  wrapper.innerHTML = svgHtml;
}

// --- UI HELPERS ---
function transitionScreen(fromScreen, toScreen) {
  fromScreen.classList.add('hide');
  toScreen.classList.remove('hide');
  toScreen.classList.add('fade-in');
  setTimeout(() => toScreen.classList.remove('fade-in'), 400);
}

function switchTab(tabName) {
  tabLeaderboardBtn.classList.remove('active');
  tabAnalyticsBtn.classList.remove('active');
  tabReviewBtn.classList.remove('active');
  
  panelLeaderboard.classList.remove('active');
  panelAnalytics.classList.remove('active');
  panelReview.classList.remove('active');

  if (tabName === 'leaderboard') {
    tabLeaderboardBtn.classList.add('active');
    panelLeaderboard.classList.add('active');
  } else if (tabName === 'analytics') {
    tabAnalyticsBtn.classList.add('active');
    panelAnalytics.classList.add('active');
  } else if (tabName === 'review') {
    tabReviewBtn.classList.add('active');
    panelReview.classList.add('active');
  }
}

function restartQuiz() {
  stopBGM();
  document.body.className = ''; // clear theme
  switchTab('leaderboard');
  // Go directly to category selection — user is already logged in
  const step1 = document.getElementById('setup-step-1');
  const step2 = document.getElementById('setup-step-2');
  if (step1) step1.classList.add('hide');
  if (step2) step2.classList.remove('hide');
  transitionScreen(screens.results, screens.setup);
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// --- PROFILE & ACTIVITY TRACKING ---

function getLocalDateStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function updateActivityLog(email, score) {
  if (!email) return;
  const key = `wise_activity_${email}`;
  let log = JSON.parse(localStorage.getItem(key) || '[]');
  if (!Array.isArray(log)) log = [];
  
  const earnedPoints = state.correctCount * 10;
  
  log.push({
    score: score,
    correct: state.correctCount,
    total: state.questions.length,
    points: earnedPoints,
    category: state.category,
    date: getLocalDateStr(),
    timestamp: Date.now()
  });
  
  localStorage.setItem(key, JSON.stringify(log));
}

function calculateStreak(log) {
  if (!Array.isArray(log)) return 0;
  const dates = [...new Set(log.map(e => e.date))].sort((a, b) => new Date(b) - new Date(a));
  if (dates.length === 0) return 0;
  
  const today = new Date(getLocalDateStr());
  let currentStreak = 0;
  let checkDate = today;

  const getDStr = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

  if (!dates.includes(getDStr(checkDate))) {
    checkDate.setDate(checkDate.getDate() - 1);
    if (!dates.includes(getDStr(checkDate))) return 0;
  }

  while (true) {
    if (dates.includes(getDStr(checkDate))) {
      currentStreak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  return currentStreak;
}

function renderProfileStats() {
  const email = state.playerEmail || playerNameInput.value.trim() || localStorage.getItem('wise_last_email') || 'user@example.com';
  let log = JSON.parse(localStorage.getItem(`wise_activity_${email}`) || '[]');
  if (!Array.isArray(log)) log = [];
  
  const today = getLocalDateStr();
  const todayScore = log.filter(e => e.date === today).reduce((sum, e) => sum + (e.score || 0), 0);
  document.getElementById('profile-daily-score').textContent = todayScore;
  
  let activeDaysThisWeek = 0;
  const d = new Date();
  const getDStr = (dateObj) => dateObj.getFullYear() + '-' + String(dateObj.getMonth() + 1).padStart(2, '0') + '-' + String(dateObj.getDate()).padStart(2, '0');
  for (let i = 0; i < 7; i++) {
    const dStr = getDStr(d);
    if (log.some(e => e.date === dStr)) activeDaysThisWeek++;
    d.setDate(d.getDate() - 1);
  }
  document.getElementById('profile-active-days').textContent = `${activeDaysThisWeek}/7`;
  
  const streak = calculateStreak(log);
  document.getElementById('profile-daily-streak').textContent = `${streak} 🔥`;

  const photoBase64 = localStorage.getItem(`wise_photo_${email}`);
  if (photoBase64) {
    document.getElementById('profile-img-preview').src = photoBase64;
    document.getElementById('profile-img-preview').style.display = 'block';
    document.getElementById('profile-img-placeholder').style.display = 'none';
  }
}

// Photo Upload Listener
const profilePhotoInput = document.getElementById('profile-photo-input');
if (profilePhotoInput) {
  profilePhotoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
      const base64 = event.target.result;
      const email = playerNameInput.value.trim() || localStorage.getItem('wise_last_email') || 'user@example.com';
      localStorage.setItem(`wise_photo_${email}`, base64);
      
      document.getElementById('profile-img-preview').src = base64;
      document.getElementById('profile-img-preview').style.display = 'block';
      document.getElementById('profile-img-placeholder').style.display = 'none';
    };
    reader.readAsDataURL(file);
  });
}

// --- QUESTION BANK GENERATOR ---

const qbankForm = document.getElementById('qbank-form');
const qbankCategoryMenu = document.getElementById('qbank-category-menu');
const qbankSubcategoryGroup = document.getElementById('qbank-subcategory-group');
const qbankSubcategoryMenu = document.getElementById('qbank-subcategory-menu');
const qbankDownloadBtn = document.getElementById('qbank-download-btn');

if (qbankCategoryMenu) {
  qbankCategoryMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.menu-choice-btn');
    if (!btn) return;
    qbankCategoryMenu.querySelectorAll('.menu-choice-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if (qbankSubcategoryGroup) {
      if (btn.dataset.qcategory === 'technology') {
        qbankSubcategoryGroup.classList.remove('hide');
      } else {
        qbankSubcategoryGroup.classList.add('hide');
      }
    }
  });
}

if (qbankSubcategoryMenu) {
  qbankSubcategoryMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.menu-choice-btn');
    if (!btn) return;
    qbankSubcategoryMenu.querySelectorAll('.menu-choice-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
}

if (qbankForm) {
  qbankForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!window.jspdf) {
      alert("PDF library is still loading. Please try again in a moment.");
      return;
    }
    
    const activeBtn = document.querySelector('#qbank-category-menu .menu-choice-btn.active');
    const qcatValue = activeBtn ? activeBtn.dataset.qcategory : 'technology';
    let category = qcatValue;
    
    if (qcatValue === 'technology') {
      const activeSubBtn = document.querySelector('#qbank-subcategory-menu .menu-choice-btn.active');
      category = activeSubBtn ? activeSubBtn.dataset.qsubcategory : 'fullstack';
    }
    let count = 10;
    
    // Disable button to show loading
    const originalHtml = qbankDownloadBtn.innerHTML;
    qbankDownloadBtn.disabled = true;
    qbankDownloadBtn.innerHTML = `<span>Generating PDF...</span>`;
    
    try {
      // Get questions via the main fetch logic which handles offline/online automatically
      let list = await fetchQuestions(category, 'all', 'local');
      
      // Shuffle correctly (Fisher-Yates) to guarantee randomness and no repeats
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
      list = list.slice(0, 10);
      
      if (list.length === 0) {
        alert("No questions available for the selected category.");
        qbankDownloadBtn.disabled = false;
        qbankDownloadBtn.innerHTML = originalHtml;
        return;
      }
      
      // Generate PDF
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      doc.setFontSize(22);
      doc.setTextColor(37, 99, 235); // Primary Blue
      doc.text("WiseQuiz Question Bank", 20, 20);
      
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text(`Category: ${category.toUpperCase()} | Count: ${list.length}`, 20, 30);
      
      let yPos = 45;
      const pageHeight = doc.internal.pageSize.height;
      
      doc.setFontSize(12);
      doc.setTextColor(20, 30, 40);
      
      // Questions
      list.forEach((q, index) => {
        if (yPos > pageHeight - 40) {
          doc.addPage();
          yPos = 20;
        }
        
        const qText = doc.splitTextToSize(`${index + 1}. ${q.question}`, 170);
        doc.setFont("helvetica", "bold");
        doc.text(qText, 20, yPos);
        yPos += (qText.length * 6) + 3;
        
        doc.setFont("helvetica", "normal");
        q.options.forEach((opt, optIndex) => {
          const letter = String.fromCharCode(65 + optIndex);
          const optText = doc.splitTextToSize(`   ${letter}) ${opt}`, 160);
          doc.text(optText, 20, yPos);
          yPos += (optText.length * 5) + 2;
        });
        
        yPos += 8; // Spacing between questions
      });
      
      // Answer Key Section
      yPos += 10;
      if (yPos > pageHeight - 40) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(37, 99, 235);
      doc.text("Answer Key", 20, yPos);
      
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(20, 30, 40);
      yPos += 10;
      
      list.forEach((q, index) => {
        if (yPos > pageHeight - 20) {
          doc.addPage();
          yPos = 20;
        }
        const correctIndex = q.answer !== undefined ? q.answer : 0;
        const letter = String.fromCharCode(65 + correctIndex);
        const correctText = q.options[correctIndex];
        doc.text(`${index + 1}. ${letter}) ${correctText}`, 20, yPos);
        yPos += 8;
      });
      
      doc.save(`WiseQuiz_${category}_Questions.pdf`);
    } catch (e) {
      console.error(e);
      alert("An error occurred while generating the PDF.");
    } finally {
      qbankDownloadBtn.disabled = false;
      qbankDownloadBtn.innerHTML = originalHtml;
    }
  });
}

// --- DASHBOARD UI ---

function updateDashboardUI() {
  const email = state.playerEmail || localStorage.getItem('wise_last_email');
  const name  = state.playerName || localStorage.getItem('wise_last_name');
  if (!email) return;

  const welcomeEl = document.getElementById('dash-welcome-name');
  if (welcomeEl) welcomeEl.textContent = `Hello, ${name}!`;

  let activityLog = [];
  try {
    activityLog = JSON.parse(localStorage.getItem(`wise_activity_${email}`) || '[]');
  } catch(e) {}
  if (!Array.isArray(activityLog)) activityLog = [];

  const totalQuizzes = activityLog.length;
  const el = id => document.getElementById(id);
  if (el('dash-quizzes-completed')) el('dash-quizzes-completed').textContent = totalQuizzes;

  let totalCorrect = 0, totalQs = 0, totalScore = 0, totalPoints = 0;
  activityLog.forEach(entry => {
    if (entry.correct !== undefined) totalCorrect += entry.correct;
    if (entry.total !== undefined) totalQs += entry.total;
    if (entry.score !== undefined) totalScore += entry.score;
    if (entry.points !== undefined) totalPoints += entry.points;
  });
  
  const accuracy = totalQs > 0 ? Math.round((totalCorrect / totalQs) * 100) : 0;
  if (el('dash-accuracy')) el('dash-accuracy').textContent = `${accuracy}%`;

  const avgScore = totalQuizzes > 0 ? Math.round(totalScore / totalQuizzes) : 0;
  if (el('dash-avg-score')) el('dash-avg-score').textContent = `${avgScore}%`;

  if (el('dash-points')) el('dash-points').textContent = totalPoints.toLocaleString();

  const streakDays = calculateStreak(activityLog);
  if (el('dash-streak-count')) el('dash-streak-count').textContent = streakDays;
  if (el('dash-top-streak')) el('dash-top-streak').textContent = `${streakDays} 🔥`;
  
  const bannerSub = el('dash-banner-subtitle');
  if (bannerSub) {
    bannerSub.textContent = `You're on a ${streakDays}-day streak. Ready for your next challenge?`;
  }

  const uniqueDays = new Set(activityLog.map(e => e.date));
  let activeDaysThisWeek = 0;
  const d = new Date();
  const getDStr = (dateObj) => dateObj.getFullYear() + '-' + String(dateObj.getMonth() + 1).padStart(2, '0') + '-' + String(dateObj.getDate()).padStart(2, '0');
  for (let i = 0; i < 7; i++) {
    const dStr = getDStr(d);
    if (uniqueDays.has(dStr)) activeDaysThisWeek++;
    d.setDate(d.getDate() - 1);
  }
  if (el('dash-active-days')) el('dash-active-days').textContent = `${activeDaysThisWeek}/7`;

  if (el('dash-progress-fill')) el('dash-progress-fill').style.width = `${accuracy}%`;
  if (el('dash-progress-pct')) el('dash-progress-pct').textContent = `${accuracy}%`;
  if (el('dash-progress-label')) {
    el('dash-progress-label').textContent = accuracy >= 80
      ? 'Outstanding performance!'
      : accuracy >= 50
      ? 'Keep pushing — you\'re getting there!'
      : 'Play more quizzes to improve!';
  }

  // Recent Activity List
  const activityListEl = el('dash-activity-list');
  if (activityListEl) {
    if (activityLog.length === 0) {
      activityListEl.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">No recent activity yet. Play your first quiz!</p>';
    } else {
      const recent = [...activityLog].reverse().slice(0, 4);
      activityListEl.innerHTML = recent.map(entry => {
        const score = entry.score || 0;
        const scoreClass = score >= 80 ? 'score-pass' : score >= 50 ? 'score-avg' : 'score-fail';
        const scoreLabel = score >= 80 ? 'Passed' : score >= 50 ? 'Avg' : 'Failed';
        const cat = entry.category || 'General';
        const dateStr = entry.date ? new Date(entry.date).toLocaleDateString() : 'Today';
        const icons = { fullstack: '💻', aiml: '🤖', mechanical: '⚙️', science: '🔬', geography: '🌍' };
        const icon = icons[cat] || '📝';
        return `
          <div class="dash-activity-item">
            <div class="dash-activity-icon">${icon}</div>
            <div class="dash-activity-info">
              <div class="dash-activity-name">${cat.charAt(0).toUpperCase() + cat.slice(1)}</div>
              <div class="dash-activity-date">${dateStr}</div>
            </div>
            <div class="dash-activity-score ${scoreClass}">${score}% <small>${scoreLabel}</small></div>
          </div>`;
      }).join('');
    }
  }

  // Badge message
  const badgeMsg = el('dash-badge-msg');
  if (badgeMsg) {
    if (totalQuizzes >= 10) {
      badgeMsg.textContent = 'You\'ve unlocked the "Quiz Veteran" badge!';
    } else if (totalQuizzes >= 5) {
      badgeMsg.textContent = `${10 - totalQuizzes} more quiz(zes) to unlock the "Quiz Veteran" badge!`;
    } else if (totalQuizzes >= 1) {
      badgeMsg.textContent = `${5 - totalQuizzes} more quiz(zes) to unlock the "Rising Star" badge!`;
    } else {
      badgeMsg.textContent = 'Complete your first quiz to unlock your first badge.';
    }
  }
}

// Wire Dashboard buttons
document.addEventListener('DOMContentLoaded', () => {
  // "Start Next Quiz" banner button => go to Play Quiz setup screen
  const dashStartBtn = document.getElementById('dash-start-quiz-btn');
  if (dashStartBtn) {
    dashStartBtn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      const navHome = document.getElementById('nav-home');
      if (navHome) navHome.classList.add('active');
      // Show setup step 2 directly if already logged in
      const step1 = document.getElementById('setup-step-1');
      const step2 = document.getElementById('setup-step-2');
      if (step1 && step2) { step1.classList.add('hide'); step2.classList.remove('hide'); }
      Object.values(screens).forEach(s => s && s.classList.add('hide'));
      if (screens.setup) screens.setup.classList.remove('hide');
      document.body.classList.remove('on-dashboard');
    });
  }

  // "See All" => Play Quiz
  const dashSeeAll = document.getElementById('dash-see-all-btn');
  if (dashSeeAll) {
    dashSeeAll.addEventListener('click', () => {
      document.getElementById('nav-home')?.click();
    });
  }

  // "View All Activity" => Profile
  const dashViewAll = document.getElementById('dash-view-all-activity');
  if (dashViewAll) {
    dashViewAll.addEventListener('click', () => {
      document.getElementById('nav-profile')?.click();
    });
  }

  // Recommended "Take Quiz" buttons
  document.querySelectorAll('.dash-rec-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.recCategory;
      const diff = btn.dataset.recDifficulty;

      // Pre-select category
      const mainMenu = document.getElementById('main-category-menu');
      if (mainMenu) {
        mainMenu.querySelectorAll('.menu-choice-btn').forEach(b => b.classList.remove('active'));
        const techBtn = mainMenu.querySelector(`[data-category="technology"]`);
        if (techBtn) techBtn.classList.add('active');
        // Handle subcategory
        const subGroup = document.getElementById('subcategory-group');
        const subMenu = document.getElementById('subcategory-menu');
        if (subGroup) subGroup.classList.remove('hide');
        if (subMenu) {
          subMenu.querySelectorAll('.menu-choice-btn').forEach(b => b.classList.remove('active'));
          const sub = subMenu.querySelector(`[data-subcategory="${cat}"]`);
          if (sub) sub.classList.add('active');
        }
      }

      // Pre-select difficulty
      const diffMenu = document.getElementById('difficulty-menu');
      if (diffMenu) {
        diffMenu.querySelectorAll('.menu-choice-btn').forEach(b => b.classList.remove('active'));
        const diffBtn = diffMenu.querySelector(`[data-difficulty="${diff}"]`);
        if (diffBtn) diffBtn.classList.add('active');
      }

      // Navigate to quiz setup step 2
      const step1 = document.getElementById('setup-step-1');
      const step2 = document.getElementById('setup-step-2');
      if (step1 && step2) { step1.classList.add('hide'); step2.classList.remove('hide'); }
      Object.values(screens).forEach(s => s && s.classList.add('hide'));
      if (screens.setup) screens.setup.classList.remove('hide');
      document.body.classList.remove('on-dashboard');

      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('nav-home')?.classList.add('active');
    });
  });
});

// --- CHOCOLATE SPLASH ANIMATION ---
function triggerChocolateSplash() {
  const canvas = document.getElementById('splash-canvas');
  if (!canvas) return;

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const ctx = canvas.getContext('2d');

  // Chocolate + gold colour palette
  const COLORS = [
    '#3d1c02', '#7b3a10', '#c0651a', '#e0922a',
    '#f5c842', '#fde68a', '#ffffff',
    '#5c2d0e', '#a0522d', '#d2691e'
  ];

  const PARTICLE_COUNT = 220;
  const particles = [];

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x  = Math.random() * canvas.width;
      this.y  = initial ? (Math.random() * canvas.height * 0.6 - canvas.height * 0.2) : -20;
      this.r  = Math.random() * 9 + 4;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.vx = (Math.random() - 0.5) * 5;
      this.vy = Math.random() * 4 + 2;
      this.opacity = 1;
      this.rot = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.15;
      this.shape = Math.random() < 0.5 ? 'circle' : 'rect';
    }
    update() {
      this.x  += this.vx;
      this.y  += this.vy;
      this.vy += 0.08;           // gravity
      this.rot += this.rotSpeed;
      if (this.y > canvas.height + 20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.fillStyle = this.color;
      if (this.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-this.r, -this.r * 0.6, this.r * 2, this.r * 1.2);
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  let frame = 0;
  const TOTAL_FRAMES = 180; // ~3 seconds at 60fps

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    frame++;
    if (frame < TOTAL_FRAMES) {
      requestAnimationFrame(animate);
    } else {
      // Fade out
      let fadeOpacity = 1;
      function fadeOut() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = fadeOpacity;
        particles.forEach(p => { p.update(); p.draw(); });
        ctx.globalAlpha = 1;
        fadeOpacity -= 0.04;
        if (fadeOpacity > 0) requestAnimationFrame(fadeOut);
        else canvas.style.display = 'none';
      }
      fadeOut();
    }
  }
  animate();
}
