function addProducts() {
    const ProductName = $('#placeholder-ProducName').val();
    const ProductDescription = $('#placeholder-descripcion').val();
    const ProductURL = $('#placeholder-imagen').val();
    const ProductIntereses = $('#placeholder-intereses').val();

    let ProductDb = JSON.parse(localStorage.getItem('productos'));
    if (!ProductDb) {
        ProductDb = [];
    }
    const product = {
        name: ProductName,
        owner: localStorage.getItem('loggedUser'),
        id: ProductDb.length + 1,
        desc: ProductDescription,
        url: ProductURL,
        interes: ProductIntereses

    }
    ProductDb.push(product);
    localStorage.setItem('productos', JSON.stringify(ProductDb));

    console.log(JSON.parse(localStorage.getItem('productos')));
    window.location.href = 'dashboard.html';
}

$('#button-addon10').bind('click', function () {
    addProducts();
});

$(window).on('load', function () {

    const productsContainer = document.getElementById('productsContainer');
    let products = []
    products = JSON.parse(localStorage.getItem('productos'));
    var divElement;
    for (var i = 0; i < products.length; i++) {
        if (products[i].owner == localStorage.getItem('loggedUser')) {
            divElement = document.createElement('div');
            divElement.id = i;
            productsContainer.appendChild(divElement);
            divElement.classList.add('col-md-6');
            var cardHtml = '<div class="card mt-3 mb-3 col-12" style=" height: 90%";><div class="row g-0"><div class="col-md-6"><img src="' + products[i].url + '" class="img-fluid" alt="..."></div><div class="col-md-6"><div class="card-body"><h5 class="card-title">' + products[i].name + '</h3><p class="card-text"><h5 class="card-title"></h3><p class="card-text"><a class="btn btn-danger" onClick="deleteProduct(' + products[i].id + ')">Delete</a></p><p class="card-text"><small class="text-muted"><a class="btn btn-primary" onClick="editProduct(' + products[i].id + ')">Editar</a></small></p></div></div></div></div>';
            document.getElementById(divElement.id).innerHTML = cardHtml;
        }

    }
});


function deleteProduct(productId) {

    let products = JSON.parse(localStorage.getItem('productos'))

    const index = products.findIndex(product => product.id === productId);

    if (index > -1) {
        products.splice(index, 1);
    }
    localStorage.removeItem("productos");
    localStorage.setItem("productos", JSON.stringify(products));
    window.location.href = 'dashboard.html';
}

function editProduct(productId) {

    localStorage.setItem('productToEdit', productId);
    window.location.href = 'editar.html';
}





document.getElementById('nombre').innerHTML = '' + localStorage.getItem('loggedUser') + ''

