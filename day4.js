function leapYear(year){
    if(year%4==0){
        console.log(year+" Year is a leapyear")
    }
    else{
        console.log("not a leapyear");

    }
}

leapYear(2000);
leapYear(2019);


function curruntDateTime(){
    var date = new Date();
 
    day= date.toLocaleDateString();
    time= date.toLocaleTimeString();
    console.log("Date is:"+day +" and time is :"+ time )
   
}
(curruntDateTime())

////////////////////////

function area(x,y,z){
   var s=(.5)*(x+y+z)
   return Area=Math.sqrt(s*(s-x)*(s-y)*(s-z))
}

console.log(area(5,6,7))
/////////////////////////////


function getNumber(value){
  var number=Math.floor((Math.random() * 10) + 1);
  if(value===number){
      return "Good Work";
  }
  else{
      return "Not matched"
  }

}
console.log(getNumber(6))

//////////////////////////////////////


function getCommand(x,y,commnd){
 if (commnd=="mul"){
     return x*y
 }
 if (commnd=="div"){
     return x/y
 }
 else{
     return "no algorithm"
 }
   
}

console.log(getCommand(2,3,'div'))

//////////////////////////////////
function checkNumber(x,y){
    var z=x+y;
    if(x===50 || y===50 || z===50){
        return true;
    }
    else{
        return false;
    }
    
}
console.log(checkNumber(20,30));

//////////////////////////////////



