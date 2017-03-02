function FormController(
  $routeParams,
  tests
) {
  this.tests = tests;

  this.test = this.tests.get($routeParams.testId); // $routeParams.test = '1_1'
}

angular.module('llt.app')
  .component('lttForm', {
    templateUrl: 'components/form/form.component.html',
    controller: FormController
  });
