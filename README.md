## 🌍 React Smart Counter App (with Vitest Testing)

Live Demo

👉 (add your GitHub Pages link here after deploy)

## Preview

MISSS HERE

## Overview

- React Smart Counter App is a modern React application focused on state management, performance optimization, and component reusability.
- The project allows users to increment a counter and dynamically switch between themes, demonstrating how state updates trigger UI changes.
- It also introduces basic testing using Vitest, ensuring that core logic and behaviors work as expected.
- The application uses React hooks and memoization techniques to optimize rendering and improve performance.

## Features

- Counter system with dynamic state updates
- Theme toggle (light/dark mode)
- Performance optimization using useCallback
- Component memoization with React.memo
- Event-driven UI (button interactions)
- Clean and reusable component structure
- Real-time UI updates based on state changes
- Unit testing using Vitest
- Automatic test execution (watch mode)

## Technologies Used

- React: UI development and component structure
- JavaScript (ES6+): logic and interactivity
- HTML5: semantic structure
- CSS3: styling and layout
- Vite: fast development environment and build tool
- Vitest: unit testing framework
- React Hooks: useState, useCallback
- React.memo: performance optimization

## Project Structure

vite-project-smart-counter/

- src/
  - assets/
    - test/
      - App.test.jsx: basic test cases using Vitest
    - App.jsx: main application logic (state, handlers, UI)
    - App.css: styling
    - main.jsx: application entry point
- public/: static files
- vite.config.js: project and Vitest configuration
- package.json: scripts and dependencies

## How to Run the Project

- Clone the repository
  git clone https://github.com/your-username/vite-project-smart-counter.git
- Navigate to the project folder
  cd vite-project-smart-counter
- Install dependencies
  npm install
- Run the development server
  npm run dev
- Open in your browser
  http://localhost:5173

## How to Run Tests

- Run tests in watch mode
- npm run test
- Vitest will automatically:
  - Detect test files
  - Run tests on save
  - Show PASS/FAIL results in the terminal

  ## Testing Overview
  - Basic unit tests were implemented using Vitest.
  - The project includes initial test cases to validate expected behaviors.
  - Tests follow a structured pattern using: - describe to group tests - it to define scenarios - expect to validate results

- Example:

describe("basic test", () => {
it("should be true", () => {
expect(true).toBe(true);
});
});

- Tests run automatically in watch mode, helping identify errors quickly during development.

## Status

- In progress: core features implemented and initial testing setup completed.

## Problem Solving

- One challenge was understanding how to structure tests and interpret failure messages. This was solved by learning how Vitest reports errors and highlights incorrect expectations.
- Another challenge involved optimizing component rendering. Using useCallback and React.memo helped prevent unnecessary re-renders.
- Managing multiple states (counter and theme) required a clear understanding of how React updates and re-renders components.

## What I Learned

During this project I practiced:

- Managing state with React Hooks (useState)
- Optimizing performance with useCallback and React.memo
- Structuring reusable React components
- Handling user interactions and UI updates
- Setting up and using Vitest for unit testing
- Writing basic test cases using describe, it, and expect
- Debugging failing tests and understanding error outputs

## Future Improvements

- Add more advanced test cases (functions and UI interactions)
- Test React components using React Testing Library
- Improve UI/UX design
- Add animations for smoother interactions
- Persist theme preference (localStorage)
- Increase test coverage (edge cases and user behavior)

## Author

Rodrigo M. Zanetti

- GitHub: https://github.com/RodrigoMZanetti
- LinkedIn: https://www.linkedin.com/in/rodrigomzanetti
