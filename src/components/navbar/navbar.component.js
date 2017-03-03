function NavbarController() {
  $(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
  });
}

angular.module('llt.app')
    .component('lltNavbar', {
      templateUrl: 'components/navbar/navbar.component.html',
      controller: NavbarController,
    });
