module.exports = function(grunt) {
  grunt.initConfig({
    testee: {
      options: {
        reporter: 'Spec',
        browsers: ['firefox']
      },
      firefox: ['test/test.html'],
      coverage: {
        options: {
          coverage: {
            ignore: ['bower_components/', 'test/']
          }
        },
        src: ['test/test.html']
      },
      browserstack: {
        options: {
          timeout: 600,
          tunnel: {
            type: 'browserstack',
            key: process.env.BROWSERSTACK_PASSWORD
          },
          launch: {
            type: 'browserstack',
            username: process.env.BROWSERSTACK_USER,
            password: process.env.BROWSERSTACK_PASSWORD,
            version: 2
          },
          browsers: [{
            "os": "ios",
            "device": "iPad Mini",
            "version": 6.0
          }, {
            "os": "android",
            "device": "Samsung Galaxy S III",
            "version": "4.1"
          }]
        },
        src: ['test/test.html']
      }
    }
  });

  grunt.loadNpmTasks('testee');

  grunt.registerTask('test', ['testee:firefox']);
};