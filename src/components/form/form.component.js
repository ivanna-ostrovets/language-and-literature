function FormController(
    $routeParams,
    tests,
    $timeout,
    $sce
) {
  var $ctrl = this;

  this.$timeout = $timeout;
  this.tests = tests;
  this.test = this.tests.get($routeParams.id);
  this.currentTab = 0;

  this.test.forEach(function(item, index) {
    $ctrl.test[index].question = $sce.trustAsHtml($ctrl.test[index].question);
  });

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

angular.module('llt.app')
    .component('lltForm', {
      templateUrl: 'components/form/form.component.html',
      controller: FormController
    });