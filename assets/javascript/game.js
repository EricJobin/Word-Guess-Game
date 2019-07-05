//Global Variables

var wordlist = ["foo", "bar", "foobar", "foofoo", "barbar"]
var masterWord = wordlist[Math.floor(Math.random() * wordlist.length)];
console.log(masterWord)
var wrongGuess = false;
var loseCount = 0;
var displayWord = ("");


// Game Script Functions

function printWordBlanks(){
    var blank = ("");
    for(var x=0; x < masterWord.length; x++){
        blank = blank.concat("_");
    }
    displayWord = blank;
    word.textContent = displayWord;
}
function replaceLetters(){
    var newWord = ""
    for(var x=0; x<masterWord.length; x++){
        if(displayWord.charAt(x) == masterWord.charAt(x)){
            newWord=newWord.concat(masterWord.charAt(x));
        }
        else if (event.key == masterWord.charAt(x)){
            newWord=newWord.concat(event.key);
        }
        else {     //if(word.charAt(x) == "_"){
            newWord=newWord.concat("_");
        }
    }
    displayWord=newWord;
    word.textContent = displayWord;
}
function checkWord(){
    wrongGuess=false; //should be false?
    for(var x=0;x<masterWord.length; x++){
        if (event.key == masterWord.charAt(x)){
            wrongGuess = true;
            replaceLetters()
        }
        else{}
    }
    if (wrongGuess == false){
        loseCount++
        alert("Wrong Guess, Try again")
    }
    else{
        alert("Great Job!")
    }
    wrongGuess = false;
}


//Game Initial State Setup
printWordBlanks()

// Game Execution

document.onkeyup = function(event) {
    checkWord()  
}