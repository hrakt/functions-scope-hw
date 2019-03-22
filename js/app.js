// // What is the difference between a parameter and an argument?
// // parameter is the parameter that are part of the function decleration
// // argument is whats being passed into the function when its being called

// // Within a function, what is the difference between return and console.log?
// // return ends a function and returns whatever value we ask it to retur when the function gets invoked
// // console.log just prints out whatever we want to the console

// // What are the implications of the ability of a function to return a value?
// // that it can return a value, we can manipulate that value any way we want, we can use it to store, invoke another function or print it out




// // ## 2. Palindrome again.
// // Write a function `checkPalindrome` that accepts a single argument, a string. 
// // Yes, you've done it before, but do it again. Later in this assignment we're gonna 
// // beef up our palindrome function some. See if you can do it without looking back at your previous answer. 
// // The function should return true if the string is a palindrome, false if not. Make sure your function will give 
// // the correct answer for words with **capital letters**.

// function checkPalindrome(str){
//     let newStr = "";
//     for(let i = str.length-1;i >= 0;i--){
//         newStr += str[i];
//     }
//     str = str.toUpperCase();
//     newStr = newStr.toUpperCase();
//     return (str === newStr);
// }


// console.log(checkPalindrome("Radar"));

// console.log(checkPalindrome("Borscht"));

// // ## 3. Digit Sum
// // Write a function `sumDigits` that accepts a number and returns the sum of its digits.
// // ```js

// function sumDigits(num){
//     let strNum = num.toString();
//     let sum = 0;
//     for(let i = 0;i<strNum.length;i++){
//         sum += Number(strNum[i]);
//     }
//     return sum;
// }


// console.log(sumDigits(24));


// // ## 4. Pythagoras
// // Write a function `calculateSide` that takes
// //  two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.


// function calculateSide(sideA,sideB){
//     return Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2));
// }

// console.log(calculateSide(8, 6));

// // ## 5. Sum Array
// // Write a function `sumArray` that takes an **array** as an argument.
// // The array should contain numbers. The function should return the sum of the numbers in the array.

// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));


// // ## 6. Prime Numbers
// // A Prime number is a number that is not evenly divisible by another number except 1 and itself. 
// If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
// // To test whether a number is Prime, you only need to test as far as the **square root** of 
// that number. This is advisable for optimization and testing large numbers.

// function checkPrime(num){
//     for(let i = 2; i<= Math.round(Math.sqrt(num));i++){
//         if(num%i == 0){
//             return false;
//         }
//     }
    
//     return true;
   
// }

// function printPrimes(num){
//     for(let i = 2;i<=num;i++){
//         if(checkPrime(i)){
//             console.log(i);
//         }
//     }
// }
// console.log(checkPrime(31));
// // printPrimes(97);

function insertDash(num){
    let strNum = num.toString();
    for(let i = 0; i<=strNum.length -1 ;i++){
        if((Number(strNum[i]))%2==1 && (Number(strNum[i+1]))%2==1){
            strNum = strNum.substring(0,i) + "-"+ strNum.substring(i,strNum.length);
            i++
        }
    }
    return strNum;
}

console.log(insertDash(454793));



// 3. Write a function `reverseString` that takes a string as a parameter 
// and returns that string with the letters reversed **without using `.split()`, `.reverse()`, or `.join()`**.


function reverseString(str){
    let newStr = "";
    for(let i = str.length-1;i>= 0;i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString('hello'));


//