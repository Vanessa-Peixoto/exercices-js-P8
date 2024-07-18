function convertToBinary() {

    //recupère nos élements
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');

    //verifie si c'est un nombre valide
    //trim() retire espace en début et fin
    if (isNaN(decimalInput) || decimalInput.trim() === "") {
        binaryResult.textContent = "";
        return;
    }

    //conversion du nombre décimal en binaire
    const decimalNumber = parseInt(decimalInput, 10);
    const binaryNumber = decimalNumber.toString(2);

    binaryResult.textContent = `Le nombre binaire est : ${binaryNumber}`;
}