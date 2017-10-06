const a = Number(prompt('Enter the sequence number of the array element: '));
let arrayFib = [1, 1];
console.log(arrayFib);

function seriesFiban(input) {
    for (let i = 2; i < input; i++) {
        let prev1 = arrayFib[arrayFib.length - 1];
        let prev2 = arrayFib[arrayFib.length - 2];
        let newValue = Number(prev1 + prev2);

        arrayFib.push(newValue);
    }
    return;
}

function seriesFiban(input) {
    let i = 2;
    while (i < input) {
        let prev1 = arrayFib[arrayFib.length - 1];
        let prev2 = arrayFib[arrayFib.length - 2];
        let newValue = Number(prev1 + prev2);

        arrayFib.push(newValue);
        i++;
    }
}

function returnNum(input) {
    return arrayFib[a - 1];
}

seriesFiban(a);

document.write('<b>' + 'Fibonacci sequence : ' + '</b>' + arrayFib + '.' + '<br>' + '<b>' + a + 'th' +
    '</b>' + ' element is ' + '<b>' + arrayFib[a - 1] + '</b>' + '.');
