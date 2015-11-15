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

//console.log(factorial(0));
//console.log(factorial(18));
//console.log(factorial(128));
//console.log(factorial("null"));



//EX10------------------------------------------
function theLongestWord(string) {
    var word = '';
    var theLongestWord='';
    for (var i=0;i<string.length;i++){
        if(string[i]!=' '){
            word+=string[i];
        }
        else{
            if(word.length > theLongestWord.length)
                theLongestWord=word;
            word = '';
        }
    }
    if(theLongestWord==='')
        theLongestWord=word;
    return theLongestWord;
}

//console.log(theLongestWord("Here is the first check!"));
//console.log(theLongestWord("Here is the second check of this function!"));
//console.log(theLongestWord("LetsSeeWhatThisSays"));


//EX11------------------------------------------
function capitilize(string) {
    var capString='';
    for (var i=0;i<string.length;i++){
        if(i===0) capString+=string[i].toUpperCase();
        else 
        if(string[i]===' ' && i<string.length-1){
            capString+=' ';
            capString+=string[i+1].toUpperCase();
            
        }
        else if(string[i-1]!=' ')
            capString+=string[i];
    }
    return capString;
}

//console.log(capitilize("here is the  first check!"));
//console.log(capitilize("here is the second check of this   function! "));
//console.log(capitilize("LetsSeeWhatThisSays  "));



//EX12------------------------------------------
function theLargestNumber(array) {
    var num;
    var theLargestNumber=-9999999999;
    for (var i=0;i<array.length;i++){
        if(array[i]>theLargestNumber){
            theLargestNumber=array[i];
        }
    }
    if(theLargestNumber===-9999999999)
        return undefined;
    else return theLargestNumber;
}

//console.log(theLargestNumber([3,5,2,6,8,5,3]));
//console.log(theLargestNumber([4,4,4,4,4]));
//console.log(theLargestNumber("LetsSeeWhatThisSays"));



//EX13------------------------------------------
function truthy(value) {
  return value >= 0;
}
//var filtered = [12, 5, 8, 130, 44].filter(truthy);
//console.log(filtered);
//console.log([-2,4,-5,-3,6,3].filter(truthy));
//console.log([0,-44,-5,-3,6,3].filter(truthy));


//EX14------------------------------------------
function arraySum(array) {
  var sum=0;
  for(var i=0;i<array.length;i++)
    sum+=array[i];
  return sum;
}
//var sum = arraySum([12, 5, 8, 130, 44]);
//console.log(sum);
//console.log(arraySum([-2,4,-5,-3,6,3]));
//console.log(arraySum([0,-44,-5,-3,6,3]));


//EX15------------------------------------------
function minusArray(array1,array2) {
    var returnArray = [];
    var removeFrom1=[];
    var removeFrom2=[];
    for(var i=0; i<array1.length; i++){
        var flag = 0;
        for(var j=0;j<array2.length;j++){
            if(array1[i]===array2[j]){
                if (flag===0){
                    flag=1;
                    removeFrom1.push(i);
                    removeFrom2.push(j);
                }
                else{
                    removeFrom2.push(j);
                }
            }
        }
        }
        
    var k =0;    
    for(i=0;i<array1.length;i++){
        flag=0;
        for(j=0;j<removeFrom1.l;j++)
            if(i===removeFrom1[j]) flag=1;
        if (flag=0){
            returnArray[k] = array1[i];
            k++;
        }
            
    }
//    console.log(removeFrom1);
//    console.log(removeFrom2);
//    console.log(returnArray);
}

//minusArray([-2,4,-5,-3,6,3],[2,3,3,3,3,5,6]);
//minusArray([0,-44,-5,-3,6,3],[-44,-5,3,0,1]);


//EX14------------------------------------------
function square(number) {
 return number^2;
}
function cube(number) {
 return number^3;
}
function squareRoot(number) {
 return number^(1/2);
}
function cubeRoot(number) {
 return number^(1/3);
}

//function applyFunction(array,func()){
//    var returnArray = [];
//    for (var i=0;i<array.length;i++)
//        returnArray[i] = func(array[i]);
//}

//console.log(applyFunction([1,2,4,5,6],squareRoot()));





function call_me(courseHwork,daysArray){
var same = new Array();
var result = new Array();

for (var i = 0; i < courseHwork.length; i++) {
    for (var j = 0; j < daysArray.length; j++) {
        if (courseHwork[i] == daysArray[j]) {
          same.push(courseHwork[i]);
        }
    }
}
console.log(same);

for (var i = 0; i < courseHwork.length; i++) {
    var flag = 0;
	for (var j = 0; j < same.length; j++) {
		 if (courseHwork[i] == same[j]) {
            flag=1; 
        }
        
	}
	if(flag===0){
	    result.push(courseHwork[i]);
	}
}

for (var i = 0; i < daysArray.length; i++) {
    flag = 0;
	for (var j = 0; j < same.length; j++) {
		 if (daysArray[i] == same[j]) {
            flag=1; 
        }
        
	}
	if(flag===0){
	    result.push(daysArray[i]);
	}
}
console.log(result);
	
}





call_me(["4", "8", "2", "5", "5"],["1", "2", "5", "6", "2", "2"]);
call_me(["1", "2", "3", "4", "2"],["0", "2", "5", "4", "4", "4"]);
call_me(["2", "2", "2", "2", "3"],[]);