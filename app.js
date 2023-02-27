// selecting elements
const input = document.getElementById('input')
const word_div = document.querySelector('.word_div ')
const lives = document.getElementById('lives')
const reset = document.getElementById('reset')
let word = ['apple', 'eat', 'horse', 'banana']
let random = word[Math.floor(Math.random() * word.length)]
console.log(random);
for (let i = 0; i < random.length; i++) {
    word_div.innerHTML += '_     '
}
let lives_left = 3

lives.innerHTML = lives_left

