const express = require('express');
const db = require('./db/connection');
// const mysql = require('mysql2');
// const inquirer = require('inquirer');

const PORT = process.env.PORT || 3002;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});