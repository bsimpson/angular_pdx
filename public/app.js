// Define our Angular module
// Everything will be attached to this module instance - controllers, factories, etc
var angularPDX = angular.module('AngularPDX', ['ngResource', 'ngRoute']);

// Note the dependency injection (DI) of the $resource object)
angularPDX.factory('Product', ['$resource', function($resource) {
  // Resource object to wrap RESTful resource
  return $resource('/products/:id');
}]);

// Our controller binds to items within the context of ng-controller="ProductsCtrl"
// injecting $scope, and Product factory
angularPDX.controller('ProductsCtrl', ['$scope', 'Product', function($scope, Product) {
  // query() called to retrieve collection of products
  // $promise is built into resource object
  Product.query().$promise.then(function(response) {
    // then is executed from $promise and assigns products as property on $scope
    $scope.products = response;
  });

  $scope.addProduct = function(product) {
    product.created_at = new Date();
    // Push new product onto collection
    // triggers $scope.$apply()
    $scope.products.push(product)
    $scope.product = {}
  }

  // Bind to controller action for ng-click event
  $scope.toggleDateFormatting = function() {
    switch($scope.dateFormat) {
      case 'short':
        $scope.dateFormat = 'medium';
        break;
      case 'medium':
        $scope.dateFormat = 'fullDate';
        break;
      case 'fullDate':
        $scope.dateFormat = 'short';
        break;
      default:
        $scope.dateFormat = 'fullDate';
        break;
    }
  }
}]);

angularPDX.controller('ProductDetailsCtrl', ['$scope', '$routeParams', 'Product', function($scope, $routeParams, Product) {
  $scope.product = Product.get({ id: $routeParams.productId });
}]);

angularPDX.filter('between', function() {
  return function(input, min, max) {
    if (typeof input !== 'undefined') {
      selected = [];
      for(x=0; x < input.length; x++) {
        if (input[x].price < max && input[x].price >= min) {
          selected.push(input[x]);
        }
      }
      return selected;
    }
  }
});

// Templates in part allow reuse of HTML
// Events can be attached and bound as well
// By default attributes are matched, but you can match via element, attribute, or class
angularPDX.directive('product', function() {
  return {
    // Uses static file for template
    templateUrl: '_product.html'
  };
});

angularPDX.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/products', {
      templateUrl: 'products.html',
      controller: 'ProductsCtrl'
    }).
    when('/product/:productId', {
      templateUrl: 'product.html',
      controller: 'ProductDetailsCtrl'
    }).
    otherwise({
      redirectTo: '/products'
    });
}]);
