/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('VideosCtrl',
    function ($scope, $sce) {
        $scope.currentVideo = "https://www.youtube.com/embed/eu5c5ETMMKs";

        var videoIds = [
            'eu5c5ETMMKs', '4ZwfnyrWWd0', 'SbPWDanATyQ',
            '1tCM-TADM6k', 'lcKH-ngMCM8', 'xHU-eFVxE3k',
            '7HpvwF_PpPk', 'R544oZHHF-U', 'iKUlsk2R_YU'
        ];

        $scope.videoObjects = [];

        $scope.$on('$viewContentLoaded', function() {
            for (var i = 0; i < videoIds.length; i += 1) {
                var videoId = videoIds[i];
                var videoObject = {
                    id: videoId,
                    thumbnail: "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg",
                    embed: "https://www.youtube.com/embed/" + videoId
                };

                $scope.videoObjects.push(videoObject);
            }

        });

        $scope.getCurrentVideo = function () {
            return $sce.trustAsResourceUrl($scope.currentVideo);
        }
    }
);