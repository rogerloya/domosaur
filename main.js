
// // Part 1.
// Step 1
// document.getElementsByClassName("mess-with-me").style.fontSize = "40px";

// Step 2.
// document.getElementsByClassName("#mess-with-me").style.backgroundColor = "green";


// Step 3.
const img2 = document.querySelector('#hide-me')

img2.style.display = 'none'

// Step 4.

document.querySelector("#triceratops").style.width = "324px";

// Part 2.
// Step 1
const mwm = document.querySelector('#mess-with-me')

mwm.addEventListener('click', function (){
    mwm.style.color = 'green';
})

// Step 2

const dino1 = document.querySelector('#triceratops')

dino1.addEventListener('click', function (){
    dino1.style.borderColor = 'red';
})

// Step 3
const feathDino = document.querySelector('#feathers')

feathDino.addEventListener('click', function (){
    feathDino.style.MozOpacity=opacity/50;
})

// Step 4
const rowC = document.querySelector('#row')

rowC.addEventListener('click', function (){
    rowC.style.backgroundColor = 'blue';
})

// Step 5
const bigDino = document.querySelector("#biggify");

bigDino.addEventListener("mouseover", function (){
  bigDino.style.width = '200px'
});
