const mongoose = require('mongoose');

const uri = process.env.URI_MONGO

if (!uri) {
  throw new Error('You must provide a MongoDB URI')
}

mongoose.connect(uri, {
  useNewUrlParser: true, bufferCommands: false, useUnifiedTopology: true
}).then(() => console.log('Succesfully connected to MongoDB')).catch((err) => console.log(err));
