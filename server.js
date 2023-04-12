import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import questionsAndAnswersRouter from "./routes/questionsAndAnswers.js";

const { MONGO_URL, PORT = 3000 } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/questions", questionsAndAnswersRouter);


const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log("App is listening on 3000");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
