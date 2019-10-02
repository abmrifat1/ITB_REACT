const educationInfo={
    ssc:{
        instute:"bhs",
        year:"2011",
        group:"science"
    }
}

const newInfo={
    hsc:{
        instute:"swc",
        year:"2013",
        group:"science"
    }
}

const updateEducationInfo=(currentInfo,newInfo)=>{
     currentInfo["ssc"]["gpa"]=5.00;
     return newInfo={...currentInfo,...newInfo}
}

console.log(updateEducationInfo(educationInfo,newInfo));

const user=[
    {
        name:"abm",
        password:"abm"
    },{
        name:"ars",
        password:"ars"
    }
]
login=(userName,usePassword)=>{
    for(var i=0;i<=(user.length)-1;i++ ){
        
        if(userName===user[i].name && usePassword===user[i].password){
            return "you are successfully login"
        }
        else{
            return "try again with valid information"
        }
    }
   
}
console.log(login('abm','abm'))

singUp=(userName,userPassword,person)=>{
     
  const newUser= {
            name:userName,
            password:userPassword
        }
        person.push(newUser)
        return person;
   
}
console.log(singUp('rifat','123456',user))