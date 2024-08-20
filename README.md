# Proyecto PokeApi con LitElement

Este proyecto utiliza LitElement y JavaScript para crear una interfaz web interactiva para la edición de datos de Pokémon. A continuación, se detallan los pasos para clonar y ejecutar el proyecto localmente.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (incluye `npm`)
  usar version v20.16.0
- [json-server](https://github.com/typicode/json-server)

## Pasos para Ejecutar el Proyecto

1. Instala las dependencias del proyecto utilizando npm:

npm i

ejecutar el Servidor JSON

2. Para simular una API REST local, usa json-server. En una nueva terminal, ejecuta:

json-server --watch pokemon.json

Esto iniciará un servidor JSON en http://localhost:3000 que servirá el archivo pokemon.json.

Iniciar el Proyecto

3. En otra terminal, arranca el proyecto con el comando:

npm run start

Esto iniciará un servidor de desarrollo para tu aplicación.
