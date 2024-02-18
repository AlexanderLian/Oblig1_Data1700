ticketArray = [];
function kjopBillet() {

    let film = document.querySelector("#film").value;
    let antall = document.querySelector("#numAnt").value;
    let fornavn = document.querySelector("#txtFornavn").value;
    let etternavn = document.querySelector("#txtEtternavn").value;
    let telefonnr = document.querySelector("#numTlf").value;
    let epost = document.querySelector("#txtEpost").value;
    let validInput = true;

    if (film === "-1") {
        document.querySelector("#filmError").innerHTML = "Må velge film";
        validInput = false;
    } else {
        document.querySelector("#filmError").innerHTML = "";
    }

    if (antall <= 0) {
        document.querySelector("#antError").innerHTML = "Må skrive noe i antall";
        validInput = false;
    } else {
        document.querySelector("#antError").innerHTML = "";
    }

    if (fornavn === "") {
        document.querySelector("#fornavnError").innerHTML = "Må skrive noe i fornavn";
        validInput = false;
    } else {
        document.querySelector("#fornavnError").innerHTML = "";
    }

    if (etternavn === "") {
        document.querySelector("#etternavnError").innerHTML = "Må skrive noe i etternavn";
        validInput = false;
    } else {
        document.querySelector("#etternavnError").innerHTML = "";
    }

    if (telefonnr === 0) {
        document.querySelector("#telError").innerHTML = "Må skrive noe i telefonnr";
        validInput = false;
    } else if (telefonnr < 0) {
        document.querySelector("#telError").innerHTML = "Skriv in gyldig telefonnr";
        validInput = false;
    } else {
        document.querySelector("#telError").innerHTML = "";
    }

    if (epost === "") {
        document.querySelector("#epostError").innerHTML = "Må skrive noe i epost";
        validInput = false;
    } else if (!epost.includes("@")) {
        document.querySelector("#epostError").innerHTML = "Skriv in gyldig epost";
        validInput = false;
    } else {
        document.querySelector("#epostError").innerHTML = "";
    }
    if (validInput === true) {
        let bilett = {film, antall, fornavn, etternavn, telefonnr, epost};
        ticketArray.push(bilett);
        let table = document.querySelector("#print");
        lagTable(table, bilett);

        document.querySelector("#film").value = "-1";
        document.querySelector("#numAnt").value = "";
        document.querySelector("#txtFornavn").value = "";
        document.querySelector("#txtEtternavn").value = "";
        document.querySelector("#numTlf").value = "";
        document.querySelector("#txtEpost").value = "";
    }
}

function lagTable(table, bilett) {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = bilett.film;
    row.insertCell(1).innerHTML = bilett.antall;
    row.insertCell(2).innerHTML = bilett.fornavn;
    row.insertCell(3).innerHTML = bilett.etternavn;
    row.insertCell(4).innerHTML = bilett.telefonnr;
    row.insertCell(5).innerHTML = bilett.epost;

}

function slettBilett() {
    ticketArray = [];
    let table = document.querySelector("#print");

    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = cells.length - 1; j >= 0; j--) {
            cells[j].parentNode.removeChild(cells[j]);
        }
    }
}