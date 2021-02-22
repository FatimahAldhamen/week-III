/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function (input) {
    var decreasing = 0, increasing = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i - 1] <= input[i])
            increasing++;
        else if (input[i - 1] <= input[i]) {
            decreasing++;
        }
    }
    return input.length - 1 == increasing || input.length - 1 == decreasing;
};

console.log('hi');