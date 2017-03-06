function FormController($routeParams,
                        tests) {
  this.tests = tests;
  this.test = this.tests.get($routeParams.id);

  $(document).ready(function () {
    $('ul.tabs').tabs();
  });
}

angular.module('llt.app')
    .component('lltForm', {
      templateUrl: 'components/form/form.component.html',
      controller: FormController
    });