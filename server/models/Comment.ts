import {model, Schema} from 'mongoose';

const contactSchema = new Schema({
  name: String,
  email: String,
  message: String,
  date: Date,
});

export default model('Contact', contactSchema);

