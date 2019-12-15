var express = require('express');
var request = require('request')

var app = express();
// Used to render express js format views
app.set('view engine','ejs');
// Used the public dir for static css stylesheet and js
app.use(express.static('public'));

//routes
app.get('/',(req,res)=>{
    res.render('search');
})

app.get('/results',(req,res)=>{
    var query = req.query.search;
    request(`http://omdbapi.com/?s=${query}&apikey=thewdb`,(error,response,body)=>{
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render('results', {data:data});
        }
    })
})
app.listen(3000,function(){
    console.log('Server connected on port 3000!');
})