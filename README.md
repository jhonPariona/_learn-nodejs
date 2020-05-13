# 🏆 learning [NodeJS](https://nodejs.org/dist/latest-v12.x/docs/api/)

[📎 Ver soport en nodejs](https://node.green/) | [📎 Diapos KeepCoding](https://drive.google.com/file/d/1m8t2xlq9W_b_Snk3CiRoFmXD2lkml7oF/view?usp=sharing)

✨ **características**

🦜 Intérprete de JS

🦜 Asyncrono

🦜 Orientada a eventos

🦜 Basado en el motor V8 chrome

🦜 Límite de memoria de 1 GB

## 🏆 Módulos

🦜 Usa sus propio sistema de módulos ***CommomJS***

🦜 **require** es síncrona

🦜 **singletons** solo cargan una vez en el primer require, las siguientes require usan solo la primera carga

🦜 **`module.exports =`** para exportar fx, objetos

🦜 node busca **`require'<buscar>'`**:

    🚀 si ingresamos `/<path>` busca la ruta
    🚀 busca si es un modulo del core
    🚀 busca en carpeta node_modules local
    🚀 busca en carpeta node_modules global

## 🏗 Gestor de versiones NVM

Permite instalar diferentes versiones de nodeJS

## Objeto Global [process](process.js)

🦜tiene diversos propiedades útiles

## [Event Loop](eventloop.js)

🦜 Las funciones que usan I/O deben ejecutarse de forma asyncrona.

## [Event Emiters](eventEmitter.js)

[📎 Doc](https://nodejs.org/dist/latest-v12.x/docs/api/events.html#events_class_eventemitter)

## Express

[📎 DOC Api](http://expressjs.com/en/4x/api.html)

## Express generator

```bash
$ npx express-generator name-project --ejs
```
