/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('ContactCtrl',
    function ($scope, $http) {
        
        $scope.user = {};

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
                    function(data) {
                        $scope.user = {};
                        response = data.message;
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