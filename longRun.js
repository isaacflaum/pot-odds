// this is a dice roll simulator to help me understand the concept of pot odds
// each player puts in an ante, and I guess a number from 1 to 6 and win the 
// pot if I am right

var numberOfOpponents = 6; // play around with this number. 5 should be when our profit evens out
var ante = 1;
var winnings = 0;
var myGuess = 4; // lets just guess 4 every time because of the 4 forces of nature

// simulate 1 million runs of this dice game monte carlo style ;)
for (var i = 1000000; i > 0; i--) {
	winnings = winnings - ante;
	var pot = (numberOfOpponents + 1) * ante;
	var diceRoll = Math.floor( Math.random() * 6 ) + 1;
	if (diceRoll === myGuess) {
		winnings = winnings + pot;
	}
}

console.log(winnings); // see how much we won or lost