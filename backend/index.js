const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
