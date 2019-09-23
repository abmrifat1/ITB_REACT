


  var obj = {
    id: 48,
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



