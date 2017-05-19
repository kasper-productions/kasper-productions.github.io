/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('PhotosCtrl',
    function ($scope) {
        $scope.images = [
            {
                id : 1,
                thumbUrl : '../../assets/kasper-drive/DSC00578.JPG',
                url : '../../assets/kasper-drive/DSC00578.JPG'
            },
            {
                id : 2,
                thumbUrl : '../../assets/kasper-drive/DSC00579.JPG',
                url : '../../assets/kasper-drive/DSC00579.JPG'
            },
            {
                id : 3,
                thumbUrl : '../../assets/kasper-drive/DSC00580.JPG',
                url : '../../assets/kasper-drive/DSC00580.JPG'
            }
        ];
    }
);