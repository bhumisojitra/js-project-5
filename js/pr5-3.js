let pr533 = document.querySelector('.pr533');
let pr531 = document.querySelector('.pr531');

function findMinMax() {
    let Arr = [50, 60, 20, 10, 40];

    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
    
    pr533.innerHTML = "min-value : " + minValue;
    pr531.innerHTML = "max-value : " + maxValue;
}

findMinMax()