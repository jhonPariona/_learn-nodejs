"use strict";

/*----------------------------------------------------------------------------/*
  $Info of process
/*----------------------------------------------------------------------------*/

var info = {
  pid: process.pid, /*  numero de proceso ejecutandose actualmente*/
  versionNode: process.version,
  plataformOS: process.platform,
  titleProcess: process.title,
  arguments: process.argv,
  execPath: process.execPath,
  directoryRunScript: process.cwd()

};
console.log('🔥: info', info);


/*----------------------------------------------------------------------------/*
  $Emisor de eventos
/*----------------------------------------------------------------------------*/
process.on("exit",()=>{
  console.log("Adios");
})

console.log("esto sale antes del fin del proceso");

process.exit(0);

console.log("esto ya no se ejecuta");


