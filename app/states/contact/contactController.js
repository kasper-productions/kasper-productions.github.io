/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('ContactCtrl',
    function ($scope, $http, $modal) {
        
        $scope.user = {};
        $scope.response = "";
        $scope.notEnoughData = false;

        $scope.sendMessage = function () {
            $scope.response = "";
            $scope.notEnoughData = false;

            if ($scope.user.name == null) {
                $scope.response = "Please enter a name!";
                $scope.notEnoughData = true;
            } else if ($scope.user.email == null) {
                $scope.response = "Please enter an email so that we can respond back to you!";
                $scope.notEnoughData = true;
            } else if ($scope.user.subject == null) {
                $scope.response = "Please enter a subject for the email!";
                $scope.notEnoughData = true;
            } else if ($scope.user.message == null) {
                $scope.response = "Please enter a message!";
                $scope.notEnoughData = true;
            } else {
                $http({
                    method  : 'POST',
                    url     : 'https://script.google.com/macros/s/AKfycbwkeLccwlvni45Wfmb3qGBvSf94imDeqF68E7qpGduX-glZV25d/exec',
                    data    : $scope.user,
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(
                    function() {
                        $scope.response = "Sent! We will respond to " + $scope.user.email + " as soon as possible!";
                        $scope.user = {};
                        $scope.openAlert();
                    }
                );
            }

            if ($scope.notEnoughData) {
                $scope.openAlert();
            }

        };

        $scope.openAlert = function () {
            $modal.open({
                templateUrl: 'contactModal.html',
                windowClass: 'contactModal',
                scope: $scope
            });
        }
    }
);