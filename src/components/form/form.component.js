function FormController($routeParams,
                        $timeout,
                        $sce,
                        tests,
                        $scope) {
  this.$routeParams = $routeParams;
  var $ctrl = this;

  this.$timeout = $timeout;
  this.tests = tests;

  this.testId = this.$routeParams.id;
  this.test = this.tests.get(this.$routeParams.id);
  this.currentTab = 0;
  this.results = [];
  this.answers = this.tests.getAnswers(this.test);
  this.count = 0;
  this.showAnswers = false;
  this.hideCheckButton = false;

  this.test.forEach(function(item, index) {
    if (typeof item.question === 'string') {
      item.question = $sce.trustAsHtml(item.question);
    }
  });

  $(document).ready(function() {
    $timeout(function() {
      $('ul.tabs').tabs();
      $('.materialboxed').materialbox();
    }, 0);
  });

  $(document).on("keydown", function(event) {
    if ((event.keyCode || event.which) == 37) {
      if ($ctrl.currentTab > 0) {
        $ctrl.before($ctrl.currentTab - 1);

        return false;
      }
    }

    if ((event.keyCode || event.which) == 39) {
      if ($ctrl.currentTab < 11) {
        $ctrl.next($ctrl.currentTab + 1);

        return false;
      }
    }
  });

  $scope.$on("$destroy", function() {
    $(document).off("keydown");
  });
}

FormController.prototype.checkEquality = function(rightAnswer, answer) {
  if (typeof answer != 'object') {
    return rightAnswer == answer;
  } else {
    rightAnswer.forEach(function(item, index) {
      if (item != answer[index]) {
        return false;
      }
    });
  }

  return true;
};

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
  this.hideCheckButton = true;
  this.$timeout(function() {
    document.querySelector('#tab0').click();
  }, 0);
};

FormController.prototype.getNumber = function(parentIndex, index, dots = true) {
  if (dots) {
    dots = index == 0 ? "." : ")";
  } else {
    dots = "";
  }

  return index == 0
      ? parentIndex + 1 + dots
      : "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ"[parentIndex] + dots
      ;
};

angular.module('llt.app')
    .component('lltForm', {
      templateUrl: 'components/form/form.component.html',
      controller: FormController
    });