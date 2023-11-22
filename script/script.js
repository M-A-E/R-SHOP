const wrapper = document.querySelector(".wrapper");
const wrapperRegister = document.querySelector(".wrapper-register")
const linkLogin = document.querySelector(".login-link");
const linkRegister = document.querySelector(".register-link");
const btnLogPopup = document.querySelector(".login-popup");
const iconClose = document.querySelector(".icon-close");
const containerPopup = document.querySelector(".container-popup");
const btnRegPopup = document.querySelector(".register-popup");
const closeRegister = document.querySelector(".icon-close-register");
const containerRegister = document.querySelector(".container-register")

linkRegister.addEventListener('click', () => {
    wrapper.classList.add("active");
})

linkLogin.addEventListener('click', () => {
    wrapper.classList.remove("active");
})

btnLogPopup.addEventListener('click', () => {
    wrapper.classList.add("active-popup");
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove("active-popup");
})

btnLogPopup.addEventListener('click', () => {
    containerPopup.classList.add("active");
})

iconClose.addEventListener('click', () => {
    containerPopup.classList.remove("active");
})

linkRegister.addEventListener('click', () => {
    wrapperRegister.classList.remove("active");
})

linkLogin.addEventListener('click', () => {
    wrapperRegister.classList.add("active");
})

btnRegPopup.addEventListener('click', () => {
    wrapperRegister.classList.add("active-popup");
})

iconClose.addEventListener('click', () => {
    wrapperRegister.classList.remove("active-popup");
})

btnRegPopup.addEventListener('click', () => {
    containerRegister.classList.add("active");
})

closeRegister.addEventListener('click', () => {
    containerRegister.classList.remove("active");
})

const user = {
    email: "kemek@gmail.com",
    password: "kemek123"
}

const btnlogin = document.querySelector("#loginPopup");
btnlogin.addEventListener('click', () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === user.email && password === user.password) {
        window.location.href = "shop.html"
    }
    alert("email & password salah!")
})

// const shopNow = document.querySelector(".shop-now");
// shopNow.addEventListener('click', () => {
//     wrapper.classList.add("active-popup");
// })

function shop() {
    window.location.href = "shop.html"
}