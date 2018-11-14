var https = require('https');
var data = '';


function getHTML (options, callback) {

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
    callback(data);

  });
});
}

function printHTML (html) {
  console.log(html);
}



var firstObject = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

var secondObject = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(firstObject, printHTML);
// getAndPrintHTML(secondObject);