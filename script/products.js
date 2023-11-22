// from chat gpt
$(document).ready(function () {
    var getproduct = getProducts();
    const getRow = $("#row");

    getproduct.forEach((item, index) => {
        let productIndex = index;
        getRow.append(`
            <div class="container-card d-flex justify-content-center">
                <div class="card" data-product-index="${productIndex}">
                    <img class="thumbnail" src="${item.thumbnail}" alt="${item.name}">
                    <div class="card-body">
                    <div><p class="name">${item.name}</p></div>
                    <div><p class="price">${item.price}</p></div>
                    <div><p class="stock">Stock: ${item.stock}</p></div> 
                    </div>
                </div>
            </div>
        `);
    });

    $(".card").on('click', function  () {
        const productIndex = $(this).data("product-index")
        const selectProduct = getproduct[productIndex]

        const detailURL = `details.html?product=${productIndex}`;

        window.location.href = detailURL
    });
});
