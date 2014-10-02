// Define our Angular module
// Everything will be attached to this module instance - controllers, factories, etc
var angularPDX = angular.module('AngularPDX', ['ngResource']);

// Note the dependency injection (DI) of the $resource object)
angularPDX.factory('Product', ['$resource', function($resource) {
  // Resource object to wrap RESTful resource
  return $resource('/products');
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
}]);
