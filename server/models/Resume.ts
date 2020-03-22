import {model, Schema} from 'mongoose';

const resumeSchema = new Schema({
  companyName: String,
  jobTitle: String,
  location: String,
  startDate: Date,
  endDate: Date,
  bullets: [String],
});

export default model('Resume', resumeSchema);