angular.module('llt.app')
    .directive('sideNavClose', function() {
      return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
          elem.on('click', function() {
            $(attrs.sideNavClose).sideNav('hide');
          })
        }
      }
    });