/*this section at the head of the script is for 
creating the neccaserry variables of arrays and
DOM elements*/ 

//------main game lists
let countries = ["afghanistan","albania","algeria","angola","argentina","armenia","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bhutan","bolivia","bosnia and herzegovina","botswana","brazil","bulgaria","burkina faso","burundi","cambodia","cameroon","canada","cape verde","central african republic","chile","china","colombia","comoros","congo","ivory coast","croatia","cuba","cyprus","czech republic","denmark","djibouti","dominica","east timor","ecuador","egypt","england","equatorial guinea","eritrea","estonia","eswatini","federated states of micronesia","fiji","finland","france","gabon","gambia","georgia","germany","ghana","greece","guinea","guinea bissau","guyana","honduras","hungary","iceland","india","indonesia","iran","iraq","ireland","israel","italy","jamaica","japan","jordan","kazakhstan","kenya","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","madagascar","malawi","maldives","mali","malta","marshall islands","mauritania","mauritius","moldova","monaco","mongolia","montenegro","morocco","mozambique","myanmar (burma)","namibia","nauru","nepal","netherlands","new zealand","nicaragua","niger","nigeria","north korea","macedonia","northern ireland","norway","oman","pakistan","palau","palestine","paraguay","peru","philippines","poland","portugal","qatar","romania","russia","rwanda","saint kitts and nevis","saint lucia","saint vincent and the grenadines","samoa","saudi arabia","scotland","senegal","serbia","seychelles","sierra leone","singapore","slovakia","slovenia","solomon islands","somalia","south africa","south korea","south sudan","spain","sudan","suriname","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","togo","tunisia","türkiye (turkey)","turkmenistan","tuvalu","uganda","ukraine","united arab emirates","united kingdom","united states","uruguay","uzbekistan","venezuela","vietnam","wales","yemen","zambia","zimbabwe"];
let capitals = ["kabul","tirana","algiers","luanda","buenosaires","yerevan","canberra","vienna","baku","nassau","manama","dhaka","bridgetown","minsk","brussels","belmopan","porto novo","thimphu","sucre","sarajevo","gaborone","brasilia","sofia","ouagadougou","gitega","phnom penh","yaounde","ottawa","praia","bangui","santiago","beijing","bogota","moroni","brazzaville","yamoussoukro","zagreb","havana","nicosia","prague","copenhagen","djibouti","roseau","dili","quito","cairo","london","malabo","asmara","tallinn","mbabane","palikir","suva","helsinki","paris","libreville","banjul","tbilisi","berlin","accra","athens","conakry","bissau","georgetown","tegucigalpa","budapest","reykjavik","new delhi","jakarta","tehran","baghdad","dublin","jerusalem","rome","kingston","tokyo","amman","astana","nairobi","pristina","kuwait city","bishkek","vientiane","riga","beirut","maseru","monrovia","tripoli","vaduz","vilnius","luxembourg","antananarivo","lilongwe","male","bamako","valletta","majuro","nouakchott","port louis","chisinau","monaco","ulaanbaatar","podgorica","rabat","maputo","nay pyi taw","windhoek","yaren","kathmandu","amsterdam","wellington","managua","niamey","abuja","pyongyang","skopje","belfast","oslo","muscat","islamabad","melekeok","jerusalem","asuncion","lima","manila","warsaw","lisbon","doha","bucharest","moscow","kigali","basseterre","castries","kingstown","apia","riyadh","edinburgh","dakar","belgrade","victoria","freetown","singapore","bratislava","ljubljana","honiara","mogadishu","cape town","seoul","juba","madrid","khartoum","paramaribo","stockholm","bern","damascus","taipei","dushanbe","dodoma","bangkok","lome","tunis","ankara","ashgabat","funafuti","kampala","kiev","dubai","london","washington","montevideo","tashkent","caracas","hanoi","cardiff","sana'a","lusaka","harare"];

// -------- DOM element variables-----
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

//------------list to display and remove lives-----------------
let listOfLives = [life1, life2, life3, life4];
let lifeNumber = 4;

//-------function to capitalise words on the DOM--------
function capitalise(word){
    let firstLetter = word.charAt(0);
    let firstToCap = firstLetter.toUpperCase();
    let remainingLetters = word.slice(1);
    let finalWord = firstToCap + remainingLetters;
    return finalWord;
}

