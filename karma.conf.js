// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Configurations can be set here
      },
      clearContext: false // Leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // Removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/weather-node-admin-dashboard'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessCustom'], // Updated to use custom launcher
    singleRun: true,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-web-security', // Disable web security for cross-origin access if necessary
          '--disable-translate',
          '--disable-extensions',
          '--remote-debugging-port=9222', // This is important if you want to debug
          '--proxy-server="direct://"', // Use direct connection without proxy
          '--proxy-bypass-list=*', // Bypass for localhost
          '--no-proxy-server'
        ],
        browserNoActivityTimeout: 30000, // Extended timeout
      }
    }
  });
};

