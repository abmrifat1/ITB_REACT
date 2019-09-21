
    var i=0;
    while(i<=10){
        if(i%2===1){
           console.log(i);
        }
        i++
    }
    var string=" ";

    var groceries=[
        {item:"veg",price:"20"},{item:"banana",price:"30"}
    ]
    

    var i=0;
    do{
      var string= string+( groceries[i].item +":"+ groceries[i].price)+", ";
        
        i++
    }while(i<=groceries.length-1)

    console.log("today shopping :"+ string)


    var string="3646352565"
    var number=parseInt(string, 10) 
    console.log(number)

    var string="";
 
    var groceries=[
        {item:"veg",price:"20"},{item:"banana",price:"30"}
    ]
    for(var i=groceries.length-1;i>=0;i--){
        var string= string+( groceries[i].item +":"+ groceries[i].price)+", ";
    }

    console.log("today shopping :"+ string)
    

    //////////////////////////////////////////////

    function profile(){
        const name="Khorshed alam";
        let email="rifatabm1@gmailcom";
        let phoneNo="01772515721";
        let address="kolabagan";
        const birthday="1/1/1996";
    }


    const grocerie=[
        {item:"veg",price:"20"},{item:"banana",price:"30"}
    ]

    getItem=(list)=>{
        var string="";
        for(var i=list.length-1;i>=0;i--){
            var string= string+( list[i].item +":"+ list[i].price)+", ";
        }
    
        console.log("today shopping :"+ string)
        
    
    }
    getItem(grocerie)


    add=(num1,num2)=>{
      return num=num1+num2;
    }
    doSomething=(a,b,functionOne)=>{
        return functionOne(a,b);   
    }
   // console.log(doSomething(3,4,add));


    // var string="3646352565"
    // var number=string.split('') 
    // console.log(number)

    // const str="hello samim";

    stringChange=(sentence,position,newValue)=>{
        sen=sentence.split("");
        sen[position]=newValue;
        sentence=sen.join("")
        return sentence;
    }
    // stringReplace=(sentence,oldValue,newValue)=>{
    //     sen=sentence.split("");
    //     for(var i=0;i<=sen.length-1;i++){
    //         if(sen[i]==oldValue){
    //             sen[i]=newValue;
    //             break;
    //         }
    //     }
    //     sentence=sen.join("");
    //     return sentence;
    // }

   // console.log(stringChange(str,10,"r"))
 //   console.log(stringReplace(str,"m","H"))

    
    const str="mihello sami";
    let count=0;
    stringReplace=(sentence,oldValue,newValue)=>{
        sentence=sentence.split("");
        value=oldValue.split("");
    
        for(var i=0;i<=value.length-1;i++){
            for(var j=0;j<=sentence.length-1;j++){
                if(value[i]==sentence[j]){
                    i++;                     
                    count++
                    console.log(j)
                    var blankIndex=j
                    if(count==(value.length)){
                         
                         console.log(j)
                         sentence[blankIndex]="";

                    }
                   
            }
            
            }
            

        }
        sentence[blankIndex]=newValue;
        newSentence=sentence.join('')
    
        console.log(newSentence)
        
    } 

  stringReplace(str,"mi","0");