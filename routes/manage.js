//const { Device, validate } = require('../models/upload');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const formidable = require('formidable');
var fs = require('fs');
var path = require('path');

// router.get('/', async (req, res) => {
//   //console.log(req.params);
//   var Message = "2";
//   if (req.query.id){
//     //console.log(req.param.id);
//     var deString  = (req.query.id).replace(/\'/g, "");
//     deString = deString.replace(/\"/g, "");
//     deString = deString.replace(/\:/g, "");
//     // deString = deString.replace(/\}/g, "");
//     // deString = deString.replace(/\[/g, "");
//     // deString = deString.replace(/\]/g, "");
//     // deString = deString.replace(/\i/g, "");
//     // deString = deString.replace(/\p/g, "");
//     // deString = deString.replace(/\:/g, "");
//     // deString = deString.trim();
//     //const devices = await Device.find({ ip: { $in: [ deString, "OR WHATEVER" ] } });
//     //console.log(deString);
//     //console.log("TEST: "+req.query.id);
//     const PythonShell = require('python-shell');
//     var pyshell = new PythonShell('pyScripts/wemo_getStatus_single.py');

//     //pyshell.send(JSON.stringify([1,2,3,4,5]));
//     pyshell.send(JSON.stringify([req.query.id]));

//     pyshell.on('message', function (message) {
//       // received a message sent from the Python script (a simple "print" statement)
//       //if(message == '1' || message =='2' || message =='3'){
//       console.log(message);

//       //name = message;
//       Message = message;
//       //}

//     });

//     // end the input stream and allow the process to exit
//     pyshell.end(function (err) {
//       if (err) {
//         throw err;
//       };
//       //console.log("THE MESSAGE IS "+ Message);
//       res.send(JSON.stringify([Message]));
//       //console.log('finished');
//     });




//   }
//   else{
//     const devices = await Device.find().sort('ip');
//     res.send(devices);
//   }
//   //PYTHON - START v0.1



// });

router.post('/increase', async (req, res) => {
  var Message = "INCREASE";
  //console.log(req.params.id);
  console.log("INCREASE");
  res.send(JSON.stringify([Message]));
});


router.post('/decrease', async (req, res) => {
  var Message = "DECREASE";
  console.log("DECREASE");
  //const devices = await Device.find().sort('priority');


  res.send(JSON.stringify([devices]));
});

//

// router.put('/:id', async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   const device = await Device.findByIdAndUpdate(req.params.id, { ip: req.body.ip }, {
//     new: true
//   });

//   if (!genre) return res.status(404).send('The wemo with the given ID was not found.');

//   res.send(device);
// });

// router.delete('/', async (req, res) => {

//   // $.each(req.query.id, function( key, value ) {
//   //   alert( key + ": " + value );
//   // });
//   var deString  = (req.query.id).replace(/\"/g, "");
//     deString = deString.replace(/\'/g, "");
//   const device = await Device.deleteMany({ ip: { $in: [ deString, "OR WHATEVER" ] } })
//   .then(result => {
//      // result.deletedCount === number of records that were deleted
//      return result;
//   });

//   // const device = await Device.findByIdAndRemove(req.query.id);

//   if (!device) return res.status(404).send('The wemo with the given ID was not found.');

//   res.send(device);
// });

// router.get('/:id', async (req, res) => {
//   const device = await Device.findById(req.params.id);
//   //const device = await Device.find({ ip: { $in: [ req.params.id, "D" ] } });
//   if (!device) return res.status(404).send('The wemo with the given IP was not found.');

//   res.send(device);
// });

module.exports = router;