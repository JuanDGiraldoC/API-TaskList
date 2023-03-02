# ListaDeTareas.TaskApi

All URIs are relative to *https://virtserver.swaggerhub.com/JuanDGiraldoC/TaskList/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agregarTarea**](TaskApi.md#agregarTarea) | **POST** /task | Agregar una nueva tarea a la lista
[**eliminarTareaPorId**](TaskApi.md#eliminarTareaPorId) | **DELETE** /task/{id_tarea} | Elimina una tarea por su Id
[**eliminarTareaPorNombre**](TaskApi.md#eliminarTareaPorNombre) | **DELETE** /task/{nombre_tarea} | Elimina una tarea por su nombre
[**listarTareas**](TaskApi.md#listarTareas) | **GET** /task | Listar tareas almacenadas
[**modificarTareaPorId**](TaskApi.md#modificarTareaPorId) | **PUT** /task/{id_tarea} | Modificar una tarea por su id
[**modificarTareaPorNombre**](TaskApi.md#modificarTareaPorNombre) | **PUT** /task/{nombre_tarea} | Modificar una tarea por su nombre
[**obtenerListaPorMomentoDia**](TaskApi.md#obtenerListaPorMomentoDia) | **GET** /task/{momento_dia} | Obtener una lista de tareas
[**obtenerTareaPorId**](TaskApi.md#obtenerTareaPorId) | **GET** /task/{id_tarea} | Obtener una tarea por su id
[**obtenerTareaPorNombre**](TaskApi.md#obtenerTareaPorNombre) | **GET** /task/{nombre_tarea} | Obtener una tarea por su nombre

<a name="agregarTarea"></a>
# **agregarTarea**
> agregarTarea(body, idTarea, nombreTarea, descripcion, momentoDia)

Agregar una nueva tarea a la lista

Permite agregar una nueva tarea a la lista con sus respectivos campos

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
let body = new ListaDeTareas.Task(); // Task | Agregar una nueva tarea a la lista
let idTarea = 789; // Number | 
let nombreTarea = "nombreTarea_example"; // String | 
let descripcion = "descripcion_example"; // String | 
let momentoDia = "momentoDia_example"; // String | 

apiInstance.agregarTarea(body, idTarea, nombreTarea, descripcion, momentoDia, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Task**](Task.md)| Agregar una nueva tarea a la lista | 
 **idTarea** | **Number**|  | 
 **nombreTarea** | **String**|  | 
 **descripcion** | **String**|  | 
 **momentoDia** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="eliminarTareaPorId"></a>
# **eliminarTareaPorId**
> eliminarTareaPorId(idTarea)

Elimina una tarea por su Id

Eliminar una tarea de la lista en base a su Id

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
let idTarea = 789; // Number | Id de la tarea que se desea modificar

apiInstance.eliminarTareaPorId(idTarea, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTarea** | **Number**| Id de la tarea que se desea modificar | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="eliminarTareaPorNombre"></a>
# **eliminarTareaPorNombre**
> eliminarTareaPorNombre(nombreTarea)

Elimina una tarea por su nombre

Eliminar una tarea de la lista en base a su nombre

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
let nombreTarea = "nombreTarea_example"; // String | nombre de la tarea que se desea modificar

apiInstance.eliminarTareaPorNombre(nombreTarea, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nombreTarea** | **String**| nombre de la tarea que se desea modificar | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listarTareas"></a>
# **listarTareas**
> [Task] listarTareas()

Listar tareas almacenadas

Permite obtener la listar todas las tareas almacenadas con todos sus datos

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
apiInstance.listarTareas((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Task]**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="modificarTareaPorId"></a>
# **modificarTareaPorId**
> modificarTareaPorId(idTarea, opts)

Modificar una tarea por su id

Modificar una tarea de la lista en base a su id

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
let idTarea = 789; // Number | Id de la tarea que se desea modificar
let opts = { 
  'body': new ListaDeTareas.Task(), // Task | Modificar una tarea de la lista
  'idTarea': 789, // Number | 
  'nombreTarea': "nombreTarea_example", // String | 
  'descripcion': "descripcion_example", // String | 
  'momentoDia': "momentoDia_example" // String | 
};
apiInstance.modificarTareaPorId(idTarea, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTarea** | **Number**| Id de la tarea que se desea modificar | 
 **body** | [**Task**](Task.md)| Modificar una tarea de la lista | [optional] 
 **idTarea** | **Number**|  | [optional] 
 **nombreTarea** | **String**|  | [optional] 
 **descripcion** | **String**|  | [optional] 
 **momentoDia** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="modificarTareaPorNombre"></a>
# **modificarTareaPorNombre**
> modificarTareaPorNombre(nombreTarea, opts)

Modificar una tarea por su nombre

Modificar una tarea de la lista en base a su nombre

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
let nombreTarea = "nombreTarea_example"; // String | Nombre de la tarea que se desea modificar
let opts = { 
  'body': new ListaDeTareas.Task(), // Task | Modificar una tarea de la lista
  'idTarea': 789, // Number | 
  'nombreTarea': "nombreTarea_example", // String | 
  'descripcion': "descripcion_example", // String | 
  'momentoDia': "momentoDia_example" // String | 
};
apiInstance.modificarTareaPorNombre(nombreTarea, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nombreTarea** | **String**| Nombre de la tarea que se desea modificar | 
 **body** | [**Task**](Task.md)| Modificar una tarea de la lista | [optional] 
 **idTarea** | **Number**|  | [optional] 
 **nombreTarea** | **String**|  | [optional] 
 **descripcion** | **String**|  | [optional] 
 **momentoDia** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="obtenerListaPorMomentoDia"></a>
# **obtenerListaPorMomentoDia**
> [Task] obtenerListaPorMomentoDia(momentoDia)

Obtener una lista de tareas

Permite obtener una lista de tareas en base al momento del dia donde se pretenden realizar

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
let momentoDia = "momentoDia_example"; // String | momento del dia donde se desea saber que tareas hay asignadas

apiInstance.obtenerListaPorMomentoDia(momentoDia, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **momentoDia** | **String**| momento del dia donde se desea saber que tareas hay asignadas | 

### Return type

[**[Task]**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="obtenerTareaPorId"></a>
# **obtenerTareaPorId**
> Task obtenerTareaPorId(idTarea)

Obtener una tarea por su id

Permite obtener una tarea de la lista en base a su id

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
let idTarea = 789; // Number | Id de la tarea que se desea consultar

apiInstance.obtenerTareaPorId(idTarea, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTarea** | **Number**| Id de la tarea que se desea consultar | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="obtenerTareaPorNombre"></a>
# **obtenerTareaPorNombre**
> Task obtenerTareaPorNombre(nombreTarea)

Obtener una tarea por su nombre

Permite obtener una tarea de la lista en base a su nombre

### Example
```javascript
import {ListaDeTareas} from 'lista_de_tareas';

let apiInstance = new ListaDeTareas.TaskApi();
let nombreTarea = "nombreTarea_example"; // String | nombre de la tarea que se desea consultar

apiInstance.obtenerTareaPorNombre(nombreTarea, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nombreTarea** | **String**| nombre de la tarea que se desea consultar | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

