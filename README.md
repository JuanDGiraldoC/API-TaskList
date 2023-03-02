[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-black.svg)](https://sonarcloud.io/summary/new_code?id=juandgiraldoc_api-tasklist)

# lista_de_tareas

ListaDeTareas - JavaScript client for lista_de_tareas
Esta API permite controlar y manejar una lista de tareas. Crear, lista, actualizar y eliminar tareas de cualquier tipo
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install lista_de_tareas --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ListaDeTareas = require('lista_de_tareas');

var api = new ListaDeTareas.TaskApi()
var body = new ListaDeTareas.Task(); // {Task} Agregar una nueva tarea a la lista
var idTarea = 789; // {Number} 
var nombreTarea = "nombreTarea_example"; // {String} 
var descripcion = "descripcion_example"; // {String} 
var momentoDia = "momentoDia_example"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.agregarTarea(body, idTarea, nombreTarea, descripcion, momentoDia, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/JuanDGiraldoC/TaskList/1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ListaDeTareas.TaskApi* | [**agregarTarea**](docs/TaskApi.md#agregarTarea) | **POST** /task | Agregar una nueva tarea a la lista
*ListaDeTareas.TaskApi* | [**eliminarTareaPorId**](docs/TaskApi.md#eliminarTareaPorId) | **DELETE** /task/{id_tarea} | Elimina una tarea por su Id
*ListaDeTareas.TaskApi* | [**eliminarTareaPorNombre**](docs/TaskApi.md#eliminarTareaPorNombre) | **DELETE** /task/{nombre_tarea} | Elimina una tarea por su nombre
*ListaDeTareas.TaskApi* | [**listarTareas**](docs/TaskApi.md#listarTareas) | **GET** /task | Listar tareas almacenadas
*ListaDeTareas.TaskApi* | [**modificarTareaPorId**](docs/TaskApi.md#modificarTareaPorId) | **PUT** /task/{id_tarea} | Modificar una tarea por su id
*ListaDeTareas.TaskApi* | [**modificarTareaPorNombre**](docs/TaskApi.md#modificarTareaPorNombre) | **PUT** /task/{nombre_tarea} | Modificar una tarea por su nombre
*ListaDeTareas.TaskApi* | [**obtenerListaPorMomentoDia**](docs/TaskApi.md#obtenerListaPorMomentoDia) | **GET** /task/{momento_dia} | Obtener una lista de tareas
*ListaDeTareas.TaskApi* | [**obtenerTareaPorId**](docs/TaskApi.md#obtenerTareaPorId) | **GET** /task/{id_tarea} | Obtener una tarea por su id
*ListaDeTareas.TaskApi* | [**obtenerTareaPorNombre**](docs/TaskApi.md#obtenerTareaPorNombre) | **GET** /task/{nombre_tarea} | Obtener una tarea por su nombre

## Documentation for Models

 - [ListaDeTareas.Task](docs/Task.md)

## Documentation for Authorization

 All endpoints do not require authorization.

