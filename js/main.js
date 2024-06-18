let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
   
    }
}


let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelectorAll(".navbar-collapse.collapse");

navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.forEach(function(collapse) {
            collapse.classList.remove("show");
        });
    });
});


/*let navBar  = document.querySelectorAll(".nav-link");
let navCollapse  = document.querySelectorAll(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListner("click",function(){
        navCollapse.classList.remove("show");
    })
    
});*/