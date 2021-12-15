const slides = document.querySelectorAll(".slides");
let i = 0;
addEventListener("click", () => {
	i++;
	if (i == 1) {
		// Start, open book
		// Book opening animation
		book.style["-webkit-animation"] = "bookOpen 5s forwards";
		book.style.animation = "bookOpen 5s forwards";
		// Open book
		front.style["-webkit-transform"] = "translateZ(.65cm) rotateY(-105deg)";
		front.style.transform = "translateZ(.65cm) rotateY(-105deg)";
		// Show title slide
		setTimeout(() => {slides[0].style.opacity = 1}, 4000)
	} else if (i <= 5) {
		// Toggle slides
		// Mask the previous previous slide if it exists
		if (slides[i - 3]) slides[i - 3].style.opacity = 0;
		// Set shadow on the previous slide
		slides[i - 2].style["-webkit-filter"] = "brightness(70%)";
		slides[i - 2].style.filter = "brightness(70%)";
		// Show current slide
		slides[i - 1].style.left = 0;
		slides[i - 1].style.boxShadow = "0 10px 10px rgba(0, 0, 0, .5)" // Shadow effect on page side
	} else if (i == 6) {
		// End, close book
		// Hide all slides except the first one for the last book animation
		slides.forEach(slide => {slide.style.opacity = 0});
		// Close book
		front.style["-webkit-transform"] = "translateZ(.65cm)";
		front.style.transform = "translateZ(.65cm)";
		// Reset book scale
		book.style["-webkit-animation"] = "bookClose 1s forwards";
		book.style.animation = "bookClose 1s forwards";
		// Hide book after 3 seconds
		overlay.style.opacity = 0; // Set an opacity value for the keyframes
		overlay.style["-webkit-animation"] = "fadeIn 1s 3s forwards";
		overlay.style.animation = "fadeIn 1s 3s forwards";
	}
})