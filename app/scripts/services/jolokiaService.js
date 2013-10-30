/**
 * Created by pierremarot on 29/10/2013.
 */
angular.module('claudiaApp').service('JolokiaService', function () {

    return new Jolokia("http://localhost:8080/jolokia");

});