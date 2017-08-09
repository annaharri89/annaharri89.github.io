var myApp = angular.module('AnnasPortfolio', ['ngResource', 'ui.router', 'ui.bootstrap']);

myApp.config(function($stateProvider) {
    var stitchCounterState = {
        name: 'stitchCounter',
        url: '',
        templateUrl: 'templates/stitchCounter.html'
    };

    var crochetCentralState = {
        name: 'crochetCentral',
        url: '/crochet_central',
        templateUrl: 'templates/crochetCentral.html'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'templates/about.html'
    };

    $stateProvider.state(stitchCounterState);
    $stateProvider.state(crochetCentralState);
    $stateProvider.state(aboutState);
});