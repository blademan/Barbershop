
        var link = document.querySelector(".login-link");
        var popup = document.querySelector(".overlay");
 

        var close = document.querySelector(".modal-close"); 
        var login = popup.querySelector("[name=login]");
        var form = popup.querySelector("form");
        var password = popup.querySelector("[name=password]");
    

        link.addEventListener("click", function(evt) {
            evt.preventDefault();

            popup.classList.add("modal-show");
            login.focus();
        });

        close.addEventListener("click", function(evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        });
        
        
        
    var map = document.querySelector(".map-popup");
       var popupMap = document.querySelector(".overlay-map");
var mapClose = document.querySelector(".map-close");
        
        map.addEventListener("click", function(evt) {
            evt.preventDefault();

            popupMap.classList.add("modal-show");
        });
         mapClose.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupMap.classList.remove("modal-show");
           
        });  
        
        
    var map = document.querySelector(".contact-map");
       var popupMap = document.querySelector(".overlay-map");
var mapClose = document.querySelector(".map-close");
        
        map.addEventListener("click", function(evt) {
            evt.preventDefault();

            popupMap.classList.add("modal-show");
        });
         mapClose.addEventListener("click", function(evt) {
            evt.preventDefault();
            popupMap.classList.remove("modal-show");
           
        });




window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        
        if ( popup.classList.contains("modal-show")) {
            
            popup.classList.remove("modal-show");
        }
    }
});