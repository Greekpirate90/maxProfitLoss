const yourProfit = document.querySelector("#profit");
const yourLoss = document.querySelector("#loss");

var n = prompt('Enter The Size Of Element');
var arr = [];

for(let i = 0; i < n; i++) {
	arr[i] = prompt('Enter Element ' + (i+1));
}
var min = arr[0], max = arr[0], posMin = 0, posMax = 0;


for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i];
        posMin = i;
    } else if(arr[i] > max) {
        max = arr[i];
        posMax = i;
    }
}

if(posMin > posMax) {
    let newMax = arr[posMin];
    let profit, loss;

    for(let i = posMin; i < arr.length; i++) {
        if(arr[i] > newMax) {
            newMax = arr[i];
        }
    }

    profit = newMax - min;
    loss = min - max;

    yourProfit.innerHTML = `Max profit is ${profit}`;
    yourLoss.innerHTML = `Max loss is ${loss}`
} else {
    let newMax = arr[posMax], newMin = arr[posMin];
    let profit, loss;

    for(let i = posMax; i < arr.length; i++) {
        if(arr[i] < newMax) {
            newMax = arr[i];
        }
    }

    for(let i = posMin; i < arr.length; i++) {
        if(arr[i] < newMin) {
            newMin = arr[i];
        }
    }

    profit = newMax - newMin;
    loss = newMax - max;

    yourProfit.innerHTML = `Max profit is ${profit}`;
    yourLoss.innerHTML = `Max loss is ${loss}`
}