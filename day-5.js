function name(m,n){
    let array=[];

    for(var i=0;i<m;i++){
        var row=[];
        for(var j=0;j<n;j++){
            row.push(2);
        }
        array.push(row)

    }

    return array;
}

console.log(name(3,2))
//////////////////
console.log(`hi there`)