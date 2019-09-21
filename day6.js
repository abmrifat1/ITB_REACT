
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
