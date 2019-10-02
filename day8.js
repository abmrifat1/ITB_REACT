
var library = 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  }

getProperties=(obj)=>{
    return Object.keys(obj);
}
//console.log(getProperties(library))

removeProperties=(obj,key)=>{
  console.log(obj);
  delete obj[key];
  console.log(obj);
  
}
removeProperties(library,"readingStatus")

var book = [ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  },
  {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
  }];
  checkReadindStatus=(ary,value)=>{
    
    let status=false;
    for(var i=0;i<(ary.length);i++){
      if(ary[i].title===value){
        status=true;
        console.log(ary[i].readingStatus)
      }
    }

    if(status==false){
      console.log("book not found")

    }
     
  }
 
  // checkReadindStatus(book,'The Road Ahead')


//assignment
  var obj = {
    id: "end day",
    counter: function counter() {
      setTimeout(() => {
        console.log(this.id);
      }, 1000);
    }
  };

  console.log(obj.counter())


//console.log (obj.address);



//find lenght of the largest word in  string;

var sentence="my name is khorshed alam mazumder";
function findLargestLength(str){
  var str=sentence.split(' ');
  var maxlenght=0;
  for(var i=0;i<=(str.length)-1;i++){
    if(str[i].length>=maxlenght){
      maxlenght=str[i].length;
    }
  }
  return maxlenght;
}

console.log(findLargestLength(sentence))

//filter a array using filter() methood
 
var list=['abm','rifat','tipu','shamim','sifat'];
const listFilter=list.filter(i=>i.length>=5);
console.log(listFilter) 

//map() methood for calcution an array

var gpa=[3.4,3.77,5.00]

const calcutionGpa=gpa.map(x=>x-.07)  //subtraction -.07 from all elements of array
console.log(calcutionGpa)

const bolleanGpa=gpa.map(x=>x>4)  //filter array all elements that is greater than 4
console.log(bolleanGpa)

const powerGpa=Math.pow(gpa[2],2)  // square a specific elements of array
console.log(powerGpa)

const powerFullArray=gpa.map(i=>Math.pow(i,2))   //quare all elements of array
console.log(powerFullArray)

const mark=[1,2,3,4,5]
const mechanism=(a,b)=>a+b;

console.log(mark.reduce(mechanism,20))



//show the largest number of array.

var number=[[0,1],[9,4,3],[33,9999,4,4,45],[455,444,454,33,44455]];

function findLargestNumber(number){
    var largestNumberArray=[];
    for(var i=0;i<=(number.length)-1;i++){
      var largestNumber=number[i][0];
       for(var j=0;j<number[i].length;j++){
         if(number[i][j]>=largestNumber){
           largestNumber=number[i][j];
         }
       }
        largestNumberArray[i]=largestNumber;
}
return largestNumberArray;
}

console.log(findLargestNumber(number))
