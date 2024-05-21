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