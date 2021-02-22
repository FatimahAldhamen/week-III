/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function (input) {
    var min = input[0] - input[1];
    var arr = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i] < input[j]) {
                var temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] - input[i] <= min && input[i] < input[j]) {
                min = input[j] - input[i];
            }
        }
    } for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] - input[i] <= min && input[i] < input[j]) {
                arr.push([input[i], input[j]]);
            }
        }
    }
    return arr;
};