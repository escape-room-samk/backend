// https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
var express = require('express');
var router = express.Router();
var qrReader = require('./qrReader.js');
var server = require('./server.js');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/', function(req, res){
//   res.send('POST route on things.');
// });

//both index.js and things.js should be in same directory
router.use('/api/qrReader', qrReader);
router.use('/api/server', server);


module.exports = router;

