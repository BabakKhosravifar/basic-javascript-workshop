// here we start writing javascript


//Ex1-------------------------------------------
function returnFirstCharacter(string)
{
    return string[0];
}

//var answer1 = returnFirstCharacter("Babak");
//console.log(answer1);
//console.log(returnFirstCharacter("javascript"));
//console.log(returnFirstCharacter("Javascript"));
//console.log(returnFirstCharacter(""));


//EX2------------------------------------------
function returnLastCharacter(string)
{
    return string[string.length-1];
}

//var answer1 = returnLastCharacter("Babak");
//console.log(answer1);
//console.log(returnLastCharacter("javascript"));
//console.log(returnLastCharacter("Javascript"));
//console.log(returnLastCharacter(""));



//EX3------------------------------------------
function returnTheCharacter(string,number)
{
    return string[number];
}

//var answer1 = returnTheCharacter("Babak",3);
//console.log(answer1);
//console.log(returnTheCharacter("javascript",4));
//console.log(returnTheCharacter("Javascript",8));
//console.log(returnTheCharacter("",5));



//EX4------------------------------------------
function sum(m,n)
{
    return m+n;
}

var answer1 = sum(23,76);
console.log(answer1);
console.log(sum(3,9.76));
console.log(sum(-32.875,0.4325));
console.log(sum("java",3));