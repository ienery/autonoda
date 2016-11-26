const mongoose = require('mongoose');
const crypto = require('crypto');

const credentials = require('../../../config/credentials.js');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    /*required: true*/
  }
});

UserSchema.pre('save', function(next){
    if (!this.isModified('password')){
        return next();
    }

    //console.log(this.password);
    const hash = this.encryptPassword(this.password);
    //console.log('hash', hash);
    this.password = hash;
    next();
});

UserSchema.methods.makeSalt = function(){
    return Math.round((new Date().valueOf() * Math.random())) + '';
};

UserSchema.methods.encryptPassword = function(plainText) {
    return crypto.createHmac('sha1', credentials.salt).
                        update(plainText).
                        digest('hex');
};

UserSchema.methods.comparePasswords = function(plainText) {
    return this.encryptPassword(plainText) === this.password;
};



module.exports = mongoose.model('User', UserSchema);
