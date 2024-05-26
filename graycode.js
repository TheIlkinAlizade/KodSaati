let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (x) => (_input += x));
process.stdin.on("end", () => main(_input));

// function main(n) {
//     for (var i = 0; i < 2 ** n; i++) {
//       var integer = i;
//       var binaryForm = "";
//       while (integer > 0) {
//         binaryForm = (integer % 2) + binaryForm;
//         integer = Math.floor(integer / 2);
//       }
//       if (binaryForm.length < n) {
//         binaryForm = "0".repeat(n - binaryForm.length) + binaryForm;
//       }
//       console.log(binaryForm);
//     }
// }
function GFG(n) {
    // Base Case: If n is 1, return ["0", "1"]
    if (n === 1) {
        return ["1", "0"];
    }
    // Recursively calculate the Gray codes for the n-1 length
    let prevGrayCode = GFG(n - 1);
    let reversedPrevGrayCode = prevGrayCode.slice().reverse();
    let currentGrayCode = prevGrayCode.slice();
    // Generate new Gray codes by prepending "0" to the reversed previous Gray codes
    // and prepending "1" to the original previous Gray codes
    for (let i = 0; i < prevGrayCode.length; i++) {
        currentGrayCode[i] = "0" + reversedPrevGrayCode[i];
        prevGrayCode[i] = "1" + prevGrayCode[i];
    }
    // Concatenate the modified "0" version to previous Gray codes
    prevGrayCode = prevGrayCode.concat(currentGrayCode);
    return prevGrayCode;
}
// Main function
function main(n) {
    let grayCode = GFG(n);
    for (let code of grayCode) {
        console.log(code);
    }
}