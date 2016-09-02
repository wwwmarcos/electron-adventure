
const storage = require('electron-json-storage');


(function() {

  'use strict';
    angular
    .module('app', [
      'StorageServiceModule'
    ]);
    .controller('appController', appController);

    appController.$inject = ['storage']
    function appController(storage){
    var vm = this;

      storage
        .set('wow', { lalalala : 'sss'})
        .then(function(response){
          console.log('reponse', response);
        }, function(err){
          console.log('err', err);
        });
        
      storage
        .get('wow')
        .then(function(response){
          console.log('reponse', response);
        }, function(err){
          console.log('err', err);
        });



    };
})();