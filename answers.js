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

//var answer1 = sum(23,76);
//console.log(answer1);
//console.log(sum(3,9.76));
//console.log(sum(-32.875,0.4325));
//console.log(sum("java",3));


//EX5------------------------------------------
function multiply(m,n)
{
    return m*n;
}

//var answer1 = multiply(23,76);
//console.log(answer1);
//console.log(multiply(3,9.76));
//console.log(multiply(-32.875,0.4325));
//console.log(multiply("java",3));


//EX6------------------------------------------
function compute(m,n,string)
{
    switch (string){
        case "add":
            return m+n;
            break;
        case "subtract":
            return m-n;
            break;
        case "mult":
            return m*n;
            break;
        case "div":
            return m/n;
            break;
        default:
        return 0;
        break;
    }
}

//var answer1 = compute(23,76,"div");
//console.log(answer1);
//console.log(compute(3,9.76,"sum"));
//console.log(compute(-32.875,0.4325,"subtract"));
//console.log(compute("java",3,"add"));



//EX7------------------------------------------
function repeatString(string,m)
{
    for (var i=1;i<=m;i++)
        console.log(string);
}

//repeatString("Babak",5);
//repeatString("string,m",3);
//repeatString("javascript",0);
//repeatString(string,3);


//EX8------------------------------------------
function reverse(string) {
  var reverse = '';
  for (var i = string.length - 1; i >= 0; i--)
    reverse += string[i];
  return reverse;
}

//console.log(reverse("Babak"));
//console.log(reverse("javascript"));
//console.log(reverse(""));


//EX9------------------------------------------
function factorial(number) {
  var factorial = 1;
  for (var i = 1; i <=number; i++)
    factorial *= i;
  return factorial;
}

console.log(factorial(0));
console.log(factorial(18));
console.log(factorial(128));
console.log(factorial("null"));