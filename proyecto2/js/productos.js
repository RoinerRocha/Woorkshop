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
    window.location.href = 'login.html';
}

$('#button-addon10').bind('click', function(){
    addProducts();
});