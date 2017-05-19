'use strict';
/**
 * @ngdoc overview
 * @name kApp
 * @description
 * # kApp
 *
 * Main module of the application.
 */
angular.module('kApp', [

        // Libraries
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngAnimate',
        'thatisuday.ng-image-gallery'
    ]
).config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', 'ngImageGalleryOptsProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, ngImageGalleryOptsProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        ngImageGalleryOptsProvider.setOpts({
            thumbnails  	:   true,
            thumbSize		: 	80,
            inline      	:   false,
            bubbles     	:   true,
            bubbleSize		: 	20,
            imgBubbles  	:   false,
            bgClose     	:   false,
            piracy 			: 	false,
            imgAnim 		: 	'fadeup'
        });

        $urlRouterProvider.otherwise('/dashboard/home');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'scripts/directives/header/header.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'kApp',
                                files: [
                                    'scripts/directives/header/header.js'
                                ]
                            })
                    }
                }
            })
            .state('dashboard.home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: 'states/home/home.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'kApp',
                            files: [
                                'states/home/homeController.js'
                            ]
                        })
                    }
                }
            })

            .state('dashboard.about', {
                url: '/about',
                controller: 'AboutCtrl',
                templateUrl: 'states/about/about.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'kApp',
                            files: [
                                'states/about/aboutController.js'
                            ]
                        })
                    }
                }
            })

            .state('dashboard.contact', {
                url: '/contact',
                controller: 'ContactCtrl',
                templateUrl: 'states/contact/contact.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'kApp',
                            files: [
                                'states/contact/contactController.js'
                            ]
                        })
                    }
                }
            })

            .state('dashboard.photos', {
                url: '/photos',
                controller: 'PhotosCtrl',
                templateUrl: 'states/photos/photos.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'kApp',
                            files: [
                                'states/photos/photosController.js'
                            ]
                        })
                    }
                }
            })

            .state('dashboard.requests', {
                url: '/requests',
                controller: 'RequestsCtrl',
                templateUrl: 'states/requests/requests.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'kApp',
                            files: [
                                'states/requests/requestsController.js'
                            ]
                        })
                    }
                }
            })

            .state('dashboard.videos', {
                url: '/videos',
                controller: 'VideosCtrl',
                templateUrl: 'states/videos/videos.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'kApp',
                            files: [
                                'states/videos/videosController.js'
                            ]
                        })
                    }
                }
            })
    }]);

    
