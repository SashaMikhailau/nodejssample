const express = require('express');
const fs = require('fs');
const util = require('util');
const app = express();
const port = 3000;
var proxy = require('express-http-proxy');


var handler = function (req,res) {fs.writeFileSync(`request_${new Date().getTime()}.json`, util.inspect(req));
   res.send('Hello world!');
 }


app.use('/proxy', proxy('www.google.com'));


// app.get('/*', handler);
app.listen(port, () => console.log(`Example app listebning on port ${port}`));