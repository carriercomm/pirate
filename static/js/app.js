
'use strict';

/* The seagull angular application */
var seagull = angular.module('seagull', [
  'ngRoute',
  'seagullControllers',
  'seagullServices',
  'ngCookies',
  'ui.bootstrap',
  'yaru22.md'
]);

/* Configurate application like router and others*/
seagull.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    /* Remove the # in url from Angular */
    $locationProvider.html5Mode(true);

    /* Set router, all in /js/controllers.js */
    $routeProvider.
      when('/', {
        templateUrl: '/static/html/home.html',
        controller: 'HomeController'
      }).
      when('/images', {
        templateUrl: '/static/html/images.html',
        controller: 'ImagesController'
      }).
      when('/images/info', {
        templateUrl: '/static/html/image.html',
        controller: 'ImageController'
      }).
      when('/images/:user/:repo', {
        templateUrl: '/static/html/image.html',
        controller: 'ImageController'
      }).
      when('/configuration', {
        templateUrl: '/static/html/configuration.html',
        controller: 'ConfigurationController'
      });
      /* No default page for angular so that beego can process API request
      otherwise({
        redirectTo: '/'
      }); */
  }]
);

/* Filter to convert file size into readable string, code from https://gist.github.com/yrezgui/5653591 */
seagull.filter( 'filesize', function () {
  var units = [
    'bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB'
  ];

  return function( bytes, precision ) {
    if ( isNaN( parseFloat( bytes )) || ! isFinite( bytes ) ) {
      return '?';
    }

    var unit = 0;
    while ( bytes >= 1024 ) {
      bytes /= 1024;
      unit ++;
    }
    return bytes.toFixed( + precision ) + ' ' + units[ unit ];
  };
});

/* Filter to convert string array into string */
seagull.filter( 'array_to_string', function () {
  return function( strings ) {
    if ( !Array.isArray(strings) ) {
      return '';
    }

    var result = "";
    for (var i=0; i<strings.length; i++) {
      result += strings[i];
      if (i != strings.length-1) {
        result += ", ";
      }
    }
    return result;
  };
});

/* Filter to convert boolean into string */
seagull.filter( 'boolean_to_string', function () {
  return function( bool ) {
    /* Todo: Determine it is boolean or not but it seems not work
    if ( typeof bool != "boolean" ) {
      return '';
    } */

    if (bool) {
      return "true";
    } else {
      return "false";
    }
  };
});

/* Refer to http://www.ng-newsletter.com/posts/angular-translate.html for i18n */
seagull.controller('IndexController', function ($scope) {

});
