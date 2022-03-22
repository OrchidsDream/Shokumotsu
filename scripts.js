let products = [
    {
        "name": "Hamburger",
        "category": "Entree",
        "description": "This is a hamburger",
        "price": 11.95
    },
    {
        "name": "Ramen",
        "category": "Entree",
        "description": "This is ramen",
        "price": 14.95
    },
    {
        "name": "Caesar Salad",
        "category": "Salads",
        "description": "This is a caesar salad",
        "price": 9.95
    },
    {
        "name": "Greek Salad",
        "category": "Salads",
        "description": "This is a greek salad",
        "price": 9.95
    },
    {
        "name": "Dumplings",
        "category": "Sides",
        "description": "5 dumplings",
        "price": 7.50
    },
    {
        "name": "Fries",
        "category": "Sides",
        "description": "These are fries",
        "price": 4.25
    },
    {
        "name": "Coke",
        "category": "Drinks",
        "description": "This is a coke",
        "price": 2.25
    },
    {
        "name": "Ramune",
        "category": "Drinks",
        "description": "This is a pop",
        "price": 2.65
    },
    {
        "name": "Mochi",
        "category": "Dessert",
        "description": "3 Mochis",
        "price": 5.25
    },
    {
        "name": "Puppy Chow",
        "category": "Dessert",
        "description": "This is puppy chow",
        "price": 5.95,
    },
]

/* let pclass = document.querySelector(".pclass")

products.forEach(element => {
    let p = document.createElement("p")
    p.innerText = element.price;
    pclass.append(p);
});
 */

document.querySelector("#entreebutton").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#entreediv").classList.toggle("show");
});

document.querySelector("#saladsbutton").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#saladsdiv").classList.toggle("show");
});

document.querySelector("#sidesbutton").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#sidesdiv").classList.toggle("show");
});

document.querySelector("#drinksbutton").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#drinksdiv").classList.toggle("show");
});

document.querySelector("#dessertsbutton").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#dessertsdiv").classList.toggle("show");
});