const input = document.getElementById('input');
const word_div = document.getElementById('word_div');
const lives = document.getElementById('lives');
const reset = document.getElementById('reset');
const submit = document.getElementById('input_btn');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const notifBtn = document.querySelector('.notif-btn');

// generate random word and show dashes=letters in the word
let wordList = ['apple', 'eat', 'horse', 'banana'];
let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
let displayedWord = '';
for (let i = 0; i < randomWord.length; i++) {
    displayedWord += '_ ';
}
word_div.innerHTML = displayedWord;

// check input and word
let livesLeft = 5;
let correctGuesses = [];

submit.addEventListener('click', function () {
    let inputLetter = input.value;
    input.value = '';
    if (inputLetter.length !== 1) {
        alert('Please enter only 1 letter');
        return;
    }
    if (randomWord.includes(inputLetter)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === inputLetter) {
                displayedWord = displayedWord.slice(0, 2 * i) + inputLetter + displayedWord.slice(2 * i + 1);
                word_div.innerHTML = displayedWord;
            }
        }
        correctGuesses.push(inputLetter);
        if (displayedWord.indexOf('_') === -1) {
            notifContent.textContent = 'You won!';
            notifSpan.textContent = randomWord;
            notif.classList.remove('hidden');
            notif.style.backgroundColor = "green";
        }
    } else {
        livesLeft--;
        lives.textContent = livesLeft;
        if (livesLeft === 0) {
            notifContent.textContent = 'You lost!';
            notifSpan.textContent = randomWord.toUpperCase();
            notif.classList.remove('hidden');
        }
    }
});
// reset btn
reset.addEventListener('click', function () {
    window.location.reload();
});
// play again btn
notifBtn.addEventListener('click', function () {
    notif.classList.add('hidden');
    window.location.reload();
});




