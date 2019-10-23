var card = $("#quiz-area");


var questions = [{
        question: "When was the last year the celtics won a nba title?",
        answers: ["2008", "2009", "2007", "2005"],
        correctAnswer: "2008"
    },
    {
        question: "Assuming you have the first question rite, who was the finals mvp?",
        answers: ["kobe bryant", "paul pierce", "steph curry", "lebron james"],
        correctAnswer: "paul pierce"
    },
    {
        question: "Which NBA team won the most titles in the 90s?",
        answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
        correctAnswer: "Chicago Bulls"
    },
    {
        question: "how many nba title rings does  larry bird have?",
        answers: ["3", "4", "5", "2"],
        correctAnswer: "3"
    },
    {
        question: "Who is a new superstar point guard this year?",
        answers: ["Kemba Walker", "bradley beal", "kyrie irving", "James Harden"],
        correctAnswer: " kemba walker"
    },
    {
        question: "What number jersey does jason tatum wear?",
        answers: ["0", "11", "12", "4"],
        correctAnswer: "0"
    },
    {
        question: "what number does jaylon brown wear?",
        answers: ["0", "7", "3", "8"],
        correctAnswer: "7"
    },
    {
        question: "what is the name of the celtics head coach?",
        answers: ["brad stevens", "jason kidd", "luke walton", "Mr.Pagdoc rivers"],
        correctAnswer: "brad stevens"
    }
];

// Variable that will hold the setInterval
var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
            debugger;
        }
    },

    start: function () {
        console.log('hitting start function')
        timer = setInterval(game.countdown, 1000);

        $("#secondwrap").prepend(
            "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }

        card.append("<button id='done'>Done</button>");
    },

    done: function () {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },

    result: function () {
        clearInterval(timer);

        $("#secondwrapper h2").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});