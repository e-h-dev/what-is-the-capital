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

// -------- create variables of random Country and it's Capital ---------
function chosenCountry(){

};

//--------- game running function will run when page id loaded and when "next question" is clicked
function playGame(){

};
//------ checks value of answer if correct wrong or invalid --------
function answerCheck(){

};
//---------removes one life for wrong answer ---------------------
function lifeRemoval(){

};
// -------- creates message to display to user if answer correct or not--------
function message(){

};
//-------- adds a point for correct answer subbtracts a point for incorrect answer
function incrementScore(){

};
// ------displays game over message when no more questions or no remaining lives -----
function gameOver(){

};