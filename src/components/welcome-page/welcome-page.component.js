function WelcomePageController() {
  $(document).ready(function(){
    $('.carousel').carousel();
  });
}

angular.module('llt.app')
  .component('lltWelcomePage', {
    templateUrl: 'components/welcome-page/welcome-page.component.html',
    controller: WelcomePageController,
  });
