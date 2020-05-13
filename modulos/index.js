"use strict";

/*----------------------------------------------------------------------------/*
  $require de uno
/*----------------------------------------------------------------------------*/
// const suma = require('./suma')
// console.log(Operaciones(5,6));


/*----------------------------------------------------------------------------/*
  $require de muchos
/*----------------------------------------------------------------------------*/
const cualquierNombre = require('./suma')

console.log(cualquierNombre.NameExportSuma(5,6));
console.log(cualquierNombre.NameExportResta(5,6));
