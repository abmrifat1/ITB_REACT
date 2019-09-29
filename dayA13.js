// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>console.log("sucessfull"),1000)
// })

//console.log(promise)

// const newPromise=new Promise((resolve,reject)=>{
//   setTimeout(()=>reject("error"),10000)
// })
//console.log(newPromise)

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("successfully") ,1000)
}).then(result=>result)

//console.log(promise)
//promise.then(value=>console.log(value+" next then"))

const newPromise=new Promise((resolve,reject)=>{
  setTimeout(()=>reject("error"),1000)
}).then(value=>5*2).catch(error=>console.log(error))

//console.log(newPromise)
//promise.then(value=>console.log(value+"new then"))

const getData=async()=>"Sample"
getData().then(result=>console.log(result))

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }

//console.log(mutation(["hello", "hey"])); //if all letter is found in first arry,then true
