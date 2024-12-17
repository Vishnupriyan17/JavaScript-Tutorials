console.log("hiii Vishnupriyan")
console.log(typeof "Vishnupriyan")


//strings

//variable declaration
myVar = "Mat hs";


console.log(myVar)


//length property

console.log(myVar.length)

console.log(myVar.charAt(4))

console.log(myVar.indexOf("s "))

console.log(myVar.lastIndexOf("th"))

console.log(myVar.slice(3,5 ))

console.log(myVar.toUpperCase())

console.log(myVar.includes("Mat"))

console.log(myVar.split(" "))



//NUMBERS


const myNum = 42 ;
console.log(Number.isInteger(myNum))

const Num = "123.23vssd ";
console.log(Number.parseFloat(Num).toFixed(2));

console.log(Number.isNaN(Num));  //false becoz it only check the numbers
console.log(isNaN(Num));     
//true  becoz it checks for both number and string it is also known as global isNaN


//MATH PROPERTY

console.log(Math.PI);
console.log(Math.trunc(Math.PI))
console.log(Math.round(45.17621))
console.log(Math.ceil(5.1))  //it change the whole number to next number
console.log(Math.floor(6.6))
console.log(Math.pow(5,2))
console.log(Math.min(12,3,4,1,2,0))
console.log(Math.max(12,3,4,1,2,0))
console.log(Math.random())  //it gives val from 0 to 1
console.log(Math.floor(Math.random()*10)+1 )
console.log(Math.random())
console.log(Math.random())

const user = "Vishnupriyan"
console.log(user.substring(Math.random()*user.length,Math.random()*user.length))

//if statement

let bramt = 60000;
let limit = 6000;
let ser = true;
if(bramt <= 6000 && ser)
{
    console.log(`User borrows amount is ${bramt}`)
}
else if(bramt > 6000 && ser)
{
    console.log(`User borrows more amount than ${limit}`)
}


//switch statement

let marks = 487;
let grade = 0;
if(marks >= 470)
{
    grade = 1;
}
else if(marks >= 480)
{
    grade = 2;
}
else if(marks >= 490)
{
    grade = 3;
}
switch(grade)
{
    case 1:
        marks > 470;
        console.log("Good");
        break;
    case 2:
        marks > 480;
        console.log("Very Good");
        break;
    case 3:
        marks > 490;
        console.log("Excellent");
        break;
    default:
        console.log("try");
}

switch(1)
{
    case 1:
        if(marks != 487)
        {
            console.log("hii")
            break;
        }
       
    case 1:
        if(marks < 487)
        {
            console.log("hello")
            break;
        }
       
    case 1:
        if(marks === 487)
        {
            console.log("hii hello")
            break;
        }
    default:
        console.log("nothing")
}


//TERNARY OPERATOR

let num = 123;
let ans = num > 1000 ? true:false;
console.log(ans)


let player = "sissor";
let comp = "stone";

let res = 
    player === comp ? "tie"
        :player === "paper" && comp === "stone" ? "Player Wins!" 
            : player === "paper" && comp === "sissor" ? "Computer Wins!" 
                : player === "stone" && comp === "sissor" ? "Player Wins!"
                    :player === "stone" && comp === "paper" ? "Computer Wins!"
                        :player === "sissor" && comp === "stone" ? "Computer Wins!"
                            :player === "sissor" && comp === "paper" ? "Player Wins!":"Computer Wins!"
console.log(res)


//user input

// let myName = prompt("Enter Your Name")
// if(myName)
// {
//     console.log(myName ?? "You didn't enter the name")
// }
// else{
//     console.log("you didn't enter your name")
// }
// console.log(myName.trim().length);


// function input ()
// {
//     let play = prompt("Enter your choice ROCK , PAPER , SICISSOR")
//     if(!play)
//     {
//         console.log(play ?? "Please enter your choice")
//     }
//     else{
//         let compu = arrchoice[Math.floor(Math.random()*3)]
//         process(play,compu)
//     }
// }
//         const arrchoice = ["rock","paper","sicissor"]
//         let playGame = confirm("shall we play")
//         playGame ? input() : "Ok ThankYou"

