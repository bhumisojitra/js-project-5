let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
let pr555 = document.querySelector(".pr555");

let positive_array = numbers.filter(function(value) {
    return value >= 0;
});

pr555.innerHTML = positive_array;