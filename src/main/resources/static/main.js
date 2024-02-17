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
        console.log("mjau");
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
    console.log(validInput);
    console.log(film);
    if (validInput === true) {
        let bilett = {film, antall, fornavn, etternavn, telefonnr, epost};
        let table = document.querySelector("#print");
        lagTable(table, bilett);
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
    let table = document.querySelector("#print");

    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        for (var j = cells.length - 1; j >= 0; j--) {
            cells[j].parentNode.removeChild(cells[j]);
        }
    }
}