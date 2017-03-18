import './navbar.component.scss';
import template from './navbar.component.html';

class NavbarController {
  constructor() {
    $(document).ready(() => {
      $(".start-test").sideNav();
      $('.collapsible').collapsible();
    });
  }

  openHelp() {
    $('.modal').modal();
    $('#modal1').modal('open');
  }
}

angular.module('llt.app')
    .component('lltNavbar', {
      template: template,
      controller: NavbarController
    });
