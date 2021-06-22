const express = require('express');
const app = express();
const cheerio = require('cheerio');
const axios = require('axios')
const fs =require('fs')

const search = "dsq" 
axios({
    url:`https://www.discogs.com/search/?q=tyler&type=all`,
    method:"GET"
})
.then(data=>{
    const $ = cheerio.load(data.data);
    $('.thumbnail_link').each(function() {
        console.log($(this).attr('href'));
    })
})
.catch(err=>{
    // res.send(err)
})
app.get('/',(req,res)=>{
})


app.listen(8080,()=>{console.log("app listening on 8080")})