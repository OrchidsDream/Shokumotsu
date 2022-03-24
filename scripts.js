let products = [
    {
        "name": "Hamburger",
        "category": "Entree",
        "description": "This is a hamburger",
        "price": 11.95,
        'pictureLink': './images/hamburger.png'
        
    },
    {
        "name": "Ramen",
        "category": "Entree",
        "description": "This is ramen",
        "price": 14.95,
        'pictureLink': './images/ramen.png'
    },
    {
        "name": "Caesar Salad",
        "category": "Salads",
        "description": "This is a caesar salad",
        "price": 9.95,
        'pictureLink': './images/caesarsalad.png'
    },
    {
        "name": "Greek Salad",
        "category": "Salads",
        "description": "This is a greek salad",
        "price": 9.95,
        'pictureLink': './images/greeksalad.png'
    },
    {
        "name": "Dumplings",
        "category": "Sides",
        "description": "5 dumplings",
        "price": 7.50,
        'pictureLink': './images/dumplings.png'
    },
    {
        "name": "Fries",
        "category": "Sides",
        "description": "These are fries",
        "price": 4.25,
        'pictureLink': './images/fries.png'
    },
    {
        "name": "Coke",
        "category": "Drinks",
        "description": "This is a coke",
        "price": 2.25,
        'pictureLink': './images/coke.png'
    },
    {
        "name": "Ramune",
        "category": "Drinks",
        "description": "This is a pop",
        "price": 2.65,
        'pictureLink': './images/ramune.png'
    },
    {
        "name": "Mochi",
        "category": "Dessert",
        "description": "3 Mochis",
        "price": 5.25,
        'pictureLink': './images/mochi.png'
    },
    {
        "name": "Puppy Chow",
        "category": "Dessert",
        "description": "This is puppy chow",
        "price": 5.95,
        'pictureLink': './images/puppychow.png'
    },
]

/* let pclass = document.querySelector(".pclass")

products.forEach(element => {
    let p = document.createElement("p")
    p.innerText = element.price;
    pclass.append(p);
});
 */

let menubuttons = document.querySelectorAll(".menubuttons");

window.addEventListener("click", function(){
    menubuttons.forEach(function(buttons){
        if (buttons.nextElementSibling.classList.contains("show")){
            buttons.nextElementSibling.classList.remove("show");
        };
    });
});

menubuttons.forEach(function(buttons){
    buttons.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        buttons.nextElementSibling.classList.toggle("show");
    });
});

let itemcheckout = document.createElement("div");
itemcheckout.classList.add("itemcheckout");
document.querySelector(".form2").append(itemcheckout);
let namecheckout = document.createElement("h3");
namecheckout.innerText = `${products[0].name} | $${products[0].price}`;
itemcheckout.append(namecheckout);
let image = document.createElement("img");
image.setAttribute("src", products[0].pictureLink);
image.classList.add("imagecheckout");
itemcheckout.append(image);
let quantitycheckout = document.createElement("div");
quantitycheckout.innerText = `Quantity`;
itemcheckout.append(quantitycheckout);
