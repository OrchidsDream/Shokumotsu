let menubuttons = document.querySelector("form");


    menubuttons.addEventListener("click",function(e){
        e.preventDefault();
        e.target.querySelector(".foodchoices").classList.toggle("foodchoicesshow");
    })