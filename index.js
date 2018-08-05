const mongoose = require('mongoose');
const devices = require('./routes/devices');
const home = require('./routes/home');
const uploads = require('./routes/uploads');
const wemo = require('./routes/wemo');
const manage = require('./routes/manage');
const port = process.env.PORT || 3000;
const connect = require('connect');
const path = require('path');
const fs = require('fs');
const schedule = require('node-schedule');

//This will run the scedular every X minutes
const hitMinute = 1;

//var PythonShell = require('python-shell');

var serveStatic = require('serve-static')
const mustacheExpress = require('mustache-express');
const mustache = require('mustache');

// const customers = require('./routes/customers');
// const movies = require('./routes/movies');
const express = require('express');
const app = express();
// app.use(express.static(__dirname + '/public'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');







// //PYTHON PORTION TEST

// //var myPythonScriptPath = 'wemo_checkOnline_single.py';

// var PythonShell = require('python-shell');
// var pyshell = new PythonShell('pyScripts/wemo_checkOnline_single.py');

// pyshell.send(JSON.stringify([1,2,3,4,5]));

// pyshell.on('message', function (message) {
//     // received a message sent from the Python script (a simple "print" statement)
//     console.log(message);
// });

// // end the input stream and allow the process to exit
// pyshell.end(function (err) {
//     if (err){
//         throw err;
//     };

//     console.log('finished');
// });



// //END PYTHON


//IF FOLDER uploads DOESNT EXIST THEN CREATE IT. THIS IS TO REDUCE SIZE WHILE ALLOWING GIT CONTROL
// var fs = require('fs');
var dir = './uploads';
if (!fs.existsSync(dir)) {

  fs.mkdirSync(dir);
}



var j = schedule.scheduleJob(`*/${hitMinute} * * * *`, function () {
  var unixTimeStamp = (new Date).getTime();
  var timestampInMilliSeconds = unixTimeStamp;
  var date = new Date(timestampInMilliSeconds);

  var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  var month = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
  var year = date.getFullYear();

  //var hours = ((date.getHours() % 12 || 12) < 10 ? '0' : '') + (date.getHours() % 12 || 12);
  var hours = date.getHours();
  var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  var meridiem = (date.getHours() >= 12) ? 'pm' : 'am';

  var formattedDate = day + '-' + month + '-' + year + ' at ' + hours + ':' + minutes + ' ' ;
  console.log(`THIS HITS EVERY ${hitMinute} MINUTES! - ` + formattedDate);

  //JQUERY ALL POWER AND SAVE TO DATABASE


});

//app.set('views', __dirname + '/views');

mongoose.connect('mongodb://localhost/wemo')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/devices', devices);
app.use('/uploads', uploads);
app.use('/wemo', wemo);
app.use('/', home);
app.use('/manage', manage);
app.use("/public", express.static(path.join(__dirname, 'public')));


// app.get('/', function (req, res) {
//   res.render('index');
// });

// app.use('/api/customers', customers);
// app.use('/api/movies', movies);


app.listen(port, () => console.log(`Listening on port ${port}...`));

