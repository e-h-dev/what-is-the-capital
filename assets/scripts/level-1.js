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
