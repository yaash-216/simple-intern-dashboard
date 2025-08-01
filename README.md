# Simple Intern Dashboard

A full-stack web application for managing intern dashboards, built with React (frontend) and Express (backend).

## Features

- User login and registration
- Dashboard with referral code, donations, and rewards
- Leaderboard view

## Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS, DaisyUI
- **Backend:** Express, Node.js
## Project Structure

```
frontend/
  ├── package.json
  ├── index.html
  ├── src/
  │   ├── App.tsx
  │   ├── apis/
  │   ├── components/
  │   ├── layout/
  │   ├── pages/
  │   ├── types/
  │   └── utils/

backend/
  ├── package.json
  └── src/
      ├── app.js
      ├── server.js
      ├── controller/
      └── routes/
```

## Getting Started

### Clone the Repository

    ```sh
    git clone https://github.com/yaash-216/simple-intern-dashboard.git
    cd simple-intern-dashboard
    ```

### Backend

1. Install dependencies:
    ```sh
    cd backend
    pnpm install
    ```
2. Start the server:
    ```sh
    pnpm run dev
    ```

### Frontend

1. Install dependencies:
    ```sh
    cd frontend
    pnpm install
    ```
2. Start the development server:
    ```sh
    pnpm run dev
    ```
