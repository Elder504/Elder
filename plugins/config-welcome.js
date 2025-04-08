const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de bienvenida sin test
app.get('/welcome', (req, res) => {
  const welcomeMessage = {
    message: 'Welcome to our application!',
    body: 'This is the body of the welcome message.'
  };
  res.json(welcomeMessage);
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});