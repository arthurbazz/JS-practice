// alert('Connected');

// function calculate
const calc = () => {
    let miles = parseFloat(document.querySelector('#miles').value); // get miles input value
    let gallons =parseFloat(document.querySelector('#gallons').value); //get gallons input value 

    // validate input
    if(isNaN(miles) || isNaN(gallons)) {
        // error message
        document.querySelector('h3').textContent = `Error missing or invalid data!`;
        document.querySelector('h3').style.color = 'red';
    } else {
        let mpg = miles / gallons; //calculates mpg
        console.log(mpg);

        // add content to display input
        document.querySelector('#input-display').value = mpg.toFixed(1); //tofixed 1 displays 1 decimal place
        document.querySelector('#span-display').textContent = `MPG IS: ${mpg.toFixed(1)} `;
    }  
}

// document.getElementById('btn').onclick = calc; // //this works also
document.getElementById('btn').addEventListener('click', calc);
