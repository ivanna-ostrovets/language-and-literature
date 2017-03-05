function FormController(
    $routeParams,
    tests,
    $timeout
) {
  this.tests = tests;
  this.test = this.tests.get($routeParams.id);
  this.currentTab = 0;

  $(document).ready(function() {
    $timeout(function() {
      $('ul.tabs').tabs();
    }, 0);
  });
}

FormController.prototype.clickTab = function(tab) {
  this.currentTab--;
  document.querySelector('#tab' + tab).click();
};

angular.module('llt.app')
    .component('lltForm', {
      templateUrl: 'components/form/form.component.html',
      controller: FormController
    });