/**
 * Created by ETASpare on 8/7/2017.
 */
angular.module('ui.bootstrap').controller('TabsCtrl', function ($scope) {
    $scope.tabs = [
        { title:'Stitch Counter', content:'<a ui-sref="stitchCounter">Stitch Counter</a>' },
        { title:'Portfolio', content:'<a ui-sref="portfolio" >Portfolio</a>' },
        { title:'Crochet Central', content:'<a ui-sref="crochetCentral" >Crochet Central</a>' }
    ];

    $scope.model = {
        name: 'Tabs'
    };
});