import './footer.component.scss';
import template from './footer.component.html';

class FooterController {
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}

angular.module('llt.app')
  .component('lltFooter', {
    template: template,
    controller: FooterController,
  });
