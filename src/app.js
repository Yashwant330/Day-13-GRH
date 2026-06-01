let express = require('express');
let authRoutes = require('./routes/auth.routes.js');
const errorMiddleware = require('./middleware/error.middleware.js');
let app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

// Global Error Handler
app.use(errorMiddleware);

module.exports = app;