// IBayon Homework 4 jQuery.  Due Wednesday September 25, 2018

var randomNumber = Math.floor(Math.random() * (101 + 1) + 19);
// console.log("randonNumber var is: " + randomNumber);
var chosenOne = randomNumber;
// console.log("chosenOne var is: " + chosenOne);
$("#computer-pick").text(chosenOne);


//generate a random number for each type of crystal
var blue = Math.floor((Math.random() * 12) + 1);
console.log("blue computer pick: " + blue);
var red = Math.floor((Math.random() * 12) + 1);
console.log("red computer pick: " + red);
var green = Math.floor((Math.random() * 12) + 1);
console.log("green computer pick: " + green);
var purple = Math.floor((Math.random() * 12) + 1);
console.log("purple computer pick: " + purple);

var totalCount = 0;
var wins = 0;
var losses = 0;

// assign random number to buttons (displayed)
//button 1 - blue gem
$('#button-1').on('click', function () {
    totalCount = totalCount + blue;
    console.log('New gem total = ' + totalCount);
    console.log('You clicked a BLUE gem!!');
    $('#your-total').text(totalCount);
    if (chosenOne === totalCount) {
        console.log(chosenOne);
        wins++;
        $('#wins').text(wins);
        console.log("Your total wins: " + wins);
        alert("You won!!  Start a new game!");
        resetGame();
    }
    else if (chosenOne < totalCount) {
        losses++;
        $('#losses').text(losses);
        console.log("Computer total wins: " + losses);
        alert("Your computer won!!  Start a new game!");
        resetGame();
    };
});
//button 2 - red gem
$('#button-2').on('click', function () {
    totalCount = totalCount + red;
    console.log('New gem total = ' + totalCount);
    console.log('You clicked a RED gem!!');
    $('#your-total').text(totalCount);
    if (chosenOne === totalCount) {
        console.log(chosenOne);
        wins++;
        $('#wins').text(wins);
        console.log("Your total wins: " + wins);
        alert("You won!!  Start a new game!");
        resetGame();
    }
    else if (chosenOne < totalCount) {
        losses++;
        $('#losses').text(losses);
        console.log("Computer total wins: " + losses);
        alert("Your computer won!!  Start a new game!");
        resetGame();
    };
});
//button 3 - green gem
$('#button-3').on('click', function () {
    totalCount = totalCount + green;
    console.log('New gem total = ' + totalCount);
    console.log('You clicked a GREEN gem!!');
    $('#your-total').text(totalCount);
    if (chosenOne === totalCount) {
        console.log(chosenOne);
        wins++;
        $('#wins').text(wins);
        console.log("Your total wins: " + wins);
        alert("You won!!  Start a new game!");
        resetGame();
    }
    else if (chosenOne < totalCount) {
        losses++;
        $('#losses').text(losses);
        console.log("Computer total wins: " + losses);
        alert("Your computer won!!  Start a new game!");
        resetGame();
    };
});

//button 4 - purple gem
$('#button-4').on('click', function () {
    totalCount = totalCount + purple;
    console.log('New gem total = ' + totalCount);
    console.log('You clicked a PURPLE gem!!');
    $('#your-total').text(totalCount);
    if (chosenOne === totalCount) {
        console.log(chosenOne);
        wins++;
        $('#wins').text('wins');
        console.log("Your total wins: " + wins);
        alert("You won!!  Start a new game!");
        resetGame();
    }
    else if (chosenOne < totalCount) {
        losses++;
        $('#losses').text(losses);
        console.log("Computer total wins: " + losses);
        alert("Your computer won!!  Start a new game!");
        resetGame();
    };
});

//this function resets the game after a win by the person or computer
function resetGame() {
    randomNumber = Math.floor(Math.random() * (101 + 1) + 19);
    chosenOne = randomNumber;
    $("#computer-pick").text(chosenOne);
    blue = Math.floor((Math.random() * 12) + 1);
   
    red = Math.floor((Math.random() * 12) + 1);
    
    green = Math.floor((Math.random() * 12) + 1);
   
    purple = Math.floor((Math.random() * 12) + 1);
   
    totalCount = 0;
    $('#your-total').text(totalCount);
   
};