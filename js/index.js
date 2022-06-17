/* INDEX orange navbar-hr TOGGLER */
/* ORIGINAL SCRIPT MADE BY THE SMART ME ;) */
/* I KNOW IT DISPLAYS EVEN WHEN YOU HOVER OVER THE FOOTER LINKS BUT .. WHAT THE HELL */

var navLink = document.querySelectorAll('.nav-link');

for (var i = 0; i < navLink.length; i++) {
		navLink[i].addEventListener("mouseover", function(){
		var hR = document.querySelector('.navbar-hr');
		hR.style.opacity = ('1')
	})
}

for (var i = 0; i < navLink.length; i++) {
		navLink[i].addEventListener("mouseout", function(){
		var hR = document.querySelector('.navbar-hr');
		hR.style.opacity = ('0')
	})
}

// NAVBAR TOGGLER taken from W3S
function navToggleFunction(x) {
  x.classList.toggle("change");
}


