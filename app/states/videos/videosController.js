/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('VideosCtrl',
    function ($scope, $sce, $location, $anchorScroll) {
        //First id is default video

        var videoIds = [
            'eu5c5ETMMKs', '4ZwfnyrWWd0', 'SbPWDanATyQ',
            '1tCM-TADM6k', 'lcKH-ngMCM8', 'xHU-eFVxE3k',
            '7HpvwF_PpPk', 'R544oZHHF-U', 'iKUlsk2R_YU',
            'Xykz91bwSDY', 'I1NwLHeKtEE', 'iGcGb287SxE'
        ];

        var defaultVideoObject = {
            id: videoIds[0],
            thumbnail: "https://img.youtube.com/vi/" + videoIds[0] + "/hqdefault.jpg",
            embed: "https://www.youtube.com/embed/" + videoIds[0]
        };

        $scope.currentVideo = defaultVideoObject;
        $scope.videoWithOverlay = null;


        $scope.videoObjects1 = [];
        $scope.videoObjects2 = [];
        $scope.videoObjects3 = [];
        $scope.videoObjects4 = [];

        $scope.$on('$viewContentLoaded', function() {
            var pushToCol = 1;
            
            for (var i = 0; i < videoIds.length; i += 1) {
                var videoId = videoIds[i];
                var videoObject = {
                    id: videoId,
                    thumbnail: "https://img.youtube.com/vi/" + videoId + "/mqdefault.jpg",
                    embed: "https://www.youtube.com/embed/" + videoId
                };

                switch (pushToCol) {
                    case (1):
                        $scope.videoObjects1.push(videoObject);
                        pushToCol += 1;
                        break;
                    case (2):
                        $scope.videoObjects2.push(videoObject);
                        pushToCol += 1;
                        break;
                    case (3):
                        $scope.videoObjects3.push(videoObject);
                        pushToCol += 1;
                        break;
                    case (4):
                        $scope.videoObjects4.push(videoObject);
                        pushToCol = 1;
                        break;
                    default:
                        $scope.videoObjects1.push(videoObject);
                        pushToCol = 1;
                        break;
                }
            }

        });

        $scope.getCurrentVideo = function () {
            return $sce.trustAsResourceUrl($scope.currentVideo.embed);
        };

        $scope.getObjectThatIsShowingOverlay = function () {
            return $scope.videoWithOverlay;
        };

        $scope.showOverlay = function (videoObject) {
            $scope.videoWithOverlay = videoObject;
        };

        $scope.selectVideo = function (videoObject) {
            $scope.currentVideo = videoObject;
            $location.hash("current-video");
            $anchorScroll.yOffset = 83;
            $anchorScroll();
        }
    }
);