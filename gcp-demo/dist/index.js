const express = require('express');
const serveStatic = require('serve-static');

const app = express();

app.use(serveStatic(__dirname + '/gcp-demo'));

app.use('*', (req, res) => {
  res.sendFile(__dirname + '/gcp-demo/index.html');
});

// Check if the host env has specified a port to run on
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));
