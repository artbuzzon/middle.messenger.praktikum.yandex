/* eslint-disable */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const dist = path.join(__dirname, 'dist')
app.use(express.static(dist));

app.use((req, res) => {
  res.sendFile(path.resolve(`${dist}/index.html`));
});

app.listen(PORT, () => {
  console.log(`Мой текст и порт: ${PORT}!`);
});
