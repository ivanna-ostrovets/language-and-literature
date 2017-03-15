import './footer.component.scss';
import template from './footer.component.html';

function FooterController() {
  this.currentYear = new Date().getFullYear();
}

angular.module('llt.app')
  .component('lltFooter', {
    template: template,
    controller: FooterController,
  });
