const lista = document.querySelector("ol");
const buttonAddPatient = document.getElementById("bAddPatient");
const buttonConsultPatient = document.getElementById("bConsultPatient");
const buttonSair = document.getElementById("bSair");
const elementBody = document.querySelector("body");

var namePatient, indexLastPatient, patientRemoved;
var arrayPatients = Array();

//add patients button action
buttonAddPatient.addEventListener("click", function () {
    namePatient = window.prompt("Insira o nome do paciente:");
    indexLastPatient = arrayPatients.push(namePatient);

    const lastListItem = document.createElement("li");
    const textLastListItem = document.createTextNode(arrayPatients[indexLastPatient - 1])

    lastListItem.appendChild(textLastListItem);
    lista.appendChild(lastListItem);
});

//remove patient consulted
buttonConsultPatient.addEventListener("click", function () {
    patientRemoved = arrayPatients.shift();
    if (patientRemoved == undefined) {
        alert("Não há pacientes!");
    } else {
        alert(`Paciente ${patientRemoved} consultado!`);
        lista.removeChild(lista.firstChild);
    }


});

//close the operations
buttonSair.addEventListener("click", function () {
    elementBody.setAttribute("class", "hidden");
});