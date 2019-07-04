var wordlist = ["foo", "bar", "foobar", "foofoo", "barbar"]
var masterWord = wordlist[Math.floor(Math.random() * wordlist.length)];

// document.write(masterWord)





// alert("Select a letter")

var guess = document.getElementById("guess");
    document.onkeyup = function(event) {
        guess.textContent = event.key;
      };
