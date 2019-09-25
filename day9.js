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

let friuts= new Friuts("mango",120,"summer");

//friuts.hello("ki");

console.log(friuts.name)

console.log(friuts instanceof Friuts)