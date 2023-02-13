const input = document.querySelector("#input");
const button = document.querySelector("button");

const output = document.querySelector(".output");
const explanation = document.querySelector(".explanation");

let morseAlphabet = [
	{ letter: "1", morseCode: ".----" },
	{ letter: "2", morseCode: "..---" },
	{ letter: "3", morseCode: "...--" },
	{ letter: "4", morseCode: "....-" },
	{ letter: "5", morseCode: "....." },
	{ letter: "6", morseCode: "-...." },
	{ letter: "7", morseCode: "--..." },
	{ letter: "8", morseCode: "---.." },
	{ letter: "9", morseCode: "----." },
	{ letter: "0", morseCode: "-----" },
	{ letter: " ", morseCode: "    " },
	{ letter: "A", morseCode: ".-" },
	{ letter: "B", morseCode: "-..." },
	{ letter: "C", morseCode: "-.-." },
	{ letter: "D", morseCode: "-.." },
	{ letter: "E", morseCode: "." },
	{ letter: "F", morseCode: "..-." },
	{ letter: "G", morseCode: "--." },
	{ letter: "H", morseCode: "...." },
	{ letter: "I", morseCode: ".." },
	{ letter: "J", morseCode: ".---" },
	{ letter: "K", morseCode: "-.-" },
	{ letter: "L", morseCode: ".-.." },
	{ letter: "M", morseCode: "--" },
	{ letter: "N", morseCode: "-." },
	{ letter: "O", morseCode: "---" },
	{ letter: "P", morseCode: ".--." },
	{ letter: "Q", morseCode: "--.-" },
	{ letter: "R", morseCode: ".-." },
	{ letter: "S", morseCode: "..." },
	{ letter: "T", morseCode: "-" },
	{ letter: "U", morseCode: "..-" },
	{ letter: "V", morseCode: "...-" },
	{ letter: "W", morseCode: ".--" },
	{ letter: "X", morseCode: "-..-" },
	{ letter: "Y", morseCode: "-.--" },
	{ letter: "Z", morseCode: "--.." },
];

function encrypt() {
	explanation.innerHTML = " ";

	let phrase = input.value.toUpperCase().split("");

	let encrypted = [];
	for (let i = 0; i < phrase.length; i++) {
		for (let j = 0; j < morseAlphabet.length; j++) {
			if (phrase[i] === morseAlphabet[j].letter) {
				let p = document.createElement("p");
				p.appendChild(
					document.createTextNode(
						`${phrase[i]} = ${morseAlphabet[j].morseCode}`
					)
				);
				explanation.appendChild(p);
				encrypted.push(morseAlphabet[j].morseCode);
				break;
			}
		}
	}
	input.value = " ";
	output.innerHTML = encrypted.join(" ");
}

button.addEventListener("click", encrypt);
