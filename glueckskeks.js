function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTerm() {

	// var fr;
	// fr = new FileReader();
 //    //fr.onload = receivedText;
 //    fr.readAsText("terms.json");

	// var terms = JSON.parse(fr);

	var treeData;

	var oReq = new XMLHttpRequest();
	//oReq.onload = reqListener;
	oReq.open("get", "http://from-my-experience.com/blogs/media/terms.json", true); 
	//oReq.open("get", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", true);
	oReq.responseType = 'json';
	oReq.send();

	oReq.onload = function() {
  		treeData=oReq.response;
  		console.log(treeData);
  		console.log(treeData['squadName']);
  		//treeData = JSON.parse(oReq.response);

	}

	// function reqListener(e) {
	//     treeData = JSON.parse(this.responseText);
	// }



	var number;
	number = document.getElementById("term_type");
	number.innerHTML = getRandomInt(1,3);
	//number.innerHTML = terms;
}

var newCookie  = document.getElementById('newcookie');
newCookie.addEventListener ('click', getTerm, true);	