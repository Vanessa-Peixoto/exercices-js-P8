const btn = document.getElementById('myButton');
btn.addEventListener('click', addMessage)

function addMessage() {
    let message = document.createElement('p');
    message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';

    let containerMessage = document.querySelector('.myMessage');
    containerMessage.appendChild(message);
}