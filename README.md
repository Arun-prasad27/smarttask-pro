# SmartTask Pro

SmartTask Pro is a modern task management web application built with React that allows users to create, manage, and track tasks efficiently using a Kanban-style workflow.

The project demonstrates key frontend development concepts such as authentication, protected routing, CRUD operations, API integration, and responsive UI design. It uses a mock REST API powered by JSON Server and is deployed using modern cloud platforms.

This project was built as part of a frontend developer portfolio to showcase practical skills in building real-world React applications.

---

##  Live Demo

Frontend:  
https://smarttask-pro.vercel.app/

Backend API:  
https://smarttask-pro.onrender.com

Test Credentials:

Email: admin@gmail.com  
Password: 123456

---

## Tech Stack

Frontend:

- React
- React Router
- Tailwind CSS
- Axios

Backend (Mock API):

- JSON Server

Deployment:

- Vercel (Frontend)
- Render (Backend)

Tools:

- Vite
- Git
- GitHub

---

## Features

- User Login Authentication
- Protected Routes
- Task Management (Create, Edit, Delete)
- Task Status Management
- Kanban Board (Pending / In Progress / Completed)
- Task Filtering
- Responsive UI using Tailwind CSS
- API communication using Axios
- Fake REST API using JSON Server

---

<markdown>

## Project Screens

### Login Page

![Login Page](screenshots/loginpage.png)

User authentication before accessing the dashboard.

### Dashboard

![Dashboard Page](screenshots/Dashboardpage.png)

Kanban-style board showing task status.

### Task Page

![Task Page](screenshots/Taskpage.png)

Manage tasks with CRUD operations and filtering.

## </markdown>

## Installation

Clone the repository

git clone https://github.com/Arun-prasad27/smarttask-pro.git

- Go to Project folder: cd smarttask-pro
- Install dependencies: npm install
- start frontend server: npm run dev
- start backend server: cd backend -> npm install -> node server.js
- Open in browser: http://localhost:5173

<markdown>

Project Structure

```
smarttask-pro
│
├── backend
│ ├── db.json
│ ├── server.js
│ └── package.json
│
src
├── components
│ ├── KanbanBoard.jsx
│ ├── KanbanColumn.jsx
│ ├── Navbar.jsx
│ ├── ProtectedRoute.jsx
│ ├── TaskForm.jsx
│ └── TaskList.jsx
│
├── pages
│ ├── Login.jsx
│ ├── Dashboard.jsx
│ ├── Taskpage.jsx
│ └── Notfound.jsx
│
├── services
│ └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
│
├── screenshots
│ ├── loginpage.png
│ ├── dashboard.png
│ └── taskpage.png
│
└── README.md
```

</markdown>

## Author

**Arun Prasad**

GitHub
https://github.com/Arun-prasad27

Portfolio
https://arun-prasad27.github.io/My-Portfolio/
