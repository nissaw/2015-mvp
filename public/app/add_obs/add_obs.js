angular.module('gst.add_obs', [])

.controller('AddController', function($scope, $state, $location){
  $scope.obsData = {};
  $scope.obsData.areas = [ 
    {name: 'CHAIR 9', conditions: [{word:'dope!', votes: 1}, {word:'heavy', votes:6}, {word:'thick', votes: 1}]},
    {name: 'CHAIR 3'}, 
    {name: 'TOTW' , conditions: [{word: '', votes: 1}]},
    {name: 'CHAIR 12'},
    {name: 'CHAIR 5'}
  ];

  $scope.obsData.conditions = ['dope', 'heavy', 'thick', 'blower', 'windbuff'];

  $scope.addOb = function(condition){
    $scope.obsData.conditions.push(condition);
    // $location.path('/reports');
    }

})