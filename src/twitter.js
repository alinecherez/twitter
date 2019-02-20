let textInput = document.getElementById("textInput");
let tweetButton = document.getElementById("tweetButton");
let counter = document.getElementById("countDown");
let tweetOutput = document.getElementById("tweetOutput");
const tweetLenght = 140;

tweetButton.addEventListener('click', tweetPrint);
textInput.addEventListener('keyup', checkButton);
textInput.addEventListener('keyup', pressEnterRow); 

function tweetPrint() {
	let newPrint = document.createElement('p');
	newPrint.innerHTML = textInput.value.replace(/\r?\n/g, '<br />');
	tweetOutput.appendChild(newPrint);
	//limpeza
	textInput.value = '';
	counter.innerHTML = tweetLenght;
	checkButton();
}

function countDown() {
	let count = tweetLenght - textInput.value.length;
	if (count <= 20 && count > 10) {
		counter.style.color = 'orange';
	} else {
		if (count <= 10) {
			counter.style.color = 'red';
		} else {
			counter.style.color = 'black';
		}
	}
	counter.innerHTML = count;
}

function checkButton() {
	if (textInput.value.length <= tweetLenght && textInput.value.length > 0) {
		tweetButton.removeAttribute('disabled');
	} else {
		tweetButton.setAttribute('disabled', true);
	}
}

function pressEnterRow (event){
  if (event.keyCode === 13) {
    textInput.setAttribute('rows', parseInt(textInput.getAttribute('rows')) +1);
  }
}