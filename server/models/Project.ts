import { model, Schema } from 'mongoose';

const projectSchema = new Schema({
  projectName: String,
  companyName: String,
  projectHeading: String,
  challengeHeading: String,
  challenge: String,
  approachHeading: String,
  approach: String,
  outcomeHeading: String,
  outcome: String,
  tags: Array,
  headingImg: { imgPath: String, altText: String },
  address: String,
  getter: String,
  bgImage: String,
  challenge01: { imgPath: String, altText: String },
  challenge02: { imgPath: String, altText: String },
  process01: { imgPath: String, altText: String },
  process02: { imgPath: String, altText: String },
  outcome01: { imgPath: String, altText: String },
  largeImage: String,
});

export default model('Project', projectSchema);
