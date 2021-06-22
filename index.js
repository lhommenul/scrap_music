const express = require('express');
const app = express();
const cheerio = require('cheerio');
const axios = require('axios')
const fs =require('fs')

const search = "dsq" 
axios({
    url:`https://www.discogs.com/fr/Anthony-Pasquarosa-VDSQ-Solo-Acoustic-Volume-Seven/release/5621216`,
    method:"GET"
})
.then(data=>{
    // console.log(data);
    const $ = cheerio.load(data.data);
    fs.writeFile('html.html',data.data,()=>{

    })
    // console.log($('.default-image-as-icon').attr('href'));
    // console.log($('.thumbnail_link'));
    $('a').each(e=>{
        console.log($(this).attr('href'));
    })
    // res.send(data.data)
})
.catch(err=>{
    // res.send(err)
})
app.get('/',(req,res)=>{
})


app.listen(8080,()=>{console.log("app listening on 8080")})