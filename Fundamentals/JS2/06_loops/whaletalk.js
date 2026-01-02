const input = require('readline-sync');

console.log("========== WHALE TRANSLATOR ==========");
let textToTranslate = input.question("What would you like to translate to whale?\nInput: ");

const whaleVowels = ['a', 'e', 'i', 'o', 'u'];

let resultsArray = [];

for (let i = 0; i < textToTranslate.length; i++) {
	if(textToTranslate[i] === 'e' || textToTranslate[i] === 'u') {
		resultsArray.push(textToTranslate[i]);
	}

	for(let j = 0; j < whaleVowels.length; j++) {
		if(textToTranslate[i] === whaleVowels[j]) {
			resultsArray.push(textToTranslate[i]);
		}
	}	
}

// console.log(resultsArray);

let resultString = resultsArray.join("").toUpperCase();
console.log("Your whale message: " + resultString);

