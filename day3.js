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

function getMonth(month){
    switch(month){
        case 1:return "january";
        break;
        case 2:return "february";
        break;
        case 3:return "martch";
        break;
        case 4:return "april";
        break;
        case 5:return "may";
        break;
        default:return "not match";
    }

}
console.log(getMonth(5));

function getTeam(name){
    switch (name){
        case 'abm':
        case 'rifat':
        case 'alam':return "team A member";
        break;
        case 'ars':
        case 'rouf':
        case 'heron':return "team B member";
        break;
        default:return("not match");
        break;
    }
}

console.log(getTeam('abm'))

function findMan(prop){
    var man={
        name:"abm",
        id:5998,
        cgp:3.77
    }
    return man[prop];
}
console.log(findMan("name"))


function login(name,password,type){
    var credential={
        name:"",
        password:"",
        type:""
    }
   credential["name"]=name;
   credential["password"]=password;
   credential["type"]=type;

   return credential;
}
console.log(login("abm","123","basic"))

var profile={
    name:"Khorshed Alam",
    education:[{
        instuteType:"ssc",
        instuteName:"bhs",
        instuteAddress:"chadpur",
        passyear:"2011"
    },{
        instuteType:"hsc",
        instuteName:"sc",
        instuteAddress:"dhaka",
        passyear:"2013"
    },{

        instuteType:"bsc",
        instuteName:"DIU",
        instuteAddress:"dhaka",
        passyear:"2019"
    }],
    phone:['01772515721','01738366238'],
    address:{
        city:"baridara",
        lane:"13",
        hpuse:"540/6"

    }
}

console.log(profile.educationInstute.ssc);