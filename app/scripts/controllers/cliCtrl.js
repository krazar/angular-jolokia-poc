/**
 * Created by pierremarot on 29/10/2013.
 */
var claudiaApp = angular.module('claudiaApp');

claudiaApp.controller('CliCtrl', function ($scope, JolokiaService) {

    $scope.callJolokia = function(name,attribute,path){
        return JolokiaService.getAttribute(name,attribute,path);
    }
});
