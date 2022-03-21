let products = [
    {
        "name": "Hamburger",
        "category": "Entree",
        "description": "This is a hamburger",
        "price": 5.95
    },
    {
        "name": "Ramen",
        "category": "Entree",
        "description": "This is ramen",
        "price": 5.95
    },
    {
        "name": "Caesar Salad",
        "category": "Salads",
        "description": "This is a caesar salad",
        "price": 5.95
    },
    {
        "name": "Greek Salad",
        "category": "Salads",
        "description": "This is a greek salad",
        "price": 5.95
    },
    {
        "name": "Dumplings",
        "category": "Sides",
        "description": "These are dumplings",
        "price": 5.95
    },
    {
        "name": "Fries",
        "category": "Sides",
        "description": "These are fries",
        "price": 5.95
    },
    {
        "name": "Coke",
        "category": "Drinks",
        "description": "This is a coke",
        "price": 5.95
    },
    {
        "name": "Ramune",
        "category": "Drinks",
        "description": "This is a pop",
        "price": 5.95
    },
    {
        "name": "Mochi",
        "category": "Dessert",
        "description": "This is mochi",
        "price": 5.95
    },
    {
        "name": "Puppy Chow",
        "category": "Dessert",
        "description": "This is puppy chow",
        "price": 5.95,
        'pictureLink': './images/'
    },
]

/**
 * Filter array items based on search criteria (query)
 */
 function filterItems(arr, query) {
    return arr.filter(function(el) {
      return el.category === query
    })
  }

function BuildTemplate(food) {
    food.map(eachItem => {
        let template = ` 
            <img src='${eachItem.pictureLink}'
            <h2>${eachItem.name}</h2>
            <p>${eachItem.category}</p>
            <p>${eachItem.description}</p>
            <p>${eachItem.price}</p>
        `
        console.log(template)
        return template;
    }); 
}
let filteredEntrees = filterItems(products, "Entree");
let filteredSalads = filterItems(products, "Salads");
let filteredSides = filterItems(products, "Sides");
let filteredDrinks = filterItems(products, "Drinks");
let filteredDesserts = filterItems(products, "Dessert");

BuildTemplate(filteredEntrees)
BuildTemplate(filteredSalads)
BuildTemplate(filteredSides)
BuildTemplate(filteredDrinks)
BuildTemplate(filteredDesserts)

  //let entreeContainer = document.querySelector('.foodchoices');
  //entreeContainer.insertAdjacentHTML('beforeend', BuildTemplate(filteredEntrees))

