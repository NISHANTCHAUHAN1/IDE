import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdBy: String,
  date : {
    type: Date,
    default: Date.now
  },
  htmlCode: {
    type: String,
    default:`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    <h1> Hello NisH </h1>
    </body>
    </html>`
  },
  cssCode: {
    type: String,
    default:`body{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }`
  },
  jsCode: {
    type: String,
    default: 'console.log("Hello NisH")'
  },
},{ timestamps: true});

export const Project = mongoose.model("Project", projectSchema);