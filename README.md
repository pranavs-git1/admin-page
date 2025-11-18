This is a full-stack web application built as part of the FLIPR Placement Task. It consists of a public-facing landing page ("Apex Solutions") and a private admin panel for content management, all powered by a Node.js backend and MongoDB database.

Features

1. Landing Page (index.html)

A fully responsive, professional marketing website with the following features:

Our Projects: Dynamically displays all projects by fetching them from the backend.

Happy Clients: Dynamically displays client testimonials by fetching them from the backend.

Contact Form: A "Get a Free Consultation" form that submits user data (Name, Email, Mobile, City) to the backend.

Newsletter Subscription: A footer form that submits a user's email to the backend.

2. Admin Panel (admin.html)

A single-page application (SPA) for site administrators to manage all content:

Project Management: A "Projects" tab with a form to add new projects (Image, Name, Description) and a table to view all existing projects.

Client Management: A "Clients" tab with a form to add new clients (Image, Name, Description, Designation) and a table to view all existing clients.

Contact Form Details: A "Contact Forms" tab that displays all submissions from the landing page's contact form.

Subscribed Emails: A "Subscribers" tab that displays all emails captured from the newsletter subscription form.

Tech Stack

Frontend: HTML5, Tailwind CSS, Vanilla JavaScript (for SPA navigation and API calls)

Backend: Node.js, Express.js

Database: MongoDB with Mongoose (ORM)

Deployment

This project is designed for a modern, decoupled deployment:

Frontend (Static): Deployed on Netlify, connected directly to the GitHub repository for continuous deployment.

Backend (API): Deployed as a Web Service on Render, connected to the same GitHub repository.

Database: Hosted on MongoDB Atlas (Free M0 Cluster).

Local Setup & Installation

To run this project on your local machine:

Clone the Repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name


Frontend:

No setup needed. Simply open index.html or admin.html in your browser (using a live server extension for best results).

Backend:

Install Dependencies:

npm install


Create Environment File: Create a file named .env in the root of the project and add your MongoDB Atlas connection string:

MONGO_URI=mongodb+srv://<username>:<password>@cluster...


Run the Server:

npm start


The backend server will start (by default on http://localhost:5000).

Connect Frontend to Local Backend:

In index.html and admin.html, update all fetch() URLs from the deployed URL (e.g., https://flipr-api.onrender.com/api/...) to your local server's URL (http://localhost:5000/api/...) for local testing.

API Endpoints

The following API endpoints are defined in server.js:

Method

Endpoint

Description

GET

/api/projects

Get all projects for the landing page.

POST

/api/projects

Add a new project from the admin panel.

POST

/api/contact

Submit the contact form.

GET

/api/clients

(TODO) Get all clients for the landing page.

POST

/api/clients

(TODO) Add a new client from the admin panel.

GET

/api/contacts

(TODO) Get all contact form submissions.

GET

/api/subscribers

(TODO) Get all newsletter subscribers.

POST

/api/subscribe

(TODO) Submit the newsletter form.

File Structure

.
├── admin.html        # Admin Panel SPA
├── index.html        # Main Landing Page
├── package.json      # Backend dependencies and scripts
├── server.js         # Express server and API logic
└── README.md         # This file
