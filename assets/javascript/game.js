//Global Variables

var wordlist = ["foo", "bar", "foobar", "foofoo", "barbar"]
var masterWord = wordlist[Math.floor(Math.random() * wordlist.length)];
console.log(masterWord)
var wrongGuess = false;
var loseCount = 0;

// document.write(masterWord)
//id="guess" is the user's guess
// alert("Select a letter")



// var guess = document.getElementById("guess");
//     document.onkeyup = function(event) {
//         guess.textContent = event.key;
//       };

// Game Script Functions

// for (var age = 0; age < 5; age++) {
//     console.log("I am " + age);
//     document.write("I am " + age +"<br>")
// }

function printWordBlanks(){
    var blank = ("");
    for(var x=0; x < masterWord.length; x++){
        blank = blank.concat("_ ");
        word.textContent = blank;
    }
}
function checkWord(){
    wrongGuess=0;
    for(var x=0;x<masterWord.length; x++){
        if (event.key == masterWord.charAt(x)){
            wrongGuess = true;
            //put in a function to write to word
            // res = str.replace("Microsoft", "W3Schools");
            blank = "x";
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
                            
    if (event.key == questions[x].a ) {
        // correctAnswer();
        // x++;
        // printquestion();
    }
    else{
        // wrongAnswer();
        // x++;
        // printquestion();
    }
    
}