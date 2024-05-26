var create = require("prompt-sync");
let prompt = create();

// var arr = [1, 2, 5, 7, 121, 2, 53, 122];
// var currentMax = arr[0];
// for (var i = 0; i < arr.length; i++) {
//   if (currentMax < arr[i]) {
//     currentMax = arr[i];
//   }
// }
// console.log(currentMax);

// console.log(Math.max(...arr));

// var text = prompt().toLowerCase();

// console.log(text);
// var arr = text.split("");
// var rtext = arr.reverse().join("");
// console.log(rtext);

// if (rtext == text) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }

// var input = [1, 23, 435, 123, 12];

// var result = input.reduce((sum, num) => sum + num, 0);

// console.log(result);

// var eded = +prompt();

// var bolenler = [];
// //var cem = 0;

// for (var i = 1; i <= eded / 2; i++) {
//   if (eded % i == 0) {
//     bolenler.push(i);
//     //cem += i;
//     console.log(i);
//   }
// }

// var result = bolenler.reduce((sum, num) => sum + num, 0);
// console.log(result);
// if (result == eded) {
//   console.log("Mukemmeldir");
// } else {
//   console.log("Mukemmel deyil");
// }

// class Daire {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   Sahe() {
//     return this.radius * this.radius * Math.PI;
//   }
// }
// var r = +prompt();
// var kruq = new Daire(r);
// console.log(Math.floor(kruq.Sahe()));

// var arr = [1, 23, 1, 23, 4, 56, 67, 566, 4];
// var uniques = [];
// var notUniques = [];

// for (var i = 0; i < arr.length; i++) {
//   if (uniques.includes(arr[i]) != true) {
//     uniques.push(arr[i]);
//   } else if (uniques.includes(arr[i]) == true) {
//     if (!notUniques.includes(arr[i])) {
//       notUniques.push(arr[i]);
//     }
//   }
// }
// console.log(notUniques);
// var n = +prompt();

// for (var i = 0; i < n; i++) {
//   console.log(
//     " ".repeat(n - i - 1) +
//       "*".repeat(i + 1) +
//       "*".repeat(i + 1) +
//       " ".repeat(n - i - 1),
//   );
// }
// for (var i = 0; i < n; i++) {
//   var linearr = [];
//   for (var j = 0; j <= i; j++) {
//     linearr.push(j + 1);
//   }
//   var line = linearr.join();
//   // console.log(...linearr);
//   console.log(line);
// }
// var t = [];
// for (var i = 1; i <= n; i++) {
//   t.push(i);
// }

// for (var i = 1; i <= n; i++) {
//   console.log(...t.slice(0, i));
// }

// console.log(typeof 6.6);
// var text = prompt().toLowerCase();

// class VowelKingdom{

//   constructor{
//     this.count = count;
//     this.vowel = vowel;
//   }

// }

// var vowels = ["a", "e", "i", "o", "u"];

// for (var i = 0; i < text.length; i++) {
//   if (vowels.includes(text[i])) {
//     console.log(text[i]);
//   }
// }

// var vowels = ["a", "e", "i", "o", "u"];
// for (var i = 0; i < vowels.length; i++) {
//   var count = 0;
//   for (var j = 0; j < text.length; j++) {
//     if (text[j] == vowels[i]) {
//       count++;
//     }
//   }
//   if (count != 0) {
//     console.log(vowels[i] + " was used " + count + " time");
//   }
// }

// var text = prompt().toLowerCase();

// var vowelkings = [
//   ["a", 0],
//   ["e", 0],
//   ["i", 0],
//   ["o", 0],
//   ["u", 0],
// ];
// var vowels = ["a", "e", "i", "o", "u"];

// for (var i = 0; i < text.length; i++) {
//   if (vowels.includes(text[i])) {
//     var vowelindex = vowels.indexOf(text[i]);
//     vowelkings[vowelindex][1]++;
//   }
// }
// console.log(vowelkings);
// const n = prompt("Sozu daxil edin: ").split("");
// var sait= /[aeiouüıəö]/g;
// const arr = n.filter(x=> x.match(sait))
// console.log("Saitler: ",...arr,` sayi: ${arr.length}`)