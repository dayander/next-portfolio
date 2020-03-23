import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, './*'));

export default mergeResolvers(resolversArray);



//from tutorial

// import { mergeResolvers } from "merge-graphql-schemas";
//
// import User from "./User/";
// import Post from "./Post/";
// import Comment from "./Comment/";
//
// const resolvers = [User, Post, Comment];
//
// export default mergeResolvers(resolvers);

// merge.js


// import User from "./User";
//
// const user = async userId => {
//   try {
//     const user = await User.findById(userId);
//     return {
//       ...user._doc,
//       _id: user.id,
//       createdPosts: postMessage.bind(this, user._doc.createdPosts)
//     };
//   } catch (error) {
//     throw error;
//   }
// }
//
// const transformPost = event => {
//   return {
//     ...event._doc,
//     _id: event.id,
//     creator: user.bind(this, event.creator)
//   }
// }
//
// exports.transformPost = transformPost;