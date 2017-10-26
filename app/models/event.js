const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true
  },
  description: String
});

eventSchema.pre('save', function(next) {
  this.slug = slugify(this.name);
  next();
});

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')    
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')  
    .replace(/^-+/, '')      
    .replace(/-+$/, '');    
}