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
    $("#question").text(set.question);
    for (let i = 0; i < 4; i++) {
        $("#option-" + (i + 1)).text(set.options[i]);
        console.log("#option-" + (i + 1));
    }
}

function isCorrect() {
    if (set.answer == userAnswer) {
        return true;
    }
}

// ------ Helper Functions ------



// ------ Game Flow ------
$(document).ready(function () {
    var trivia = Trivia;
    initializeQuestionAndOptions(trivia.set1);

    var timer;
    // Time to guess set to 10 seconds
    var guessTime = 100000
    var answer = "";

    $(".option-button").on("click", function () {
        answer = this.id;
        console.log(answer);
    });



});

