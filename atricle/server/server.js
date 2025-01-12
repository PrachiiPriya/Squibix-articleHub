const express = require('express');
const cors = require('cors');
const articleRoutes = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Use the article routes
app.use('/api/articles', articleRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
