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
                window.location.href = 'index.html';
            }
        });
    }
}

$('#button-addon12').bind('click', function(){
    login();
});

$('#button-addon1').bind('click', function(){
    addUser();
  });