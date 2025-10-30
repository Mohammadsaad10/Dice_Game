# 🎲 Dicee Game

A fun, interactive browser-based **Dice Game** that randomly rolls two dice to determine a winner between two players. Built using **HTML**, **CSS**, and **JavaScript**, this project is perfect for beginners learning DOM manipulation and randomization in web development.

---

## 🧭 Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Demo](#demo)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Dependencies](#dependencies)
8. [How It Works](#how-it-works)
9. [Customization](#customization)
10. [Contributors](#contributors)
11. [License](#license)

---

## 📖 Introduction

The **Dicee Game** simulates a two-player dice roll. Each player gets a random dice face upon refreshing the page, and the script declares a winner based on whose dice value is higher — or a draw if both are equal.

This project demonstrates:

- Random number generation using JavaScript
- DOM manipulation
- Basic styling and layout design
- Beginner-friendly JavaScript logic

---

## ✨ Features

- 🎲 Random dice roll each refresh
- 🏆 Displays the winner dynamically
- 💡 Clean, simple, and responsive UI
- 🖼️ Styled dice with visual effects

---

## 🧪 Demo

[Live preview](https://mohammadsaad10.github.io/Dice_Game/)

---

## ⚙️ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Mohammadsaad10/Dice_Game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Dice_Game
   ```

3. Open the project:
   ```bash
   open index.html
   ```
   _(or simply double-click `index.html` in your file explorer)_

---

## 🚀 Usage

- Open `index.html` in your browser.
- Each refresh (`F5` or `Ctrl + R`) rolls two dice.
- The header displays:
  - “🚩 Player 1 wins” — if Player 1’s roll is higher
  - “Player 2 wins 🚩” — if Player 2’s roll is higher
  - “Draw!” — if both rolls are equal

---

## 📁 Project Structure

```
Dice-Game/
│
├── index.html        # Main HTML structure
├── styles.css        # Styling and layout
├── index.js          # JavaScript logic for dice roll
├── images/           # Folder containing dice images (dice1.png–dice6.png)
├── .gitignore        # Git ignore configuration
└── README.md         # Project documentation (this file)
```

---

## 📦 Dependencies

No external dependencies are required, except for **Google Fonts** used in the HTML:

- _Lobster_
- _Indie Flower_

All other code runs natively in any browser.

---

## 🔍 How It Works

The dice values are generated using:

```js
Math.floor(Math.random() * 6) + 1;
```

The images are dynamically updated in the DOM:

```js
document.querySelector("img.img1").setAttribute("src", randomDiceSrc);
```

Finally, the script compares both dice rolls and updates the `<h1>` element to declare the winner.

---

## 🧩 Customization

You can:

- Replace dice images in the `/images` folder for different themes.
- Edit colors in `styles.css` for a custom look.
- Modify text or layout in `index.html` as desired.

---

## 👤 Author

Mohammadsaad

---

## 🙏 Acknowledgments

Based on The App Brewery’s Web Development Bootcamp.

---

## 🪪 License

This project is open-source and available under the **MIT License**.  
You’re free to use, modify, and distribute it for educational or personal projects.
