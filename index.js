var create = require("prompt-sync");
// let prompt = create();

// // // var a = 5;
// // // console.log("Hello World");
// // // var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // var arr2 = [];

// // // for (var i = 0; i < arr1.length; i++) {
// // //   if (arr1[i] % 2 == 0) {
// // //     arr2.push(arr1[i]);
// // //   }
// // // }
// // // console.log(arr2);

// // // var a = +prompt("Ededi Daxil Et A: ");
// // // var b = +prompt("Ededi Daxil Et B: ");
// // // var c = +prompt("Ededi Daxil Et C: ");

// // // if (
// // //   a ** 2 == c ** 2 + b ** 2 ||
// // //   b ** 2 == c ** 2 + a ** 2 ||
// // //   c ** 2 == a ** 2 + b ** 2
// // // ) {
// // //   console.log("Duzbucaqlidir");
// // // } else {
// // //   console.log("Duzbucaqli deyil");
// // // }

// // // var arr = [11, 13, 14, 16, 22];
// // // var sade = [];

// // // for (var i = 0; i < arr.length; i++) {
// // //   var bolenler = [];
// // //   for (var j = 1; j <= arr[i]; j++) {
// // //     if (arr[i] % j == 0) {
// // //       bolenler.push(j);
// // //     }
// // //   }
// // //   if (bolenler.length <= 2 && arr[i] > 10) {
// // //     sade.push(arr[i]);
// // //   }
// // // }
// // // console.log(sade);

// // // var userBoy = +prompt("Boy(metr): ");
// // // var userKilo = +prompt("Kilo(kilo): ");

// // // var bedenKutleIndexi = userKilo / (userBoy * userBoy);
// // // console.log(bedenKutleIndexi);
// // var n = +prompt("N : ");
// // var cavab = 0;
// // while (n > 5) {
// //   n = n / 5;
// //   n = Math.floor(n);
// //   cavab += n;
// // }
// // console.log(cavab);
// // let _input = "";
// // process.stdin.resume();
// // process.stdin.setEncoding("ascii");
// // process.stdin.on("data", (x) => (_input += x));
// // process.stdin.on("end", () => main(_input));

// // function main(n) {
// //   var cavab = 0;
// //   while (n >= 5) {
// //     n = n / 5;
// //     n = Math.floor(n);
// //     cavab += n;
// //   }
// //   console.log(cavab);
// // }
// // let _input = "";
// // process.stdin.resume();
// // process.stdin.setEncoding("ascii");
// // process.stdin.on("data", (x) => (_input += x));
// // process.stdin.on("end", () => main(_input));

// // function main(n) {
// //   for(var i = 0; i < 2**n < i++){
// //     decimal = i;
// //     while (decimal > 0) {
// //        // if modulo of number with 2 is ‘1’, append 1 in front of binary string. Otherwise append 0.
// //        if (decimal % 2 == 1) {
// //           binary = "1" + binary;
// //        } else {
// //           binary = "0" + binary;
// //        }
// //        // divide number by 2.
// //        decimal = Math.floor(decimal / 2);
// //     }
// //     console.log(decimal);
// //   }
// // }
// // var n = +prompt("N : ");

// // for (var i = 0; i < 2 ** n; i++) {
// //   var integer = i;
// //   var binaryForm = "";
// //   while (integer > 0) {
// //     binaryForm = (integer % 2) + binaryForm;
// //     integer = Math.floor(integer / 2);
// //   }
// //   if (binaryForm.length < n) {
// //     binaryForm = "0".repeat(n - binaryForm.length) + binaryForm;
// //   }
// //   console.log(binaryForm);
// // }
// function GFG(n) {
//   // Base Case: If n is 1, return ["0", "1"]
//   if (n === 1) {
//     return ["1", "0"];
//   }
//   // Recursively calculate the Gray codes for the n-1 length
//   let prevGrayCode = GFG(n - 1);
//   let reversedPrevGrayCode = prevGrayCode.slice().reverse();
//   let currentGrayCode = prevGrayCode.slice();
//   // Generate new Gray codes by prepending "0" to the reversed previous Gray codes
//   // and prepending "1" to the original previous Gray codes
//   for (let i = 0; i < prevGrayCode.length; i++) {
//     currentGrayCode[i] = "0" + reversedPrevGrayCode[i];
//     prevGrayCode[i] = "1" + prevGrayCode[i];
//   }
//   // Concatenate the modified "0" version to previous Gray codes
//   prevGrayCode = prevGrayCode.concat(currentGrayCode);
//   return prevGrayCode;
// }
// // Main function
// function main() {
//   var n = +prompt();
//   let grayCode = GFG(n);
//   for (let code of grayCode) {
//     console.log(code);
//   }
// }
// main();
