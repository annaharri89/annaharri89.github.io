/**
 * Created by ETASpare on 8/7/2017.
 */
angular.module('AnnasPortfolio').controller('HPFPulseCarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlides = function() {
        var images = [
            'screen_shot_main.png',
            'screen_shot_map.png',
            'screen_shot_all_resources.png',
            'screen_shot_domestic_violence.png'
        ];
        for (var i = 0; i < images.length; i++) {
            slides.push({
            image: 'images/' + images[i],
            text: ['Main Page', 'Map Page', 'All Resources', 'Category Resources'][slides.length % 4],
            id: currIndex++
        });
        }
    };

    $scope.addSlides();
});