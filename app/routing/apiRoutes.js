

var allFriend = require( '../data/friends.js' )

// ROUTING

module.exports = function ( app )
{
    app.get( "/api/friends", function ( req, res )
    {
        res.json( allFriend );
    } );



    app.post( "/api/friends", function ( req, res )
    {
        var userData = req.body;
        var userScores = userData.scores;
        var scoreDiff = [];

        // loop through all allFriends

        for ( var i = 0; i < allFriend.length; i++ )
        {
            var diff = 0
            // loop through all friends scores to find closest diff
            for ( var j = 0; j < userScores.length; j++ )
            {
                diff += Math.abs( allFriend[ i ].scores[ j ] - userScores[ j ] )
            }
            // push into comparison array
            scoreDiff.push( diff )
        }


        // determine best friend match
        var arrayMatch = 0
        for ( var i = 0; i < scoreDiff.length; i++ )
        {
            if ( scoreDiff[ i ] < scoreDiff[ arrayMatch ] )
            {
                arrayMatch - 1
            }
        }



        // Set BestFriend
        var bestFriend = allFriend[ arrayMatch ]
        console.log( "Bestfriend: " + bestFriend )
        allFriend.push( userData );
        res.json( bestFriend )

    } )




};
