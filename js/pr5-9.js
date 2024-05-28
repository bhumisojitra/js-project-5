const x1 = "airplane";
let pr599 = document.querySelector('.pr599');

let index = 2;

pr599.innerHTML =(`airplane${index} : ${x1.at(index)}`);

let x = "oxoxoxox";
let pr591 = document.querySelector('.pr591');
let output = "";

for (let i = 0; i < x.length; i++) {
    if (i % 2 == 0) {
        output += x[i].toLowerCase();
    } else {
        output += x[i].toUpperCase();
    }
}
pr591.innerHTML = "x is : " + output;

const z = "A New Java Book";
let pr592 = document.querySelector('.pr592');  

pr592.innerHTML = z.toUpperCase();