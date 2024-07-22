// Initialize the map
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('images/map.jpg', bounds).addTo(map);

map.fitBounds(bounds);

// Example markers and timers
var events = [
    {lat: 500, lon: 500, name: "Rally Point of Belligerence", timer: "1h 55m 55s"},
    {lat: 600, lon: 600, name: "Training Point of Victory", timer: "2h 30m 00s"},
    // Add more events as needed
];

// Add markers to the map
events.forEach(function(event) {
    var marker = L.marker([event.lat, event.lon])
        .bindPopup(`<b>${event.name}</b><br>Time Left: <span class="timer" data-time="${event.timer}">${event.timer}</span>`)
        .addTo(map);
});

// Timer update function
function updateTimers() {
    var now = new Date().getTime();
    document.querySelectorAll('.timer').forEach(function(timerElem) {
        var endTime = timerElem.getAttribute('data-time');
        var duration = new Date(`1970-01-01T${endTime}Z`).getTime() - new Date('1970-01-01T00:00:00Z').getTime();
        var distance = duration - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElem.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    });
}

// Initial timer update
updateTimers();
setInterval(updateTimers, 1000);

// Populate timer panel
var timerPanel = document.getElementById('timers');
events.forEach(function(event) {
    var li = document.createElement('li');
    li.innerHTML = `<b>${event.name}</b><br>Time Left: <span class="timer" data-time="${event.timer}">${event.timer}</span>`;
    timerPanel.appendChild(li);
});
