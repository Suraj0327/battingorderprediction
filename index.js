
// Get DOM elements
const form = document.querySelector('#player-form');
const playerInput = document.querySelector('#player-input');
const generateButton = document.querySelector('#generate-button');
const battingOrderDisplay = document.querySelector('#batting-order-display');
const playerList = document.querySelector('#player-list');

// Array to store player names
let players = [];

// Add event listener to form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const playerName = playerInput.value.trim();

  // Add the player name to the array if it's not empty
  if (playerName !== '') {
    players.push(playerName);
    playerInput.value = ''; // Clear the input field
    displayPlayerList(); // Update the displayed player list
  }
});

// Function to display the player list on the screen
function displayPlayerList() {
  playerList.innerHTML = ''; // Clear the existing list

  // Create list items and append them to the list
  players.forEach((player) => {
    const li = document.createElement('li');
    li.textContent = player;
    playerList.appendChild(li);
  });
}

// Generate the batting order and update the DOM
generateButton.addEventListener('click', function () {
  if (players.length < 6) {
    alert('Please enter at least 6 players.');
    return;
  }

  // Randomize the batting order
  const battingOrder = shuffleArray(players);

  // Display the batting order on the page
  battingOrderDisplay.textContent = `Batting Order: ${battingOrder.join(' - ')}`;
});

// Function to shuffle the array randomly
function shuffleArray(array) {
  const newArray = array.slice(); // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
