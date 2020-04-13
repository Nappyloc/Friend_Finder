// Save friend data to this file as an array of objects
var allFriends = [
    {
        "first_name": "Ahmed",
        "last_name": "Jaher",
        "fav_food": "pizza",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }

]



// function to collect form data
$( "#submit" ).on( "click", function ( event )
{
    event.preventDefault();
    console.log( "ya clicked me" )

    // Create an object for the user"s data
    var userData = {
        first_name: $( "#firstName" ).val(),
        last_name: $( "#lastName" ).val(),
        fav_food: $( "#food" ).val(),
        photo: $( "#photo" ).val(),
        scores: [
            $( "#q1" ).val(),
            $( "#q2" ).val(),
            $( "#q3" ).val(),
            $( "#q4" ).val(),
            $( "#q5" ).val(),
            $( "#q6" ).val(),
            $( "#q7" ).val(),
            $( "#q8" ).val(),
            $( "#q9" ).val(),
            $( "#q10" ).val()
        ]
    }




    //Push Into allFriends Object
    // $.post( "/api/friends", userData, function ( data )
    // {

    //     // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    //     $( "#match-name" ).text( data.name );
    //     $( "#match-img" ).attr( "src", data.photo );

    //     // Show the modal with the best match
    //     $( "#results-modal" ).modal( "toggle" );

    // } );
    // } else


    console.log( userData.scores );

} );


// Function to compare user score