"use strict";

var suma = function (a,b) {
  return a + b;
}

var resta = function (a, b) {
  return a - b;
}

/*----------------------------------------------------------------------------/*
  $export un solo
/*----------------------------------------------------------------------------*/
// module.exports = suma;

/*----------------------------------------------------------------------------/*
  $Exportar varios
/*----------------------------------------------------------------------------*/
module.exports = {
  NameExportSuma: suma,
  NameExportResta: resta
}
