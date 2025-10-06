const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Service 2!');
});

app.get('/message', (req, res) => {
  res.send('Service 2 says hi 👋');
});

app.listen(5001, () => console.log('Service 2 running on port 5001'));

