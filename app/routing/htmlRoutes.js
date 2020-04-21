// Create Route to survey wich should display the survey page
// Create a default route that leads to the home page


var path = require( "path" );




module.exports = function ( app )
{

    app.get( "/survey", function ( req, res )
    {
        res.sendFile( path.join( __dirname, "../public/survey.html" ) );
    } );
    // If no matching route is found default to home
    app.get( "*", function ( req, res )
    {
        res.sendFile( path.join( __dirname, "../public/home.html" ) );
    } );

};






