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
        'angular-loading-bar'
    ]
).config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        $urlRouterProvider.otherwise('/dashboard/home');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/main.html',
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

            .state('dashboard.form', {
                templateUrl: 'views/form.html',
                url: '/form'
            })
            .state('dashboard.blank', {
                templateUrl: 'views/pages/blank.html',
                url: '/blank'
            })
            .state('login', {
                templateUrl: 'views/pages/login.html',
                url: '/login'
            })
            .state('dashboard.table', {
                templateUrl: 'views/table.html',
                url: '/table'
            })
            .state('dashboard.panels-wells', {
                templateUrl: 'views/ui-elements/panels-wells.html',
                url: '/panels-wells'
            })
            .state('dashboard.buttons', {
                templateUrl: 'views/ui-elements/buttons.html',
                url: '/buttons'
            })
            .state('dashboard.notifications', {
                templateUrl: 'views/ui-elements/notifications.html',
                url: '/notifications'
            })
            .state('dashboard.typography', {
                templateUrl: 'views/ui-elements/typography.html',
                url: '/typography'
            })
            .state('dashboard.icons', {
                templateUrl: 'views/ui-elements/icons.html',
                url: '/icons'
            })
            .state('dashboard.grid', {
                templateUrl: 'views/ui-elements/grid.html',
                url: '/grid'
            })
    }]);

    
