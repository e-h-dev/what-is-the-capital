/*this section at the head of the script is for 
creating the neccaserry variables of arrays and
DOM elements*/ 

//------test lists
let countries = ["england", "france", "germany", "japan", "ireland", "the USA", "the UAE", "brazil", "poland", "russia", "ukraine", "wales"];
let capitals = ["london", "paris", "berlin", "tokyo", "dublin", "washington", "dubai", "brasilia", "warsaw", "moscow", "kyev", "cardiff"];

// -------- DOM element variables-----
let change = document.getElementById("game-type");
let question = document.getElementById("question");
let answer = document.getElementById("answer-box");
let sub = document.getElementById("submit");
let next = document.getElementById("next");
let message = document.getElementById("message");
let numlen = countries.length;
let arrayPosition = Math.floor(Math.random()*numlen);
let chosenCountry = countries[arrayPosition];
let chosenCapital = capitals[arrayPosition];

console.log(chosenCountry);
console.log(chosenCapital);

//-------function to print the first letter of word as capital to the DOM--------
function capitalise(word){
    let firstLetter = word.charAt(0);
    let firstToCap = firstLetter.toUpperCase();
    let remainingLetters = word.slice(1);
    let finalWord = firstToCap + remainingLetters;
    return finalWord;
};
console.log("hello")
//--------changes game type to ask which country is this capital from-------

function changeGame(){
    change.innerHTML = "capitals";
};

change.addEventListener("click", changeGame);


//--------- game running function will run when page id loaded and when "next question" is clicked
function playGame(){
    //let chosenCountry = chosenArrayItem(countries);
    question.innerHTML = `What is the Capital of ${capitalise(chosenCountry)}?`;
};
document.addEventListener("DOMContentLoaded", playGame);
next.addEventListener("click", playGame);

// ------ function for correct answer ---------
function correct(){
    message.innerHTML = `<h2 id="correct-message-box">Well Done! the Capital of ${chosenCountry} is <mark>${chosenCapital}!</mark></h2>`;
    incrementScore();
}
// ------ function for incorrect answer ---------
function incorrect(){
    message.innerHTML = `<h2 id="incorrect-message-box">Sorry <mark>${answer.value}</mark> is incorrect, the capital of ${chosenCountry} is <mark>${chosenCapital}!</mark> better luck next time</h2>`;
    subtractScore();
    lifeRemoval();
}

//------ checks value of answer if correct wrong or invalid --------
function answerCheck(checkAnswer){
    checkAnswer = answer.value;
    console.log(checkAnswer);
    if (checkAnswer === chosenCapital){
        correct();
    }else{
        incorrect();
    }
};
sub.addEventListener("click", answerCheck);

// ---------variables for the lives section ----------------------
let life1 = document.getElementById("life1");
let life2 = document.getElementById("life2");
let life3 = document.getElementById("life3");
let life4 = document.getElementById("life4");

let listOfLives = [life1, life2, life3, life4];
let lifeNumber = 4;
let currentLife = listOfLives[lifeNumber];

//--------- function to take life symbl off DOM -----------------
function removeLife(last){
    last.innerHTML ="";
}

//---------removes one life for wrong answer ---------------------
function lifeRemoval(){
    lifeNumber = lifeNumber -1;
    removeLife(listOfLives[lifeNumber]);
    let remainingLives = document.getElementById("number-of-lives");
    remainingLives.innerHTML = lifeNumber;
};
//-------- adds a point for correct answer --------------------------------
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerHTML = ++oldScore;
};

//-------- subtracts a point for incorrect answer
function subtractScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerHTML = --oldScore;
};
// ------displays game over message when no more questions or no remaining lives -----
function gameOver(){

};