/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('ContactCtrl',
    function ($scope) {
        
        $scope.user = {};

        //TODO: set this up: https://github.com/dwyl/html-form-send-email-via-google-script-without-server
        //TODO: better alert
        $scope.sendMessage = function () {
            var response;

            if ($scope.user.name == null) {
                response = "Please enter a name!"
            } else if ($scope.user.email == null) {
                response = "Please enter an email so that we can respond back to you!"
            } else if ($scope.user.message == null) {
                response = "Please enter a message!"
            } else {
                response =
                    "Sorry " + $scope.user.name + ", but we are still in the process of building out email system " +
                        "that does not require MAILTO!";
            }

            alert(response);
            $scope.user = {};
        }
    }
);