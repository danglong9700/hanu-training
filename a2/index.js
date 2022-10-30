const express = require("express");
const mongoose = require('mongoose')
const questionRouter = require('./routes/QuestionRoute')
const attemptRouter = require('./routes/AttemptRoute')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/questions', questionRouter)
app.use('/api/attempts', attemptRouter)

const PORT = 4000;



const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://steaky37:suano2002@mern-learnit.k8iznpr.mongodb.net/wpr-quiz?retryWrites=true&w=majority",
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};


connectDB();


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
