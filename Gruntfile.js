module.exports = function(grunt) {

  grunt.initConfig({

    exec: {
      build: {
        command: 'npm run build',
        stdout: true,
        stderr: true
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'lib/perfBar.css': 'lib/scss/perfBar.scss'
        }
      }
    },

    watch: {
      files: ['lib/scss/perfBar.scss', 'lib/perfbar.js'],
      tasks: ['sass', 'exec:build']
    }

  });


  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'exec:build', 'watch']);

};