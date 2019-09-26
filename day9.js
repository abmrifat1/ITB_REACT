class Friuts{
    constructor(name,price,season){
        this.name=name;
        this.price=price;
        this.season=season;
    }
     hello(name) {
        this.name=name;
    }
}

Friuts.prototype.size=15;

let friuts= new Friuts("mango",120,"summer");

//friuts.hello("banana"); //show name is banana

//console.log(friuts.name)
//console.log(friuts.size)

//console.log(friuts instanceof Friuts)



const getObjectPorperties=(object)=>{
    let value="";
    for(let eachKey in object){
       
      value=(value+eachKey+":"+ object[eachKey]+",");
      
        
    }
    return remove(value);
  //  console.log(value)

}
function remove(value){
    value=value.split("");
    value.pop();
    value.push(".")
    value=value.join("")
return value
}

//console.log(getObjectPorperties(friuts))


const flowers={
    info:{
        name:{
            scienctificName:"banana_ico"
        }
    },
    color:{
        rgb:{
            red:5,
            green:9,
            blue:4
        }
    }
}


