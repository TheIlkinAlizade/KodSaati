let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (x) => (_input += x));
process.stdin.on("end", () => main(_input));

function main(n) {
    var allValues = []
    allValues.push(n);
    while (n != 1) {
        if(n % 2 == 0){
            n = Math.floor(n/2);
            allValues.push(n);
        }
        else{
            n = n*3 + 1;
            allValues.push(n);
        }
    }
    for (var i = 0; i < allValues.length; i++) {
        console.log(allValues[i]);
    }
}