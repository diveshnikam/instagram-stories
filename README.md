---

# 📸 Instagram Stories Clone – Frontend

A mobile-first Instagram Stories UI clone built using **React + Vite**, designed to replicate the core story viewing experience including horizontal story lists, fullscreen viewing, tap navigation, and auto-play behavior.

This project focuses purely on frontend UI/UX logic and interactions.

---

## 🚀 Live Demo

[https://instagram-stories-fhmg.vercel.app/](https://instagram-stories-fhmg.vercel.app/)

🎥 **Project Explanation Video**
[https://drive.google.com/file/d/1cokth5A0iMxUGMZFmEWjaTdZDY_vAKUH/view?usp=sharing](https://drive.google.com/file/d/1cokth5A0iMxUGMZFmEWjaTdZDY_vAKUH/view?usp=sharing)

---

## 📌 Overview

Instagram Stories Clone allows users to:

• View a horizontally scrollable list of stories
• Open stories in fullscreen immersive view
• Automatically play stories every 5 seconds
• Manually navigate stories by tapping left/right side
• Close the story viewer at any time
• Experience a clean, mobile-first story interface

All stories are loaded from an external data source and no third-party story libraries are used.

---

## 🎯 Key Features

### 🔹 Story List (Home Screen)

• Horizontally scrollable story bar
• Circular Instagram-style story previews
• External story data file integration
• Mobile-optimized layout

### 🔹 Fullscreen Story Viewer

• Fullscreen immersive story experience
• Auto-play every 5 seconds
• Left-tap → Previous story
• Right-tap → Next story
• Close button to exit viewer anytime
• Smooth fade transition animations

### 🔹 Loading & Performance

• Proper loading state handling
• Optimized mobile UI rendering
• Lightweight and fast build using Vite

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* Bootstrap 5


---

## 📂 Folder Structure

```
instagram-stories-clone/
│
├── public/
├── src/
│   ├── components/
│   │   ├── StoryBar.jsx
│   │   ├── StoryViewer.jsx
│   │   └── Loader.jsx
│   │
│   ├── data/
│   │   └── stories.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
└── package.json
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repo

```
git clone https://github.com/diveshnikam/instagram-stories-clone.git
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start the development server

```
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:5173
```

---

## 🚀 Future Enhancements

• Add progress bars for stories
• Swipe gesture support
• Add video stories
• Dark / light theme toggle
• Upload story feature

---



