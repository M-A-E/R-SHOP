// from chat gpt
$(document).ready(function () {
    const products = getProducts()
    const getRow = $("#row-product");
    const details = $("#row-detail");

    getRow.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });

    products.forEach((item, index) => {
        let productIndex = index;
        console.log(productIndex);
        getRow.slick('slickAdd', `
            <div class="container-card d-flex justify-content-center"  style="width: 275px">
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
        const selectProduct = products[productIndex]

        const detailURL = `details.html?product=${productIndex}`;
        window.location.href = detailURL;

        // $(".row-detail").load("details.html", function () {
        //     $(".product-img").attr("src", selectProduct.thumbnail);
        //     $(".title").text(selectProduct.name);
        //     $(".stock").text(`stock: ${selectProduct.stock}`);
        //     $(".description").text(selectProduct.description);
        //     $(".price").text(`Harga: ${selectProduct.price}`);
        // });
        })

    $("#prevBtn").click(function () {
        const currentIndex = getRow.slick("slickCurrentSlide");
        if (currentIndex !== 0) {
            getRow.slick('slickPrev')
        }
    });

    $("#nextBtn").click(function () {
        const currentIndex = getRow.slick("slickCurrentSlide");
        const totalSlide  = getRow.slick("getSlick").slideCount;
        if (currentIndex < totalSlide - 4) {
            getRow.slick('slickNext')
        }
    });
});

