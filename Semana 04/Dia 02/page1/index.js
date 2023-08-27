const nameV1 = document.getElementById('vehicle1');
const nameV2 = document.getElementById('vehicle2');
const speedV1 = document.getElementById('speed-vehicle1');
const speedV2 = document.getElementById('speed-vehicle2');
const result = document.querySelector('.result');
const sendButton = document.getElementById('submit');

let velocity1;
let velocity2;

sendButton.addEventListener('click', () => {
    velocity1= parseFloat(speedV1.value);
    velocity2 = parseFloat(speedV2.value);
    if(velocity1 > velocity2){
        result.innerText = `Veículo ${nameV1.value} é mais rápido!`;
    } else if(velocity1 < velocity2){
        result.innerText = `Veículo ${nameV2.value} é mais rápido!`;
    } else {
        result.innerText = `Veículos com mesma velocidade!`;
    }

    result.classList.add("active");
}); 
