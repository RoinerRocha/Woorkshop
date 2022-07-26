document.querySelector('#boton').addEventListener('click', savePerson);
drawPersonTable();

function savePerson() {
    var sNombre = document.querySelector('#nombre').value,
        sApellido = document.querySelector('#apellido').value,
        sNumero = document.querySelector('#numero').value;

    addPersonToSystem(sNombre, sApellido, sNumero)
    drawPersonTable();
}

function drawPersonTable() {
    var list = getPersonList(),
        tbody = document.querySelector('#regisTable tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i),
            nameCell = row.insertCell(0),
            lastnameCell = row.insertCell(1),
            numberCell = row.insertCell(2);


        nameCell.innerHTML = list[i].nombre;
        lastnameCell.innerHTML = list[i].apellido;
        numberCell.innerHTML = list[i].numero;

        tbody.appendChild(row);

    }
}