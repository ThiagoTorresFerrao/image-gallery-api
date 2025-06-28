const express = require('express');
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));

app.use('/', imageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na porta', PORT);
});