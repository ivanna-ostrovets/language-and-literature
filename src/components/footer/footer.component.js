function FooterController() {
  this.currentYear = new Date().getFullYear();
}

angular.module('llt.app')
  .component('lltFooter', {
    templateUrl: 'components/footer/footer.component.html',
    controller: FooterController,
  });
