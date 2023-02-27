// selecting elements
const input = document.getElementById('input')
const word_div = document.querySelector('.word_div ')
const lives = document.getElementById('lives')
const reset = document.getElementById('reset')
let random = ['apple', 'eat', 'horse', 'banana']
const word = (list) => list[Math.floor(Math.random() * list.length)]
console.log(word(random));