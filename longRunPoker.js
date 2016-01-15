// Script to play around with the expected value formula with a simulated bet

var POT_WIN_PERCENT = 1 / 3; // percentage we will win pot
var POT_SIZE = 300; // size of pot before we call
var AMOUNT_TO_CALL = 300; // amount of chips to call
var STACK_SIZE = 100; // our stack size before we call
// var OPPONENTS_LEFT to be implemented ...

// EV formula
var win_amount = POT_SIZE + Math.min(AMOUNT_TO_CALL, STACK_SIZE);
var lose_amount = Math.min(AMOUNT_TO_CALL, STACK_SIZE);
var expected_value = (win_amount * POT_WIN_PERCENT) - (lose_amount * (1 - POT_WIN_PERCENT));

console.log(expected_value);