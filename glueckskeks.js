var terms, section;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function unfade(element) {
//     var op = 0.1;  // initial opacity
//     element.style.display = 'block';
//     var timer = setInterval(function () {
//         if (op >= 1){
//             clearInterval(timer);
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 25);
// }

function init() {
	section = document.querySelector("#buzzword");
	var oReq = new XMLHttpRequest();
	oReq.open("get", "https://raw.githubusercontent.com/wordbearer/uxbuzz/master/terms.json", true); 
	oReq.responseType = 'json';
	oReq.send();

	oReq.onload = function() {
  		terms=oReq.response;
  		getTerm();
  		section.classList.add('show');
  	}
}

function getTerm(e) {

	var type, category, buzzwordDE, buzzwordEN, abbreviation, relatesTo, description, example, number;

	number = parseInt(getRandomInt(0,terms.buzzwords.length-1));
	// console.log(number);

	buzzwordEN = document.getElementById("term_buzzwordEN");
	description = document.getElementById("term_description");
	example = document.getElementById("term_example");
	type = document.getElementById("term_type");
	category = document.getElementById("term_category");
	buzzwordDE = document.getElementById("term_buzzwordDE");
	abbreviation = document.getElementById("term_abbreviation");

	if (terms.buzzwords[number].buzzwordDE){
		buzzwordDE.innerHTML = "/ "+terms.buzzwords[number].buzzwordDE;
	}
	else{
		buzzwordDE.innerHTML = "";
	}

	if (terms.buzzwords[number].abbreviation){
		abbreviation.innerHTML = "("+terms.buzzwords[number].abbreviation+")";
	}
	else{
		abbreviation.innerHTML = "";
	}

	buzzwordEN.innerHTML = terms.buzzwords[number].buzzwordEN;
	description.innerHTML = terms.buzzwords[number].description;
	example.innerHTML = terms.buzzwords[number].example;
	type.innerHTML = terms.buzzwords[number].type;
	category.innerHTML = terms.buzzwords[number].category;

	// unfade(section);

}

var newCookie  = document.getElementsByClassName('newcookie');

var i;
for (i = 0; i < newCookie.length; i++) {
    newCookie[i].addEventListener ('click', getTerm, true);
    newCookie[i].style.cursor="pointer";	
}

window.addEventListener('load', init);
