# FitFlow---Personalized-Workout-Planner-projectno.3
FitFlow is a full-stack workout app that lets users create, track, and share personalized fitness plans. It includes an exercise database with demo GIFs, progress photos, charts, and social features. Built with React, Node.js, and MongoDB, it helps users stay motivated and achieve their fitness goals with structure and community support.
FitFlow — Personalized Workout Planner

FitFlow helps users create, track, and share personalized fitness plans. Built with React (frontend), Node.js + Express (backend), and MongoDB. Includes exercise database with demo GIFs, progress photos, BMI/TDEE-based suggestions, meal templates, and PDF report export.

Table of Contents

Features

Tech Stack

Repo Structure

Prerequisites

Environment Variables

Setup (Local)

Seed Demo Data

Run the App

How to Use

API Summary

Presentation & Submission Checklist

Troubleshooting

Security Notes

Contributing

License

Contact

1. Features

User authentication (email/password, bcrypt + JWT)

Profile with weight, height, age, gender, activity level, goal

BMI calculation and calorie/protein targets

Meal and exercise suggestions

Exercise database with demo GIFs

Progress photos and progress charts

PDF report generation

Dev-only seed endpoint for demo users

2. Tech Stack

Frontend: React

Backend: Node.js + Express

Database: MongoDB

Auth: JWT + bcrypt

Charts: Chart.js or Recharts

PDF: jsPDF (frontend) or pdfkit (backend)

3. Repo Structure
fitflow/
├─ backend/
│  ├─ models/
│  ├─ routes/
│  ├─ seed/
│  ├─ server.js
│  └─ .env.example
├─ frontend/
│  ├─ src/components/
│  ├─ src/pages/
│  └─ src/assets/
├─ README.md
└─ presentation/

4. Prerequisites

Node.js v16+

npm or yarn

MongoDB (local or Atlas)

Git

5. Environment Variables

backend/.env

PORT=5000
MONGODB_URI=mongodb://localhost:27017/fitflow
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000

6. Setup (Local)

Clone the repo:

git clone https://github.com/yourusername/fitflow.git
cd fitflow


Backend:

cd backend
npm install
cp .env.example .env
npm run dev


Frontend:

cd frontend
npm install
npm start

7. Seed Demo Data

Option A (HTTP):

curl http://localhost:5000/api/seed


Option B (Script):

node backend/seed/seed.js


Demo accounts:

user1@example.com / Password123!

user2@example.com / Password123!

user3@example.com / Password123!

user4@example.com / Password123!

user5@example.com / Password123!

8. Run the App

Backend (dev):

cd backend
npm run dev


Frontend (dev):

cd frontend
npm start


Frontend (build):

cd frontend
npm run build

9. How to Use

Open http://localhost:3000

Login with a demo account or register

Complete profile (weight, height, age, goal)

Generate plan to see meals + exercises

Track workouts, upload progress photos

Export PDF report

10. API Summary

GET /api/seed — Seed demo data

POST /api/auth/register — Register

POST /api/auth/login — Login

GET /api/user/me — Get profile

POST /api/plan/suggest — Meal/exercise suggestions

GET /api/exercises — List exercises

GET /api/meals — List meals

POST /api/report/generate — Generate report

11. Presentation & Submission Checklist

README.md present

Seed script included

Demo accounts listed

Screenshots added to presentation

Presentation exported to PDF/PPTX

GitHub repo public and accessible

12. Troubleshooting

DB error: check MONGODB_URI

Port in use: change PORT

CORS error: configure backend CORS

Seed fails: ensure DB is running

13. Security Notes

/api/seed is for dev only

Nutrition suggestions are demo-only, not medical advice

Use HTTPS + secure JWT secret in production

14. Contributing

Fork the repo

Create feature branch

Commit changes

Push branch and open PR

15. License

MIT License

16. Contact

For issues, open a GitHub Issue or PR.
