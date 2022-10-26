// menu
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

// food filters
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