module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      build: {
        options: {
          paths: ['assets/css'],
        },
        files: {
          'assets/css/main.css': 'src/less/main.less'
        }
      }
    },

    watch: {
      less: {
        files: 'src/less/*',
        tasks: 'less:build',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);  
}
