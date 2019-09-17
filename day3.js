function getUserName(){
  var  name="rifat";
  return name;

}

function getPassword(){
    var  password="123";
    return password;
  
  }

function login(name,password){
    
    if(name===getUserName() && password===getPassword()){
    console.log("successfully");
    }
    if(name=="" && password==""){
     console.log("empty");
    }
   
}
login("rifat","123");
login("","");


function getResult(mark){
    
    if(mark>=80 && mark<100){
        return "A+"
    }
    if(mark>=70 && mark<79){
        return "A"
    }
    if(mark>=60 && mark<69){
        return "A-"
    }
    if(mark>=50 && mark<59){
        return "B"
    }
    if(mark>=40 && mark<49){
        return "C"
    }
    if(mark>=33 && mark <39){
        return "C"
    }
    return "Fail"
}

console.log(getResult(40));

function getMonth(month){
    
    if(month===1){
        return "January"
    }
    if(month===2){
        return "February"
    }
    if(month===3){
        return "March"
    }
    if(month===4){
        return "April"
    }
   
    return "not match"
}
console.log(getMonth(3))

