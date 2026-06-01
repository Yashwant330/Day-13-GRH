let express = require('express');
let authRoutes = require('./routes/auth.routes.js');

let app = express();

// Parse JSON first
app.use(express.json());

// Then routes
app.use('/api/auth', authRoutes);

// Global error handler
app.use((err, req, res, next) => {
   res.status(500).send("I am father of errors");
});

module.exports = app;