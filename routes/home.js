const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();



router.get('/', async (req, res) => {
  
  res.sendFile(path.join(__dirname+'/../public/views/index.html'))

});








// router.post('/', async (req, res) => {

// });

// router.put('/:id', async (req, res) => {

// });

// router.delete('/:id', async (req, res) => {

// });

// router.get('/:id', async (req, res) => {

// });

module.exports = router;