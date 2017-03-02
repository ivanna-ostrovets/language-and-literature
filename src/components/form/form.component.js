function FormController(
  $routeParams,
  tests
) {
  this.tests = tests;
  this.test = this.tests.get($routeParams.id);
}

angular.module('llt.app')
  .component('lltForm', {
    templateUrl: 'components/form/form.component.html',
    controller: FormController
  });
