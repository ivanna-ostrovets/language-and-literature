angular.module('llt.app').config(function($routeProvider){
  $routeProvider
    .when('/', {
      template: '<ltt-welcome-page></ltt-welcome-page>'
    })
    .when('/main-menu', {
      template: '<ltt-main-menu></ltt-main-menu>'
    })
    .when('/ukrainian-language', {
      template: '<ltt-ukrainian-language></ltt-ukrainian-language>'
    })
    .when('/ukrainian-literature', {
      template: '<ltt-ukrainian-literature></ltt-ukrainian-literature>'
    })
    ;
});
