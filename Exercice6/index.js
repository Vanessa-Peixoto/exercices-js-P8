function appendToDisplay(value) {
    const inputDisplay = document.getElementById('display');
    return inputDisplay.value += value;
}

function clearDisplay() {
    const inputDisplay = document.getElementById('display');
    inputDisplay.value = "";
}

function calculateResult() {
    const inputDisplay = document.getElementById('display');
    const operators = ['+', '-', '/', '*'];
    let selectedOperator = undefined;
    let nb1 = 0;
    let nb2 = 0;
    for(let operator of operators) {
        calc = inputDisplay.value.split(operator)

        if (calc.length > 1) {
            selectedOperator = operator;
            nb1 = parseInt(calc[0]);
            nb2 = parseInt(calc[1]);
            break;
        }
    }

    switch (selectedOperator) {
        case '+':
            inputDisplay.value = nb1 + nb2;
            break;
        case '-':
            inputDisplay.value = nb1 - nb2;
            break;
        case '*':
            inputDisplay.value = nb1 * nb2;
            break;
        case '/':
            if (nb2 === 0) {
                return inputDisplay.value = 'Division by zero is not allowed';
            }
            inputDisplay.value = nb1 / nb2;
            break;
    }
}