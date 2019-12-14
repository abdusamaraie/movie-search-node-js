var express = require('express');
var request = require('request')

var app = express();
// Used to render express js format views
app.set('view engine','ejs');
// Used the public dir for static css stylesheet and js
app.use(express.static('public'));

//routes
app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/result',(req,res)=>{
    request('http://omdbapi.com/?s=starwars&apikey=thewdb',(error,response,body)=>{
        if(!error && response.statusCode == 200){
            var parsed = JSON.parse(body);
            res.send(parsed);
        }
    })
})
app.listen(3000,function(){
    console.log('Server connected on port 3000!');
})