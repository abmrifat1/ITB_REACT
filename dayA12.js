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

let data=[2,3,4,3,5]
let data1=[1,2,6,4,3,5,2]

var mainData = data.concat(data1);
//console.log (mainData)

//console.log(a)
let newAry=[];
for(var i=0;i<mainData.length;i++){
   for(var j=i+1;j<mainData.length;j++){
       if(mainData[i]==mainData[j]){
         mainData[j] ='';
       }
       
   }
  
      
      if(mainData[i]!==''){
         newAry.push(mainData[i]);
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

const engineers=[
   {
      sector:"software",
      career:"programmer",
      company:"itb",
      salary:10000
      
   },   {
      sector:"web engineer",
      career:"programmer",
      company:"bitm",
      salary:20000
      
   },   {
      sector:"app developer",
      career:"developer",
      company:"epoli",
      salary:8000
      
   }
]

let eng=engineers.map((item)=>{
   var newOne={};
   newOne["company"]=item.company
   newOne["salary"]=item.salary
     return newOne;
}).filter(item=>item.salary>=10000);
 

console.log(eng)

// for(var i=0;i<engineers.length;i++){
//     if(engineers[i].salary<=12000){
//        var eng=[{
//           salary:engineers[i].salary,
//           company:engineers[i].company
//        }]    
//    }
  
// }
// console.log(eng)
//

number=[1,2,3,4,5]

let one=number.map((num)=>{
   return num*2
}).filter(n=>n%2==0).reduce((x,y)=>x+y);

console.log(one)

function titleCase(str) {
   return str=str.toLowerCase()
     .split(' ')
     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
     .join(' ');
 }
 
 console.log(titleCase("i'm a little tea pot"));