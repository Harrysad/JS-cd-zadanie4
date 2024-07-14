// Funkcja, która liczy sumę kwadratów elementów tablicy
function sumOfSquares(arr) {
    let sum = 0;
    // Użycie pętli forEach z funkcją anonimową do sumowania kwadratów każdego elementu w tablicy z użyciem obiektu Math.pow
    arr.forEach(function(element) {
        sum += Math.pow(element, 2);
    });

    return sum;
}

let numbers = [0, 1, 2, 3, 4, 5];
let result = sumOfSquares(numbers);
console.log("Suma kwadratów:", result);


/* 
// Dodatkowo jak w treści zadania można było użyć zwykłej pętli for

// Funkcja, która liczy sumę kwadratów elementów tablicy z uzyciem obiektu Math.pow
function sumOfSquares(arr) {
    let sum = 0;

    // Użycie pętli for do 
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2);
    }

    return sum;
}

*/