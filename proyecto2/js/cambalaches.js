$(window).on('load', function () {
    const productsContainer = document.getElementById('productsContainer2');
    let products = []
    products = JSON.parse(localStorage.getItem('productos'));
    var divElement;
    for (var i = 0; i < products.length; i++) {
        divElement = document.createElement('div');
        divElement.id = i;
        productsContainer.appendChild(divElement);
        divElement.classList.add('col-md-6');
        var cardHtml = '<div class="card mt-3 mb-3 col-12" style=" height: 90%";><div class="row g-0"><div class="col-md-6"><img src="' + products[i].url + '" class="img-fluid" style="max-width: auto; min-height: 300px;"></div><div class="col-md-6"><div class="card-body"><a style="cursor: pointer; color: blue;" onClick="detailProduct(' + products[i].id + ');"><h5 class="card-title">' + products[i].name + '</h5></a><p class="card-text"><h5 class="card-title">' + products[i].owner + '</h5><p class="card-text"></p><p class="card-text"><small class="text-muted"></small></p></div></div></div></div>';
        document.getElementById(divElement.id).innerHTML = cardHtml;
    }
});

function detailProduct(productId){ 
    localStorage.setItem('detailProduct', productId);
    window.location.href = 'detalle_producto.html';
}