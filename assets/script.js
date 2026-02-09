function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('menuOverlay');
    const hamburger = document.getElementById('mainHamburger');
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        document.body.classList.add('menu-open');
        document.documentElement.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
        document.documentElement.classList.remove('menu-open');
    }
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderWrapper = document.getElementById('sliderWrapper');

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

const products = [
    { title: "Sony WH-1000XM5", price: "₹24,990", img: "https://m.media-amazon.com/images/I/51SKmu2G9FL._SL1000_.jpg" },
    { title: "Apple MacBook Air M2", price: "₹89,900", img: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg" },
    { title: "Nike Air Jordan 1", price: "₹12,495", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-jordan-1-mid-shoes-X5pM09.png" },
    { title: "Samsung Galaxy S24", price: "₹79,999", img: "https://m.media-amazon.com/images/I/71cxC-j2u2L._SL1500_.jpg" },
    { title: "Apple iPad Pro M4", price: "₹99,900", img: "https://m.media-amazon.com/images/I/61f496B970L._SL1500_.jpg" },
    { title: "Noise Halo Smartwatch", price: "₹2,999", img: "https://m.media-amazon.com/images/I/71Xm0-W4fFL._SL1500_.jpg" }
];

const resultsArea = document.getElementById('resultsArea');

function renderProducts() {
    if(!resultsArea) return;
    resultsArea.innerHTML = products.map(product => `
        <div class="card">
            <img src="${product.img}" alt="${product.title}">
            <div class="card-body">
                <h3>${product.title}</h3>
                <div class="price">${product.price}</div>
                <a href="#" class="buy-btn">View Deal</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    if(sliderWrapper) {
        setInterval(() => moveSlide(1), 5000);
    }
});

function filterSource(source, btn) { console.log("Source selected:", source); }