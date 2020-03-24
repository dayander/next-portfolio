import {model, Schema} from 'mongoose';

const postSchema = new Schema({
  name:String,
  title:String,
  content:String,
  slug: String,
  date: { type: Date, default: Date.now },
  type: String,
});

export default model('Post', postSchema);