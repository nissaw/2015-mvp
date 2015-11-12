angular.module('goskithere', [
  'ui.router',
  // 'ngRoute',
  'gst.add_obs',
  'gst.reports',
  ])

.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('add_obs', {  
      url: '/add_obs',
      templateUrl: 'app/add_obs/add_obs.html',
      controller: 'AddController'
    })
    .state('/reports', {
      url: 'app/reports/reports.html',
      controller: 'ReportsController'
    })
})