angular.module('llt.app')
    .directive('sideNavClose', () => {
      return {
        restrict: 'A',
        link: (scope, elem, attrs) => {
          elem.on('click', () => {
            $(attrs.sideNavClose).sideNav('hide');

            $(".collapsible-header").removeClass(() => {
              return "active";
            });
            $(".collapsible").collapsible({accordion: false});
          })
        }
      }
    });