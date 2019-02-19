tweetButton.addEventListener("click", tweetPrint);

let textInput = document.getElementById("textInput");
let tweetOutput = document.getElementById("tweetOutput");

function tweetPrint (){
	let newPrint = document.createElement("p");
	newPrint.textContent = textInput.value;
	tweetOutput.appendChild(newPrint);
	textInput.value = ''
}
