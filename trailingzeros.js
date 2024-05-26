let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (x) => (_input += x));
process.stdin.on("end", () => main(_input));

function main(n) {
    var cavab = 0;
    while (n >= 5) {
        n = n / 5;
        n = Math.floor(n);
        cavab += n;
    }
    console.log(cavab);
}