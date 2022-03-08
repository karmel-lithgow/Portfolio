/* Get access to the button */
const button = document.getElementById("btn");
const body = document.body;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'grey']

/* write code of what to do when the button is clicked */

button.addEventListener('click',changeBackground)


function changeBackground(){
    const colorsIndex= Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorsIndex]
}




