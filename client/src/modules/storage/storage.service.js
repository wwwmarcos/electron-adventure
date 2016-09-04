(function() {
  'use strict';

  const jsonStorage = require('electron-json-storage');

  angular
    .module('StorageServiceModule', [])
    .factory('storage', storage);
  
  storage.$inject = ['$q'];
  function storage($q) {
    var factory = {
      set: set,
      get: get
    };
    return factory;

    function set(key, data) {
     var deferred = $q.defer();
      jsonStorage
        .set(key, data, function(err) {
          if (!err){
          deferred.resolve({ message : 'Success'});
          };
          deferred.reject(err);
        });
      return deferred.promise;
    };
    
    function get(key) {
     var deferred = $q.defer();
      jsonStorage
        .get(key, function(err, data) {
          if (!err){
          deferred.resolve(data);
          };
          deferred.reject(err);
        });
      return deferred.promise;
    };
  };
})();