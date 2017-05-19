/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('PhotosCtrl',
    function ($scope) {
        $scope.images = [
            { id: 1, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00578.JPG', url: '../../assets/kasper-drive/DSC00578.JPG'},
            { id: 2, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00579.JPG', url: '../../assets/kasper-drive/DSC00579.JPG'},
            { id: 3, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00580.JPG', url: '../../assets/kasper-drive/DSC00580.JPG'},
            { id: 4, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00581.JPG', url: '../../assets/kasper-drive/DSC00581.JPG'},
            { id: 5, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00582.JPG', url: '../../assets/kasper-drive/DSC00582.JPG'},
            { id: 6, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00584.JPG', url: '../../assets/kasper-drive/DSC00584.JPG'},
            { id: 7, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00586.JPG', url: '../../assets/kasper-drive/DSC00586.JPG'},
            { id: 8, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00587.JPG', url: '../../assets/kasper-drive/DSC00587.JPG'},
            { id: 9, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00826.JPG', url: '../../assets/kasper-drive/DSC00826.JPG'},
            { id: 10, thumbUrl: '../../assets/kasper-drive-thumbs/DSC00840.JPG', url: '../../assets/kasper-drive/DSC00840.JPG'}
        ];
    }
);