function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTerm() {

	var terms;

	var oReq = new XMLHttpRequest();
	oReq.open("get", "https://raw.githubusercontent.com/wordbearer/uxbuzz/master/terms.json", true); 
	oReq.responseType = 'json';
	oReq.send();

	oReq.onload = function() {
  		terms=oReq.response;
  		console.log(terms);
  		console.log(terms['buzzwords']);
	}


	var number;
	number = document.getElementById("term_type");
	number.innerHTML = getRandomInt(1,3);
}

var newCookie  = document.getElementById('newcookie');
newCookie.addEventListener ('click', getTerm, true);	