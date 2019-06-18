// As a devopler I want to maek good, consistant commits.
// As a player, I want to be able to Roll any number side.
// As a player, I am furnished with a set of rules including the various dice and their values.
//********************************* Dice Values
// Dice Values: Cost                                         Dice Value: Return
//  4- Sided Die = $4                                      4-sided die = $8
//  6- Sided Die = $5                                      6-sided die = $7
//  8- Sided Die = $6                                      8-sided die = $6
//  10-Sided Die = $7                                      10-sided die = $5
//  12-Sided Die = $8                                      12-sided die = $4

// As a player, I will roll a 20-sided die along with my opponet to determine who goes first.
// I need a function to roll a 20-sided die and to determine the higher number rolled, in which the highest rolled goes first.

//*********************************** Player Turn...

///As a player, I will see that I was given $8  credit at the being of the game to make first move.
// As a player, I can use my credit to purchase a of vaule that I can afford to roll, also whichever die I chose will give me credits after my roll worth a specific credit amount assigned to the die.
// As a player, I can roll a die to move further towards the finish, which is at the 101st index.
// As a player, I will be propmted to play the game again after it comletes.

numbers = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"
]

$(function() {
  //var dice;
  // For creating a new Diceset
  dice = new DiceSet();


  $("#rollButton").click(function() {
    //var dice, outcomeList, message;
    outcomeList = dice.roll();
    console.log(outcomeList);

    // a good start, but you really don't want to reference //the array this way

    // use a for loop here instead of outcomeList

    message = "Rolled Dice!  " + outcomeList + " <br>";
    $("#outcome").append(message);
  });


  // place click handler for reset here
  $("#diceResetButton").click(function() {
    dice.reset();
    $("#outcome").html("");
    console.log("Reset is Supposed to happen...")
  });
  
  //click handler for changing the number of sides
  $("#setDiceSetSidesButton").click(function() {
    var chosen_number = $("#setDiceSetSides").val();
    dice.setNumSides(chosen_number);
    $("DiceSize").html(chosen_number);
    console.log("Amount of Sides on Dice Should Change...")
  });
function howMaySides(setDiceSetSides) {
  if (setDiceSetSides = 4) {
    alert("You have been charged $4");
  }
  if(setDiceSetSides = 6) {
      alert("You have been charged $5");
  }
  if(setDiceSetSides = 8){
    alert("You have been charged $6")
  }
  if(setDiceSetSides = 10){
    alert("You have been charged $7")
  }
  if(setDiceSetSides = 12){
    alert("You have been charged $8")
  }
  else{
    "please choose a die in the reccommend sides of 4,6,8,10,12";
  }
}


  // click handler for setting the number of dice in the diceset 
  $("#setDiceSetSizeButton").click(function() {
    var chosen_number = $("#setDiceSetSize").val();
    dice.setDiceSetSize(chosen_number);
    $("DiceSides").html(chosen_number);
    console.log("Dice Set Amount Should change...")
  });

  // click handler for getting the average number of rolls
  $("#RollAverageButton").click(function() {
    alert(dice.getAverage());
    console.log("Average is Supposed to Be Displayed...")
  });

});