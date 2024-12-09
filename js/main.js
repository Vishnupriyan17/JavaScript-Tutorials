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