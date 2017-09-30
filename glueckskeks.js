function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTerm() {

	var terms, type, category, buzzwordDE, buzzwordEN, abbreviation, relatesTo, description, example, number;

	number = parseInt(getRandomInt(0,3));
	console.log(number);
	// number = 0;

	var oReq = new XMLHttpRequest();
	oReq.open("get", "https://raw.githubusercontent.com/wordbearer/uxbuzz/master/terms.json", true); 
	oReq.responseType = 'json';
	oReq.send();

	oReq.onload = function() {

  		terms=oReq.response;

  		buzzwordEN = document.getElementById("term_buzzwordEN");
		buzzwordEN.innerHTML = terms.buzzwords[number].buzzwordEN;

		if (terms.buzzwords[number].buzzwordDE){
			buzzwordDE = document.getElementById("term_buzzwordDE");
			buzzwordDE.innerHTML = "/ "+terms.buzzwords[number].buzzwordDE+")";
		}
		else{
			buzzwordDE = document.getElementById("term_buzzwordDE");
			buzzwordDE.innerHTML = "";
		}

		if (terms.buzzwords[number].abbreviation){
			abbreviation = document.getElementById("term_abbreviation");
			abbreviation.innerHTML = "("+terms.buzzwords[number].abbreviation+")";
		}
		else{
			abbreviation = document.getElementById("term_abbreviation");
			abbreviation.innerHTML = "";
		}

  		description = document.getElementById("term_description");
		description.innerHTML = terms.buzzwords[number].description;

  		example = document.getElementById("term_example");
		example.innerHTML = terms.buzzwords[number].example;

  		type = document.getElementById("term_type");
		type.innerHTML = terms.buzzwords[number].type;

		category = document.getElementById("term_category");
		category.innerHTML = terms.buzzwords[number].category;

	}

}

var newCookie  = document.getElementsByClassName('newcookie');

var i;
for (i = 0; i < newCookie.length; i++) {
    newCookie[i].addEventListener ('click', getTerm, true);	
}

// newCookie.addEventListener ('click', getTerm, true);	