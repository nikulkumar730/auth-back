const app = require('./app');

const PORT = 8082;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
