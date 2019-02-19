tweetButton.addEventListener("click", tweetPrint);

let textInput = document.getElementById("textInput");
let tweetOutput = document.getElementById("tweetOutput");

function tweetPrint (){
	let newPrint = document.createElement('p');
	newPrint.innerHTML = textInput.value;
	tweetOutput.appendChild(newPrint);
	textInput.value = '';
}

function countDown (){
	const tweetLenght = 140;
	let count = tweetLenght - textInput.value.length;
	document.getElementById('countDown').innerHTML = count;
}

// document.getElementById("tweetButton").disabled = true;

// function countChar(valor) {
//  let tweetLenght = 140;
//  let total = valor.length;
//  if(total < tweetLenght && total >= 0) {
//    document.getElementById("tweetButton").disabled = false;
//      let resto = tweetLenght - total;
//      document.getElementById('countdown').innerHTML = resto;
//  } else {
//      document.getElementById('textInput').value = valor.substr(0, tweetLenght);
//      document.getElementById("tweetButton").disabled = true;
//  }
// }