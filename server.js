require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const db = require('./config/db');

db();

const app = express();

// Link to Routes //

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(port, console.log(`listening on port: ${port}`));
