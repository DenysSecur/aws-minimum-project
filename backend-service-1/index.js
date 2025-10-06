const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  try {
   
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('http://service2:5001/message');
    const message2 = await response.text();
    res.send(`Hello from Service 1! → Also got: ${message2}`);
  } catch (err) {
    res.send('Hello from Service 1! (Service 2 not reachable)');
  }
});

app.listen(5000, () => console.log('Service 1 running on port 5000'));

