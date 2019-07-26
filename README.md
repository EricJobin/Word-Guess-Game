# Word-Guess-Game

This Word Guess Game is a hangman style game created to become familiar with Javascript events.
 
When an appropriate key is pressed, the game will recognize that as a guess of a letter in the word. If the letter is present, the underscores where it appears will be replaced by that letter. If the letter is not present, the image will change, building the scaffolding necessary to hang the player. The game will end when either the entire word is guessed, or there have been too many incorrect guesses and the player is hung.
 
The game validates inputs by the user, ensure a letter has been pressed and it has not been previously guessed. After a game over, the game will reset with a new word after any key is pressed. The game will also keep track of how many wins and losses the player has accrued, and display this total after each game.
