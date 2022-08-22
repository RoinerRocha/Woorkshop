var productToDetail = localStorage.getItem('detailProduct');
$(window).on('load', function () {
    let products = JSON.parse(localStorage.getItem('productos'))
    products.forEach(product => {
        if (product.id == productToDetail) {
            document.getElementById("title-Product").innerHTML = product.name;
            document.getElementById("user-Product").innerHTML = product.owner;
            document.getElementById("description-Product").innerHTML = product.desc;
            document.getElementById("image-Product").src = product.url;
            document.getElementById("search").innerHTML = product.interes;
        }
    });
});