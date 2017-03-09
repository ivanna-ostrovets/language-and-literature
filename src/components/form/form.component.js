function FormController(
    $routeParams,
    $timeout,
    tests
) {
  this.$routeParams = $routeParams;
  this.$timeout = $timeout;
  this.tests = tests;

  this.testId = this.$routeParams.id;
  this.test = this.tests.get(this.$routeParams.id);
  this.currentTab = 0;
  this.results = [];
  this.count = 0;

  $(document).ready(function() {
    $timeout(function() {
      $('ul.tabs').tabs();
    }, 0);
  });
}

FormController.prototype.before = function(tab) {
  this.currentTab--;
  this.$timeout(function() {
    document.querySelector('#tab' + tab).click();
  }, 0);
};

FormController.prototype.next = function(tab) {
  this.currentTab++;
  this.$timeout(function() {
    document.querySelector('#tab' + tab).click();
  }, 0);
};

FormController.prototype.check = function() {
  this.count = this.tests.check(this.results, this.testId);
  console.log(this.count);
};

angular.module('llt.app')
    .component('lltForm', {
      templateUrl: 'components/form/form.component.html',
      controller: FormController
    });