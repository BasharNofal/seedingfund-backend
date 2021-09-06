// "use strict";

// const mongoose = require("mongoose");
// require("dotenv").config();

// const option = {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// };

// mongoose
// 	.connect(process.env.MONGODB_URI, option)
// 	.then(() => {
// 		require("./src/server").start(process.env.PORT);
// 	})
// 	.catch((error) => {
// 		console.log("AN ERROR OCCURRED WHILE CONNECTING TO DATA BASE", error);
// 	});

'use strict';

require('dotenv').config();
require('./src/server.js').start(process.env.PORT);

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options)


// Start the web server
