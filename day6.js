
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
    console.log(doSomething(3,4,add));