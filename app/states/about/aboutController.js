/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('AboutCtrl',
    function ($scope) {

        function memberObject(name, position, image, description) {
            return member = {
                name: name,
                position: position,
                image: image,
                description: description
            };
        }
        $scope.memberArray = [
            memberObject("Kawika Avilla", "Web Developer", "../../assets/kawika.jpg")
        ];



    }
);