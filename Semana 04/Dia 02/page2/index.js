const nameC1 = document.getElementById('character1');
const inputAtkC1 = document.getElementById('character1-atk');
const nameC2 = document.getElementById('character2');
const inputHpC2 = document.getElementById('character2-hp');
const inputDfC2 = document.getElementById('character2-df');
const inputShieldC2 = document.getElementsByName('shield');
const danoOutput = document.querySelector('.dano');
const nameOutputC1 = document.querySelector('.name-char1');
const atkOutputC1 = document.querySelector('.atk');
const nameOutputC2 = document.querySelector('.name-char2');
const hpOutputC2 = document.querySelector('.hp');
const dfOutputC2 = document.querySelector('.df');
const shieldOutputC2 = document.querySelector('.shield');
const sendButton = document.getElementById('submit');

let atkC1;
let hpC2;
let dfC2;
let shield;
let dano = 0;
//Verificando o valor de shield


sendButton.addEventListener('click', () => {

    atkC1 = parseInt(inputAtkC1.value);
    hpC2 = parseInt(inputHpC2.value);
    dfC2 = parseInt(inputDfC2.value);
    shield = inputShieldC2[0].checked; //Se o escudo foi ativado shield recebe true ou, caso contrário, false

    //resultado para diferentes combates
    if (atkC1 > dfC2 && shield === false) {
        dano = atkC1 - dfC2;
    } else if (atkC1 > dfC2 && shield === true) {
        dano = (atkC1 - dfC2)/2;
    } else if (atkC1 < dfC2) {
        dano = 0;
    }

    hpC2 = hpC2 - dano;

    danoOutput.innerText = `Dano: ${dano}`;
    nameOutputC1.innerText = `${nameC1.value}`;
    atkOutputC1.innerText = `Atk: ${atkC1}`
    nameOutputC2.innerText = `${nameC2.value}`;
    dfOutputC2.innerText = `DF: ${dfC2}`;
    hpOutputC2.innerText = `HP: ${hpC2}`;
    shieldOutputC2.innerText = `Shield: ${inputShieldC2[0].checked}`;
});

