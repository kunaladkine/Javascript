let name = "hellow"     //string data type
let age = 23            // number data type
let weight = 50.34      // float
let data = true     // boolean data type
let area = null        // standard alaone value
let state;      //undefined value

console.table([name,age,weight,data,area,state]);

console.log(name);
console.log(age);
console.log(weight);
console.log(area);
console.log(typeof data);       //typeof is a funtion to find type of data type 


//primitive data types 

//number =>2 to power 53
//bigint
//string = ''  ""
//booleaan = true or false
//null = standalone value
//undefined 
//symbol = unique 

//nonprimitive data typed
//objects
//arrays 

//numbers : 
let ager = 23 
const gravity = 9.81    //non changing value 

//string 

let space = ' '         //an empty blank space string 
let firstName = 'Abhi'      // also we can write string in single quote 
let lastName = "shek"      //we can write string in double quote 
console.log(space, firstName, lastName);

let namea = firstName+lastName      //string concatination 
console.log(namea);

//escape sequence character

console.log('i am writing\nnew line');          //new line
console.log('8\t5\t18');                        //8 tabs 
console.log("data\'storage\'");                 //single quote
console.log('data can\"double\"');              //double quote

//string methods 
//length : 

let js='javascript'
console.log(js.length);

//accessing character through index 
let firstletter=js[0]
console.log(firstletter);

//uppercase

console.log(js.toUpperCase());          //it will convert to the upper case given text 

//tolowercae 

console.log(js.toLowerCase());      //it will convert to the lower case 

// includes()  : it will check the string is availabe in the given or note 

console.log(js.includes('a'));          //it will shows the true 
console.log(js.includes('z'));

// replace() : this method will help to replace the old string to new string 

console.log(js.replace('a','z'));           //it will repllace the a to z letter 


// indexof() : it will find the index value of the curreent letter 
console.log(js.indexOf('r'));       //it will shows the r indexed value 


//concat()

console.log(js.concat("is","a","language"));






