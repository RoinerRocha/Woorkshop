const userDropdown = document.getElementById('userDropdown');
if (userDropdown) {
    userDropdown.style.display = 'none';
}
const ingresar = document.getElementById('ingresar');
if (ingresar) {
    ingresar.style.display = 'none';
}

const ingreso = document.getElementById('ingreso');
function addUser(){
    const UserName = $('#placeholder-name').val();
    const UserLastName = $('#placeholder-lastname').val();
    const UserAddres = $('#placeholder-addres').val();
    const UserAddres2 = $('#placeholder-addres2').val();
    const UserCountry = $('#select-country option:selected').text();
    const UserCity = $('#placeholder-city').val();
    const UserCorreo = $('#placeholder-Correo').val();
    const UserContra = $('#placeholder-Contraseña').val();
    

    let UserDb = JSON.parse(localStorage.getItem('users'));
    if(!UserDb){
        UserDb = [];
    }
    const user = {
        name: UserName,
        id: UserDb.length + 1,
        lastName: UserLastName,
        addres: UserAddres,
        addres2: UserAddres2,
        country: UserCountry,
        city: UserCity,
        correo: UserCorreo,
        contra: UserContra
    }
    UserDb.push(user);
    localStorage.setItem('users', JSON.stringify(UserDb));

    console.log(JSON.parse(localStorage.getItem('users')));
    window.location.href = 'login.html';
}

function login(){
    const users = JSON.parse(localStorage.getItem('users'));
    const correo = $('#placeholder-CorreoElectronico').val();
    const contra = $('#placeholder-Contraseña').val();
    if(users){
        users.forEach((user) =>{
            if(correo == user.correo && contra == user.contra){
                localStorage.setItem('loggedUser', user.name);
                window.location.href = 'index.html'; 
            }
        });
    }
}

function logout(){
    localStorage.setItem('loggedUser', null);
    window.location.href = 'login.html';
}



$('#button-addon12').bind('click', function(){
    login();
});

$('#button-addon1').bind('click', function(){
    addUser();
});

$(window).on('load', function() {
    if (localStorage.getItem('loggedUser') !== 'null') {
        
        const userDropdown = document.getElementById('userDropdown');
        if (userDropdown) {
            userDropdown.style.display = 'block';
            document.getElementById("dropdownMenuButton").innerHTML = localStorage.getItem('loggedUser');
        }
    } else {
        const ingresar = document.getElementById('ingresar');
        if (ingresar) {
            ingresar.style.display = 'block';
            document.getElementById("ingresar").innerHTML = "Ingresar";
        }
    }
});

