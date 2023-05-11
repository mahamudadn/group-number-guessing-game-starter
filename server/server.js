const express = require('express');
const bodyParser = require('body-parser')
const randomNumber = require('./modules/randomNumber')
const updateGuess = require('./modules/updateGuess');
const guessArray = require('./modules/guess');
const app = express();
const PORT = 5000;
let currentGuesses = {};
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/guess', function(req, res) {
  // console.log('Request for /quotes was made');

  // send back list of quotes to client
  res.send(guessArray);
  
  // If I want to send an error: 
  res.sendStatus(500);
});

// app.get('/randomNumber', function(req, res) {
//   // console.log('Request for /quotes was made');

//   // send back list of quotes to client
//   res.send(randomNumber);
  
//   // If I want to send an error: 
//   res.sendStatus(500);
// });

app.post('/guess', function(req, res) {
  // req.body is the data that the client has sent in the request
  // req.body is a thing we get from bodyParser
  console.log('POST some data!', req.body);

  // check whether the guess was correct and 
  // update the array correspondingly
  console.log(req.body);
  
  guessArray.push(updateGuess(req.body, randomNumber));


  // The server always needs to respond!
  // Status 201 = 'Created'
  res.sendStatus(201);

})

// app.post('/randomNumber', function(req, res) {
//   // req.body is the data that the client has sent in the request
//   // req.body is a thing we get from bodyParser
//   console.log('POST some data!', req.body);

//   // Add my new quote to the quoteList
//   randomNumber.push(req.body);


//   // The server always needs to respond!
//   // Status 201 = 'Created'
//   res.sendStatus(201);

// })


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
