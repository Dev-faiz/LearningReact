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


