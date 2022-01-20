// Variable block - Start.
let Boom = 1;
let milliseconds = 420; // 400 milliseconds.
let interval = setInterval(startTimer, milliseconds); // Timer 400 milliseconds.
let timer = document.getElementById('timer'); // Timer.
let time = 100; // Time.
let baloonBoomSound = new Audio(); // baloon Boom Sound.
baloonBoomSound.src = "assets/sounds/a.mp3";
let gameMusic = new Audio(); // Game music.
gameMusic.src = "assets/sounds/b.mp3";
// Variable block - End.

// Balloon buttons - Start.
document.addEventListener('click', function (e) {   
    if (e.target.className === "balloon") { // Balloon buttons.
        e.target.style.backgroundColor = "#db745a00"; // Balloon buttons background.
        e.target.style.fontSize = "17px"; // Balloon buttons font Size.
        e.target.innerHTML = "Boom" + "<br>" + "110 /" + Boom; // Balloon buttons text.
        e.target.classList.add("style1"); // Balloon buttons style.
        baloonBoomSound.play(); // Balloon buttons sound.
        Boom++; // Boom Balloon buttons.
        removeEvent(e); // function - remove addEventListener.
        youWon(); // Function - you won.
    }
});
// Balloon buttons - End.

// Function block - Start.
// Function - Start timer - Start. 
function startTimer() { // game start.
    time--; // minus time.
    if (time == 0) {  // if time = 0 - game over.
        clearInterval(interval);
        alert('Game over!');
        location.reload();
    }
    gameMusic.play(); // game music.
    timer.textContent = `Timer: ${time} || Points: 110 / ${Boom}`; 
}
// Function - Start timer - End. 

// Function - remove button's event - Start. 
function removeEvent(e) {  // function - remove addEventListener.
    e.target.removeEventListener('click', function () {
    })
};
// Function - remove button's event - End. 

// Function - when player won - Start. 
function youWon() {
    if (Boom === 110) { // if your Boom = 110 - you won.
        let balloonList = document.querySelector('#balloonList'); 
        let textForwinner = document.querySelector('#text-for-winner');
        balloonList.innerHTML = '';
        textForwinner.style.display = 'block';
        clearInterval(interval);
        alert('You won!');
    }
};
// Function - when player won - End. 

// Function - reset button - Start. 
function reset() {
    location.reload();
}
// Function - reset button - End. 

// Function - pause button - Start. 
function pause() {
    alert('Game Paused!');
}
// Function - pause button - End. 