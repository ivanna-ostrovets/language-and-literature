import './welcome-page.component.scss';
import template from './welcome-page.component.html';

function WelcomePageController() {
  $(document).ready(function(){
    $(".start-test").sideNav();
    $('.collapsible').collapsible();
  });
}

angular.module('llt.app')
  .component('lltWelcomePage', {
    template: template,
    controller: WelcomePageController,
  });
