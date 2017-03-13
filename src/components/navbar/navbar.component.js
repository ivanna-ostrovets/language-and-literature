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
      templateUrl: 'components/navbar/navbar.component.html',
      controller: NavbarController
    });
