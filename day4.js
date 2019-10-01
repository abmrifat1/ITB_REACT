function leapYear(year){
    if(year%4===0){
        console.log(year+" Year is a leapyear")
    }
    else{
        console.log("not a leapyear");

    }
}

leapYear(2000);
leapYear(2019);
//////////////////////////////////


function curruntDateTime(){
    var date = new Date();
 
    day= date.toLocaleDateString();
    time= date.toLocaleTimeString();
    console.log("Date is:"+day +" and time is :"+ time )
   
}
curruntDateTime()

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
console.log(getNumber(5))
//////////////////////////////////////


function getCommand(x,y,commnd){
 if (commnd==="mul"){
     return x*y
 }
 if (commnd==="div"){
     return x/y
 }
 else{
     return "no algorithm"
 }
   
}

console.log(getCommand(2,3,'div'))
console.log(getCommand(2,3,'mul'))

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
console.log(checkNumber(50,30));
console.log(checkNumber(10,30));                                     

//////////////////////////////////

function getString(){
    var string="how are you";
    var str1="Py"
    return str1.concat(string);
}
console.log(getString())

/////////////////////////////

function findLargestNumber(x,y,z){
    if(x>y && x>z){
        console.log(x +" is the largest number");
    }
    else if(y>z && y>x){
        console.log(y +" is the largest number");
    }
    else{
        console.log(z +" is the largest number")
    }
}

findLargestNumber(6,6,9);
//////////////////////////

var name="rifat";
console.log(`my name is:${name}`)

///////////////////

const ename={
    id:'5998',
    todo:function(work){
      this.id=work;
      return this.id;
    }
  };
  ename.todo("abm");
//   console.log(ename.todo("ffffff"))
  //console.log(ename.id)
/////////////////////

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');



/////////////////////////////////

class Book {
    constructor(author) {
      this._author = author;
    }
    
    get writer(){
      return this._author;
    }
   
    set writer(updatedAuthor){
      this._author = updatedAuthor;
    }
  }

  const lol = new Book('anonymous');
  console.log(lol._author)  //anonymous
  console.log(lol.writer);  // anonymous
  lol.writer = 'wut';
  console.log(lol.writer);  // wut




















