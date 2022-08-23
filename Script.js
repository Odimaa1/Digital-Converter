const miles = document.getElementById('miles');
const kilometre = document.getElementById('kilometre');
const yards = document.getElementById('yards');
const inches = document.getElementById('inches');
const instructions = document.getElementById('instructions');
const form = document.getElementById('form');
const number = document.getElementById('number').value;
const convert = document.getElementById('convert');
const output = document.getElementById('output');

let convertType;

miles.addEventListener('click', function(){
    convertType = "miles";
    instructions.innerHTML = 'Type in a number of miles';
})
kilometre.addEventListener('click', function(){
    convertType = "kilometre"
    instructions.innerHTML = 'Type in a number of kilometre';
})
yards.onclick = function() {
    convertType = "yards"
    instructions.innerHTML = 'Type in a number of yards'
}
inches.onclick = function() {
    convertType = "inches"
    instructions.innerHTML = 'Type in a number of inches'
}

// FORM SUBMIT
form.onsubmit = function(event){
    event.preventDefault();

    const number = document.getElementById('number').value
    if (number) {
        if (convertType == "miles") {
            var result = (number * 1.60934).toFixed(2);
            // output.innerHTML = number + " " + "miles" + "=" + result + "kilometres"
            output.innerHTML = `${number} miles = ${result} kilometres`;
        } else if (convertType == "kilometre") {
            var result = number * 0.62;
            output.innerHTML = `${number} kilometres = ${result} miles`;
        }
        else if (convertType == "yards") {
            var result = number * 36;
            output.innerHTML = `${number} yards = ${result} inches`;
        }
        else if (convertType == 'inches') {
            let result = number * 0.3;
            output.innerHTML = `${number} inches = ${result} yards`;
        }
    } else {
        output.innerHTML = 'Please enter a value!'
    }
}
