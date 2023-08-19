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

app.put('/portfolio/:id', async (req, res) => {
  const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (portfolio) {
    res.json({ message: 'Portfolio updated successfully' });
  } else {
    res.status(404).json({ message: 'Portfolio not found' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
