var productToEdit = localStorage.getItem('productToEdit');
$(window).on('load', function () {
    let products = JSON.parse(localStorage.getItem('productos'))
    products.forEach(product => {
        if (product.id == productToEdit) {
            document.getElementById("placeholder-ProducName2").value = product.name;
            document.getElementById("placeholder-descripcion2").value = product.desc;
            document.getElementById("placeholder-imagen2").value = product.url;
            document.getElementById("placeholder-intereses2").value = product.interes;
        }
    });
});

function editProduct() {
    const productName = document.getElementById("placeholder-ProducName2").value;
    const productDesc = document.getElementById("placeholder-descripcion2").value;
    const productUrl = document.getElementById("placeholder-imagen2").value;
    const productInterest = document.getElementById("placeholder-intereses2").value;
        //Find index of specific object using findIndex method.
        let products = JSON.parse(localStorage.getItem('productos'))    
    objIndex = products.findIndex((obj => obj.id == productToEdit));

    //Log object to Console.

    //Update object's name property.
    products[objIndex].name = productName;
    products[objIndex].desc = productDesc;
    products[objIndex].url = productUrl;
    products[objIndex].interes = productInterest;
    
    // products.forEach(product => {
    //     if (product.id == productToEdit) {
    //         product.name = productName;
    //     }
    // });
    localStorage.removeItem("productos");
    localStorage.setItem("productos", JSON.stringify(products));
    window.location.href = 'dashboard.html';
}
