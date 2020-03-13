

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!`enter code here`
  var kittySchema = new mongoose.Schema({
    name: String
  });

kittySchema.methods.speak = function () {
    var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log(greeting);
  }

var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

var fluffy = new Kitten({ name: 'Fluffy' });

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
  console.log("~He spoke after the save!~");
});


Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
  
})



});

