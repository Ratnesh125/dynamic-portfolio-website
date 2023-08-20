const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
app.use(cors())
app.use(express.json());

const SECRET = process.env.SECRET;
const DB_URL = process.env.DB_URL;

const portfolioSchema = new mongoose.Schema({
  greet: String,
  name: String,
  role: String,
  github: String,
  githubLogo: String,
  linkedin: String,
  linkedinLogo: String,
  leetcode: String,
  leetcodeLogo: String,
  gmail: String,
  gmailLogo: String,
  imageLink: String,
});

const aboutMeSchema = new mongoose.Schema({
  heading: String,
  text: String,
  buttonText: String,
  imageLink: String,
  cvLink: String,
});

const skillSchema = new mongoose.Schema({
  text: String,
  list: [{ name: String }],
});

const projectSchema = new mongoose.Schema({
  imageLink: String,
  text: String,
  liveLink: String,
  sourceCode: String,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
const AboutMe = mongoose.model('AboutMe', aboutMeSchema);
const Skill = mongoose.model('Skill', skillSchema);
const Project = mongoose.model('Project', projectSchema);

mongoose.connect(`${DB_URL}/portfolio`, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "portfolio" });

app.post('/portfolio/add', async (req, res) => {
  // await updateModel(req, res, Portfolio);
  const { greet, name, role, github, githubLogo, linkedin, linkedinLogo, leetcode, leetcodeLogo, gmail, gmailLogo, imageLink } = req.body;
  const obj = { greet, name, role, github, githubLogo, linkedin, linkedinLogo, leetcode, leetcodeLogo, gmail, gmailLogo, imageLink };
  const newPortfolio = new Portfolio(obj);
  newPortfolio.save();
  res.json({ message: 'portfolio added successfully' });
});

async function fetchModelData(req, res, Model) {
  try {
    const data = await Model.findById(req.params.id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: `${Model.modelName} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching the model data' });
  }
}

// Routes for fetching data from each model
app.get('/portfolio/:id', async (req, res) => {
  await fetchModelData(req, res, Portfolio);
});

app.get('/aboutme/:id', async (req, res) => {
  await fetchModelData(req, res, AboutMe);
});

app.get('/skill/:id', async (req, res) => {
  await fetchModelData(req, res, Skill);
});

app.get('/project', async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

async function updateModel(req, res, Model) {
  try {
    const updatedData = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedData) {
      res.json({ message: `${Model.modelName} updated successfully` });
    } else {
      res.status(404).json({ message: `${Model.modelName} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the model' });
  }
}

app.put('/portfolio/:id', async (req, res) => {
  await updateModel(req, res, Portfolio);
});

app.put('/aboutme/:id', async (req, res) => {
  await updateModel(req, res, AboutMe);
});

app.put('/skill/:id', async (req, res) => {
  await updateModel(req, res, Skill);
});

app.put('/project/:id', async (req, res) => {
  await updateModel(req, res, Project);
});

app.listen(3000, () => console.log('Server running on port 3000'));
