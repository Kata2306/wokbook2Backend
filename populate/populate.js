/*
Loading the .env file and creates environment variables from it
*/
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

// if not working try comments
// ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
import QuestionsAndAnswerModel from "../db/QuestionsAndAnswer.model.js";
import workbook from "./workbook.json" assert {type: "json"};


const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const populateQuestionsAndAnswers = async () => {
  await QuestionsAndAnswerModel.deleteMany({});

  await QuestionsAndAnswerModel.create(...workbook);
}


const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateQuestionsAndAnswers();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});