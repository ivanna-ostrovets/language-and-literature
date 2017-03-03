function FormController($routeParams,
                        tests) {
  this.tests = tests;
  this.test = this.tests.get($routeParams.id);

  this.range = function (min, max, step) {
    min = min || 1;
    max = max || 12;
    step = step || 1;

    var input = [];
    for (var i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };

  $(document).ready(function () {
    $('ul.tabs').tabs();
  });
}

angular.module('llt.app')
    .component('lltForm', {
      templateUrl: 'components/form/form.component.html',
      controller: FormController
    });