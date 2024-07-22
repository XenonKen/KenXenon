document.addEventListener('DOMContentLoaded', () => {
    const spawnLocations = [
        // Anggolt (2 hours)
        { id: 1, top: '8%', left: '58%', name: 'Rally Point of Victory', countdown: 3 * 60 * 60, type: 'anggolt' },
        { id: 2, top: '16%', left: '78%', name: 'Training Point of Victory', countdown: 3 * 60 * 60, type: 'anggolt' },
        { id: 3, top: '35.5%', left: '89%', name: 'Conquest of Victory', countdown: 3 * 60 * 60, type: 'anggolt' },
        { id: 4, top: '64.5%', left: '85%', name: 'Rally Point of Belligerence', countdown: 3 * 60 * 60, type: 'anggolt' },
        { id: 5, top: '88%', left: '68%', name: 'Training Point of Belligerence', countdown: 3 * 60 * 60, type: 'anggolt' },
        { id: 6, top: '89%', left: '36%', name: 'Conquest of Belligerence', countdown: 3 * 60 * 60, type: 'anggolt' },
        { id: 7, top: '64.2%', left: '13.5%', name: 'Rally Point of Unity', countdown: 3 * 60 * 60, type: 'anggolt' },
        { id: 8, top: '37%', left: '5.5%', name: 'Training Point of Unity', countdown: 3 * 60 * 60, type: 'anggolt' },
        { id: 9, top: '17%', left: '17%', name: 'Conquest of Unity', countdown: 3 * 60 * 60, type: 'anggolt' },
        // Inferno (4 hours)
        { id: 10, top: '14.6%', left: '34.3%', name: 'Cloud Path Watchtower', countdown: 6 * 60 * 60, type: 'inferno' },
        { id: 11, top: '21.6%', left: '57.7%', name: 'High Grounds Summit', countdown: 6 * 60 * 60, type: 'inferno' },
        { id: 12, top: '52.7%', left: '84%', name: 'Rocky Mountain Cliff', countdown: 6 * 60 * 60, type: 'inferno' },
        { id: 13, top: '66%', left: '67%', name: 'Newbreeze Border', countdown: 6 * 60 * 60, type: 'inferno' },
        { id: 14, top: '76.7%', left: '26.2%', name: 'Stonegrave Summit', countdown: 6 * 60 * 60, type: 'inferno' },
        { id: 15, top: '54.6%', left: '19.5%', name: 'Horizon Peaks', countdown: 6 * 60 * 60, type: 'inferno' },
        { id: 16, top: '54%', left: '48.25%', name: 'Source of Heavy Combat', countdown: 6 * 60 * 60, type: 'inferno' },
        // Kiaron (3 hours)
        { id: 17, top: '28.5%', left: '33.5%', name: 'Marching Point of Victory', countdown: 4 * 60 * 60, type: 'kiaron' },
        { id: 18, top: '25.5%', left: '67%', name: 'Assault Point of Victory', countdown: 4 * 60 * 60, type: 'kiaron' },
        { id: 19, top: '44%', left: '73%', name: 'Marching Point of Belligerence', countdown: 4 * 60 * 60, type: 'kiaron' },
        { id: 20, top: '72%', left: '59.5%', name: 'Assault Point of Belligerence', countdown: 4 * 60 * 60, type: 'kiaron' },
        { id: 21, top: '73%', left: '39%', name: 'Marching Point of Unity', countdown: 4 * 60 * 60, type: 'kiaron' },
        { id: 22, top: '42.3%', left: '18%', name: 'Assault Point of Unity', countdown: 4 * 60 * 60, type: 'kiaron' },
        // Grish (4 hours)
        { id: 23, top: '36.7%', left: '39.2%', name: 'Conflict Point of Victory', countdown: 5 * 60 * 60, type: 'grish' },
        { id: 24, top: '37%', left: '59%', name: 'Confrontation Point of Victory', countdown: 5 * 60 * 60, type: 'grish' },
        { id: 25, top: '47.7%', left: '63.2%', name: 'Conflict Point of Belligerence', countdown: 5 * 60 * 60, type: 'grish' },
        { id: 26, top: '60.6%', left: '55.2%', name: 'Confrontation Point of Belligerence', countdown: 5 * 60 * 60, type: 'grish' },
        { id: 27, top: '64.7%', left: '41.4%', name: 'Conflict Point of Unity', countdown: 5 * 60 * 60, type: 'grish' },
        { id: 28, top: '46%', left: '34.2%', name: 'Confrontation Point of Unity', countdown: 5 * 60 * 60, type: 'grish' },
    ];

    const mapContainer = document.getElementById('map-container');
    const logContainer = document.getElementById('log-container');
    let activeTimers = {}; // Object to store active timers

    spawnLocations.forEach(location => {
        const spawnElement = document.createElement('div');
        spawnElement.classList.add('spawn-location', location.type);
        spawnElement.style.top = location.top;
        spawnElement.style.left = location.left;
        spawnElement.dataset.id = location.id;

        const nameElement = document.createElement('div');
        nameElement.classList.add('spawn-name');
        nameElement.textContent = location.name;

        const countdownElement = document.createElement('div');
        countdownElement.classList.add('countdown');
        countdownElement.dataset.id = `countdown-${location.id}`;

        spawnElement.appendChild(nameElement);
        spawnElement.appendChild(countdownElement);
        mapContainer.appendChild(spawnElement);

        spawnElement.addEventListener('click', () => {
            const timerId = `timer-${location.id}`;
            if (activeTimers[timerId]) {
                clearInterval(activeTimers[timerId]);
                delete activeTimers[timerId];
                countdownElement.textContent = ''; // Clear the countdown text
                countdownElement.style.display = 'none'; // Hide the countdown element
                spawnElement.classList.remove('active'); // Remove active class
                nameElement.classList.remove('finished'); // Remove finished class
                spawnElement.style.borderColor = 'transparent'; // Remove green stroke
                updateLog(); // Update the log after clearing the timer
            } else {
                activeTimers[timerId] = startCountdown(location.id, countdownElement, location.countdown);
                spawnElement.classList.add('active'); // Add active class
            }
        });
    });

    function startCountdown(id, countdownElement, countdownTime) {
        let timeLeft = countdownTime;
        countdownElement.style.display = 'block';

        const timerId = `timer-${id}`;

        const timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                countdownElement.textContent = 'SPAWNED';
                countdownElement.classList.remove('green'); // Remove any existing green color
                countdownElement.style.backgroundColor = 'green'; // Set background color to green
                countdownElement.style.display = 'block'; // Ensure countdown element is visible
                const spawnElement = document.querySelector(`.spawn-location[data-id="${id}"]`);
                const nameElement = document.querySelector(`.spawn-name[data-id="${id}"]`);
                spawnElement.classList.remove('active'); // Remove active class
                nameElement.classList.add('finished'); // Add finished class
                spawnElement.style.borderColor = 'green'; // Add green stroke
                updateLog(); // Update the log after countdown ends
            } else {
                countdownElement.textContent = formatTime(timeLeft);

                // Change the countdown color to green when 10 minutes or less is remaining
                if (timeLeft <= 10 * 60) { // 10 minutes in seconds
                    countdownElement.classList.add('green');
                } else {
                    countdownElement.classList.remove('green');
                }

                updateLog(); // Update the log on each tick
            }
            timeLeft -= 1;
        }, 1000);

        return timer;
    }

    function updateLog() {
        const countdownElements = document.querySelectorAll('.countdown');
        const logEntries = [];

        countdownElements.forEach(element => {
            if (element.textContent && element.textContent !== 'SPAWNED') {
                const spawnId = element.dataset.id.split('-')[1];
                const spawnLocation = spawnLocations.find(location => location.id == spawnId);
                logEntries.push({
                    id: spawnLocation.id,
                    name: spawnLocation.name,
                    time: element.textContent,
                    timeLeft: parseTime(element.textContent)
                });
            }
        });

        logEntries.sort((a, b) => a.timeLeft - b.timeLeft);

        logContainer.innerHTML = '<ul>' + logEntries.map(entry => `<li>${entry.name}: ${entry.time}</li>`).join('') + '</ul>';
    }

    function parseTime(timeString) {
        const parts = timeString.split(/[hms]/).map(Number).filter(Boolean);
        return (parts[0] || 0) * 3600 + (parts[1] || 0) * 60 + (parts[2] || 0);
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${hours}h ${minutes}m ${remainingSeconds}s`;
    }
});