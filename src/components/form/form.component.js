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
  this.answers = this.tests.getAnswers(this.test);
  this.count = 0;
  this.showAnswers = false;

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
  this.showAnswers = true;
};

angular.module('llt.app')
    .component('lltForm', {
      templateUrl: 'components/form/form.component.html',
      controller: FormController
    });