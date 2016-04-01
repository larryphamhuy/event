module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      /*'//code.angularjs.org/1.4.0/angular-messages.js',
      'https://cdn.firebase.com/libs/angularfire/1.1.3/angularfire.min.js',
      'https://cdn.firebase.com/js/client/2.2.4/firebase.js',
      'app/bower_components/jquery/dist/jquery.min.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
      'app/app.run.mocks.js',*/
      'app/app.js',
      'app/components/events/**/*.js',
      'app/components/home/**/*.js',
      'app/components/login/**/*.js',      
      'test/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
