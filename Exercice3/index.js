// Créez votre fonction ici
function calculateAverage(tabNumber = "") {

    if (tabNumber.length === 0) {
        return 'No numbers to calculate average';
    }

    let sum = 0;
    for (let i = 0; i < tabNumber.length; i++) {
        sum += tabNumber[i];
    }

    let average = sum / tabNumber.length;
    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
