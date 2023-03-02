/*
 * Lista de tareas
 * Esta API permite controlar y manejar una lista de tareas. Crear, lista, actualizar y eliminar tareas de cualquier tipo
 *
 * OpenAPI spec version: 1.0.0
 * Contact: juandgc09@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ListaDeTareas);
  }
}(this, function(expect, ListaDeTareas) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Task', function() {
      beforeEach(function() {
        instance = new ListaDeTareas.Task();
      });

      it('should create an instance of Task', function() {
        // TODO: update the code to test Task
        expect(instance).to.be.a(ListaDeTareas.Task);
      });

      it('should have the property idTarea (base name: "id_tarea")', function() {
        // TODO: update the code to test the property idTarea
        expect(instance).to.have.property('idTarea');
        // expect(instance.idTarea).to.be(expectedValueLiteral);
      });

      it('should have the property nombreTarea (base name: "nombre_tarea")', function() {
        // TODO: update the code to test the property nombreTarea
        expect(instance).to.have.property('nombreTarea');
        // expect(instance.nombreTarea).to.be(expectedValueLiteral);
      });

      it('should have the property descripcion (base name: "descripcion")', function() {
        // TODO: update the code to test the property descripcion
        expect(instance).to.have.property('descripcion');
        // expect(instance.descripcion).to.be(expectedValueLiteral);
      });

      it('should have the property momentoDia (base name: "momento_dia")', function() {
        // TODO: update the code to test the property momentoDia
        expect(instance).to.have.property('momentoDia');
        // expect(instance.momentoDia).to.be(expectedValueLiteral);
      });

    });
  });

}));