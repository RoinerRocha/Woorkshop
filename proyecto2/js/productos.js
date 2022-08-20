function addProducts(){
    const ProductName = $('#placeholder-ProducName').val();
    const ProductDescription = $('#placeholder-descripcion').val();
    const ProductURL = $('#placeholder-imagen').val();
    const ProductIntereses = $('#placeholder-intereses').val();

    let ProductDb = JSON.parse(localStorage.getItem('productos'));
    if(!ProductDb){
        ProductDb = [];
    }
    const product = {
        name: ProductName,
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

$('#button-addon10').bind('click', function(){
    addProducts();
});

$(window).on('load', function() {
    debugger;
    const productsContainer = document.getElementById('productsContainer');
    let products = []
    products = JSON.parse(localStorage.getItem('productos'));
    
    var divElement; 
    for(var i=0;i<products.length;i++)
    { 
        divElement= document.createElement('div');
        divElement.id = i;
        productsContainer.appendChild(divElement);
        var cardHtml = '<div class="card" style="width: 18rem;"><img class="card-img-top" src="'+products[i].url+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+ products[i].name +'</h5><p class="card-text">'+ products[i].desc +'</p><a href="#" class="btn btn-danger" onClick="deleteProduct('+ products[i].id +')">Delete</a><a href="#" class="btn btn-primary" onClick="deleteProduct('+ products[i].id +')">Editar</a></div></div>';
        document.getElementById(divElement.id).innerHTML=cardHtml;         
    }
});

function deleteProduct(productId) {
    debugger;
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
    let products = JSON.parse(localStorage.getElementById('products'));
    
}

