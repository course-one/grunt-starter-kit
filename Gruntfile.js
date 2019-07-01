const path = require( 'path' );

// wrapper function that grunt executes
module.exports = ( grunt ) => {

    // configure project
    // mostly, task name will be equal to configuration key
    grunt.initConfig( {
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },

                // dest: source
                files: {
                    './dist/style.css' : './src/style.scss'
                }
            }
        }
    } );

    // load plugins, these contain tasks
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    // ... load other plugins

    // register a default task (optional)
    grunt.registerTask( 'default', [ 'sass' ] );
    // ... register other tasks

};

// run grunt tasks
// $ grunt 
// $ grunt default  (same as `grunt` command)
// $ grunt custom-task
