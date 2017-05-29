/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('ContactCtrl',
    function ($scope, $http) {
        
        $scope.user = {};

        //TODO: format google script in kawika.kasper increment version for reference:
        //TODO: https://github.com/dwyl/html-form-send-email-via-google-script-without-server
        //TODO: better alert
        $scope.sendMessage = function () {
            var response;
            var notEnoughData = false;

            if ($scope.user.name == null) {
                response = "Please enter a name!";
                notEnoughData = true;
            } else if ($scope.user.email == null) {
                response = "Please enter an email so that we can respond back to you!";
                notEnoughData = true;
            } else if ($scope.user.message == null) {
                response = "Please enter a message!";
                notEnoughData = true;
            } else {
                $http({
                    method  : 'POST',
                    url     : 'https://script.google.com/macros/s/AKfycbwkeLccwlvni45Wfmb3qGBvSf94imDeqF68E7qpGduX-glZV25d/exec',
                    data    : $scope.user,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(
                    function() {
                        response = "Message sent! We will respond to " + $scope.user.email + " as soon as possible!";
                        $scope.user = {};
                        alert(response);
                    }
                );
            }

            if (notEnoughData) {
                alert(response);
            }

        }
    }
);