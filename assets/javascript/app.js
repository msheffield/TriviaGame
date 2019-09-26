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
    userAnswers: [],

    // Updates the display to show the question and options for the current round
    initializeDisplay: function () {
        $("#finish").show();

        for (let i = 0; i < this.questions.length; i++) {

            let div = $("<div>");
            div.addClass("container")

            let question = $("<div>");
            question.addClass("row", "container")
            question.html('<h3>' + this.questions[i] + '</h3>');
            div.append(question);

            let id = ("q" + i);

            let options = $("<div>");
            options.addClass("row", "container");

            for (let j = 0; j < this.options[i].length; j++) {
                let option = $('<div>');
                option.addClass('col-md-3');
                let button = $("<button>").text(this.options[i][j]);
                button.addClass('q' + i);
                button.addClass("btn btn-secondary btn-large btn-block option-button");
                button.attr('id', (id + '-option-' + j));
                option.append(button);
                options.append(option);
            }

            div.append(options);

            $("#game-board").append(div);
        }

    },

    calculateResults: function () {
        let totalQuestions = this.answers.length;
        let correctAnswers = 0;

        for (let i = 0; i < this.userAnswers.length; i++) {
            if (this.answers.includes(this.userAnswers[i])) {
                correctAnswers++;
            }
        }

        let div = $("<div>");
        div.addClass("results");
        div.html("<h2> You guessed " + correctAnswers + " out of " + totalQuestions + " correct! </h2>");

        $("#game-board").append(div);
    }

}

// ------ Helper Functions ------

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        guessTime--;

        $("#time-remaining").text(guessTime);

        if (guessTime === 0) {

            stopTimer(timer);

            alert("Time Up!");
        }
    }, 1000);
}

function stopTimer(timer) {
    clearInterval(timer);
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

        $(".btn-secondary").on("click", function () {
            trivia.userAnswers.push($(this).text());

            let questionString = "." + this.id.slice(0, 2);
            
            $(questionString).addClass("disabled");
            $(questionString).attr("aria-disabled", "true");
            $(questionString).prop("disabled", true);


        });

        $("#finish").on("click", function () {
            stopTimer(timer);
            trivia.calculateResults();
        })
    })
});

