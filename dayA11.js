    let bird={

        info:{

            name:{

                value:"tweet"

            }

        }

    }

    // const dig = (obj, target) =>

    // target in obj

    //     ? obj[target]

    //     : Object.values(obj).reduce((acc, val) => {

    //         if (acc !== undefined) return acc;

    //         if (typeof val === 'object') return dig(val, target);

    //     }, undefined);




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



    const data = {

    level1: {

        level2: {

        level3: 'some data'

        }

    }

    };

//console.log(getData(bird))


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

getFlowersDetails(flowers)