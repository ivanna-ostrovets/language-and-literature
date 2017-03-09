angular.module('llt.app').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<llt-welcome-page></llt-welcome-page>'
    })
    .when('/test/:id', {
      template: '<llt-form></llt-form>'
    })
  ;
});
