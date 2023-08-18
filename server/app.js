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
  profileImageLink: String,
  //icons image link 
  icon1: String,
  icon2: String,
  icon3: String,
  icon4: String,
  //profile links
  icon1Link: String,
  icon2Link: String,
  icon3Link: String,
  icon4Link: String,
  //about me
  aboutText: String,
  aboutCvLink: String,
  aboutImageLink: String,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

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
