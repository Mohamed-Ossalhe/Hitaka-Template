//! ================================
//* ============ menu ==============
//! ================================
let menuBurger = document.querySelector(".menu-burger");
let closeMenu = document.querySelector(".close-menu");
let navMenu = document.querySelector(".navigation");
const openNavMenu = ()=>{
    navMenu.style.transform = 'translateX(0)';
};
const closeNavMenu = ()=>{
    navMenu.style.transform = 'translateX(100%)';
};
menuBurger.addEventListener('click', openNavMenu);
closeMenu.addEventListener('click', closeNavMenu);

//! ================================
//* ========= Filters ==============
//! ================================
let filters = document.querySelectorAll(".filter");
let meals = document.querySelectorAll(".meal");

filters.forEach((filter) => {
    filter.addEventListener("click", removeClass);
    filter.addEventListener("click", manageMeals);
});

function removeClass() {
    filters.forEach((filter)=>{
        filter.classList.remove("active");
        this.classList.add("active");
    });
}

function manageMeals() {
    meals.forEach((meal) => {
        meal.style.display = 'none';
    });
    let dataFood = document.querySelectorAll(this.dataset.food);
    dataFood.forEach((element) => {
        element.style.display = 'block';
    })
}

//! ================================
//* ============ Cart ==============
//! ================================
let cartIcon = document.querySelector(".cart");
let productsCart = document.querySelector(".meals-cart");
// reveal cart
const revealCart = () => {
    productsCart.classList.toggle("cart-active");
}
cartIcon.addEventListener("click", revealCart);

//! ================================
//* ==== Add Products To Cart ======
//! ================================
let addToCartBtn = document.getElementsByClassName("add-to-cart");
for(let i = 0; i < addToCartBtn.length; i++) {
    let btn = addToCartBtn[i];
    btn.addEventListener("click", selectClickedItem);
}

function selectClickedItem(e){
    let button = e.target;
    let itemImage = button.parentElement.parentElement.parentElement.firstElementChild.getAttribute("src");
    let itemTitle = button.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText;
    let itemPrice = button.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.innerText;
    console.log(itemImage, itemTitle, itemPrice)
    addItemToCart(itemImage, itemTitle, itemPrice);
}

let mealsCart = document.querySelector(".cart-products");
let total = 0;
let totalElement = document.querySelector(".total-price");
// purchase btn
// PURCHASE or Clear CART
let purchaseBtn = document.querySelector(".purchase-cart");
let purchaseModal = document.querySelector(".purchase-success-modal");
// clear btn
let clearBtn = document.querySelector(".clear-cart");
let clearModal = document.querySelector(".clear-caution-modal");
purchaseBtn.addEventListener("click", purchaseCart);
clearBtn.addEventListener("click", clearCart);

// add Item to cart
function addItemToCart(img, title, price) {
    let quantityCountSpan = document.querySelector(".quantity-span");
    let itemCard = `
    <!-- product -->
    <div class="product">
    <img src="${img}" alt="" width="100%">
    <h3 class="product-title">${title}</h3>
    <div class="price-quantity">
    <p>${price}</p>
    </div>
    </div>`;
    mealsCart.innerHTML += itemCard;
    // total products in cart
    quantityCountSpan.innerText++;
    // update total
    let productPrice = price.replace("$", "");
    total += parseInt(productPrice);
    totalElement.innerText = `Total : $ ${total}`;
    
}
// purchase items
function purchaseCart() {
    mealsCart.innerText = "";
    document.querySelector(".quantity-span").innerText = 0;
    count = 1;
    total = 0;
    totalElement.innerText = "Total : ";
    purchaseModal.style.display = 'flex';
    setInterval(()=>{
        purchaseModal.style.display = 'none';
    }, 3000);
}

// clear cart
function clearCart() {
    mealsCart.innerText = "";
    document.querySelector(".quantity-span").innerText = 0;
    count = 1;
    total = 0;
    totalElement.innerText = "Total : ";
    clearModal.style.display = 'flex';
    setInterval(()=>{
        clearModal.style.display = 'none';
    }, 3000);
}