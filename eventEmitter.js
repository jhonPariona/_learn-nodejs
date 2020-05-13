"use strict";

const events = require('events')

var myEmiter = new events.EventEmitter();

myEmiter.on('call phone', ringPhone);
myEmiter.on('call phone', vibrarPhone);

/*----------------------------------------------------------------------------/*
  $Handlers o escuchadores de evento
/*----------------------------------------------------------------------------*/
function ringPhone(quien) {
  if(quien === "madre"){ /* condicionamos la ejecución */
    return;
  }
  console.log("ring ring!!!");
}

function vibrarPhone() {
  console.log("brr brr!!!");
}

/*----------------------------------------------------------------------------/*
  $Ejecutamos nuestros emiters
/*----------------------------------------------------------------------------*/
myEmiter.emit('call phone', 'madre');
