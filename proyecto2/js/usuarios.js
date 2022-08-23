const userDropdown = document.getElementById('userDropdown');
if (userDropdown) {
    userDropdown.style.display = 'none';
}
const ingresar = document.getElementById('ingresar');
if (ingresar) {
    ingresar.style.display = 'none';
}
const dashboard = document.getElementById('dashboard');
if (dashboard) {
    dashboard.style.display = 'none';
}
const line = document.getElementById('line');
if (line) {
    line.style.display = 'none';
}

const ingreso = document.getElementById('ingreso');
function addUser() {
    const UserName = $('#placeholder-name').val();
    const UserLastName = $('#placeholder-lastname').val();
    const UserAddres = $('#placeholder-addres').val();
    const UserAddres2 = $('#placeholder-addres2').val();
    const UserCountry = $('#select-country option:selected').text();
    const UserCity = $('#placeholder-city').val();
    const UserCorreo = $('#placeholder-Correo').val();
    const UserContra = $('#placeholder-Contraseña').val();


    let UserDb = JSON.parse(localStorage.getItem('users'));
    if (!UserDb) {
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

function login() {
    const users = JSON.parse(localStorage.getItem('users'));
    const correo = $('#placeholder-CorreoElectronico').val();
    const contra = $('#placeholder-Contraseña').val();
    if (users) {
        users.forEach((user) => {
            if (correo == user.correo && contra == user.contra) {
                localStorage.setItem('loggedUser', user.name);
                window.location.href = 'index.html';
            }
        });
    }
}

function logout() {
    localStorage.setItem('loggedUser', null);
    window.location.href = 'login.html';
}



$('#button-addon12').bind('click', function () {
    login();
});

$('#button-addon1').bind('click', function () {
    addUser();
});

$(window).on('load', function () {
    if (localStorage.getItem('loggedUser') !== 'null') {

        const userDropdown = document.getElementById('userDropdown');
        const dashboard = document.getElementById('dashboard');
        const line = document.getElementById('line');
        if (userDropdown) {
            userDropdown.style.display = 'block';
            dashboard.style.display = 'block';
            line.style.display = 'block';
            document.getElementById("dropdownMenuButton").innerHTML = localStorage.getItem('loggedUser');
        }
    } else {
        const ingresar = document.getElementById('ingresar');
        if (ingresar) {
            ingresar.style.display = 'block';
            document.getElementById("ingresar").innerHTML = "Ingresar";
        }
    }

    const carouselContainer = document.getElementById('carouselContainer');
    let products = []
    products = JSON.parse(localStorage.getItem('productos'));
    products = products.reverse();
    var divElement;
    var cont = 0;
    for (var i = 0; i < products.length; i++) {
        if (i === 0) {
            divElement = document.createElement('div');
            divElement.id = i;
            carouselContainer.appendChild(divElement);
            // var carouselItemHtml = '<div class="carousel-item active"><div class="row"><div class="col-12 col-sm-5 col-md-6 col-lg-5 mb-4 mx-lg-auto mx-md-auto mx-sm-auto"><img src="'+ products[i].url +'" class=" w-50 h-100" alt="..."><p>'+ products[i].name +'</p></div><div class="col-12 col-sm-5 col-md-6 col-lg-5 mb-4 mx-lg-auto mx-md-auto mx-sm-auto"><img src="'+ products[i].url +'" class=" w-50 h-100" alt="articulo1"><p>'+ products[i].name +'</p></div></div></div>';
            var carouselItemHtml = '<div class="carousel-item active"><div class="row" id="row'+ i +'"></div></div>';
            document.getElementById(divElement.id).innerHTML = carouselItemHtml;
            
            debugger;
            let productOne = products[0];
            let productTwo = products[1];
            var imagesHtlm = '<div class="col-12 col-sm-5 col-md-6 col-lg-5 mb-4 mx-lg-auto mx-md-auto mx-sm-auto"><img src="'+ productOne.url +'" class=" w-50 h-100" alt="..." onClick = "detailProduct('+ productOne.id +')" ><p>'+ productOne.name +'</p></div><div class="col-12 col-sm-5 col-md-6 col-lg-5 mb-4 mx-lg-auto mx-md-auto mx-sm-auto"><img src="'+ productTwo.url +'" class=" w-50 h-100" alt="articulo1" onClick = "detailProduct('+ productTwo.id +')" ><p>'+ productTwo.name +'</p></div>'
            document.getElementById("row" + i ).innerHTML = imagesHtlm;
            cont = cont + 3;
        } else {
            divElement = document.createElement('div');
            divElement.id = i;
            carouselContainer.appendChild(divElement);
            
            
            debugger;
            let productOne = products[cont - 1];
            let productTwo = products[cont];
            if (productOne != undefined && productTwo != undefined) {
                var carouselItemHtml = '<div class="carousel-item"><div class="row" id="row'+ i +'"></div></div>';
                document.getElementById(divElement.id).innerHTML = carouselItemHtml;
                var imagesHtlm = '<div class="col-12 col-sm-5 col-md-6 col-lg-5 mb-4 mx-lg-auto mx-md-auto mx-sm-auto"><img src="'+ productOne.url +'" class=" w-50 h-100" alt="..." onClick = "detailProduct('+ productOne.id +')"  ><p>'+ productOne.name +'</p></div><div class="col-12 col-sm-5 col-md-6 col-lg-5 mb-4 mx-lg-auto mx-md-auto mx-sm-auto"><img src="'+ productTwo.url +'" class=" w-50 h-100" alt="articulo1" onClick = "detailProduct('+ productTwo.id +')"  ><p>'+ productTwo.name +'</p></div>'
            } else if (productOne == undefined && productTwo == undefined) {
                break;
            } else {
                var carouselItemHtml = '<div class="carousel-item"><div class="row" id="row'+ i +'"></div></div>';
                document.getElementById(divElement.id).innerHTML = carouselItemHtml;
                var imagesHtlm = '<div class="col-12 col-sm-5 col-md-6 col-lg-5 mb-4 mx-lg-auto mx-md-auto mx-sm-auto"><img src="'+ productOne.url +'" class=" w-50 h-100" alt="..." onClick = "detailProduct('+ productOne.id +')"  ><p>'+ productOne.name +'</p></div>'
            }
            document.getElementById("row" + i ).innerHTML = imagesHtlm;
            cont = cont + 2;
        }
        
    }
});
function detailProduct(productId){ 
    debugger;
    localStorage.setItem('detailProduct', productId);
    window.location.href = 'detalle_producto.html';
}
