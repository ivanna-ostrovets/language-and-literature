import './navbar.component.scss';
import template from './navbar.component.html';

function NavbarController() {
  $(document).ready(function() {
    $(".start-test").sideNav();
    $('.collapsible').collapsible();
  });
}

NavbarController.prototype.openHelp = function() {
  $('.modal').modal();
  $('#modal1').modal('open');
};

angular.module('llt.app')
    .component('lltNavbar', {
      template: template,
      controller: NavbarController
    });
