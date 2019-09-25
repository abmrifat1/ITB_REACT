const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
  
    const { tomorrow: { max:maxOfTomorrow }} =forecast;
    //const maxOfTomorrow = undefined; // change this line
    // change code above this line
    return maxOfTomorrow;
  }
  
 // console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
 // console.log(LOCAL_FORECAST.tomorrow.max) //same result 84.6


  const [a,b,,,...array]=[1,2,3,4,5,6,7,8,9]  // , take one per value & ... should be use for take a array
  //console.log(array)

  function getName(){
      class Veletables{
          constructor (value){
              this.name=value;
          }
      }
      return Veletables;
  }

  const one=getName();
  const vegetables= new one("banana");
  console.log(vegetables.name)