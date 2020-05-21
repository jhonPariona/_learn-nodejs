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

- 🚀 si ingresamos `/<path>` busca la ruta
- 🚀 busca si es un modulo del core
- 🚀 busca en carpeta node_modules local
- 🚀 busca en carpeta node_modules global

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
# Crear una app con express
$ npx express-generator name-project --ejs

```

## 🔐 Seguridad en NodeJS

[🎞️ Diapos KeepCoding DVNA](https://drive.google.com/open?id=1N1uR5ynJRWU2tbpJCdCPRmk8UHlL4PhQ) |

### Entorno de Pruebas

[🐛 DVNA](https://github.com/appsecco/dvna)

```bash
# Descargamos el proyecto
$ git clone https://github.com/appsecco/dvna; cd dvna
# creamos un archivo vars.env
$ nano vars.env
```

En el archivo ponemos:

```env
MYSQL_USER=dvna
MYSQL_DATABASE=dvna
MYSQL_PASSWORD=passw0rd
MYSQL_RANDOM_ROOT_PASSWORD=yes
```

```bash
# comprobamos
$ cat vars.env
# Lanzamos docker compose
$ docker-compose up
# accedemos a la app creamos un user y entramos
http://127.0.0.1:9090/
```

Podemos ver la solución en cada commit que hay en el repo

### A1: Injection

✔ **[Solución del fallo](https://github.com/appsecco/dvna/commit/dc1f9c54685eb04f55e444370d6d622834e4cc00?diff=split)** Usar un ORM y configurar log para que nos de información que requerimos

🎁 **Herramientas**

- [SqlMap](https://github.com/sqlmapproject/sqlmap) Ya viene instalado en kali **video descar**

#### NoSQL injection

La bases de datos NoSQL tbn son vulnerables

[🦜 Worklists](https://github.com/cr0hn/nosqlinjection_wordlists/blob/master/mongodb_nosqli.txt) |
[Owasp pdf](https://owasp.org/www-pdf-archive/GOD16-NOSQL.pdf)

#### Command injection

Escribiendo un `<#ping>;<comado>`podemos ejecutar comandos dentro del docker

✔ **[solución fallo](https://github.com/appsecco/dvna/commit/4fe36fcfbd615fc9ea340e1238be33dd0d140ef8?diff=split)** Usar exec_file en vez de exec

### A2: Broken Authentication

Al reseat la contraseña se usa un token debil que puede ser roto

✔ **[Solución](https://github.com/appsecco/dvna/commit/c8d519e41a752def46d80de699a94a23800df426?diff=split)** Guardar string aleatorio cuando se realice la petición de reset y con un tiempo de expiración

### A3: Sensitive Data Exposure

Se devuelve información que no se requiere para pintar en el front (con f12 y en network podemos ver que archivos nos devuelve y ver en ellos que información nos da)

✔ **[Sol](https://github.com/appsecco/dvna/commit/7c28c2e007ac48badc604e52621c37bbb8da8fbd?diff=split)** Solo devolver lo que se va a pintar en el front

#### Internal logs

Tener cuidado con los log internos no poner infromación sensible

#### [.git](https://en.internetwache.org/dont-publicly-expose-git-or-how-we-downloaded-your-websites-sourcecode-an-analysis-of-alexas-1m-28-07-2015/)

Tener cuidado de subir el .git al server de producción por que de ahi puden tener acceso a todo el repo

✔ **sol** deshabilitar el listado de directorios en su servidor de producción y bloquear el acceso a .git

### A4: XML External Entities

Tener cuidado de permitir entities externas

✔ **[Sol](https://github.com/appsecco/dvna/commit/15f9dc298ff8e46f0dbeca6b260416c086db2446?diff=split)**

### A5: Broken Access Control

Comprobar que el usuario es realmente un admin

✔ **[sol control acceso admi](https://github.com/appsecco/dvna/commit/1d10d266567a6b721bd368500838756e1cd7966b?diff=split)** Incorporar un middleware que compruebe el rol

No confiar en campos ocultos que puedan cambiar datos de otros usuarios

✔ Utilizar una librería de autenticación como passport, Comprobar que usuario hace la petición y su id

### A6: Security Misconfiguration

Muestra os debugs de los errores en que linea han fallado, etc. (Stacktrace público)

✔ NO tener activo el modo debug, tener los errores controlado(try except), usar siempre NODE_ENV:production

### A7: Cross-site Scripting

**reflejado** inyectarle un script

**persistente** inyectar script en un campo y siempre se va a cargar

✔ [sol](https://github.com/appsecco/dvna/commit/6acbb14b51df84d4c4986d95f8fa4e3a6d600e35?diff=split) escapar el output(`=`)

### A8: Insecure Deserialization

✔ **[sol](https://github.com/appsecco/dvna/commit/624a4ee88b3af804271d183f2921448851ddbfff?diff=split)** Usar JSON.Parse

### A9: Using Components with Known Vulnerabilities

✔ No usar eval nunca xq nos lleva a ejecución remota de código

### A10: Insufficient Logging and Monitoring

Configurar un buen log con info elevante y no información sensible

✔ **[Solucion](https://github.com/appsecco/dvna/commit/56c5e82c1a000e26ae19afb67b6696d634ceab2e?diff=split)** Usar librerias como [winston](https://github.com/winstonjs/winston)
