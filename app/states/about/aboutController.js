/**
 * Created by kawika on 5/4/17.
 */
angular.module('kApp').controller('AboutCtrl',
    function ($scope, $modal) {
        
        $scope.selectedMember = null;

        function memberObject(name, position, image, description) {
            return member = {
                name: name,
                position: position,
                image: image,
                description: description
            };
        }
        
        $scope.memberArray = [
            memberObject("Tammy L. Park", "Creative Director", "../../assets/tammy.jpg"),
            memberObject("Shelly Yang", "Executive Producer", "../../assets/shelly.jpg"),
            memberObject("Cindy Xu", "Producer", "../../assets/cindy.jpg"),
            memberObject("Jin-An Ho", "Producer", "../../assets/jin-an.jpg"),

            memberObject("Kawika Avilla", "Web Developer", "../../assets/kawika.jpg",
                "Member since 2017. Full Time Developer at WeightUp Solutions. Graduated from University of Wisconsin - Madison " +
                "with a B.S. in Computer Science."
            )
        ];
        
        $scope.selectMember = function (memberObj) {
            $scope.selectedMember = memberObj;
            $modal.open({
                templateUrl: 'memberModal.html',
                windowClass: 'memberModal',
                scope: $scope
            });
        }



    }
);