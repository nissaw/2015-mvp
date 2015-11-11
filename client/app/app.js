angular.module('goskithere', [
  'ui.router',
  'gst.add_obs',
  'gst.reports',
  ])

.config(function config($stateProvider){
  $stateProvider
    .state('/add_obs', {  
      url: 'app/add_obs/add_obs.html',
      controller: 'AddController'
    })
    .state('/reports', {
      url: 'app/reports/reports.html',
      controller: 'ReportsController'
    })
})