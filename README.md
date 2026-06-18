# LinguaFlow Translator

A React-based language translation web application that translates text into multiple languages using RapidAPI. This project was developed as part of the QSkill Frontend Internship Assignment.

---

## Assignment Requirements Covered

### Task 1 Requirements

Create a text translator application using:

* React
* Tailwind CSS
* RapidAPI

The application should take input text in English and translate it into the user's preferred language.

### Implementation

This project fulfills the assignment requirements through:

* Text input area for entering content
* Language selection dropdown
* Translation using RapidAPI
* Copy translated text functionality
* Clear input/output functionality
* Responsive and visually appealing user interface

---

## Features

* Translate text into multiple languages
* Language selection dropdown
* Character counter
* Copy translated text to clipboard
* Clear input and output
* Responsive design
* Modern glassmorphism-inspired UI
* Error handling for failed translations

---

## Technologies Used

* React
* Vite
* Tailwind CSS
* Axios
* RapidAPI
* JavaScript

---

## API Integration

### RapidAPI

This project uses a translation API from RapidAPI to perform language translations.

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_RAPID_API_KEY=YOUR_API_KEY
VITE_RAPID_API_HOST=google-translate113.p.rapidapi.com
```

---

## Project Structure

```text
src
│
├── components
│   ├── Header.jsx
│   ├── TranslatorCard.jsx
│   ├── LanguageSelect.jsx
│   ├── ResultCard.jsx
│   └── Footer.jsx
│
├── services
│   └── translatorApi.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone <repository-link>
```

Navigate to the project folder:

```bash
cd linguaflow-translator
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_RAPID_API_KEY=YOUR_API_KEY
VITE_RAPID_API_HOST=google-translate113.p.rapidapi.com
```

Start the development server:

```bash
npm run dev
```

---

## Learning Outcomes

Through this project, the following concepts were implemented and practiced:

* React Functional Components
* Component-Based Architecture
* API Integration
* Environment Variables
* State Management using useState
* Axios for HTTP Requests
* Event Handling
* Conditional Rendering
* Tailwind CSS Styling
* Responsive UI Development

---

## Author

Name: Toshika Chettier

Submitted for: QSkill Frontend Internship Assignment
