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
const dotsContainer = document.querySelector(".dots")


let slideIndex = 0;
let slideCount = slides.length;


function slideInfo () {
	const slideImg = document.querySelector(".banner-img");
	const slideTxt = document.querySelector("#banner p");

	slideImg.src = slides[slideIndex].image
 	slideTxt.innerHTML = slides[slideIndex].tagLine

	 for (let i = 0; i < slideCount; i++) {
		 const dot = document.createElement("span");
		 dot.classList.add("dot");
		 dotsContainer.appendChild(dot);	
	 
			 
		 if (i == slideIndex) {
			 dot.classList.add("dot_selected");
		 }
	 }
}


leftArrow.addEventListener("click", (event) => {
	--slideIndex;

	if (slideIndex < 0) {
		slideIndex = slideCount -1;
	}

	slideInfo();

	console.log('clic gauche test')
	console.log("slideIndex " + slideIndex)
	console.log("slideCount " + slideCount)
})


rightArrow.addEventListener("click", (event) => {
	++slideIndex;

	if (slideIndex > slideCount -1) {
		slideIndex = 0;
	}

	slideInfo();

	console.log('clic droit test')
	console.log("slideIndex " + slideIndex)
	console.log("slideCount " + slideCount)
})



// AJOUT DES DOTS
















//////////
// // const tableau = ["A", "B", "C", "D", "E"];
// const index = 2; // Numéro d'index de la cellule que vous souhaitez afficher

// // Vérifier si l'index est valide
// if (index >= 0 && index < slides.length) {
//   const valeur = slides[index];
//   console.log(valeur); // Affiche la valeur de la cellule correspondant à l'index donné
// } else {
//   console.log("Index invalide");
// }