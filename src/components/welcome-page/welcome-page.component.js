import './welcome-page.component.scss';
import template from './welcome-page.component.html';

class WelcomePageController {
}

angular.module('llt.app')
  .component('lltWelcomePage', {
    template: template,
    controller: WelcomePageController,
  });
