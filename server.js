/*
This is a STARTER file.
You will need to build out all the required API endpoints.
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares ---
app.use(cors()); // Allows your frontend to talk to this backend
app.use(express.json()); // Allows the server to accept JSON data

// --- Database Connection ---
const MONGO_URI = process.env.MONGO_URI || "YOUR_MONGODB_CONNECTION_STRING_GOES_HERE";

mongoose.connect(MONGO_URI)
    .then(() => console.log("Successfully connected to MongoDB Atlas!"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

// --- Define Schemas (Data Models) ---
// Example for a Project
const projectSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
});
const Project = mongoose.model('Project', projectSchema);

// Example for a Contact Submission
const contactSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    mobile: String,
    city: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// --- API Endpoints ---

// Example: Get all projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Example: Add a new project (from admin panel)
app.post('/api/projects', async (req, res) => {
    const project = new Project({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
    });
    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Example: Handle the contact form
app.post('/api/contact', async (req, res) => {
    const contact = new Contact({
        fullName: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city,
    });
    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// --- TODO: Add other endpoints ---
// POST /api/subscribe
// GET /api/clients
// POST /api/clients
// GET /api/contacts
// GET /api/subscribers

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
