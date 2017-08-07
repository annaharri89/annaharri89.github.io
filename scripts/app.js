/**
 * Created by ETASpare on 8/7/2017.
 */
var myApp = angular.module('AnnasPortfolio', ['ngResource', 'ui.router', 'ui.bootstrap']);

myApp.config(function($stateProvider) {
    var stitchCounterState = {
        name: 'stitchCounter',
        url: '/',
        templateUrl: 'templates/stitchCounter.html'
    };

    var portfolioState = {
        name: 'portfolio',
        url: '/portfolio',
        templateUrl: 'templates/portfolio.html'
    };

    var crochetCentralState = {
        name: 'crochetCentral',
        url: '/crochet_central',
        templateUrl: 'templates/crochetCentral.html'
    };

    $stateProvider.state(stitchCounterState);
    $stateProvider.state(portfolioState);
    $stateProvider.state(crochetCentralState);
});