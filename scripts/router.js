/**
 * Created by ETASpare on 8/7/2017.
 */
var myApp = angular.module('router', ['ui.router']);

myApp.config(function($stateProvider) {
    var stitchCounterState = {
        name: 'stitchCounter',
        url: '/',
        template: '<h3>hello world!</h3>'
    };

    var portfolioState = {
        name: 'portfolio',
        url: '/portfolio',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    var crochetCentralState = {
        name: 'crochetCentral',
        url: '/crochet_central',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(stitchCounterState);
    $stateProvider.state(portfolioState);
    $stateProvider.state(crochetCentralState);
});