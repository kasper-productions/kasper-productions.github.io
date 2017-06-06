/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('VideosCtrl',
    function ($scope, $sce) {
        $scope.currentVideo = "https://www.youtube.com/embed/eu5c5ETMMKs";

        $scope.$on('$viewContentLoaded', function() {

        });

        $scope.getCurrentVideo = function () {
            return $sce.trustAsResourceUrl($scope.currentVideo);
        }
    }
);