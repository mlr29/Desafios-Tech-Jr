const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const boxSelect = document.getElementById('box-select');
const birthData = document.getElementById('data');
const registration = document.getElementById('registration');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', () =>{
    alert(`Nome: ${name.value}
Sobrenome: ${lastName.value}
Campo de Estudo: ${boxSelect.value}
Data de nascimento: ${birthData.value}
Número de matrícula: ${registration.value}`);
});

