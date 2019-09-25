// Trivia Object (to be moved to separate file once I figure that out)
var Trivia = {
    

    // Questions as an array
    questions: ["What is the common name of Oophaga Pumilio Siquirres?"],
    // Options as an array of arrays
    options: [["Black Jeans", "Blue Jeans", "Strawberry", "Salt Creek"]],
    // Answers as an array
    answers: ["Black Jeans"]
}

// ------ Game Functions ------

//Sets the Question text and sets each option text
function initializeQuestionAndOptions(set) {
    console.log(set.options);
    $("#question").text(set.question);
    for (let i = 0; i < 4; i++) {
        $("#option-" + (i + 1)).text(set.options[i]);
        console.log("#option-" + (i + 1));
    }
}

// ------ Helper Functions ------

function countDown() {
    guessTime--;
    $("#time-remaining").text(guessTime);
}

// ------ Game Flow ------
$(document).ready(function () {
    // Triva object
    var trivia = Trivia;

    // Timer variables
    var timer;
    var timer_active = false;
    var guessTime = 1000;

    // Round variables
    var round = 0;
    var correct = 0;

});

