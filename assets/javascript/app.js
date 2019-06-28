var results = [
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In a complete graph G, which has 12 vertices, how many edges are there?",
        "correct_answer": "66",
        "image": 'assets/images/66.jpg',
        "incorrect_answers": [
            "67",
            "34",
            "11",
            "66"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In base 2, what is 1 + 1?",
        "correct_answer": "10",
        "image": 'assets/images/10.jpg',
        "incorrect_answers": [
            "Two (2)",
            "01",
            "11",
            "10"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How many zeros are there in a googol?",
        "correct_answer": "100",
        "image": 'assets/images/100.jpg',
        "incorrect_answers": [
            "10",
            "1,000",
            "1,000,000",
            "100"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the area of a circle with a diameter of 20 inches if &pi;= 3.1415?",
        "correct_answer": "314.15 Inches",
        "image": 'assets/images/314.15.png',
        "incorrect_answers": [
            "380.1215 Inches",
            "3141.5 Inches",
            "1256.6 Inches",
            "314.15 Inches"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What are the first 6 digits of the number &quot;Pi&quot;?",
        "correct_answer": "3.14159",
        "image": 'assets/images/pi.jpg',
        "incorrect_answers": [
            "3.14169",
            "3.12423",
            "3.25812",
            "3.14159"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the Roman numeral for 500?",
        "correct_answer": "D",
        "image": 'assets/images/d.jpg',
        "incorrect_answers": [
            "L",
            "C",
            "X",
            "D"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the first Mersenne prime over 1000?",
        "correct_answer": "1279",
        "image": 'assets/images/1279.png',
        "incorrect_answers": [
            "2203",
            "1009",
            "1069",
            "1279"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the alphanumeric representation of the imaginary number?",
        "correct_answer": "i",
        "image": 'assets/images/i.png',
        "incorrect_answers": [
            "e",
            "n",
            "x",
            "i"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "To the nearest whole number, how many radians are in a whole circle?",
        "correct_answer": "6",
        "image": 'assets/images/6.jpg',
        "incorrect_answers": [
            "3",
            "4",
            "5",
            "6"
        ]
    },
    {
        "category": "Science: Mathematics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What Greek letter is used to signify summation?",
        "correct_answer": "Sigma",
        "image": 'assets/images/z.png',
        "incorrect_answers": [
            "Delta",
            "Alpha",
            "Omega",
            "Sigma"
        ]
    }
];


var randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timer = 30;
var interval;
var numberArray = [];
var userChoice;
var questionCount = 0;
var timeout;



function startOver() {
    randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    timer = 30;
    interval = '';
    numberArray = [];
    userChoice = '';
    questionCount = 0;
    timeout = '';

}
function random() {
    for (var i = 0; i < 5; i++) {
        var randomExclude = Math.floor(Math.random() * randomArray.length);
        randomArray.splice(randomExclude, 1);
    }
}
function restart() {
    random();
    $('button').show();
    $(".time").hide();
    $("#question").hide();
    $(".answers").hide();
    $(".result").hide();
    $(".answer").hide();
    $("#correct").hide();
    $("img").hide();
    $("#time-out").hide();
    $("#nope").hide();
}
function run() {
    interval = setInterval(decrement, 1000);

}
function decrement() {
    timer--;
    $("#seconds").html(timer);
    if (timer <= 0) {
        stop();
        timer = 30;
        //questionCount++;
        unanswered++;
        $("#time-out").show();
        $("#answer-value").html(results[randomArray[questionCount]]["correct_answer"]);
        $(".answer").show();
        $(".answers").hide();
        $("#question").hide();
        $("img").attr("src", results[randomArray[questionCount]].image);
        $("img").show();
        timeOut();
    }
}

function timeOut() {
    timeout = setTimeout(function () {
        questionCount++;
        if (!isGameFinished()) {
            console.log("in timeOut(): " + questionCount);
            continueGame();
            setOfAnswers(questionCount);
            $(".answer").hide();
        }
    }, 2000);
}
function stop() {
    clearInterval(interval);

}
function startGame() {
    $('button').hide();
    $(".time").show();
    $("#question").show();
    $(".answers").show();
}
function continueGame(i) {
    // setOfAnswers(questionCount);
    $("#answer").hide();
    $("#question").show();
    $("#correct").hide();
    $("#time-out").hide();
    $(".answers").show();
    $("#nope").hide();
    $("img").hide();
}
function isGameFinished() {
    if (questionCount >= 5) {
        $("#question").hide();
        $(".answers").hide();
        $("#correct-answer-value").html(correctAnswers);
        $("#incorrect-answer-value").html(incorrectAnswers);
        $("#unanswered-value").html(unanswered);
        $("#correct-answer").show();
        $("#incorrect-answer").show();
        $("#unanswered").show();
        $("#how-did").show();
        $(".result").show();
        $("#correct").hide();
        $("#nope").hide();
        $(".answer").hide();
        $(".time").hide();
        $("#time-out").hide();
        $("img").hide();
        $("#start-over").show();
        return true;

    } else { return false; }
}

function randomAns() {
    while (numberArray.length < 4) {
        var calcRandom = Math.floor(Math.random() * 4);
        if (!numberArray.includes(calcRandom)) {
            numberArray.push(calcRandom);
        }
    }
}

function setOfAnswers(i) {

    randomAns();
    run();
    timer = 30;
    $("#seconds").html(timer);
    $("#question").html(results[randomArray[i]]["question"]);
    $("#answer1").html(results[randomArray[i]]["incorrect_answers"][numberArray[0]]);
    $("#answer2").html(results[randomArray[i]]["incorrect_answers"][numberArray[1]]);
    $("#answer3").html(results[randomArray[i]]["incorrect_answers"][numberArray[2]]);
    $("#answer4").html(results[randomArray[i]]["incorrect_answers"][numberArray[3]]);
}

$(document).ready(function () {
    restart();

    $('button').on("click", function () {
        setOfAnswers(questionCount);
        startGame();
    });
    $('p').click(function () {
        userChoice = $(this).text();

        if (questionCount < 5) {
            console.log(userChoice);
            console.log(questionCount);
            console.log(randomArray);
            console.log(results[randomArray[questionCount]]["correct_answer"]);
            if (timer > 0 && userChoice == results[randomArray[questionCount]]["correct_answer"]) {
                $("#question").hide();
                $("#correct").show();
                $(".answers").hide();
                $("img").attr("src", results[randomArray[questionCount]].image);
                $("img").show();
                correctAnswers++;
                //questionCount++;
                stop();
                timeOut();
                isGameFinished();
                console.log(results[randomArray[questionCount]]["correct_answer"]);


            } else if (timer > 0 && userChoice != results[randomArray[questionCount]]["correct_answer"]) {
                $("#answer-value").html(results[randomArray[questionCount]]["correct_answer"]);
                $(".answer").show();
                $("#question").hide();
                $(".answers").hide();
                $("#nope").show();
                $("img").attr("src", results[randomArray[questionCount]].image);
                $("img").show();
                incorrectAnswers++;
                //questionCount++;
                stop();
                timeOut();
                isGameFinished();
                console.log(results[randomArray[questionCount]]["correct_answer"]);

            }
        } else { return false; }

    });



    $('#start-over').on("click", function () {
        startOver();
        restart();
    });
});

