

var allFriend = require( '../data/friends.js' )

// ROUTING

module.exports = function ( app )
{
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get( "/api/friends", function ( req, res )
    {
        res.json( allFriend );
    } );

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post( "/api/friends", function ( req, res )
    {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware

        var bestFriend = {
            name: "",
            photo: "",
            favoriteFood: "",
            scoreDiff: 1000
        }
        console.log(req.body);


        var userData = req.body;
        var userScores = userData.scores;
        console.log(userScores)

        var scoreDiff = 0;
        for (var i = 0; i < allFriend.length; i++) {
            console.log(allFriend[i]);
            scoreDiff = 0;

            for (var j = 0; j < allFriend[i].scores[j]; j++) {
                scoreDiff =+ Math.abs(parseInt(userScores[j]) - parseInt(allFriend[i].scores[j]));
                if(scoreDiff <= bestFriend.scoreDiff) {
                    bestFriend.name = allFriend[i].last_name;
                    bestFriend.photo = allFriend[i].photo;
                    bestFriend.favoriteFood = allFriend[i].fav_food

                }
            }
        }



        allFriend.push( userData );
        res.json( bestFriend );
    } );


};
