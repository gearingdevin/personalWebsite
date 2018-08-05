const { Device, validate } = require('../models/upload');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const formidable = require('formidable');
var fs = require('fs');
var path = require('path');

router.get('/', async (req, res) => {
  // console.log(req.query.id);
  // if (req.query.id){
  //   //console.log(req.param.id);
  //   var deString  = (req.query.id).replace(/\"/g, "");
  //   deString = deString.replace(/\'/g, "");
  //   const devices = await Device.find({ ip: { $in: [ deString, "OR WHATEVER" ] } });
  //   res.send(devices);
    
  // }
  // else{
  //   const devices = await Device.find().sort('ip');
  //   res.send(devices);
  // }
  
});

router.post('/', async (req, res) => {
//THIS SAVES THE FILE TO /UPLOADS
 

var form = new formidable.IncomingForm();
console.log('test');
// specify that we want to allow the user to upload multiple files in a single request
form.multiples = true;

// store all uploads in the /uploads directory
const filePath = path.join(__dirname, '../uploads');
form.uploadDir = filePath;

// every time a file has been uploaded successfully,
// rename it to it's orignal name
form.on('file', function(field, file) {
  fs.rename(file.path, path.join(form.uploadDir, file.name));
  var csv = require("csvtojson");

// LOOK HERE - CONVERT CSV TO JSON **PLEASE ADD FEATURE TO SAVE TO DATABASE**
csv()
  .fromFile(path.join(form.uploadDir, file.name))
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj); 
   })
});

// log any errors that occur
form.on('error', function(err) {
  console.log('An error has occured: \n' + err);
});

// once all the files have been uploaded, send a response to the client
form.on('end', function() {
  res.end('success');
});



// parse the incoming request containing the form data
form.parse(req);


});

//

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const device = await Device.findByIdAndUpdate(req.params.id, { ip: req.body.ip }, {
    new: true
  });

  if (!genre) return res.status(404).send('The wemo with the given ID was not found.');

  res.send(device);
});

router.delete('/', async (req, res) => {

  // $.each(req.query.id, function( key, value ) {
  //   alert( key + ": " + value );
  // });
  var deString  = (req.query.id).replace(/\"/g, "");
    deString = deString.replace(/\'/g, "");
  const device = await Device.deleteMany({ ip: { $in: [ deString, "OR WHATEVER" ] } })
  .then(result => {
     // result.deletedCount === number of records that were deleted
     return result;
  });

  // const device = await Device.findByIdAndRemove(req.query.id);

  if (!device) return res.status(404).send('The wemo with the given ID was not found.');

  res.send(device);
});

router.get('/:id', async (req, res) => {
  const device = await Device.findById(req.params.id);
  //const device = await Device.find({ ip: { $in: [ req.params.id, "D" ] } });
  if (!device) return res.status(404).send('The wemo with the given IP was not found.');

  res.send(device);
});

module.exports = router;