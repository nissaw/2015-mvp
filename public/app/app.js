angular.module('goskithere', [
  'ui.router',
  'gst.add_obs',
  'gst.reports',
  ])

.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/reports');

  $stateProvider
    .state('add_obs', {  
      url: '/add_obs',
      templateUrl: 'app/add_obs/add_obs.html',
      controller: 'AddController'
    })
    .state('reports', {
      url: '/reports',
      templateUrl: 'app/reports/reports.html',
      controller: 'ReportsController'
    })
    .state('conditions', {
      url: '/conditions',
      templateUrl: 'app/conditions/conditions.html',
      controller: 'AddController'
    })
})