const express  = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
app.use(history());
app.use(serveStatic(path.join(_dirname, 'dist')));

const port = process.env.PORT || 5000;
app.listen(port);