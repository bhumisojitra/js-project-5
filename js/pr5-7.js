const num = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
const num1 = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
let pr577 = document.querySelector('.pr577');
let pr571 = document.querySelector('.pr571');

num.sort(function(a, b) {
    return a - b;
});
num1.sort(function(a, b) {
    return b - a;
});

pr577.innerHTML = num;
pr571.innerHTML = num1;
