/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
[1, 10], [2, 11, 20], [3, 12, 21], [4, 13, 22], [5, 14, 23], [6, 15, 24], [7, 16], [8, 17], [9, 18], [19]
so there are two groups with the largest size.
*/

var digit_prod = function(n)  
{  
    var sum = 0; 
    while(n > 0) 
    { 
        sum += n % 10; 
        n /= 10; 
    } 
    return sum; 
};

var largestGroupsCount = function (n) {
    let d = new Map();  
    
    for(var i = 1; i <= n; ++i)
    {
        let sum = Math.floor(digit_prod(i)); 
        if (!d.has(sum)) 
            d.set(sum, 1); 
        else
            d.set(sum, d.get(sum) + 1); 
    } 
    
    var ans = 1;  
    var maxm = 0;  
    
    for(let x of d.values()) 
    {
        if (x > maxm)  
        {  
            maxm = x;  
            ans = 1;  
        }  
        else if (x == maxm)  
        { 
            ans++;  
        }  
    }
    console.log("huhahah");
    return ans;  
};