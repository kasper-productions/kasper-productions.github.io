/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('PhotosCtrl',
    function ($scope) {
        $scope.images = [
            {
                id : 1,
                thumbUrl : 'https://pixabay.com/static/uploads/photo/2016/06/13/07/32/cactus-1453793__340.jpg',
                url : 'https://pixabay.com/static/uploads/photo/2016/06/13/07/32/cactus-1453793_960_720.jpg'
            },
            {
                id : 2,
                thumbUrl : 'https://pixabay.com/static/uploads/photo/2016/06/10/22/25/ortler-1449018_960_340.jpg',
                url : 'https://pixabay.com/static/uploads/photo/2016/06/10/22/25/ortler-1449018_960_720.jpg'
            },
            {
                id : 3,
                thumbUrl : 'https://pixabay.com/static/uploads/photo/2016/04/11/18/53/aviator-1322701__340.jpg',
                url : 'https://pixabay.com/static/uploads/photo/2016/04/11/18/53/aviator-1322701_960_720.jpg'
            }
        ];
    }
);