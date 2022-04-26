// import functions and grab DOM elements
const button1 = document.getElementById('shell-1-button');
console.log(button1);
const button2 = document.getElementById('shell-2-button');
console.log(button2);
const button3 = document.getElementById('shell-3-button');
console.log(button3);

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let losses = 0;

// set event listeners 
button1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    // get user input
    console.log('clicking button 1');
    // decide which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
    console.log('the random shell is', randomShell);
    // if randomShell = 1 - increment the wins
    // else increment the losses
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        wins++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }

    
    // update the win / loss / total spans
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});

button2.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    console.log('clicking button 2');
    // decide which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
    console.log('the random shell is', randomShell);
    // if randomShell = 1 - increment the wins
    // else increment the losses
    if (randomShell === 2) {
        shell2.classList.add('reveal');
        wins++;
    } else if (randomShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }

    
    // update the win / loss / total spans
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});


button3.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    console.log('clicking button 2');
    // decide which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
    console.log('the random shell is', randomShell);
    // if randomShell = 1 - increment the wins
    // else increment the losses
    if (randomShell === 3) {
        shell3.classList.add('reveal');
        wins++;
    } else if (randomShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else {
        shell2.classList.add('reveal');
        losses++;
    }

    
    // update the win / loss / total spans
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});