const product = [
    {
        id: 1,
        thumbnail: "../picture/Vector.png",
        name: "Anggur Hijau",
        description: "Anggur hijau yang juga dikenal sebagai anggur putih atau kuning adalah jenis anggur yang paling banyak dikonsumsi. Jenis anggur ini memiliki rasa manis dan asam dan digunakan dalam berbagai resep, termasuk salad, smoothie, dan hidangan panggang",
        price: "Rp.28.000",
        stock: 200
    },
    {
        id: 2,
        thumbnail: "../picture/Mangga-Harum-Manis.png",
        name: "Mangga Harum Manis",
        description: "Disebut juga sebagai Arumanis atau Harumanis, mangga ini adalah yang paling populer di Indonesia. Jenis yang satu ini bentuknya lonjong dengan ujung bawah yang meruncing dan bagian atas yang lebih gemuk. Dengan warna hijaunya, bentukan inilah yang menjadi simbol buah mangga.",
        price: "Rp.25.000",
        stock: 99
    },
    {
        id: 3,
        thumbnail: "../picture/Durian-Montong.png",
        name: "Durian Montong",
        description: "Durio adalah nama genus durian; termasuk ke dalam famili Malvaceae, anak suku Helicteroideae. Dari sekitar 27–30 spesies anggota marga ini, sejauh ini diketahui sembilan spesies yang menghasilkan buah yang dapat dimakan",
        price: "Rp.85.000",
        stock: 500
    },
    {
        id: 4,
        thumbnail: "../picture/X-Manfaat-Buah-Naga-Putih-untuk-Kesehatan 1.png",
        name: "Naga Putih",
        description: "Buah naga putih, dengan kulit putih atau kuning pucat, kaya akan vitamin C, serat, dan antioksidan. Konsumsinya dapat mendukung sistem kekebalan tubuh, kesehatan pencernaan, dan melindungi sel-sel tubuh dari kerusakan oksidatif. Dengan rendah kalori dan lemak, buah naga putih juga merupakan pilihan camilan sehat yang mendukung kesehatan jantung dan kulit. Fitokimia dalam buah ini memberikan manfaat tambahan, menjadikannya pilihan yang baik untuk mendukung pola makan seimbang dan gaya hidup sehat.",
        price: "Rp.30.000",
        stock: 352
    },
    {
        id: 5,
        thumbnail: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/05/04071222/Kaya-Nutrisi-Ini-11-Khasiat-Buah-Semangka-untuk-Kesehatan-Tubuh.jpg.webp",
        name: "Semangka",
        description: "Semangka adalah tanaman merambat yang berasal dari daerah setengah gurun di Afrika bagian selatan. Tanaman ini masih sekerabat dengan labu-labuan, melon, dan ketimun. Semangka biasa dipanen buahnya untuk dimakan segar atau dibuat jus",
        price: "Rp.28.000",
        stock: 200
    },
    {
        id: 6,
        thumbnail: "https://down-id.img.susercontent.com/file/ab7c6ae2ee154e03d61c31b686b9141c",
        name: "Leci",
        description: "Leci atau Lici adalah spesies buah-buahan tunggal dalam genus Litchi, famili lerak-lerakan Sapindaceae. Pohon lici tumbuh di iklim tropis",
        price: "Rp.25.000",
        stock: 99
    },
    {
        id: 7,
        thumbnail: "https://cdn1-production-images-kly.akamaized.net/xYwnXLzCdest5zNQQsUFCZjcEmI=/0x266:1633x2442/800x1066/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2726259/original/036876600_1549946738-miguel-maldonado-665949-unsplash.JPG",
        name: "Pepaya",
        description: "Pepaya atau betik adalah tumbuhan yang diperkirakan berasal dari Meksiko bagian selatan dan bagian utara dari Amerika Selatan. Pepaya kini telah menyebar luas dan banyak ditanam di seluruh daerah tropis untuk diambil buahnya. C. papaya adalah satu-satunya jenis dalam genus Carica",
        price: "Rp.85.000",
        stock: 500
    },
    {
        id: 8,
        thumbnail: "https://cdn1-production-images-kly.akamaized.net/V3kWteVnsZRVEARHhvxMjs9lfsQ=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3043851/original/062810500_1581048315-rambutan-2477584_960_720.jpg",
        name: "rambutan",
        description: "Rambutan merupakan tanaman tropis yang termasuk ke dalam suku lerak-lerakan atau Sapindaceae, berasal dari daerah kepulauan di Asia Tenggara. Kata rambutan berasal dari bahasa Melayu yang berakar dari kata rambut karena bentuk buahnya yang mempunyai kulit menyerupai rambut",
        price: "Rp.30.000",
        stock: 352
    },
    {
        id: 9,
        thumbnail: "../picture/Vector.png",
        name: "Anggur Hijau",
        description: "Anggur hijau yang juga dikenal sebagai anggur putih atau kuning adalah jenis anggur yang paling banyak dikonsumsi. Jenis anggur ini memiliki rasa manis dan asam dan digunakan dalam berbagai resep, termasuk salad, smoothie, dan hidangan panggang",
        price: "Rp.28.000",
        stock: 200
    },
    {
        id: 10,
        thumbnail: "../picture/Mangga-Harum-Manis.png",
        name: "Mangga Harum Manis",
        description: "Disebut juga sebagai Arumanis atau Harumanis, mangga ini adalah yang paling populer di Indonesia. Jenis yang satu ini bentuknya lonjong dengan ujung bawah yang meruncing dan bagian atas yang lebih gemuk. Dengan warna hijaunya, bentukan inilah yang menjadi simbol buah mangga.",
        price: "Rp.25.000",
        stock: 99
    },
    {
        id: 11,
        thumbnail: "../picture/Durian-Montong.png",
        name: "Durian Montong",
        description: "Durio adalah nama genus durian; termasuk ke dalam famili Malvaceae, anak suku Helicteroideae. Dari sekitar 27–30 spesies anggota marga ini, sejauh ini diketahui sembilan spesies yang menghasilkan buah yang dapat dimakan",
        price: "Rp.85.000",
        stock: 500
    },
    {
        id: 12,
        thumbnail: "../picture/X-Manfaat-Buah-Naga-Putih-untuk-Kesehatan 1.png",
        name: "Naga Putih",
        description: "Buah naga putih, dengan kulit putih atau kuning pucat, kaya akan vitamin C, serat, dan antioksidan. Konsumsinya dapat mendukung sistem kekebalan tubuh, kesehatan pencernaan, dan melindungi sel-sel tubuh dari kerusakan oksidatif. Dengan rendah kalori dan lemak, buah naga putih juga merupakan pilihan camilan sehat yang mendukung kesehatan jantung dan kulit. Fitokimia dalam buah ini memberikan manfaat tambahan, menjadikannya pilihan yang baik untuk mendukung pola makan seimbang dan gaya hidup sehat.",
        price: "Rp.30.000",
        stock: 352
    },
    {
        id: 13,
        thumbnail: "../picture/Vector.png",
        name: "Anggur Hijau",
        description: "Anggur hijau yang juga dikenal sebagai anggur putih atau kuning adalah jenis anggur yang paling banyak dikonsumsi. Jenis anggur ini memiliki rasa manis dan asam dan digunakan dalam berbagai resep, termasuk salad, smoothie, dan hidangan panggang",
        price: "Rp.28.000",
        stock: 200
    },
    {
        id: 14,
        thumbnail: "../picture/Mangga-Harum-Manis.png",
        name: "Mangga Harum Manis",
        description: "Disebut juga sebagai Arumanis atau Harumanis, mangga ini adalah yang paling populer di Indonesia. Jenis yang satu ini bentuknya lonjong dengan ujung bawah yang meruncing dan bagian atas yang lebih gemuk. Dengan warna hijaunya, bentukan inilah yang menjadi simbol buah mangga.",
        price: "Rp.25.000",
        stock: 99
    },
    {
        id: 15,
        thumbnail: "../picture/Durian-Montong.png",
        name: "Durian Montong",
        description: "Durio adalah nama genus durian; termasuk ke dalam famili Malvaceae, anak suku Helicteroideae. Dari sekitar 27–30 spesies anggota marga ini, sejauh ini diketahui sembilan spesies yang menghasilkan buah yang dapat dimakan",
        price: "Rp.85.000",
        stock: 500
    },
    {
        id: 16,
        thumbnail: "../picture/X-Manfaat-Buah-Naga-Putih-untuk-Kesehatan 1.png",
        name: "Naga Putih",
        description: "Buah naga putih, dengan kulit putih atau kuning pucat, kaya akan vitamin C, serat, dan antioksidan. Konsumsinya dapat mendukung sistem kekebalan tubuh, kesehatan pencernaan, dan melindungi sel-sel tubuh dari kerusakan oksidatif. Dengan rendah kalori dan lemak, buah naga putih juga merupakan pilihan camilan sehat yang mendukung kesehatan jantung dan kulit. Fitokimia dalam buah ini memberikan manfaat tambahan, menjadikannya pilihan yang baik untuk mendukung pola makan seimbang dan gaya hidup sehat.",
        price: "Rp.30.000",
        stock: 352
    }

];

function getProducts() {
    return product
}

// const getRow = document.getElementById("row")
// product.forEach(item => {
//     getRow.innerHTML += `
//     <div class="container-card d-flex justify-content-center">
//     <div class="card">
//         <img class="thumbnail" src="${item.thumbnail}" alt="${item.name}">
//         <div class="card-body">
//         <div><p class="name">${item.name}</p></div>
//         <div><p class="price">${item.price}</p></div>
//         <div><p class="stock">Stock: ${item.stock}</p></div>
//         </div>
//     </div>
//     </div>
// `;
// })


