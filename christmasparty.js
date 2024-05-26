let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (x) => (_input += x));
process.stdin.on("end", () => main(_input));
var MOD = 10**9 + 7;

var derangements = [];

function countDears(r) {
  if (r == 0) {
    return 1;
  }
  if (r == 1) {
    return 0;
  }
  derangements[0] = 1;
  derangements[1] = 0;

  for (var i = 2; i <= r; i++) {
    derangements[i] =
      ((i - 1) * (derangements[i - 1] + derangements[i - 2])) & MOD;
  }
  return derangements[r];
}

function main(n) {
  console.log(countDears(n));
}

// function getFactorial(r) {
//     if (r == 0) {
//         return 1;
//     }
//     factorial = 1;
//     for (; r > 0; r--) {
//         factorial = factorial * r;
//     }
//     return factorial;
// }

// function main(n){
//     var k = 10 ** 9 + 7;
//     var sum = 0;
//     var m = getFactorial(n);
//     var negative = -1;
//     for (var i = 0; i <= n; i++) {
//     var facto = getFactorial(i);
//     sum += (m / facto) * negative ** i;
//     }

//     console.log(sum % k);
// }

// var MOD = 10 ** 9 + 7;

// function getFactorial(r) {
//   if (r === 0) {
//     return 1;
//   }
//   let factorial = 1;
//   for (let i = 1; i <= r; i++) {
//     factorial = (factorial * i) % MOD;
//   }
//   return factorial;
// }
// function main(n){

//     var sum = 0;
//     var m = getFactorial(n);
    
//     for (var i = 0; i <= n; i++) {
//         var facto = getFactorial(i);
//         var sign = (i % 2 === 0) ? 1 : -1;
//         sum = (sum + sign * m / facto) % MOD;
//     }
    
//     if (sum < 0) {
//         sum += MOD;
//     }
    
//     console.log(sum);
// }
    