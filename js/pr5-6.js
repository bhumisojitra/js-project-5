const array4 = [2, 5, 6, 3, 8, 9];

let pr566 = document.querySelector('.pr566');

let square = array4.map(function(ele){
    return ele * ele;
});

pr566.innerHTML = "square value : " + square;