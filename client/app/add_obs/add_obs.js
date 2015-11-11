angular.module('gst.add_obs', [])

.controller('AddController', function($scope){
  $scope.obsData =  {};
  $scope.obsData.areas = ['chair9', 'chair3']
})