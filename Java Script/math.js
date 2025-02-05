/*
const firstname = "omnateeta";
const lastname = "Unnimath";
const age = 18;
const str = "Hellow there my name is om";
const tags = "Web design, web development, programming";

let val;
// val=firstname+lastname;
// console.log(firstname+" "+lastname);
// //append
// val = "Omn";
// val += " unnimath";
//val = "Hello my name is "+firstname+ "and Im "+age+ " old";

//concat()
//val = firstname.concat(" ", lastname);

//change case
val = firstname.toUpperCase();
val = lastname.toLowerCase();

//indexof
val = firstname.indexOf("t");
val =firstname.lastIndexOf("o");

//charAt()
val = firstname.charAt("1");
val = firstname.charAt(5);

//substring()
val = firstname.substring(0,4);

//slice()
val = firstname.slice(0,4);

//spilt
val = str.split(" ");
val =str.split(",");
 //replace
 val = str.replace("om", "omnateeta");
 
 //includes()
 val = str.includes("om");


console.log(val);
*/

//Numbers and Math Object
/*
const num1 =100;
const num2 = 50;
let val;
//addition
val= num1+num2;
val = num1- num2;
val = num1* num2;
val = num1/ num2;
val = num1% num2;

//Math Objects
val = Math.PI;
val = Math.round(2.8);
val =Math.round(5.5);
val = Math.ceil(9.2);
console.log(val);
*/

//Arrays and  Strings
//create some arrays
/*
const numbers=[43,56,15,18,42,22];
const numbers1=new Array(22,23,24,25,26);
const names=["John","Mary","David","Emma","Oliver","Ava"];

const mixed = [22, "hello",true,65,null,undefined];

console.log(mixed);

let val;
//get the array length
val=numbers.length;

//cheks isits an array
val = Array.isArray(numbers);
//get a single value
val = numbers[1];
//insert a new value or replace
 numbers[2] = 100;//replace
 val = numbers.indexOf(42);

//Muttting the array
 //Add a number to the end of an array
 numbers.push(11);
 //Add to the front of the array
 numbers.unshift(10);
 //remove the last number from the array
 numbers.pop();
 //remove first number from the array
 numbers.shift();
//splicing
numbers.splice(1,2);
//reverse the array
numbers.reverse();
//concat the array
val=numbers.concat(numbers1);
//sort
val=names.sort();
val = numbers.sort();
val = numbers.sort(function (x,y){
    return x-y;
});
val = numbers.sort(function (x,y){
    return y-x;
});

console.log(numbers);
console.log(val);
*/

// Templeate Literals
/*
const name = "John";
const age = 30;
const job = "Developer";
const city = "New York";

let html;
//without using templete literals we are going to reandering javascript to html
html=
"<ul><li>Name:"+
name + 
"</li><li>Age:"+
age+
"</li><li>Job:"+
job+
"</li><li>"+
city+
"</li></ul>";
document.body.innerHTML=html;


//With using Templete literals(es6)

html = `
<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>Job:${job}</li>
<li>${city}</li>
</ul>
`;
document.body.innerHTML = html;
*/