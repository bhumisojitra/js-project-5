const mycolor = ["Red","Green","White", "Black"];
const mycolor1 = ["Red","Green","White", "Black"];

let pr51 = document.querySelector('.pr51');
let pr52 = document.querySelector('.pr52');
let pr53 = document.querySelector('.pr53');
let pr54 = document.querySelector('.pr54');
let pr55 = document.querySelector('.pr55');
let pr56 = document.querySelector('.pr56');


pr51.innerHTML = mycolor.join(',');
pr52.innerHTML = mycolor.join('+');
pr53.innerHTML = mycolor.pop();
pr53.innerHTML = mycolor;
pr54.innerHTML = mycolor.shift();
pr55.innerHTML = mycolor;

mycolor1.splice(4, 1, 'orange');
pr56.innerHTML = mycolor1;