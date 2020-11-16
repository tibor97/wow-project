var hamburgerMenu = document.querySelector('.c-hamburger-menu');
var nav = document.querySelector('nav');
var navbarList = document.querySelector('.c-navbar-list');
var navbarListItems = document.querySelectorAll('.c-navbar-link');

hamburgerMenu.onclick = function() {
    nav.classList.toggle('active');
    nav.classList.add('activated');
    hamburgerMenu.classList.toggle('c-hamburger-menu--toggle');
}

nav.ontransitionend = function() {
    nav.classList.remove('activated');
}

navbarListItems.forEach(function(navItems) {
	navItems.onclick = function(){
		if(event.target.matches('.c-navbar-link')){
			nav.classList.remove('active');
    		hamburgerMenu.classList.toggle('c-hamburger-menu--toggle');
		}
	}
});


document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".c-loader").style.visibility = "visible"; 
    } else { 
    	setTimeout(function() {
 			document.querySelector(".c-loader").style.display = "none"; 
        	document.querySelector("body").style.visibility = "visible"; 
    	}, 10000);
    }
};