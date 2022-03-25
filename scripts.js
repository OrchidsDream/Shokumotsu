let products = [
    {
        "name": "Hamburger",
        "category": "Entree",
        "description": "This is a hamburger",
        "price": 11.95,
        'pictureLink': './images/hamburger.png',
        "inCart": 0,
        
    },
    {
        "name": "Ramen",
        "category": "Entree",
        "description": "This is ramen",
        "price": 14.95,
        'pictureLink': './images/ramen.png',
        "inCart": 0,
    },
    {
        "name": "Caesar Salad",
        "category": "Salads",
        "description": "This is a caesar salad",
        "price": 9.95,
        'pictureLink': './images/caesersalad.png',
        "inCart": 0,
    },
    {
        "name": "Greek Salad",
        "category": "Salads",
        "description": "This is a greek salad",
        "price": 9.95,
        'pictureLink': './images/greeksalad.png',
        "inCart": 0,
    },
    {
        "name": "Dumplings",
        "category": "Sides",
        "description": "5 dumplings",
        "price": 7.50,
        'pictureLink': './images/dumplings.png',
        "inCart": 0,
    },
    {
        "name": "Fries",
        "category": "Sides",
        "description": "These are fries",
        "price": 4.25,
        'pictureLink': './images/fries.png',
        "inCart": 0,
    },
    {
        "name": "Coke",
        "category": "Drinks",
        "description": "This is a coke",
        "price": 2.25,
        'pictureLink': './images/coke.png',
        "inCart": 0,
    },
    {
        "name": "Ramune",
        "category": "Drinks",
        "description": "This is a pop",
        "price": 2.65,
        'pictureLink': './images/ramune.png',
        "inCart": 0,
    },
    {
        "name": "Mochi",
        "category": "Dessert",
        "description": "3 Mochis",
        "price": 5.25,
        'pictureLink': './images/mochi.png',
        "inCart": 0,
    },
    {
        "name": "Puppy Chow",
        "category": "Dessert",
        "description": "This is puppy chow",
        "price": 5.95,
        'pictureLink': './images/puppychow.png',
        "inCart": 0,
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
            buttons.classList.remove("menuitemactive");
        };
    });
});

menubuttons.forEach(function(buttons){
    buttons.addEventListener("click", function(e){
        menubuttons.forEach(function(buttons){
            if (buttons.nextElementSibling.classList.contains("show")){
                buttons.nextElementSibling.classList.remove("show");
                buttons.classList.remove("menuitemactive");
            };
        });
        if (!buttons.nextElementSibling.classList.contains("show")){
            buttons.nextElementSibling.classList.add("show");
            buttons.classList.add("menuitemactive");
        };
        e.preventDefault();
        e.stopPropagation();
    });
});

let cartbuttons = document.querySelectorAll(".cartbutton");

for (let i = 0; i < cartbuttons.length; i++) {
    cartbuttons[i].addEventListener("click", (e) => {
        e.preventDefault();
        shownProduct(products[i]);
        if (products.inCart = 0) {
            products.inCart = 1;
        }

        let itemcheckout = document.createElement("div")
        itemcheckout.classList.add("itemcheckout")
        document.querySelector(".form2").append(itemcheckout)
        
        let namecheckout = document.createElement("h3");
        namecheckout.innerText = `${products[i].name} | $${products[i].price}`;
        itemcheckout.appendChild(namecheckout);
        
        let image = document.createElement("img");
        image.setAttribute("src", products[i].pictureLink);
        image.classList.add("imagecheckout");
        itemcheckout.append(image);
        
        let quantitycheckout = document.createElement("div");
        quantitycheckout.innerText = `Quantity`;
        itemcheckout.append(quantitycheckout);

        let quantitycount = document.createElement("p")
        quantitycount.classList.add("quantitycount")
        quantitycount.innerText = 0
        itemcheckout.appendChild(quantitycount)

        let minusbutton = document.createElement("button");
        let plusbutton = document.createElement("button");
        minusbutton.classList.add("minusplusbuttons");
        plusbutton.classList.add("minusplusbuttons");
        quantitycheckout.appendChild(minusbutton)
        quantitycheckout.appendChild(plusbutton)
        
        let exitbutton = document.createElement("button");
        exitbutton.classList.add("exitbutton")
        namecheckout.appendChild(exitbutton)

        // let exitbutton = document.createElement("button");
        // exitbutton.className = 'fa fa-smile-o';
        // itemcheckout.appendChild(exitbutton)

        plusbutton.addEventListener("click", (e) => {
            e.preventDefault();
            products[i].inCart += 1;
            quantitycount.innerText = products[i].inCart;
            console.log(products[i].inCart)
        })

        minusbutton.addEventListener("click", (e) => {
            e.preventDefault();
            products[i].inCart -= 1;
            quantitycount.innerText = products[i].inCart;
            console.log(products[i].inCart)
        })
        
        exitbutton.addEventListener("click", (e) => {
            e.preventDefault();
            itemcheckout.remove()
        })
    })
}


function shownProduct(product) {
    console.log("My product is", product)
}

// cartbuttons.forEach(function(buttons){
//     buttons.addEventListener("click", function(e){
//         e.preventDefault();
//     });
// });

