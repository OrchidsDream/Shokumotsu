let products = [
    {
        "name": "Hamburger",
        "category": "Entree",
        "description": "This is a hamburger",
        "price": 11.95,
        "pictureLink": './images/hamburger.png',
        "inCart": 0,
        "display": false,
        
    },
    {
        "name": "Ramen",
        "category": "Entree",
        "description": "This is ramen",
        "price": 14.95,
        "pictureLink": './images/ramen.png',
        "inCart": 0,
        "display": false,
    },
    {
        "name": "Caesar Salad",
        "category": "Salads",
        "description": "This is a caesar salad",
        "price": 9.95,
        "pictureLink": './images/caesersalad.png',
        "inCart": 0,
        "display": false,
    },
    {
        "name": "Greek Salad",
        "category": "Salads",
        "description": "This is a greek salad",
        "price": 9.95,
        "pictureLink": './images/greeksalad.png',
        "inCart": 0,
        "display": false,
    },
    {
        "name": "Dumplings",
        "category": "Sides",
        "description": "5 dumplings",
        "price": 7.50,
        "pictureLink": './images/dumplings.png',
        "inCart": 0,
        "display": false,
    },
    {
        "name": "Fries",
        "category": "Sides",
        "description": "These are fries",
        "price": 4.25,
        "pictureLink": './images/fries.png',
        "inCart": 0,
        "display": false,
    },
    {
        "name": "Coke",
        "category": "Drinks",
        "description": "This is a coke",
        "price": 2.25,
        "pictureLink": './images/coke.png',
        "inCart": 0,
        "display": false,
    },
    {
        "name": "Ramune",
        "category": "Drinks",
        "description": "This is a pop",
        "price": 2.65,
        "pictureLink": './images/ramune.png',
        "inCart": 0,
        "display": false,
    },
    {
        "name": "Mochi",
        "category": "Dessert",
        "description": "3 Mochis",
        "price": 5.25,
        "pictureLink": './images/mochi.png',
        "inCart": 0,
        "display": false,
    },
    {
        "name": "Puppy Chow",
        "category": "Dessert",
        "description": "This is puppy chow",
        "price": 5.95,
        "pictureLink": './images/puppychow.png',
        "inCart": 0,
        "display": false,
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


let subTotal = 0;
let quantitycount = document.createElement("p");

for (let i = 0; i < cartbuttons.length; i++) {
    cartbuttons[i].addEventListener("click", (e) => {
        e.preventDefault();
        
        if (products[i].display === false) {
            products[i].display = true;

            if (products[i].inCart === 0) {
                products[i].inCart += 1;
            }
            shownProduct(products[i]);
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
    
            quantitycount.classList.add("quantitycount")
            quantitycount.innerText = products[i].inCart;
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
                subTotal += products[i].price;
                console.log(subTotal);
            })
            
            minusbutton.addEventListener("click", (e) => {
                e.preventDefault();
                if(products[i].inCart > 0) {
                    products[i].inCart -= 1;
                }
                quantitycount.innerText = products[i].inCart;
                console.log(products[i].inCart)
                if (subTotal > products[i].price){
                    subTotal -= products[i].price;
                    console.log(subTotal);
                }
                if (products[i].inCart <= 0) {
                    itemcheckout.remove();
                    products[i].display = false;
                }
            })
            
            exitbutton.addEventListener("click", (e) => {
                e.preventDefault();
                itemcheckout.remove()
                subTotal -= products[i].inCart * products[i].price;
                products[i].inCart = 0;
                products[i].display = false;
                console.log(subTotal);
            })
        } else if (products[i].display === true) {
            quantitycount.innerText = products[i].inCart;
        }
        subTotal += products[i].price;
        console.log(subTotal)
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
        
        