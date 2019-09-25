// Trivia Object (to be moved to separate file once I figure that out)
var Trivia = {

    // TRIVA VARIABLES
    // Questions as an array
    questions: ["What is the common name of Oophaga Pumilio Siquirres?", "How do poison dart frogs gain their poison?", "Which of the following dart frogs is endangered?"],
    // Options as an array of arrays
    options: [["Black Jeans", "Blue Jeans", "Strawberry", "Salt Creek"], ["At birth", "From the environment", "From what they eat", "Developed as tadpoles"], ["Ranitomeya Summersi Sauce", "Ranitomeya Fantastica Varadero", "Phyllobates Terribilis", "Dendrobates Leucomelas"]],
    // Answers as an array
    answers: ["Black Jeans", "From what they eat", "Phyllobates Terribilis"],

    // USER VARIABLES
    correctAnswers: 0,
    userAnswers: [],

    // Updates the display to show the question and options for the current round
    initializeDisplay: function () {
        for (let i = 0; i < this.questions.length; i++) {

            let div = $("<div>");
            div.addClass("container")

            let question = $("<div>");
            question.addClass("row", "container")
            question.html('<h2>' + this.questions[i] + '</h2>');
            div.append(question);

            let id = ("q" + i);

            let options = $("<div>");
            options.addClass("row", "container");

            for (let j = 0; j < this.options[i].length; j++) {
                let option = $('<div>').text(this.options[i][j]);
                option.addClass('col-md-3');
                option.addClass('option-button');
                option.addClass('q' + i);
                option.attr('id', (id + '-option-' + j));
                options.append(option);
            }

            div.append(options);

            $("#game-board").append(div);
        }

    },

}

// ------ Helper Functions ------

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        guessTime--;

        $("#time-remaining").text(guessTime);

        if (guessTime === 0) {

            clearInterval(timer);

            alert("Time Up!");

            
        }
    }, 1000);
}

// ------ Game Flow ------
$(document).ready(function () {
    // Triva object
    var trivia = Trivia;

    $("#start").on("click", function () {
        // Set up game screen
        $("#start").hide();
        trivia.initializeDisplay();

        // start timer
        // Timer variables
        timer = 0;
        guessTime = 15;
        startTimer();

        $(".option-button").on("click", function () {
            $("#" + this.id).css({ "border-color": "blue" });

            let questionString = this.id.slice(0, 2);

            $("." + questionString).removeClass("option-button");
            $("." + questionString).addClass("disabled");
        })
    })
});

