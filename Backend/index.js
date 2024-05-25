const express = require("express");
const expressAsyncHandler = require("express-async-handler")
const dotenv = require("dotenv").config();
const cors = require('cors');

const app = express();

const port = 5000;


app.use(cors({
    origin: 'https://movie-explorer-ruddy.vercel.app'
  }))


app.get("/api/data",expressAsyncHandler( async (req,res) => {
    const searchTerm = req.query.search;
    if(!searchTerm){
        return res.status(400).json({ Response: 'False', Error: 'No search term provided' })
    }
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.API_KEY}`)
    const data =await response.json();
    res.status(200).json(data);
}))

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
})