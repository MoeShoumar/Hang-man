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
let random = words_array.word[randomIndex]
console.log(random);
let dashes = ''
let livesLeft = 5
for (let char of random) {
    dashes += "_ "
}
// setting up variables
let num = /[0-9]/
word_div.innerHTML = dashes
let updated_dash = ''
let gameStarted = false
let letter_guess = [];
let right_guess = 0

// submit event
submit.addEventListener('click', () => {
    gameStarted = true
    if (input.value.length > 1 || input.value == 0 || input.value == '') {
        alert('please enter 1 letter')
    }
    else if (letter_guess.includes(input.value)) {
        alert('You gueesed that letter already')
    }
    else if (random.includes(input.value)) {
        letter_guess.push(input.value)
        updated_dash = ''
        for (let char of random) {
            if (letter_guess.includes(char)) {
                updated_dash += `${char}`
                console.log(right_guess);
                console.log(random.length);

            }
            else {
                updated_dash += "_ ";
            }
            // ChatGPT, I did not know how to think about updating the dashes according to the index of the letter in the random word.
        }
        right_guess++
        word_div.innerHTML = updated_dash

    }
    if (right_guess == random.length) {
        notifContent.textContent = 'You won!';
        notifSpan.textContent = random;
        notif.classList.remove('hidden');
        notif.style.backgroundColor = "green";
    }


    if (!random.includes(input.value)) {
        letter_guess.push(input.value)
        livesLeft--
        lives.textContent = livesLeft;
        if (livesLeft === 0) {
            notifContent.textContent = 'You lost!';
            notifSpan.textContent = random;
            notif.classList.remove('hidden');

        }
    }

    input.value = ''

});
// Reset event
reset.addEventListener('click', () => {
    lives.textContent = livesLeft
    livesLeft = 5
    notif.classList.add('hidden')
    gameStarted = false
    letter_guess = []
    updated_dash = ''
    word_div.innerHTML = dashes
    randomIndex = Math.floor(Math.random() * words_array.word.length);
    random = words_array.word[randomIndex];
    console.log(random);
    dashes = '';
    for (let char of random) {
        dashes += " _ ";
    }
    word_div.innerHTML = dashes;
    right_guess = 0;

})
// Play again event
notifBtn.addEventListener('click', () => {
    lives.textContent = livesLeft
    livesLeft = 5
    notif.classList.add('hidden')
    gameStarted = false
    letter_guess = []
    updated_dash = ''
    word_div.innerHTML = dashes
    randomIndex = Math.floor(Math.random() * words_array.word.length);
    random = words_array.word[randomIndex];
    console.log(random);
    dashes = '';
    for (let char of random) {
        dashes += " _ ";
    }
    word_div.innerHTML = dashes;
    right_guess = 0;

})

