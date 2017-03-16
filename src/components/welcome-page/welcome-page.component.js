function WelcomePageController() {
}

WelcomePageController.prototype.openSideNav = function () {
  $(".start-test").sideNav('show');
};

angular.module('llt.app')
    .component('lltWelcomePage', {
      templateUrl: 'components/welcome-page/welcome-page.component.html',
      controller: WelcomePageController,
    });
