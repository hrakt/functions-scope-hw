// What is the difference between a parameter and an argument?
// parameter is the parameter that are part of the function decleration
// argument is whats being passed into the function when its being called

// Within a function, what is the difference between return and console.log?
// return ends a function and returns whatever value we ask it to retur when the function gets invoked
// console.log just prints out whatever we want to the console

// What are the implications of the ability of a function to return a value?
// that it can return a value, we can manipulate that value any way we want, we can use it to store, invoke another function or print it out




// ## 2. Palindrome again.
// Write a function `checkPalindrome` that accepts a single argument, a string. 
// Yes, you've done it before, but do it again. Later in this assignment we're gonna 
// beef up our palindrome function some. See if you can do it without looking back at your previous answer. 
// The function should return true if the string is a palindrome, false if not. Make sure your function will give 
// the correct answer for words with **capital letters**.

function checkPalindrome(str){
    let newStr = "";
    for(let i = str.length-1;i >= 0;i--){
        newStr += str[i];
    }
    str = str.toUpperCase();
    newStr = newStr.toUpperCase();
    return (str === newStr);
}


console.log(checkPalindrome("Radar"));

console.log(checkPalindrome("Borscht"));

// ## 3. Digit Sum
// Write a function `sumDigits` that accepts a number and returns the sum of its digits.
// ```js

function sumDigits(num){
    let strNum = num.toString();
    let sum = 0;
    for(let i = 0;i<strNum.length;i++){
        sum += Number(strNum[i]);
    }
    return sum;
}


console.log(sumDigits(24));