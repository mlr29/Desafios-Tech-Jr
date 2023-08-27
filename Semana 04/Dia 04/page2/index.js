const buttonNewCard = document.getElementById("bNewCard");
const buttonPullCard = document.getElementById("bPullCard");
const buttonSair = document.getElementById("bSair");
const elementBody = document.querySelector("body");
const numberCards = document.getElementById("qntCards");

var card, indexLastCard, cardRemoved;
var arrayDeck = Array();

//add cards button action
buttonNewCard.addEventListener("click", function () {
    card = window.prompt("Insira uma carta:");
    indexLastCard = arrayDeck.push(card);
    
    numberCards.innerHTML = `Nº de cartas: ${indexLastCard}`;
});

//remove card pulled
buttonPullCard.addEventListener("click", function () {
    cardRemoved = arrayDeck.pop();
    if (cardRemoved == undefined) {
        alert("Não há cartas!");
    } else {
        alert(`Carta ${cardRemoved} removida!`);
        numberCards.innerHTML = `Nº de cartas: ${arrayDeck.length}`;
    }
});

//close the operations
buttonSair.addEventListener("click", function () {
    elementBody.setAttribute("class", "hidden");
});