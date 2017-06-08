//funcion contenedora de grunt
module.exports = function(grunt) {

  //funcion de configuracion de grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'sources/scss',
          src: ['*.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    },
    haml: {
      dist: {
        files: {
          'sources/haml/index.haml': 'build/html/index.html',
        }
      }
    },
    watch: {
      css: {
        files: 'sources/scss/*.scss',
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false
        }
      },
      html: {
        files: ['sources/haml/**/*.haml'],
        task: ['haml'],
        options: {
          livereload: true
        }
      }
    },
  });

  // Cargar de plugins externos que usa grunt
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //registro de tarea por defecto
  grunt.registerTask('default', ['watch']);

};
