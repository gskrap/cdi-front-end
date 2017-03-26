'use strict';

const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const template = `
<html>
  <head></head>
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