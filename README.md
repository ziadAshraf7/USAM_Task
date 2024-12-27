# USAM Company Full Stack Application

This is a full-stack web application developed for **USAM Company**. It displays the company's programs and allows users to register for them through a simple and user-friendly interface. The app is built with **React** on the frontend, **Node.js** and **Express.js** on the backend, and **MySQL** with **Sequelize** for the database. The UI is styled using **Tailwind CSS**.

---

## Features

- Display a list of available programs offered by USAM Company.
- Each program has a detailed page with more information.
- Users can register for a program via an integrated registration form.
- A clean, responsive user interface designed with **Tailwind CSS**.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **ORM**: Sequelize

---

---

## Setting Up the Project

### Prerequisites

Before starting, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **MySQL** (with a running instance)
- **npm** (Node Package Manager)
- **Git** (to clone the repository)

---

### Backend Setup (Node.js + Express + MySQL)

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd usam-company-project/backend
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Set up the MySQL database:
   - Create a MySQL database (e.g., `usam`).
   - Configure your MySQL connection in the `database/dbConfig.js` file.


4. Start the backend server:

    ```bash
    npm run start
    ```

    The backend will now be running at `http://localhost:4000`.

---

### Frontend Setup (React + Tailwind CSS)

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend server:

    ```bash
    npm run start
    ```

    The frontend will be available at `http://localhost:3000`.

---

## API Endpoints

- **POST** `/api/programRegisteration/register`: Submit a registration form for a specific program.

---

## Usage

1. Ensure that both the frontend and backend servers are running simultaneously.
2. Access the frontend at `http://localhost:3000` to view and register for programs.
3. The backend API is accessible at `http://localhost:5000` for handling program data and registrations.




