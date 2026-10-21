function sayHello (name){

}

function add(x,y){
    return x + y;
}

console.log(add(2, 3));
console.log(add("hello","world"));

//funtions as paremeters
function sayHi(myFunc){
    console.log('Hi!');
    myFunc();
}

function bye(){
    console.log("Bye");
}

function lol(){
    console.log("Lol");
}
sayHi(bye);
sayHi(lol);
sayHi(function(){ //anonymous functions
    console.log("25");
})

//Functuons as expressions
let age =  39 + 2;