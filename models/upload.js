const Joi = require('joi');
const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
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
    required: true
  }
});

const Upload = mongoose.model('Upload', uploadSchema);

function validateUpload(Upload) {
  const schema = {
    ip: Joi.string().min(3).required()
  };

  return Joi.validate(Upload, schema);
}

exports.uploadSchema = uploadSchema;
exports.Upload = Upload; 
exports.validate = validateUpload;