# NexusQuiz — Premium Full-Stack Trivia Application

NexusQuiz is a feature-rich, full-stack, single-page quiz application designed with premium visual aesthetics (glassmorphism, dark mode, vibrant neon ambient glows) and robust code architecture. It runs in a zero-dependency dual-mode layout that automatically falls back to client-side storage and custom sound synthesis if the backend is unreachable.

---

## 🌟 Key Features

1. **Stunning UI/UX Design**:
   - Futuristic dark-themed layout built with responsive flexbox and grid layouts.
   - Glassmorphic panels featuring translucent border frames and real-time backdrop blur filtering.
   - Ambient, animated background blur orbits to create organic visual depth.
   - Smooth slide-in micro-animations and shake-based tactile feedback.
   
2. **Advanced Functionality**:
   - Dynamic questions fetched directly from a backend REST API.
   - Smart circular timer countdown with a color-shifting radial gauge indicator.
   - Interactive progress tracking displaying question indices, remaining lists, and animated progress fills.
   - Instantly checks selections and highlights answers (Green check for correct, Red cross for incorrect).
   
3. **Sound Synthesizer**:
   - Utilizes the browser's native **Web Audio API** to dynamically generate synth sound effects (C-major chime arpeggio on correct answer, low frequency sawtooth pitch slide buzzer on wrong answer, dual-alert beep warning on timeouts).
   - Audio is completely self-contained with no external static file asset dependencies.
   - Persistent mute controls saved within local storage.
   
4. **Flexible High Score Leaderboard**:
   - Persisted high-score logs.
   - Renders rankings dynamically showing custom medal designs (🥇, 🥈, 🥉) and category difficulty badges.
   
5. **Zero-Dependency Resilience & Offline Mode**:
   - If the backend REST server is offline, the frontend client automatically detects this and transitions into a **standalone local-first application**.
   - Questions are loaded from a built-in client database, and scores are logged locally in the browser's `localStorage` leaderboard.

---

## 🏗️ Technical Architecture

### Directory Layout
```
Quiz app/
├── data/
│   ├── questions.json     # Quiz question database
│   └── leaderboard.json   # Live score database
├── public/
│   ├── index.html         # Main semantic markup container
│   ├── style.css          # Core CSS variables & styles
│   └── app.js             # Logic, state machines, sound synthesis
├── package.json           # Node project config
└── server.js              # Express backend server
```

---

## 🚀 Installation & Running

### Option A: Running with Full Backend API Server (Recommended)

1. Ensure **Node.js** is installed on your computer.
2. Open your terminal in the project directory:
   ```bash
   cd "c:\Users\HP\Desktop\Quiz app"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`.

### Option B: Zero Setup / Static Mode (Double-click to Run)

1. Simply locate the `public/index.html` file inside the workspace.
2. Double-click to launch it in any modern browser.
3. The application will immediately notice the server is not running and switch to **Offline Mode**, maintaining full functionality (saving scores, loading questions, playing sound effects).

---

## 🌐 API Endpoint Details

The server exposes the following REST APIs:

### 1. `GET /api/questions`
- **Description**: Fetches quiz questions based on query parameters and shuffles them for a unique attempt.
- **Query Params**:
  - `category` (optional): `technology` | `science` | `geography` | `all`
  - `difficulty` (optional): `easy` | `medium` | `hard` | `all`
- **Response**: Array of up to 10 question objects.

### 2. `GET /api/leaderboard`
- **Description**: Returns the top 10 player scores, sorted descending by score value.
- **Response**: Array of score entry objects.

### 3. `POST /api/scores`
- **Description**: Submits a new player score record to the leaderboard dataset.
- **Body Requirement (`application/json`)**:
  ```json
  {
    "name": "Jane Doe",
    "score": 90,
    "category": "science",
    "difficulty": "medium"
  }
  ```
- **Response**: Confirmation object containing `success: true` and the updated top 10 leaderboard.

---

## ☁️ Deployment Guide

Here are step-by-step instructions on how to deploy this application to production platforms to fulfill full-stack deployment requirements.

### 1. Full-Stack / Backend Deployment (e.g., Render or Railway)

Since this app uses an Express backend server to read/write leaderboard data, deploying the full Express server is recommended:

#### **A. Deploying on Render (Recommended & Free)**
1. Sign up/log in to [Render](https://render.com/).
2. Click **New** > **Web Service**.
3. Connect your GitHub repository containing the project.
4. Set the following configuration values:
   - **Name**: `nexus-quiz`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Click **Deploy Web Service**. Render will build and deploy the app. It will host the Express API and serve the static frontend from the `/public` folder automatically.

---

### 2. Frontend-Only Deployment (e.g., Netlify or Vercel)

If you only want to deploy the frontend static page (which will automatically fall back to its resilient **Offline Mode** with local questions and browser-based `localStorage` leaderboard):

#### **A. Deploying on Netlify**
1. Sign up/log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the `public` folder of your project directly into the Netlify dropzone, OR connect your GitHub repo and set the **Publish directory** to `public` (leave the build command empty).
3. Netlify will deploy the site and provide a custom `.netlify.app` URL.

---

## 🛡️ License

Developed under the pair-programming workflow of Google DeepMind Antigravity. Free to use and distribute under standard open-source licenses.

