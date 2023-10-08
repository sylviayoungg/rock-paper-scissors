# rock-paper-scissors
Web application utilizing hand gestures for an alternative interaction rock, paper, scissors game.

Implements Javascript Handtrack library to track and process user hand gestures and movements through their camera. 
The user plays against the randomly generated options. 
The user may start a new game, start a new round, display game data, and end the game along with choose between playing rock, playing paper, or playing scissors. 

A closed fist represents rock, an open hand represents paper, and a pointing hand represents scissors. 
Two open hands starts the game. 
Two closed hands restarts a new game.
An open hand and a closed hand and updates the user score on the screen.
An open hand and a pointing hand displays game statistics - user score, number of games, and computer score.

The game page displays the game instructions, the user's live camera feed, a graphical representation of the option played by the user and the computer respectively, the user score, the outcome of each game - user win or loss, and computer win or loss, and a countdown to indicate the start of a round or game.
The number of games and computer score are displayed only when the user indicates with an open hand and a pointing hand to display game statistics.
