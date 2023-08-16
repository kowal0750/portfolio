const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models'); // Sequelize models
const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(bodyParser.json());

// Pozostałe endpointy CRUD tutaj...

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});