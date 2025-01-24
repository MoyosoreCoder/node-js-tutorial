//index.js is where functions are imported
//const {generateRandomNumber, celciusToFhreit} = require("./utils");

//console.log(`Random number: ${generateRandomNumber()}`);
//console.log(`The celcius to fahreit number is: ${celciusToFhreit(0
    
//)}`)
import getPosts, {getPostLength}  from "./postControllers.js";
console.log(getPosts())
console.log(`Post length: ${getPostLength()}`)