//--------- game running function will run when page is loaded and when "next question" is clicked
function playGame(){
    // -------------- blank input box for next question ----------
    answer.value = "";
    // -----------------focus on input box---------------------
    answer.focus();
    // --------------------clear message from previous answer ----
    message.innerHTML = "";

    //---------------removes next question button replaces with submit button-----
    sub.innerHTML = `<button>Submit</button>`;
    next.innerHTML = "";

    // ------------- creates random number to choose random country from list ------
    let numlen = countries.length;
    let arrayPosition = Math.floor(Math.random()*numlen);
    chosenCountry = countries[arrayPosition];
    chosenCapital = capitals[arrayPosition];

    // -------------- initial game question --------------------------
    question.innerHTML = `What is the Capital of ${capitalise(chosenCountry)}?`;

    //-----------------removes mentioned country form list --------------
    let usedQuestion = countries.splice(arrayPosition,1);
    console.log(usedQuestion);

    // ----------------removes answered Capital from list ----------------
    let usedAnswer = capitals.splice(arrayPosition,1);
    console.log(usedAnswer);

    // --------------- ends game after all countries asked -------------
    if(countries.length == 0){
        gameOver();
    }

    // -------------- submit answer event ---------------------------
    sub.addEventListener("click", answerCheck);

}

// ----------------- runs game at page loadtime-------------------
document.addEventListener("DOMContentLoaded", playGame);

// -------------- next question event event ---------------------------
next.addEventListener("click", playGame);

// -------function to invalidate whitespaces
function hasWhiteSpace(s) {
    return /\s/g.test(s);
  }

// ----------removes submit button if filled in and display next button
function filledIn(){
    sub.innerHTML = "";       
    next.innerHTML = `<button>Next Question</button>`;
}

//----------submit button will remian if input not valid
function emptySpace(){
    sub.innerHTML = `<button>Submit</button>`;       
    next.innerHTML = "";
    // -------------- blank input box for next question ----------
    answer.value = "";
    // -----------------focus on input box---------------------
    answer.focus();
}
//------ checks value of answer if correct wrong or invalid --------
function answerCheck(checkAnswer){
    checkAnswer = answer.value;
    console.log(checkAnswer);
    if (checkAnswer === chosenCapital){
        correct();
        filledIn();
    }else if(checkAnswer === ""){
        invalid();
        emptySpace();
    }else if(hasWhiteSpace(checkAnswer)){
        invalid();
        emptySpace();
    }else if(checkAnswer !== chosenCapital){
        incorrect();
        filledIn();
    }
}

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
    }
}

// ------- function for correct answer ----------
function correct(){
    message.innerHTML = `<h2 id="correct-message-box-level-2">Well Done! the Capital of ${capitalise(chosenCountry)} is <u>${capitalise(chosenCapital)}!</u></h2>`;
    incrementScore();
}

// ------- function for invalid answer ----------
function invalid(){
    message.innerHTML = `<h2 id="incorrect-message-box-level-2">You have not given a valid answer!</h2>`;
    
}
// ------ function for incorrect answer ---------
function incorrect(){
    message.innerHTML = `<h2 id="incorrect-message-box-level-2">Sorry <u>${capitalise(answer.value)}</u> is incorrect, the capital of ${capitalise(chosenCountry)} is <u>${capitalise(chosenCapital)}!</u> better luck next time</h2>`;
    subtractScore();
    lifeRemoval();
}
//-------- adds a point for correct answer --------------------------------
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerHTML = ++oldScore;
}

//-------- subtracts a point for incorrect answer
function subtractScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    if (oldScore >0){
        document.getElementById("score").innerHTML = --oldScore;
    }else{
        document.getElementById('score').innerText = oldScore;
    }
    
}

// ------displays game over message when no more questions or no remaining lives -----
function gameOver(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    question.innerHTML = "Game over!";
    if (lifeNumber == 0){
        playArea.innerHTML = `<h2 class="game-over">You have run out of lives!</h2><h3 class="game-over">You have scored <u>${oldScore}</> points!</h3>`;
    } else if(countries.length == 0){
        playArea.innerHTML = `<h2 class="game-over">Well done! You have answered all questions correctly!</h2><h3 class="game-over">You have scored <u>${oldScore}</> points!</h3>`;
    }
}


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
      $(".lives-section-level-2").css("background-color", "rgba(255, 170, 52, 0.7)");
      $("#theme").remove();
    });
  });
