const express = require('express');
const app = express();

// Check if the host env has specified a port to run on
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));
