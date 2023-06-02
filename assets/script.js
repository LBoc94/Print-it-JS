const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")
const dotsContainer = document.querySelector(".dots");
let slideIndex = 0;
let slideCount = slides.length;


// CRÉATION DES DOTS EN FONCTION DU NOMBRE DE SLIDES
for (let i = 0; i < slideCount; i++) {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
}


// DOT ACTIVE
let dotArray = document.querySelectorAll(".dot");
let activeDot = 0
dotArray[activeDot].classList.add("dot_selected");

function activeDotChange() {
	dotArray.forEach(dotArray => dotArray.classList.remove("dot_selected"));
	dotArray[slideIndex].classList.add("dot_selected");
}


// IMAGES ET TEXTES
function slideInfo () {
	const slideImg = document.querySelector(".banner-img");
	const slideTxt = document.querySelector("#banner p");
	slideImg.src = slides[slideIndex].image
 	slideTxt.innerHTML = slides[slideIndex].tagLine
}


// SLIDE CLIC GAUCHE
leftArrow.addEventListener("click", (event) => {
	--slideIndex;
	if (slideIndex < 0) {
		slideIndex = slideCount -1;
	}

	slideInfo();
	activeDotChange();
})


// SLIDE CLIC DROIT
rightArrow.addEventListener("click", (event) => {
	++slideIndex;
	if (slideIndex > slideCount -1) {
		slideIndex = 0;
	}

	slideInfo();
	activeDotChange();
})
