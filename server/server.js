const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../client/')));
app.get('/', (req, res) => res.send('SUCCESS'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
