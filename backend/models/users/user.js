const mongoose = require('mongoose');
const crypto = require('crypto');

const credentials = require('../../../config/credentials.js');

const roles = require('./user-roles');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  }
});

UserSchema.pre('save', function(next){
    // BEGIN role
    if (!this.role) {
        this.role = roles.USER;
    }
    // END role

    // BEGIN password
    if (!this.isModified('password')){
        return next();
    }
    const hash = this.encryptPassword(this.password);
    this.password = hash;
    // END password

    next();
});

// UserSchema.methods.makeSalt = function(){
//     return Math.round((new Date().valueOf() * Math.random())) + '';
// };

UserSchema.methods.encryptPassword = function(plainText) {
    return crypto.createHmac('sha1', credentials.salt).
                        update(plainText).
                        digest('hex');
};

UserSchema.methods.comparePasswords = function(plainText) {
    return this.encryptPassword(plainText) === this.password;
};



module.exports = mongoose.model('User', UserSchema);
