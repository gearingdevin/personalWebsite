const Joi = require('joi');
const mongoose = require('mongoose');

const powerSchema = new mongoose.Schema({

  date:{
    type: String,
    required: true
  },
  time:{
    type: String,
    required: true
  },

  wemos: [{
    ip: String,
    power: String
  }
  ]
  
  
});

const Power = mongoose.model('Power', powerSchema);

// function validateDevice(power) {
//   const schema = {
//     ip: Joi.string().min(3).required()
//   };

//   return Joi.validate(device, schema);
// }

exports.powerSchema = powerSchema;
exports.Power = Power; 
// exports.validate = validateDevice;