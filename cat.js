// mongod --port 27018

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var evan = new Cat({
//   name: "Evan",
//   age: 28,
//   temperament: "Grouchy"
// });

// evan.save(function(err, cat) {
//   if (err) {
//     console.log("Wrong");
//   } else {
//     console.log("Save: \n" + cat);
//   }
// });

Cat.create(
  {
    name: "Hanwen",
    age: 28,
    temperament: "Grouchy"
  },
  function(err, cat) {
    if (err) {
      console.log("create wrong");
    } else {
      console.log("create \n:" + cat);
    }
  }
);

Cat.find({}, function(err, cats) {
  if (err) {
    console.log("find wrong");
  } else {
    console.log("find all cats: \n" + cats);
  }
});
