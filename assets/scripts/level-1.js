/*this section at the head of the script is for 
creating the neccaserry variables of arrays and
DOM elements*/ 

//------main game lists
let countries = ["afghanistan","albania","algeria","andorra","angola","antigua and barbuda","argentina","armenia","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bhutan","bolivia","bosnia and herzegovina","botswana","brazil","brunei","bulgaria","burkina faso","burundi","cambodia","cameroon","canada","cape verde","central african republic","chad","chile","china","colombia","comoros","congo","costa rica","ivory coast","croatia","cuba","cyprus","czech republic","denmark","djibouti","dominica","dominican republic","east timor","ecuador","egypt","el salvador","england","equatorial guinea","eritrea","estonia","eswatini","ethiopia","federated states of micronesia","fiji","finland","france","gabon","gambia","georgia","germany","ghana","greece","grenada","guatemala","guinea","guinea bissau","guyana","haiti","honduras","hungary","iceland","india","indonesia","iran","iraq","ireland","israel","italy","jamaica","japan","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","madagascar","malawi","malaysia","maldives","mali","malta","marshall islands","mauritania","mauritius","mexico","moldova","monaco","mongolia","montenegro","morocco","mozambique","myanmar (burma)","namibia","nauru","nepal","netherlands","new zealand","nicaragua","niger","nigeria","north korea","macedonia","northern ireland","norway","oman","pakistan","palau","palestine","panama","papua new guinea","paraguay","peru","philippines","poland","portugal","qatar","romania","russia","rwanda","saint kitts and nevis","saint lucia","saint vincent and the grenadines","samoa","san marino","sao tome and principe","saudi arabia","scotland","senegal","serbia","seychelles","sierra leone","singapore","slovakia","slovenia","solomon islands","somalia","south africa","south korea","south sudan","spain","sri lanka","sudan","suriname","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","togo","tonga","trinidad and tobago","tunisia","türkiye (turkey)","turkmenistan","tuvalu","uganda","ukraine","united arab emirates","united kingdom","united states","uruguay","uzbekistan","vanuatu","vatican city","venezuela","vietnam","wales","yemen","zambia","zimbabwe"]
let capitals = ["kabul","tirana","algiers","andorra la vella","luanda","saint john's","buenos aires","yerevan","canberra","vienna","baku","nassau","manama","dhaka","bridgetown","minsk","brussels","belmopan","porto novo","thimphu","sucre","sarajevo","gaborone","brasilia","bandar seri begawan","sofia","ouagadougou","gitega","phnom penh","yaounde","ottawa","praia","bangui","n'djamena","santiago","beijing","bogota","moroni","brazzaville","san jose","yamoussoukro","zagreb","havana","nicosia","prague","copenhagen","djibouti","roseau","santo domingo","dili","quito","cairo","san salvador","london","malabo","asmara","tallinn","mbabane","addis ababa","palikir","suva","helsinki","paris","libreville","banjul","tbilisi","berlin","accra","athens","saint george's","guatemala city","conakry","bissau","georgetown","port au prince","tegucigalpa","budapest","reykjavik","new delhi","jakarta","tehran","baghdad","dublin","jerusalem","rome","kingston","tokyo","amman","astana","nairobi","tarawa atoll","pristina","kuwait city","bishkek","vientiane","riga","beirut","maseru","monrovia","tripoli","vaduz","vilnius","luxembourg","antananarivo","lilongwe","kuala lumpur","male","bamako","valletta","majuro","nouakchott","port louis","mexico city","chisinau","monaco","ulaanbaatar","podgorica","rabat","maputo","nay pyi taw","windhoek","yaren","kathmandu","amsterdam","wellington","managua","niamey","abuja","pyongyang","skopje","belfast","oslo","muscat","islamabad","melekeok","jerusalem","panama city","port moresby","asuncion","lima","manila","warsaw","lisbon","doha","bucharest","moscow","kigali","basseterre","castries","kingstown","apia","san marino","sao tome","riyadh","edinburgh","dakar","belgrade","victoria","freetown","singapore","bratislava","ljubljana","honiara","mogadishu","cape town","seoul","juba","madrid","sri jayawardenapura kotte","khartoum","paramaribo","stockholm","bern","damascus","taipei","dushanbe","dodoma","bangkok","lome","nuku'alofa","port of spain","tunis","ankara","ashgabat","funafuti","kampala","kiev","abu dhabi","london","washington d.c.","montevideo","tashkent","port vila","vatican city","caracas","hanoi","cardiff","sana'a","lusaka","harare"]

// ------list of random cities to fill short lists as they empty
let spareList = ["melbourne", "lakewood", "bangor", "dublin", "york", "newcastle", "windermere", "dresden", "Manchester", "Tel Aviv", "Boston", "Cairo"]

//------- Dom element variables
let next = document.getElementById("next");
let question = document.getElementById("question");
let divSpace = document.getElementById("incorrect-choice");
let message = document.getElementById("multiple-choice");

//-------number of countries variable
let numlen = countries.length;

// ---------variables for the lives section ----------------------
let life1 = document.getElementById("life1");
let life2 = document.getElementById("life2");
let life3 = document.getElementById("life3");
let life4 = document.getElementById("life4");

