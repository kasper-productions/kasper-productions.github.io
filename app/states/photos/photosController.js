/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('PhotosCtrl',
    function ($scope) {

        $scope.images = [];

        $scope.fileNames = [
            'Andrew 1.jpg', 'Chloe.jpg', 'David.jpg',
            'DSC00578.JPG', 'DSC00579.JPG', 'DSC00580.JPG',
            'DSC00581.JPG', 'DSC00582.JPG', 'DSC00584.JPG',
            'DSC00586.JPG', 'DSC00587.JPG', 'DSC00771.JPG',
            'DSC00807.JPG', 'DSC00809.JPG', 'DSC00816.JPG',
            'DSC00817.JPG', 'DSC00822.JPG', 'DSC00826.JPG',
            'DSC00827.JPG', 'DSC00829.JPG', 'DSC00830.JPG',
            'DSC00803.JPG', 'DSC00805.JPG', 'DSC00806.JPG',
            'DSC00772.JPG', 'DSC00774.JPG', 'DSC00775.JPG',
            'DSC00776.JPG', 'DSC00777.JPG', 'DSC00778.JPG',
            'DSC00779.JPG', 'DSC00780.JPG', 'DSC00781.JPG',
            'DSC00796.JPG', 'DSC00797.JPG', 'DSC00802.JPG',
            'DSC00803.JPG', 'DSC00805.JPG', 'DSC00806.JPG',
            'DSC00807.JPG', 'DSC00809.JPG', 'DSC00816.JPG',
            'DSC00817.JPG', 'DSC00822.JPG', 'DSC00826.JPG',
            'DSC00827.JPG', 'DSC00829.JPG', 'DSC00830.JPG',
            'DSC00803.JPG', 'DSC00805.JPG', 'DSC00806.JPG',
            'DSC00803.JPG', 'DSC00805.JPG', 'DSC00579.JPG',
            'DSC00831.JPG', 'DSC00840.JPG', 'DSC00859.JPG',
            'Elena.jpg', 'Eva.jpg', 'DSC00840.JPG', 'DSC00859.JPG',
            'IMG_9525.JPG', 'IMG_9527.JPG', 'IMG_9663.JPG',
            'Ivory1.jpg', 'Jeff 1.jpg', 'Jeff.jpg',
            'Jihan.jpg', 'Jin-An2.jpg', 'Jing Jing.jpg',
            'Karie 1.jpg', 'Kathy 2.jpg', 'Kayla 1.jpg',
            'Lisa 1.jpg', 'Ruilin.jpg', 'Yodi 1.jpg',
            'Yodi 2.jpg', 'Yodi.jpg'

        ];

        $scope.$on('$viewContentLoaded', function(){
            for (var i = 0; i < $scope.fileNames.length; i += 1) {
                var fileName = $scope.fileNames[i];
                var imgObj = {
                    id: i + 1,
                    thumbUrl: '../../assets/kasper-drive-thumbs/' + fileName,
                    url: '../../assets/kasper-drive/' + fileName
                };

                $scope.images.push(imgObj);
            }
        });
    }
);