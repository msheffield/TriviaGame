// Trivia Object (to be moved to separate file once I figure that out)
var Trivia = {
    set1: {
        question: "What is the common name for Oophaga Pumilio Siquirres?",
        answer: "Black Jeans",
        options: ["Black Jeans", "Blue Jeans", "Strawberry", "Salt Creek"]
    },
    set2: {
        question: "Which frog has the most potent poison?",
        answer: "Phyllobates Teribe",
        options: ["Black Jeans", "Blue Jeans", "Strawberry", "Salt Creek"]
    },
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
    number--;
    $("#time-remaining").text(number);
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