let listOfLives = [life1, life2, life3, life4];
let lifeNumber = 4;

//-------function to capitalise words on the DOM--------
function capitalise(word){
    let firstLetter = word.charAt(0);
    let firstToCap = firstLetter.toUpperCase();
    let remainingLetters = word.slice(1);
    let finalWord = firstToCap + remainingLetters;
    return finalWord;
};

//----------fisher and yates shuffle logic
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

// ---------game over function for end of lives and end of question list
function gameOver(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    question.innerHTML = "Game over!";
    message.innerHTML = `<h2 class="game-over" style="margin-left:150px">You have run out of lives!</h2><h3 class="game-over" style="margin-left:150px"><mark>You have scored ${oldScore} points!</mark></h3>`;
    next.remove();
};

// --------shows incorrect message 1 second after user answered
function show(myClick){
    document.getElementById(myClick).style.backgroundColor = "red";
    setTimeout(delayMessage, 1000);
    function delayMessage(){
        divSpace.innerHTML = wrongMessage;
        };
        lifeRemoval();
        subtractScore();
    };

    // --------shows correct message 1 second after user answered
function answer(myClick){
    document.getElementById(myClick).style.backgroundColor = "green";
    setTimeout(delayMessage, 1000);
    function delayMessage(){
        divSpace.innerHTML = correctMessage;
         };
         incrementScore();
    };

// -------------main function which runs the game
function runGame(){
    
    let arrayPosition = Math.floor(Math.random() *countries.length);
    console.log(countries.length);
    
    console.log(countries);
    console.log(capitals);
    
    // ------- variables for random countries and capitals
    
    let chosenCountry = countries[arrayPosition];
    let chosenCapital = capitals[arrayPosition];
    
    // ---------innerHTML of messages to be displayed
    wrongMessage = `<h2 id="incorrect-message-box">Sorry that is incorrect, the capital of ${capitalise(chosenCountry)} is <mark>${capitalise(chosenCapital)}!</mark> better luck next time</h2>`
    correctMessage = `<h2 id="correct-message-box">Well Done! the Capital of ${capitalise(chosenCountry)} is <mark>${capitalise(chosenCapital)}!</mark></h2>`
    
    //--------------chooses the question------
    question.innerHTML =  `What is the capital of ${capitalise(chosenCountry)}? `;

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

    // -------------length of possible answers list (three for the three incorrect answers)
    let listlen = list.length;

    // ------------chooses random Capital to br displayed in the multiple chice section
    let newArrayPosition = Math.floor(Math.random() *spareList.length)
    capitals.push(spareList[newArrayPosition]);
    spareList.splice(newArrayPosition, 1);

    //--------map element to loop through each list and recreate the inner html
    const result2 = shortList1.map(function(cap){return `<div class="incorrect" id="result2" onclick="show('result2')">${capitalise(cap)}</div>`});
    const result3 = shortList2.map(function(cap){return `<div class="incorrect" id="result3" onclick="show('result3')">${capitalise(cap)}</div>`});
    const result4 = shortList3.map(function(cap){return `<div class="incorrect" id="result4" onclick="show('result4')">${capitalise(cap)}</div>`});

    //---------- creates the multiple choice box for correct answer
    let correctResult = `<div class="incorrect" id="result1" onclick="answer('result1')">${capitalise(chosenCapital)}</div>`
    
    // --------- chooses position of each possible answer
    let result1_1 = correctResult;
    let result2_2 = result2[Math.floor(Math.random() *listlen)];
    let result3_3 = result3[Math.floor(Math.random() *listlen)];
    let result4_4 = result4[Math.floor(Math.random() *listlen)];
    let listx = [result1_1, result2_2, result3_3, result4_4];

    //---------function to place each multiple choice option in a random position
    randomise(listx);

    //-----joins all the multiple choice options in to DOM element for display
    divSpace.innerHTML = listx.join("");
};
document.addEventListener("DOMContentLoaded", runGame);

//---------next question button -----

next.addEventListener("click", runGame);

//--------------Jquery code for colour scheme change----------
$(document).ready(function(){
    $("#theme").click(function(){
      $("body").css("color", "rgb(220, 26, 6)");
      $(".opaque").css("background-color", "rgba(255, 170, 51, 0.5)");
      $("ul").css({"background-color":"rgba(255, 170, 51, 0.5)", "width":"400px", "margin-left":"450px"});
      $(".game-area-background").css("background-color", "rgba(255, 170, 51, 0.5)");
      $("button").css("background-color", "rgb(255, 170, 52)");
      $("button").css("color", "rgb(220, 26, 6)");
      $("input").css("background-color", "rgb(255, 170, 52)");
      $("input").css("color", "rgb(220, 26, 6)");
      $("li").css("color", "rgb(220, 26, 6)");
      $("h1").css("color", "rgb(220, 26, 6)");
      $("h3").css("background-color", "rgba(255, 170, 52, 0.7)");
      $(".incorrect").css("background-color", "rgba(255, 170, 52, 0.7)");
      $(".lives-section-level-1").css("background-color", "rgba(255, 170, 52, 0.7)");
      $("#theme").remove();
    });
  });




