function WelcomePageController() {
  $(document).ready(function(){
    $(".start-test").sideNav();
    $('.collapsible').collapsible();
  });
}

angular.module('llt.app')
  .component('lltWelcomePage', {
    templateUrl: 'components/welcome-page/welcome-page.component.html',
    controller: WelcomePageController,
  });
