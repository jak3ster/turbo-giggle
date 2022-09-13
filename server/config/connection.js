const mongoose = require('mongoose');
mongoose.pluralize(null);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/medical-portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


console.log(`\n ----------- Mongoose database connected! -----------`)

module.exports = mongoose.connection;