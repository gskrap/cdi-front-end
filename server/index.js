'use strict';

const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const template = `
<html>
  <head>
    <link rel="stylesheet" href="/js/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CDI 2017</title>
  </head>
  <body>
    <div id="app-root"></div>
    <script type="text/javascript" src="/js/main.js"></script>
  </body>
</html>
`;

const app = express();

app.use(serveStatic(path.resolve(__dirname + '/../dist')));

app.get('*', (req, res) => {
  res.set('text/html');
  res.send(template);
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});