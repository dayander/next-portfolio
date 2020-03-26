import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import server from './graphQL';
import cors from 'cors';


require('dotenv').config();

const  APIServer = express();

const API_PORT = process.env.API_PORT ?? 3010;
const { mongoURI: dbURI } = process.env;

mongoose.connect(
  dbURI ?? '',
  { useNewUrlParser: true })
  .then(() => {
  // eslint-disable-next-line no-console
  console.log('> ⚾️ Connected to Database');
})
  .catch((error: Error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

export const db = mongoose.connection;
//APIServer.use(cors);

server.applyMiddleware({ app:APIServer });

APIServer.get('/', (req: Request, res: Response) => res.send('api server working'));
// eslint-disable-next-line no-console
APIServer.listen(API_PORT,  () => console.log(`> 🍄 API Sever listening on port ${API_PORT}${server.graphqlPath}!`));



// app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
//   res.send('Hello World');
// });
// const PORT = process.env.PORT ?? 3010;
// app.listen(PORT, () => {
//   console.log(`Server is running in http://localhost:${PORT}`);
// });

// const nodemailer = require('nodemailer')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
// const emailConfig = require('./config.js')
// const Contact = require('./models/contact.js')
// const Projects = require('./models/projects.js')
// const Post = require('./models/post.js')
//
// let  app = express()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// const dbURI = 'mongodb://dayander:Burton12!@cluster0-shard-00-00-ujeul.mongodb.net:27017,cluster0-shard-00-01-ujeul.mongodb.net:27017,cluster0-shard-00-02-ujeul.mongodb.net:27017/portfolio?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
// mongoose.connect(dbURI, { useNewUrlParser: true });
//
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, '# MongoDB connection error:'));
//
// app.get('/images', (req,res)=>{
//   const imgFoler = __dirname + '/public/images';
//   const fs = require('fs');
//
//   fs.readdir(imgFoler, (err, files)=>{
//     if(err){
//       return console.log(err);
//     }
//
//     const filesArr = [];
//     files.forEach((file)=>{
//       filesArr.push({name: file});
//     })
//
//     res.json(filesArr)
//   })
// })
//
// app.get('/projects', function(req, res){
//   Projects.find(function(err, projects){
//     if(err){
//       throw err;
//     }
//     res.json(projects)
//   })
// });
//
// app.post('/project', function (req, res) {
//   const project = req.body
//
//   Projects.create(project, function (err, project) {
//     if(err){
//       throw err
//     }
//     res.json(project)
//   })
// })
//
// app.get('/projects/:projectName', function(req, res){
//   const name = req.params.projectName;
//
//   Projects.findOne(({projectName: name}),function(err, projects){
//     if(err){
//       throw err;
//     }
//
//     res.json(projects)
//   })
// });
//
// app.post('/contact', function(req, res){
//   let contact = req.body;
//   contact.date = new Date()
//
//   Contact.create(contact, function(err, contact){
//     if(err){
//       throw err;
//     }
//
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: emailConfig.emailConfig.email,
//         pass: emailConfig.emailConfig.pass,
//       }
//     });
//
//     const mailOptions = {
//       from: contact.email,
//       to: 'dayander@msu.edu',
//       subject: 'From Portfolio',
//       text: contact.email + ' ' + contact.message
//     };
//
//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log('email', error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });
//
//     res.json(contact);
//   })
// });
//
// app.get('/posts', function(req, res){
//   Post.find(function(err, posts){
//     if(err){
//       throw err;
//     }
//     res.json(posts)
//   })
// });
//
//
// app.get('/posts/:title', function(req, res){
//   const name = req.params.title;
//   name = '/'+ name;
//   Post.findOne(({'slug': name}),function(err, post){
//     if(err){
//       throw err;
//     }
//     res.json(post)
//   })
// });
//
// app.post('/post', function(req, res){
//   const post = req.body;
//   Post.create(post, function(err, post){
//     if(err){
//       throw err;
//     }
//     res.json(post);
//   })
// });
//
// app.get('/', (req, res) => res.send("api server working"));
//
// app.listen(3001,  () => console.log("API Sever listening on port 3001!"));