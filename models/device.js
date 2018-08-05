const Joi = require('joi');
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: false
  // },
  ip:{
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
    //ADD REGEX IP VALIDATOR
  },
  name:{
    type: String,
    required: false
  },

  //THIS IS FOR WEMO NAMING SCHEME 
  phase:{
    type: String,
    required: false
  },
  room:{
    type: String,
    required: false
  },
  location:{
    type: String,
    required: false
  },
  level:{
    type: String,
    required: false
  },
  position:{
    type: String,
    required: false
  },
  item:{
    type: String,
    required: false
  },
  type:{
    type: String,
    required: false
  },
  priority:{
    type: String,
    required: false
  },

  status:{
    type: String,
    required: false
  }
  // timeHit:{
  //   type: [],
  //   required: false
  // },
  
  // timeHit:{
  //   type: [],
  //   required: false
  // }
  
});

const Device = mongoose.model('Device', deviceSchema);

function validateDevice(device) {
  const schema = {
    ip: Joi.string().min(3).required()
  };

  return Joi.validate(device, schema);
}

exports.deviceSchema = deviceSchema;
exports.Device = Device; 
exports.validate = validateDevice;