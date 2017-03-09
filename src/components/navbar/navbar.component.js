function NavbarController() {
  $(document).ready(function() {
    $(".start-test").sideNav();
    $('.collapsible').collapsible();
    $('.modal').modal();
  });
}

angular.module('llt.app')
    .component('lltNavbar', {
      templateUrl: 'components/navbar/navbar.component.html',
      controller: NavbarController
    });
