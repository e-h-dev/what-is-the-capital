//------------- lists of capitals and countries
let countries = ["england", "france", "germany", "japan", "ireland", "the USA", "the UAE", "brazil", "poland", "russia", "ukraine", "wales"];
let capitals = ["london", "paris", "berlin", "tokyo", "dublin", "washington", "dubai", "brasilia", "warsaw", "moscow", "kiev", "cardif"];

let spareList = ["melbourne", "lakewood", "bangor", "dublin", "york", "newcastle", "windermere", "dresden", "Manchester", "Tel Aviv", "Boston", "Cairo"]
console.log(spareList);

// ------------------- DOM element variables-----------
let next = document.getElementById("next");
let numlen = countries.length;
let question = document.getElementById("question");
let divSpace = document.getElementById("incorrect-choice");
let message = document.getElementById("multiple-choice");

// ---------variables for the lives section ----------------------
let life1 = document.getElementById("life1");
let life2 = document.getElementById("life2");
let life3 = document.getElementById("life3");
let life4 = document.getElementById("life4");

let listOfLives = [life1, life2, life3, life4];
let lifeNumber = 4;

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

    //--------------------- remove chosenCapital --------------------
    
    let remove = arrayPosition;
    console.log(remove);
   
    let usedQuestion = countries.splice(remove,1)
    let usedAnswer = capitals.splice(remove,1);
    console.log(usedAnswer);
    console.log(usedQuestion);
    console.log(countries);
    console.log(capitals);
    //------------- create shorter lists for the wrong answer options(will not have double of the same option)
   
    let shortList1 = capitals.slice(0,4);
    let shortList2 = capitals.slice(4,8);
    let shortList3 = capitals.slice(8,12);
    //-------------------create random number for short list item

    let wrongCap1 = shortList1[Math.floor(Math.random() *shortList1.length)];
    let wrongCap2 = shortList2[Math.floor(Math.random() *shortList2.length)];
    let wrongCap3 = shortList3[Math.floor(Math.random() *shortList3.length)];

    let list = [wrongCap1, wrongCap2, wrongCap3];

    console.log(list);

    let listlen = list.length;

    let newArrayPosition = Math.floor(Math.random() *spareList.length)

    capitals.push(spareList[newArrayPosition]);
    
    spareList.splice(newArrayPosition, 1);

    console.log(spareList);

    console.log(shortList1);
    console.log(shortList2);
    console.log(shortList3);
//--------map element to loop through each list and recreate the inner html
    const result2 = shortList1.map(function(cap){return `<div class="incorrect" id="result2" onclick="show('result2')">${cap}</div>`});
    const result3 = shortList2.map(function(cap){return `<div class="incorrect" id="result3" onclick="show('result3')">${cap}</div>`});
    const result4 = shortList3.map(function(cap){return `<div class="incorrect" id="result4" onclick="show('result4')">${cap}</div>`});

    //---------- creates the answer box for correct answer
    let correctResult = `<div class="incorrect" id="result1" onclick="answer('result1')">${chosenCapital}</div>`
    let result1_1 = correctResult;
    let result2_2 = result2[Math.floor(Math.random() *listlen)];
    let result3_3 = result3[Math.floor(Math.random() *listlen)];
    let result4_4 = result4[Math.floor(Math.random() *listlen)];

    let listx = [result1_1, result2_2, result3_3, result4_4];

    randomise(listx);

    console.log(listx.join(""));
    divSpace.innerHTML = listx.join("");
};
document.addEventListener("DOMContentLoaded", runGame);

//---------next question button -----

next.addEventListener("click", runGame);

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




