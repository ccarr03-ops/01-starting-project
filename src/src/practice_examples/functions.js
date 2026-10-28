function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello('George'); //print Hello George

function add(x, y){
    return x + y;
}
console.log(add(2, 3));
console.log(add("hello ", "world"));

//Functions as parameters
function sayHi(myfunc){
    console.log('Hi!');
    myFunc();
}
function bye(){
    console.log("Bye")
}
function lol(){
    console.log("lol")
}
sayHi(bye);
sayHi(lol);
sayHi(function(){ //anonymous function
    console.log("lolololol");
})

//Functions as expressions
// function lololol(){ 
//     console.log("lolololol");
// }
let iLoveJS = function(){
    console.log("I love js");
}
iLoveJS();
let expressionAdd = function(x, y){
    return x + y;
}
expressionAdd(1,2);
//Arrow Functions
let addArrow = (x,y) =>{
    return x + y;
}
let addArrowShort = (x,y)=>x+y;
addArrow(1,2);

let squared = x => x*x;

function myFunction(func){
    func();
    console.log("done");
}
myFunction((x,y)=>{x+y});