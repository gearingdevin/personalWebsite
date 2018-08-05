const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const path = require('path');
const mustache = require('mustache');
const app = express();



router.get('/', async (req, res) => {
  // const devices = await Device.find().sort('ip');
  // res.send(devices);
  //res.sendFile(path.join(__dirname+'/../index.html'))

  // var slug =[req.params.slug][0]; // grab the page slug
	// var rData = {records:demoData}; // wrap the data in a global object... (mongo fix)
			
	// var page = path.join(__dirname+'/../index.html'); // bring in the HTML file
	// var html = mustache.to_html(page, demoData); // replace all of the data
	
	// res.sendFile(html);


  

  //res.render('index');
  res.sendFile(path.join(__dirname+'/../public/views/index.html'))

});




// app.get('/app/:slug', function(req, res){ // get the url and slug info
   
// 	var slug =[req.params.slug][0]; // grab the page slug
// 	var rData = {records:demoData}; // wrap the data in a global object... (mongo fix)
			
// 	var page = fs.readFileSync(slug, "utf8"); // bring in the HTML file
// 	var html = mustache.to_html(page, rData); // replace all of the data
	
// 	res.send(html); // send to client
// });



// router.post('/', async (req, res) => {
//   const { error } = validate(req.body); 
//   if (error) return res.status(400).send(error.details[0].message);

//   let device = new Device({ ip: req.body.ip });
//   device = await device.save();
  
//   res.send(device);
// });

// router.put('/:id', async (req, res) => {
//   const { error } = validate(req.body); 
//   if (error) return res.status(400).send(error.details[0].message);

//   const device = await Device.findByIdAndUpdate(req.params.id, { ip: req.body.ip }, {
//     new: true
//   });

//   if (!genre) return res.status(404).send('The wemo with the given ID was not found.');
  
//   res.send(device);
// });

// router.delete('/:id', async (req, res) => {
//   const device = await Device.findByIdAndRemove(req.params.id);

//   if (!device) return res.status(404).send('The wemo with the given ID was not found.');

//   res.send(device);
// });

// router.get('/:id', async (req, res) => {
//   const device = await Device.findById(req.params.id);

//   if (!device) return res.status(404).send('The wemo with the given ID was not found.');

//   res.send(device);
// });

module.exports = router;