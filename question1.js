/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function (input) {
        var largest = 0;
        var check = false;
        var largestIndex;
        for (var i = 0; i < input.length; i++) {
                if (input[i] > largest) {
                        largest = input[i];
                        largestIndex = i;
                }
        }
        for (let i = 0; i < input.length; i++) {
                if (input[i] * 2 < largest) {
                        check = true;
                } else if (i != largestIndex) {
                        check = false;
                }
        }
        return check;
};