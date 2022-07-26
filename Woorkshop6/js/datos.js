var personList = [];


function addPersonToSystem(pnombre, papellido, pnumero) {

    var newPerson = {
        nombre : pnombre,
        apellido : papellido,
        numero : pnumero
    };
    personList.push(newPerson);
    localStoragePersonList(personList);
}

function getPersonList(){
    var storedList = localStorage.getItem('localPersonList');
    if(storedList == null){
        personList =[];
    }else {
        personList = JSON.parse(storedList);
    }
    return personList;
}

function localStoragePersonList(plist){
    localStorage.setItem('localPersonList', JSON.stringify(plist));

}