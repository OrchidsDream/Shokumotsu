


// menubuttons.addEventListener("click", function(e) {
//     e.preventDefault();
//     document.querySelector(".foodchoices").classList.toggle("foodchoicesshow");

// })


let menubuttons = document.querySelector("form");

menubuttons.forEach(addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".foodchoices").classList.toggle("foodchoicesshow");
    

}));

