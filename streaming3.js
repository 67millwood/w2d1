var https = require('https');
var data = '';


function getAndPrintHTML (options) {

  /* Add your code here */
https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (chunk) {
    data += chunk;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.  And here is your data...\n', data);
  });

});

}

var firstObject = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

var secondObject = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML(firstObject);
getAndPrintHTML(secondObject);

