'use strict';

var claudiaApp = angular.module('claudiaApp', []);

claudiaApp.constant('JmxCommands',{
    memory : {
        name:'java.lang:type=Memory',
        attribute: 'HeapMemoryUsage',
        params:['used','comitted','init','max']
    }
});

claudiaApp.config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cli', {
        templateUrl: 'views/cli.html',
        controller: 'CliCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
