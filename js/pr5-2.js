const array = [10, 3, 5, 8, 6];
let sum = 0;

let pr522 = document.querySelector('.pr522');

for(i = 0; i <= array.length - 1; i++){
    sum += array[i];
}
pr522.innerHTML = array.join('+');
pr522.innerHTML += "=";
pr522.innerHTML += sum;

//forEach
const array1 = [10, 3, 30, 8, 90];
let sum1 = 0;

let pr521 = document.querySelector('.pr521');

array1.forEach((ele) => {
    sum1 += ele;
});
pr521.innerHTML = array.join('+');
pr521.innerHTML += "=";
pr521.innerHTML += sum1;