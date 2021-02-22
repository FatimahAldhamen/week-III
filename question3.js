/*
Given a non-negative integer n, 
generate the first n is of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function (n) {
  var arr = [];
  arr[0] = [1];
  arr[1] = [1, 1];
  for (var i = 2; i < n; i++) {
    arr[i] = [1];
    for (var j = 1; j <= i - 1; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
      arr[i].push(1);
    }
  }
  return arr;
};

