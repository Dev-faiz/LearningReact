import React from 'react' ;
import ReactDOM from 'react-dom' ;

const element = <h1>Hello World</h1>

console.log(element);

ReactDOM.render(element , document.getElementById("root"));

const person = {
    name : 'faiz' ,
    walk : function(){console.log(this)}, // method of creating function
    talk(){} // method of creating function 
}
person.walk()
const walk = person.walk().bind(person) ; 
walk();
person.name = '';

const square  = function(number){ // normal function 
    return number * number ; 
}
const squareArrow = (number)=>{ // arrow function 
    return number * number
}

const address = {
    street : '' ,
    city : '' ,
    country : '' ,
}

//  const street = address.street ; 
// const city = address.city ;
// const country = address.country ;
// instead of writing like this we can use destructuring 

const {street} = address ;
const {city , country} = address 

class Person {
    constructor(name){
        this.name = name ;
    }
    walk(){
        return "walking" ;
    }
}
const person = new Person() ;
person.walk() ;