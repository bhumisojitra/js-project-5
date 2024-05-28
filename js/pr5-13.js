const para = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

let pr513 = document.querySelector('.pr513');
let pr5123 = document.querySelector('.pr5123');

pr513.innerHTML = para;
pr5123.innerHTML = para.replaceAll('dog', 'cat'); 