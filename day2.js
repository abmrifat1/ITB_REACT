

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { 
      return "Yes, it's true";
    }
    return "No, it's false";
  }
  
  var statement=ourTrueOrFalse();

  console.log(statement)
  /////////////////////////

  var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the": "water"
  };
 
  var entreeValue = testObj;   
  var drinkValue = testObj;  
  console.log(testObj["the drink"])