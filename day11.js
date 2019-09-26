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

console.log(getData(data,'some data'))