const express = require('express');
const sequelize = require('sequelize');
const config = require('./config/index');


const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

module.exports = app;