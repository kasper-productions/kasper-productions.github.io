/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('VideosCtrl',
    function ($scope, $sce, $location, $anchorScroll) {
        //First id is default video

        var videoPreobjects = [
            {id: 'eu5c5ETMMKs', name: "Hobgoblin Cover"},
            {id: '4ZwfnyrWWd0', name: "Member Intro 2.5"},
            {id: 'SbPWDanATyQ', name: "2017 Promo"},
            {id: '1tCM-TADM6k', name: "Rookie Cover"},
            {id: 'lcKH-ngMCM8', name: "Doctor Pepper Dance"},
            {id: 'xHU-eFVxE3k', name: "Yum Yum Cover"},
            {id: '7HpvwF_PpPk', name: "Whisper Cover"},
            {id: 'R544oZHHF-U', name: "Party Favors Dance"},
            {id: 'iKUlsk2R_YU', name: "BTS - Fire Workshop"},
            {id: 'Xykz91bwSDY', name: "2015 Promo"},
            {id: 'I1NwLHeKtEE', name: "GD - Who You? Workshop"},
            {id: 'iGcGb287SxE', name: "Twice - Ooh Ahh Workshop"}
        ];

        var defaultVideoObject = {
            id: videoPreobjects[0].id,
            name: videoPreobjects[0].name,
            thumbnail: "https://img.youtube.com/vi/" + videoPreobjects[0].id + "/hqdefault.jpg",
            embed: "https://www.youtube.com/embed/" + videoPreobjects[0].id
        };

        $scope.currentVideo = defaultVideoObject;
        $scope.videoWithOverlay = null;


        $scope.videoObjects = [];

        $scope.$on('$viewContentLoaded', function() {
            
            for (var i = 0; i < videoPreobjects.length; i += 1) {
                var videoPreobject = videoPreobjects[i];
                var videoObject = {
                    id: videoPreobject.id,
                    name: videoPreobject.name,
                    thumbnail: "https://img.youtube.com/vi/" + videoPreobject.id + "/mqdefault.jpg",
                    embed: "https://www.youtube.com/embed/" + videoPreobject.id
                };

                $scope.videoObjects.push(videoObject);
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