//         function process(play,compu)
//         {
//                 let result =
//                 play === compu ? "tie"
//                     :play === "paper" && compu === "rock" ? `player: ${play}\ncomputer: ${compu}\nPlayer Wins!` 
//                         : play === "paper" && compu === "sicissor" ? `player: ${play}\ncomputer: ${compu}\nComputer Wins!` 
//                             : play === "rock" && compu === "sicissor" ? `player: ${play}\ncomputer: ${compu}\nPlayer Wins!`
//                                 :play === "rock" && compu === "paper" ? `player: ${play}\ncomputer: ${compu}\nComputer Wins!`
//                                     :play === "sicissor" && compu === "rock" ? `player: ${play}\ncomputer: ${compu}\nComputer Wins!`
//                                         :play=== "sicissor" && compu === "paper" ? `player: ${play}\ncomputer: ${compu}\nPlayer Wins!`:`Correctly enter your choice`
//                                         console.log(compu)
//                                         alert(result);
//                                         let playagain = confirm("play Again")
//                                         playagain ? input():alert("ok thanks for playing")
//             }




//arrays

const arr = [];
arr[0] = "vishnu"
arr[1] = "priyan"
arr[2] = 17
arr[3] = 2003

console.log(arr)
arr.push("mk")
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(9)
console.log(arr)
arr.shift()
console.log(arr)
// delete arr[2]
// console.log(arr)
// //it gives undefined value
//so we use "splice"

arr.splice(2,1)
console.log(arr)
arr.splice(2,0,"september")
console.log(arr)
const myArr = arr.slice(0,3)
console.log(myArr)
const Arr = arr.join()
console.log(Arr)
console.log(Arr.split(','))
const narr = [...myArr,...arr]   //spread operator
console.log(narr)



//objects
//key value pairs


//obj declaration
const myObj = {name:"Vishnu",
    dob:"17/09/2003",
    door:6,
    number:"12345",
    gender:{
     boy:true,
     girl:false
     },
 num : ["1","2","3"],
 action: function()
 {
     return `Your Name ${this.name}`;//call a particular value in a function
 }};
 console.log(myObj.name,myObj.number,myObj.num[0],myObj.gender.boy,myObj.action())

const anObj = Object.create(myObj); //inherit the properties of another obj to this obj
anObj.wheels = 4;  //add the properties extra
console.log(anObj.wheels)
//modify the property of parent obj in child obj
anObj.door = 5;
console.log(anObj.door);

//to get the keys
console.log(Object.keys(myObj));
console.log(Object.values(myObj));

//forin loop in object
for(let ite in myObj)
{
    console.log(`${ite},${myObj[ite]}`);
}
// to check particular property is there or not
console.log(myObj.hasOwnProperty("vehicle"));

//destructuring the object
const{name:MyName} = myObj;
console.log(MyName);

function details({name})
{
    return name;
}
console.log(details(myObj));


//classes

class Pizza { 
    constructor (sizePizza)
    {
        //this.size = "medium"; this is directly assigning the values
        this.size = sizePizza;
        this.toppings = "olives";
    }
    getToppings()
    {
        return this.toppingsPizza;
    }
    setToppings(toppingsPizza)
    {
        this.toppings = toppingsPizza;
    }
}
class anotherPizza extends Pizza{
    constructor(sizePizza)
    {
        super(sizePizza);
        this.type = "Margarita";
    }
    slice()
    {
        console.log(`our ${this.type} ${this.size} ${this.toppings} pizza has 8 slices`)
    }
}
const piz = new anotherPizza("small");
//piz.toppingsPizza = "sauccee"
piz.setToppings("sauccee");
piz.slice();


//Error handling

const makeError = () =>
{
    try{
        num = prompt("enter your name");
        if(num > 10)
        {
        throw new Error ("Entered number is in Out of range");
        }
        else{
            console.log(num ?? "you didn't entered a number between 1 to 10");
        }
    }
    catch(err)
    {
        console.error(err.stack);
    }u
};
makeError();