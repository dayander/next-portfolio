import { model, Schema } from 'mongoose';

const ResumeJobEntry = {
  companyName: String,
  jobTitle: String,
  location: String,
  startDate: Date,
  endDate: Date,
  bullets: [String],
  order: Number,
};

const EducationEntry = {
  school: String,
  degree: String,
};

const RelevantProjectEntry = {
  projectDescription: String,
  date: String,
};

const resumeSchema = new Schema({
  jobEntries: [ResumeJobEntry],
  education: EducationEntry,
  skills: [String],
  relevantProjects: [RelevantProjectEntry],
});

export default model('Resume', resumeSchema);
