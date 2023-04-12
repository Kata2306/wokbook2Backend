// https://mongoosejs.com/
import mongoose from "mongoose";

const { Schema } = mongoose;

const QuestionsAndAnswerSchema = new Schema({
  id: Number,
  question: String,
  category: String,
  answer: String,
  videoURL: Array
  //_id: mongoose.Schema.Types.ObjectId
});

const QuestionsAndAnswerModel = mongoose.model("QuestionsAndAnswer", QuestionsAndAnswerSchema);
export default QuestionsAndAnswerModel;