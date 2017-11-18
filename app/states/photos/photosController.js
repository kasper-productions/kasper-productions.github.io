/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('PhotosCtrl',
    function ($scope) {

        /**
         * Album Object:
         *
         * in S3 should be mapped out to contain initial character ID, and the number of the image in order.
         * along with m for main and t for thumbs
         *
         * id (character): initial character in AWS S3
         * fileType (string): file type S3, example: JPEG
         * lastImageNumber (int): the last image in S3 for mapping purposes
         * path (string): path in S3
         * name (string): to be displayed in website
         * photos (array of image objects): for display purposes
         */

        var album1 = {
            id: 'b',
            fileType: '.jpg',
            lastImageNumber: 61,
            path: 'balloons',
            name: 'Balloons',
            photos: []
        };

        $scope.albums = [ album1 ];

        $scope.imagesCol1 = [];
        $scope.imagesCol2 = [];
        $scope.imagesCol3 = [];

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
            for (var i = 0; i < $scope.albums.length; i += 1) {
                var album = $scope.albums[i];
                mapPhotosToAlbum(album);
            }
        });

        function mapPhotosToAlbum (album) {
            if (!album.id || !album.lastImageNumber || !album.path || !album.name) {
                return;
            }

            for (var i = 0; i < album.lastImageNumber; i += 1) {
                var imageId = i + 1;
                var fileName = album.id + (i + 1).toString() + album.fileType;
                var imgObj = {
                    id: imageId,
                    thumbUrl: 'https://s3.us-east-2.amazonaws.com/kasperprodphotos/' + album.path + '/t/' + fileName ,
                    url: 'https://s3.us-east-2.amazonaws.com/kasperprodphotos/' + album.path + '/m/' + fileName
                };
                album.photos.push(imgObj);
            }
        }

        $scope.onAlbumSelected = function (photos) {
            mapIntoColumns(photos);
        };

        function mapIntoColumns (objects) {
            var pushToCol = 1;
            for (var i = 0; i < objects.length; i += 1) {
                var imgObj = objects[i];

                switch (pushToCol) {
                    case (1):
                        $scope.imagesCol1.push(imgObj);
                        pushToCol += 1;
                        break;
                    case (2):
                        $scope.imagesCol2.push(imgObj);
                        pushToCol += 1;
                        break;
                    case (3):
                        $scope.imagesCol3.push(imgObj);
                        pushToCol = 1;
                        break;
                    default:
                        $scope.imagesCol1.push(imgObj);
                        pushToCol = 1;
                        break;
                }
            }
        }

    }
);