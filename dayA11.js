

    let bird={
        info:{
            name:{
                value:"tweet"
          }
        },
        color:{
            rgb:{
                red:20,
                green:6,
                blue:1
            }
        }
    }
    const getData=(obj,key)=>{
        if(key in obj){
           return obj[key]
        }else{
           return Object.values(obj).reduce((acc,val)=>{
              if(acc!==undefined) return acc;
                if(typeof val==="object") return getData(val,key);
            },undefined)
        }
    }
    console.log(getData(bird,"blue"))


class Flowers{
    constructor(name,color,size){
        this.name=name;
        this.color=color,
        this.size=size
    }
}

const flowers=new Flowers('rose','red','small');

getFlowersDetails=(object)=>{
    for(value in object){
        console.log(value+':'+object[value])
    }
}

//getFlowersDetails(flowers)

readTypeOfValue=(arra)=>{
    for(let e in arra){
      if(typeof e==='boolean'){
          console.log (true);
      }
      else{
          console.log(false)
      }
    }
}

readTypeOfValue([1,2,"true",false])