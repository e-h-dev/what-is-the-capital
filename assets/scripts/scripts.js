/*this section at the head of the script is for 
creating the neccaserry variables of arrays and
DOM elements*/ 

//------test lists
let countries = ["england", "france", "germany", "japan", "ireland", "the USA", "the UAE", "brazil", "poland", "russia", "ukraine", "wales"];
let capitals = ["london", "paris", "berlin", "tokyo", "dublin", "washington", "dubai", "brasilia", "warsaw", "moscow", "kyev", "cardiff"];

// -------- DOM element variables-----
let change = document.getElementById("game-type");
let playArea = document.getElementById("play-area");
let question = document.getElementById("question");
let answer = document.getElementById("answer-box");
let sub = document.getElementById("submit");
let next = document.getElementById("next");
let message = document.getElementById("message");

// ---------variables for the lives section ----------------------
let life1 = document.getElementById("life1");
let life2 = document.getElementById("life2");
let life3 = document.getElementById("life3");
let life4 = document.getElementById("life4");

let listOfLives = [life1, life2, life3, life4];
let lifeNumber = 4;



//-------function to print the first letter of word as capital to the DOM--------
function capitalise(word){
    let firstLetter = word.charAt(0);
    let firstToCap = firstLetter.toUpperCase();
    let remainingLetters = word.slice(1);
    let finalWord = firstToCap + remainingLetters;
    return finalWord;
};

//--------changes game type to ask which country is this capital from-------

function changeGame(){
    change.innerHTML = "capitals";
};

change.addEventListener("click", changeGame);


//--------- game running function will run when page id loaded and when "next question" is clicked
function playGame(){
    // -------------- blank input box for next question ----------
    answer.value = "";
    // -----------------focus on input box---------------------
    answer.focus();
    // --------------------clear message from previous answer ----
    message.innerHTML = "";

    sub.innerHTML = `<button>Submit</button>`;
    next.innerHTML = "";

    let numlen = countries.length;
    let arrayPosition = Math.floor(Math.random()*numlen);
    chosenCountry = countries[arrayPosition];
    chosenCapital = capitals[arrayPosition];

    question.innerHTML = `What is the Capital of ${capitalise(chosenCountry)}?`;

    let usedQuestion = countries.splice(arrayPosition,1);
    console.log(usedQuestion);

    let usedAnswer = capitals.splice(arrayPosition,1);
    console.log(usedAnswer);

    console.log(countries);
    console.log(countries.length);
    if(countries.length == 0){
        gameOver();
    }

    sub.addEventListener("click", runGame);
};
document.addEventListener("DOMContentLoaded", playGame);

// --------function to run the logic of the game -----
function runGame(){
    answerCheck();
    sub.innerHTML = "";       
    next.innerHTML = `<button>Next Question</button>`;
}

next.addEventListener("click", playGame);
// ------ function for correct answer ---------

//------ checks value of answer if correct wrong or invalid --------
function answerCheck(checkAnswer){
    checkAnswer = answer.value;
    console.log(checkAnswer);
    if (checkAnswer === chosenCapital){
        correct();
    }else if(checkAnswer === ""){
        invalid();
    }else if(checkAnswer !== chosenCapital){
        incorrect();
    };
};

// --------- load the next question to the DOM ------
function nextQuestion(){
    sub.innerHTML = "";
    next.innerHTML = `<button>Next Question</button>`;
}

//--------- function to take life symbol off DOM -----------------
function removeLife(last){
    last.innerHTML ="";
}

//---------removes one life for wrong answer ---------------------
function lifeRemoval(){
    lifeNumber = lifeNumber -1;
    removeLife(listOfLives[lifeNumber]);
    let remainingLives = document.getElementById("number-of-lives");
    remainingLives.innerHTML = lifeNumber;
    if (lifeNumber == 0){
        gameOver();
    };
};

function correct(){
    message.innerHTML = `<h2 id="correct-message-box">Well Done! the Capital of ${chosenCountry} is <mark>${chosenCapital}!</mark></h2>`;
    incrementScore();
}

// ------- function for invalid answer ----------
function invalid(){
    message.innerHTML = `<h2 id="correct-message-box">You have not given a valid answer!</h2>`;
    
}
// ------ function for incorrect answer ---------
function incorrect(){
    message.innerHTML = `<h2 id="incorrect-message-box">Sorry <mark>${answer.value}</mark> is incorrect, the capital of ${chosenCountry} is <mark>${chosenCapital}!</mark> better luck next time</h2>`;
    subtractScore();
    lifeRemoval();
}
//-------- adds a point for correct answer --------------------------------
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerHTML = ++oldScore;
};

//-------- subtracts a point for incorrect answer
function subtractScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    if (oldScore >0){
        document.getElementById("score").innerHTML = --oldScore;
    }else{
        document.getElementById('score').innerText = oldScore;
    };
    
};

// ------displays game over message when no more questions or no remaining lives -----
function gameOver(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    question.innerHTML = "Game over!";
    playArea.innerHTML = `<h2 class="game-over">You have run out of lives!</h2><h3 class="game-over"><mark>You have scored ${oldScore} points!</mark></h3><br><button><a href="index.html">Play Again!</a></button>`;
};

$(document).ready(function(){
    $("#theme").click(function(){
      $("div").css("background-color", "rgba(255, 170, 51, 0.5)");
      $("div").css("color", "red");
    });
  });
