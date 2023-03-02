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
const words_array = { word: ['horse', 'black', 'king', 'emir', 'eat'] }
let randomIndex = Math.floor(Math.random() * words_array.word.length);
const random = words_array.word[randomIndex]
console.log(random);
let dashes = ''
let livesLeft = 5
for (let letter of random) {
    dashes += " _ "
}
let num = /[0-9]/
word_div.innerHTML = dashes
let updated_dash = ''
submit.addEventListener('click', () => {

    let right_guess = random.length
    if (input.value.length > 1 || input.value == 0 || input.value == '') {
        alert('please enter 1 letter')
    }
    else if (random.includes(input.value)) {
        for (let letter of random) {
            if (letter == input.value) {
                updated_dash += `${input.value}`
                right_guess++
            } else {
                updated_dash += `${dashes[letter]}`
            }

            word_div.innerHTML = updated_dash.trim()
        }
    }
    else if (!random.includes(input.value)) {
        livesLeft--
        lives.textContent = livesLeft;
        if (livesLeft === 0) {
            notifContent.textContent = 'You lost!';
            notifSpan.textContent = random;
            notif.classList.remove('hidden');

        }
    }
    else if (right_guess.length == random.length) {
        notifContent.textContent = 'You won!';
        notifSpan.textContent = randomWord;
        notif.classList.remove('hidden');
        notif.style.backgroundColor = "green";
    }

}
)

