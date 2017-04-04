import './form.component.scss';
import template from './form.component.html';

class FormController {
  constructor($routeParams,
              $timeout,
              $sce,
              tests,
              $scope) {
    this.$routeParams = $routeParams;

    this.$timeout = $timeout;
    this.tests = tests;

    this.testId = this.$routeParams.id;
    this.test = this.tests.get(this.$routeParams.id);
    this.currentTab = 0;
    this.results = [];
    this.answers = this.tests.getAnswers(this.test.questions);
    this.count = 0;
    this.showAnswers = false;
    this.hideCheckButton = false;

    this.test.questions.forEach((item) => {
      if (typeof item.question === 'string') {
        item.question = $sce.trustAsHtml(item.question);
      }
    });

    $(document).ready(() => {
      $timeout(() => {
        $('ul.tabs').tabs();
        $('.materialboxed').materialbox();
      }, 0);
    });

    $(document).on("keydown", (event) => {
      if ((event.keyCode || event.which) == 37) {
        if (this.currentTab > 0) {
          this.before(this.currentTab - 1);

          return false;
        }
      }

      if ((event.keyCode || event.which) == 39) {
        if (this.currentTab < 11) {
          this.next(this.currentTab + 1);

          return false;
        }
      }
    });

    $scope.$on("$destroy", () => {
      $(document).off("keydown");
    });
  }

  checkEquality(rightAnswer, answer) {
    if (typeof answer != 'object') {
      return rightAnswer == answer ? 'green' : 'red';
    } else {
      let count = 0;

      rightAnswer.forEach((item, index) => {
        if (item == answer[index]) {
          count++;
        }
      });

      if (count == 4) {
        return 'green';
      } else if (count == 0) {
        return 'red';
      } else {
        return 'yellow';
      }
    }
  }

  before(tab) {
    this.currentTab--;
    this.$timeout(() => {
      document.querySelector('#tab' + tab).click();
    }, 0);
  }

  next(tab) {
    this.currentTab++;
    this.$timeout(() => {
      document.querySelector('#tab' + tab).click();
    }, 0);
  }

  check() {
    this.count = this.tests.check(this.results, this.testId);
    this.showAnswers = true;
    this.hideCheckButton = true;
    this.$timeout(() => {
      document.querySelector('#tab0').click();
    }, 0);
  }

  getNumber(parentIndex, index, dots = true) {
    if (dots) {
      dots = index == 0 ? "." : ")";
    } else {
      dots = "";
    }

    return index == 0
      ? parentIndex + 1 + dots
      : "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ"[parentIndex] + dots
      ;
  }
}

angular.module('llt.app')
  .component('lltForm', {
    template: template,
    controller: FormController
  });