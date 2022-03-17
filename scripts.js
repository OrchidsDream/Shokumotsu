document.querySelector(".menubuttons").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".foodchoices").classList.toggle("foodchoicesshow");
    document.querySelector(".foodchoices").classList.toggle("foodchoicesclose");
})

