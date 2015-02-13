module.exports = function() {


    path = require('path');
    spawn = require('child_process').spawn;

    args = arguments
    base = path.join( path.dirname( __filename ), '..');

    spawn(

        'php',
        [ '-f', base + '/' + 'cmdbia.php', args[0], args[1] ]

    );

}


