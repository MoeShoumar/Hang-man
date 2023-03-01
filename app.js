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
const words_array = ['horse', 'black', 'king', 'emir', 'eat']
let random = words_array[Math.floor(Math.random() * words_array.length)];
console.log(random);
let dashes = ''

for (let letter of random) {
    dashes += " _ "
}
let num = /[0-9]/
word_div.innerHTML = dashes
let updated_dash = ''
submit.addEventListener('click', () => {
    if (input.value.length > 1 || input.value == 0 || input.value == '') {
        alert('please enter 1 letter')
    }
    else if (random.includes(input.value)) {
        for (let letter of random) {
            if (letter == input.value) {
                updated_dash += `${input.value}`
            } else {
                updated_dash += `${dashes[letter]}`
            }

            word_div.innerHTML = updated_dash.trim()
        }

    }
})

