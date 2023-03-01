const pure =function(obj){
    return obj*2
}
console.log(pure(85))

//..........impure
let d ={a:0}

let impure =function(d){
    let p=d*8
    return p;
}
console.log(impure(85))
