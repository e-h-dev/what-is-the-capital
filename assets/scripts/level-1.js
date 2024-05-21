//------------- lists of capitals and countries
let countries = ["england", "france", "germany", "japan", "ireland", "the USA", "the UAE", "brazil", "poland", "russia", "ukraine", "wales"];
let capitals = ["london", "paris", "berlin", "tokyo", "dublin", "washington", "dubai", "brasilia", "warsaw", "moscow", "kiev", "cardif"];

let spareList = ["melbourne", "lakewood", "bangor", "dublin", "york", "newcastle", "windermere", "dresden", "Manchester", "Tel Aviv", "Boston", "Cairo"]
console.log(spareList);

let next = document.getElementById("next");
  //-------creating relavant number  
let numlen = countries.length;

//----------initial question
let question = document.getElementById("question");

let divSpace = document.getElementById("incorrect-choice");

message = document.getElementById("multiple-choice");

//fisher and yates shuffle (stack overflow) https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function randomise(myList){
    let size = myList.length;
    while(size != 0){
    let randPosition = Math.floor(Math.random() * size);
    size--;

    console.log(size);

    console.log(randPosition);

    [myList[size], myList[randPosition]] = [myList[randPosition], myList[size]];
    };
};

function myMessage(message){
    return message;
}

function show(myClick){
    document.getElementById(myClick).style.backgroundColor = "red";
    setTimeout(delayMessage, 1000);
    function delayMessage(){
        document.getElementById("incorrect-choice").innerHTML = wrongMessage;
        };
    };

function answer(myClick){
    document.getElementById(myClick).style.backgroundColor = "green";
    setTimeout(delayMessage, 1000);
    function delayMessage(){
        
        document.getElementById("incorrect-choice").innerHTML = correctMessage;
         };
    };

function runGame(){
    
    let arrayPosition = Math.floor(Math.random() *countries.length);
    console.log(countries.length);
    
    console.log(countries);
    console.log(capitals);
    
    // ------- variables for random countries and capitals
    
    let chosenCountry = countries[arrayPosition];
    let chosenCapital = capitals[arrayPosition];
    
    wrongMessage = `<h2 id="incorrect-message-box">Sorry that is incorrect, the capital of ${chosenCountry} is <mark>${chosenCapital}!</mark> better luck next time</h2>`
    correctMessage = `<h2 id="correct-message-box">Well Done! the Capital of ${chosenCountry} is <mark>${chosenCapital}!</mark></h2>`
    question.innerHTML =  `What is the capital of ${chosenCountry}? `;
};
    