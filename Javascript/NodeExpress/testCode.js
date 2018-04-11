
var express = require('express');

var dataFile = require('./data/data.json');
var app = express();



app.get('/speaker', function(req, res) {
 
    var info = "";

    dataFile.speakers.forEach(function(item){

        info += `
            <li>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
            </li>

        `;
        
    });  // end of foreach loop

    res.send(
        `
            <h1>Speakers</h1>
            ${info}
        `
    ); //end of res.send
    
});//end of app.get

app.get('/speaker/:speakerid', function(req, res) {
 
    var speaker = dataFile.speakers[req.params.speakerid];

    res.send(
        `
            
            <li>
            <h1>${speaker.title}</h1>
            <h2>${speaker.name}</h2>
            <p>${speaker.summary}</p>
            </li>
            
        `
    ); //end of res.send
    
});//end of app.get


app.listen(1830, function(){
    console.log('Example app listening on port ');
});

// app.get('/hello1', function(req, res){
//     var name = req.query.name || 'world';
//     res.send('Hello ' + name + '!');
// });



// app.get('/about', function(req, res) {
//     res.send('<h1>About Page</h1>');
// });

// app.get('/contact', function(req, res) {
//     res.send('<h1>Contact Page</h1>');
// });







