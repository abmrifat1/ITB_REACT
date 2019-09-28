let studentInfo={
    name:"rifat",
    id:5998
    
}

changValue=(object)=>{

   let obj={}
   for(value in object){
        a=object[value];
   
       // object[a]=value;
       // delete object[value]
      
     
       obj[a] = value;
      
        
   }
   return obj
   //return obj;
}



//console.log(changValue(studentInfo))

let data=[2,2,3,4,3,5]


//console.log(a)
let newAry=[];
for(var i=0;i<data.length;i++){
   for(var j=i+1;j<data.length;j++){
       if(data[i]==data[j]){
          data[j] =undefined;
       }
       
   }
  
      
      if(data[i]!==undefined){
         newAry.push(data[i]);
      }
 
   
}
console.log(newAry)

// data.map((item,index)=>{
//    var a= data[0]
//  //  console.log(a)
//    if(a==item){
//       delete item
//    }
//    console.log(item)
// })