//Global Variables
var wordlist = ["squamous", "eldritch", "cyclopean", "indescribable", "unnameable", "blasphemous","nameless","antiquarian","alienist","loathsome","porphyry",]
var masterWord = wordlist[Math.floor(Math.random() * wordlist.length)];
var wrongGuess = false;
var loseCount = 0;
var winCount = 0;
var displayWord = ("");
var choices = ("abcdefghijklmnopqrstuvwxyz");
var validInput = false;
var gameReset = false;
var gamesWon = 0;
var gamesLost = 0;

// Game Script Functions
function printWordBlanks(){ // This function just prints the initial underscores for the length of the chosen word
    var blank = ("");
    for(var x=0; x < masterWord.length; x++){
        blank = blank.concat("_");
    }
    displayWord = blank;
    word.textContent = displayWord;
}
function replaceLetters(){ // This function will update the displayed word with correct letters
    var newWord = ""
    for(var x=0; x<masterWord.length; x++){
        if(displayWord.charAt(x) == masterWord.charAt(x)){
            newWord=newWord.concat(masterWord.charAt(x));
        }
        else if (event.key == masterWord.charAt(x)){
            newWord=newWord.concat(event.key);
        }
        else {
            newWord=newWord.concat("_");
        }
    }
    displayWord=newWord;
    word.textContent = displayWord.toUpperCase();
}
function checkWord(){ //this function checkes user's guess with chosen word
    wrongGuess=false;
    for(var x=0;x<masterWord.length; x++){
        if (event.key == masterWord.charAt(x)){
            wrongGuess = true;
            replaceLetters()
            winCount++
        }
        else{}
    }
    if (wrongGuess == false){
        loseCount++
        alert("Wrong Guess, Try again")
        document.getElementById("gallows").src = "assets/images/hangman"+loseCount+".jpg";
    }
    else{
        alert("Great Job!")
    }
    wrongGuess = false;
}
function checkEndState(){ // This function checks if the word is complete or if you've run out of guesses (6 in this case)
    if(winCount >= masterWord.length){
        alert("You've Done it!!!")
        alert("Press any key to play again")
        gameReset = true;
        gamesWon++
        alert("Games Won: "+gamesWon+"<br>"+"Games Lost: "+gamesLost)
    }
    else if (loseCount >= 6){
        alert("You've been hung")
        alert("The word was "+masterWord.toUpperCase())
        alert("Press any key to play again")
        gameReset = true;
        gamesLost++
        alert("Games Won: "+gamesWon+"<br>"+"Games Lost: "+gamesLost)
    }
}
function checkInput(){ // This function checks user's input and makes sure the choice is an available letter
    validInput=false;
    newChoices=""
    for (var x=0; x < choices.length; x++){
        if(event.key == choices.charAt(x)){ // This if statement checks if user input is valid
            validInput=true;    
        }
        else{}
        if (event.key == choices.charAt(x)){ //This if statement updateds the available choices left to the player
            newChoices=newChoices.concat("_")
        }
        else{
            newChoices=newChoices.concat(choices.charAt(x))
        }
    }
    choices=newChoices;
    alphabet.textContent = choices.toUpperCase();
}
function gameRestart(){
    masterWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    wrongGuess = false;
    loseCount = 0;
    winCount = 0;
    displayWord = ("");
    choices = ("abcdefghijklmnopqrstuvwxyz");
    validInput = false;
    gameReset = false;
    printWordBlanks()
    document.getElementById("gallows").src = "assets/images/hangman0.jpg";
    alphabet.textContent = choices.toUpperCase();
}

//Game Initial State Setup
printWordBlanks()

// Game Execution
document.onkeyup = function(event) {
    checkInput()
    if (gameReset == false){
        if (validInput==true){
            checkWord()
            checkEndState()
        }
        else {}
    }
    else {
        gameRestart()
    }
}