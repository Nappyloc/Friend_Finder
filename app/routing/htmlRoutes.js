// Create Route to survey wich should display the survey page
// Create a default route that leads to the home page

var http = require( 'http' );
var PORT = 7000;
var server = http.createServer( handleRequest );

// start server
server.listen( PORT, function ()
{
    console.log( "we\'s listening boss" )
} )


// function to handle server request routes
function handleRequest ( req, res )
{
    console.log( "We\'s Working Boss" )
    var route = req.url;
    switch ( route ) 
    {
        case "/survey.html":
            return goToSurvey( res );
            break;

        default:
            return goHome( res );

    }
}


var goToSurvey = function ( res )
{
    console.log( "we on the survey here" )
}

var goHome = function ( res )
{
    console.log( "we going home" )
}

