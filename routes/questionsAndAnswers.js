import express from "express";
import QuestionsAndAnswersModel from "../db/QuestionsAndAnswer.model.js";

const questionsAndAnswersRouter = express.Router();

questionsAndAnswersRouter.get("/", async (req, res) => {
  try {
    const questionsAndAnswers = await QuestionsAndAnswersModel.find();
    return res.json(questionsAndAnswers);
  } catch (error) {
    console.error(error);
  }
});

questionsAndAnswersRouter.get("/:id", async (req, res) => {
  try {
    const questionsAndAnswer = await QuestionsAndAnswersModel.find({id: req.params.id});
    return res.json(questionsAndAnswer);
  } catch (error) {
    console.error(error);
  }
});

/*
questionsAndAnswersRouter.post("/", async (req, res, next) => {
  const questionsAndAnswer = req.body;

  try {
    const saved = await QuestionsAndAnswersModel.create(questionsAndAnswer);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});
*/

questionsAndAnswersRouter.patch("/:id", async (req, res, next) => {
  try {
    const questionsAndAnswer = await QuestionsAndAnswersModel.findOneAndUpdate(
      { id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    return res.json(questionsAndAnswer);
  } catch (err) {
    return next(err);
  }
});
/*
questionsAndAnswersRouter.delete("/:id", async (req, res, next) => {
  try {
    const questionsAndAnswer = await QuestionsAndAnswersModel.findById(req.params.id);
    const deleted = await questionsAndAnswer.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});
*/
export default questionsAndAnswersRouter;
