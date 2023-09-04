const express = require('express');
const sequelize = require('sequelize');
const config = require('./config/index');
const routes = require('./routes');


const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(routes);

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof sequelize.ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    }
    next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;