var https = require('https');


module.exports = {

      bigprint: function getHTML (options, callback) {
      /* Your code here */
      var data = '';
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
    },

    littleprint: function printHTML (html) {
      console.log(html);
    }
  }


