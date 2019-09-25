// Trivia Object (to be moved to separate file once I figure that out)
var Trivia = {

    // TRIVA VARIABLES
    // Questions as an array
    questions: ["What is the common name of Oophaga Pumilio Siquirres?", "How do poison dart frogs gain their poison?"],
    // Options as an array of arrays
    options: [["Black Jeans", "Blue Jeans", "Strawberry", "Salt Creek"], ["At birth", "From the environment", "From what they eat", "Developed as tadpoles"]],
    // Answers as an array
    answers: ["Black Jeans"],
    
    // USER VARIABLES
    correctAnswers: 0,
    userAnswers: [],

    // Updates the display to show the question and options for the current round
    initializeDisplay: function () {
        for (let i = 0; i < this.questions.length; i++) {

            $("#question").text(this.questions[i]);

            let div = $("<div>");
            div.addClass("row")

            let id = ("q" + i);

            for (let j = 0; j < this.options[i].length; j++) {
                let option = $('<div>').text(this.options[i][j]);
                option.addClass('col-md-3', 'option-button');
                option.attr('id', (id +'-option-' + j));
                div.append(option);
            }

            $("#game-board").append(div);
        }

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

    $("#start").on("click", function () {
        $("#start").hide();
        trivia.initializeDisplay();
        
    })
    
});

