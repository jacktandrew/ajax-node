// Wrap up the PUT request execution.
var makePUTRequest = function(){
    // Make the PUT request.
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/ajax/js",
        contentType: "application/json",
        data: JSON.stringify({
            name: "Jack",
            age: 30
        }),
        dataType: "text",
        success: function( response ){
            // Put the plain text in the PRE tag.
            $( "#putResponse" ).text( response );
        },
        error: function( error ){
            // Log any error.
            console.log( "ERROR:", error );
        },
        complete: function(){
            // When this completes, execute teh
            // DELETE request.
        }
    });
};

var makeGETRequest = function(){
    // Make the PUT request.
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/ajax/js",
        contentType: "application/json",
        data: JSON.stringify({
            name: "Jack",
            age: 30
        }),
        dataType: "text",
        success: function( response ){
            // Put the plain text in the PRE tag.
            $( "#getResponse" ).text( response );
        },
        error: function( error ){
            // Log any error.
            console.log( "ERROR:", error );
        },
        complete: function(){
            // When this completes, execute teh
            // DELETE request.
        }
    });
};
// Wrap up the DELETE request execution so it can easily be
// invoked from the end of the PUT delete response.
var makeDELETERequest = function(){
    // Make the DELETE request.
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/ajax/js",
        contentType: "application/json",
        data: JSON.stringify({
            name: "Tricia",
            age: 37
        }),
        dataType: "text",
        success: function( response ){
            // Put the plain text in the PRE tag.
            $( "#deleteResponse" ).text( response );
        },
        error: function( error ){
            // Log any error.
            console.log( "ERROR:", error );
        }
    });
};

$('a#putRequest').click(makePUTRequest);
$('a#getRequest').click(makeGETRequest);
$('a#deleteRequest').click(makeDELETERequest);
