function FormController(
  $routeParams,
  tests
) {
  this.tests = tests; // Це сервіс, якій буде вертать потрібний тобі тест

  this.test = this.tests.get($routeParams.testId); // $routeParams.test = '1_1', напрімєр
  // Або можна передавать через байндінгі зверху параметри
}

angular.module('llt.app')
  .component('ltt-form', {
    templateUrl: 'form.component.html',
    controller: FormController
  });
