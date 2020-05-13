"use strict";

const express = require('express');
const morgan = require('morgan'); /* nos da un middleware */



const app = express();

app.use(morgan('dev')); /* GET / 304 5.289 ms - - */
/*----------------------------------------------------------------------------/*
  $ruta
/*----------------------------------------------------------------------------*/
app.get("/", function (req, res) {
  console.log("peticion a /");
  res.send("hello, world");
});


const server = app.listen(3333, function () {
  const PORT = server.address().port;
  console.log('🔥: server on PORT: ', PORT)
})
