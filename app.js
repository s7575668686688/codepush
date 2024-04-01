var express = require('express');
var app = express();
require('dotenv').config()



const mongoose=require('mongoose')


app.use(express.json());

const connectDb=async()=>{
   try
   {
       const connect=await mongoose.connect(process.env.Connection_String);
       console.log("Database Connected");  
   }
   catch(err)
   {
       console.log(err);
   
   }
   }
   

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    max: 32,
    required: true,
    min: 6,
  },

  email: {
    type: String,
    required: true,
    max: 32,
  },
  password: {
    type: String,
    max: 1022,
    min: 8,
    required: true,
  },

});

const User = mongoose.model("register", userSchema);

app.get('/',async function (req, res) {
connectDb();
 const data=await User.find({})
 res.send(data);
})

var server = app.listen(5000, function () {
  console.log("Express App running at http://127.0.0.1:5000/");
})


