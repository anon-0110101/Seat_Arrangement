let strings = [];
let shuffleInterval;
let shuffleCount = 0;

document.getElementById('addString').addEventListener('click', function() {
    let inputString = document.getElementById('inputString').value;
    if(inputString) {
        strings.push(inputString);
        document.getElementById('inputString').value = '';
        displayStrings();
    }
});


document.getElementById('startShuffle').addEventListener('click', function() {
    // Clear the previous interval
    if (shuffleInterval) {
        clearInterval(shuffleInterval);
    }

    shuffleInterval = setInterval(function() {
        strings = shuffleArray(strings);
        displayStrings();
        shuffleCount++;
        document.getElementById('shuffleCount').textContent = 'Shuffle Count: ' + shuffleCount;
    }, 1000); // Shuffles every second
});

['group2', 'group3', 'group4', 'group5'].forEach(function(groupId) {
    document.getElementById(groupId).addEventListener('click', function() {
        let seatingChart = document.getElementById('seatingChart');
        // Remove existing group classes
        seatingChart.className = '';
        // Add new group class
        seatingChart.classList.add(groupId);
    });
});

document.getElementById('stopShuffle').addEventListener('click', function() {
    clearInterval(shuffleInterval);
    shuffleInterval = null; // Reset the interval
    shuffleCount = 0; // Reset the counter
    document.getElementById('shuffleCount').textContent = 'Shuffle Count: ' + shuffleCount;
});


function displayStrings() {
    for(let i = 1; i <= 16; i++) {
        let seat = document.getElementById('seat' + i);
        if (strings[i-1]) {
            seat.textContent = strings[i-1];
        } else {
            seat.textContent = '';
        }
    }
}
// for(let i = 1; i <= 16; i++) {
//     let seat = document.createElement('div');
//     seat.className = 'seat';
//     seat.id = 'seat' + i;
//     document.getElementById('seatingChart').appendChild(seat);
//     }

function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}