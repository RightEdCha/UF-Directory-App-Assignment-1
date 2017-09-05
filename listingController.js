angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({'code': $scope.code, 'name':$scope.name, 'coordinates': { 'latitude': $scope.latitude, 'longitude': $scope.longitude},'address': $scope.address});
      $scope.code='';
      $scope.name='';
      $scope.address='';
      $scope.latitude='';
      $scope.longitude='';  /* notes to self: after we are done pushing our initial values into a listing object, then set the variables from the directive to "empty"*/
    };
    $scope.deleteListing = function(index) {
  		$scope.listings.splice( index, 1 );
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
