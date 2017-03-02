angular.module('llt.app').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<llt-welcome-page></llt-welcome-page>'
    })
    .when('/main-menu', {
      template: '<llt-main-menu></llt-main-menu>'
    })
    .when('/ukrainian-language', {
      template: '<llt-ukrainian-language></llt-ukrainian-language>'
    })
    .when('/ukrainian-literature', {
      template: '<llt-ukrainian-literature></llt-ukrainian-literature>'
    })
    .when('/ukrainian-language/morfology', {
      template: '<llt-morfology></llt-morfology>'
    })
    .when('/test/:id', {
      template: '<llt-form></llt-form>'
    })
  ;
});
