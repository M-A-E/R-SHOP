// from chat gpt
$(document).ready(function () {
    const products = getProducts();
    const urlParams = new URLSearchParams(window.location.search);
    const productIndex = urlParams.get('product');

    const selectedProduct = products[productIndex];
    console.log('Selected Product:', selectedProduct);
    $(".title").text(selectedProduct.name);
    $(".stock").text(`Stok: ${selectedProduct.stock}`);
    $(".description").append(selectedProduct.description);
    $(".harga").text(`harga : ${selectedProduct.price}`);
    $(".product-img").attr("src", selectedProduct.thumbnail);
});

































// $(document).ready(function () {
//     // var getProduct = getProducts();
//     // console.log(getProduct)
//     const selectProduct = JSON.parse(localStorage.getItem("selectProduct"));
//     console.log("selected product: ", selectProduct)

//     if (selectProduct) {
//         $(".row-detail").html(`
//             <div class="block1 col-md-5">
//                 <img class="product-img" src="${selectProduct.thumbnail}" alt="">
//             </div>
//             <div class="block2 col-md-6">
//                 <div>
//                     <h5 class="title">${selectProduct.name}</h5>
//                     <p class="stock">Stock: ${selectProduct.stock}</p>
//                     <p class="description">${selectProduct.description}</p>
//                     <p class="harga">harga : ${selectProduct.price}</p>
//                     <button class="add">Add Cart</button>
//                 </div>
//             </div>
//         `);
//     } else {
//         console.error('Selected product not found.');
//     }
// });



// $(".name.product-link").clicl(function(){
//     const productData = $(this).data("product");
//     const encodeData = encodeURIComponent(JSON.stringify(productData));

//     window.location.href = `details.html?product=${encodeData}`;
// })



















/* <div class="block1 col-md-5">
                <img class="product-img" id="productImage" alt="">
            </div>
            <div class="block2 col-md-6">
                <div>
                    <h5 class="title" id="productName"></h5>
                    <p class="stock" id="productStock"></p>
                    <p class="description" id="productDescription"></p>
                    <p class="harga" id="productPrice"></p>
                    <button class="add">Add Cart</button>
                </div>
            </div> */