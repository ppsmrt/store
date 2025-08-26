const products = [
    {id:1, name:'Nike Air Max 200', price:269, img:'https://via.placeholder.com/150?text=Nike+Air+Max+200'},
    {id:2, name:'Exceo Sneakers', price:260, img:'https://via.placeholder.com/150?text=Exceo+Sneakers'},
    {id:3, name:'Air Max Motion 2', price:290, img:'https://via.placeholder.com/150?text=Air+Max+Motion+2'},
    {id:4, name:'Leather Sneakers', price:270, img:'https://via.placeholder.com/150?text=Leather+Sneakers'},
];

const productList = document.getElementById('productList');
const productModal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.getElementById('closeModal');
const addToCartBtn = document.getElementById('addToCartBtn');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

let cartList = [];
let currentProduct = null;

function renderProducts() {
    products.forEach(p => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
        `;
        card.addEventListener('click', () => openModal(p));
        productList.appendChild(card);
    });
}

function openModal(product) {
    currentProduct = product;
    modalImage.src = product.img;
    modalTitle.innerText = product.name;
    modalPrice.innerText = `$${product.price}`;
    productModal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    productModal.style.display = 'none';
});

addToCartBtn.addEventListener('click', () => {
    cartList.push(currentProduct);
    renderCart();
    productModal.style.display = 'none';
    cart.style.display = 'block';
});

function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cartList.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.name} - $${p.price}`;
        cartItems.appendChild(li);
        total += p.price;
    });
    cartTotal.innerText = `$${total}`;
}

renderProducts();
