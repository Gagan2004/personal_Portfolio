# GEMINI.md

## Project Overview

This is a personal portfolio website built with React and Vite. It is styled with Tailwind CSS and uses `react-router-dom` for navigation. The project is named "ben-10" and features a unique "Omnitrix" dial interface on the landing page.

The portfolio includes the following pages:
*   **Home:** A landing page with an interactive Omnitrix dial.
*   **About:** A page describing the author.
*   **Skills:** A page showcasing the author's skills.
*   **Projects:** A page listing the author's projects.
*   **Contact:** A contact page.

## Building and Running

To get the project running locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

4.  **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Routing:** `react-router-dom` is used for all client-side routing.
*   **Components:** Components are written in JSX and are located in the `src/components` directory.
*   **Pages:** Page components are located in the `src/pages` directory.
*   **Linting:** The project uses ESLint for code quality. Run `npm run lint` to check for issues.
