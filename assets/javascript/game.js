//<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//$(document).ready(function () {

var randomNumber = Math.floor(Math.random() * (101 + 1) + 19);
console.log("randonNumber var is: " + randomNumber);
var chosenOne = randomNumber;
console.log("chosenOne var is: " + chosenOne);
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

//put the four numbers in an array --not convinced i need this...

//display the 4 random numbers not needed, just console log them to see them - done
//each of the 4 crystals should represent one of the 4 random numbers
// assign random number to buttons (displayed)
var totalCount = 0;
var wins = 0;
var losses = 0;
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
        resetGame();
    }
    else if (chosenOne < totalCount) {
        losses++;
        $('#losses').text(losses);
        console.log("Computer total wins: " + losses);
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
        resetGame();
    }
    else if (chosenOne < totalCount) {
        losses++;
        $('#losses').text(losses);
        console.log("Computer total wins: " + losses);
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
        resetGame();
    }
    else if (chosenOne < totalCount) {
        losses++;
        $('#losses').text(losses);
        console.log("Computer total wins: " + losses);
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
        resetGame();
    }
    else if (chosenOne < totalCount) {
        losses++;
        $('#losses').text(losses);
        console.log("Computer total wins: " + losses);
        alert ()
        resetGame();
    };
});

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