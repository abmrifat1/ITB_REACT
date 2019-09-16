
// var userName="rifat";
// var password="123456";
// var email="rifatabm1@gmail.com";
// var id=2;


// var message="this email doesn't match";

// var confirmMessage="hi "+userName+","+message;
// console.log(confirmMessage);

// var loginSystem=['registration','login','validation','match','confirmation'];

// console.log(loginSystem[3])


function login(){
    var username="rifat";
    var password="123456";

    var message=['wrong username','wrong password','not match','login successfully','please try again']
    console.log(message[Math.floor(Math.random()*message.length)]);
}

login();

//////////////

function joinString(a,b,c){
    console.log(a+' '+b+' '+c);
}

joinString("hi","Khorshed","alam");
///////////////

function shoppingList(){
    var list=[['pc',56000],['mobile',15000],['bag',1500]];
    console.log(list);
}
shoppingList();
/////////////////

var balance=500;
function deposit(tk){
   balance+=tk;
   //console.log(balance)
}
function withdraw(tk){
    balance-=tk;
    //console.log(balance)
}
function getBalance(){
    console.log(balance)
}

deposit(250);
withdraw(100);
getBalance();
/////////////////////////
function temperature(fahrenheit){
  celsius=(fahrenheit-32)*5/9;
  console.log(celsius);
}
temperature(68);
////////////////////////

function squareValue(value){
    value*=value;
    console.log(value)
}
squareValue(2);
//////////////////

function findType(value){
    console.log(typeof(value));
}
findType(2);

///////////////////////







