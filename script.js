// Function to handle clicking on game or proxy cards
function openGame(target) {
    if (target === 'roblox') {
        alert('Connecting to cloud server instance...');
        // Replace with your proxy engine URL deployment later
        window.location.href = "https://now.gg"; 
    } else if (target === 'movies') {
        alert('Opening media feed pipeline...');
        window.location.href = "https://github.com";
    }
}

// Generates a dynamic user counter that fluctuates naturally
function simulateLivePlayers() {
    const counterElement = document.getElementById('player-count');
    if (counterElement) {
        let baseCount = Math.floor(Math.random() * (45 - 28 + 1)) + 28;
        counterElement.innerText = baseCount;
        
        setInterval(() => {
            let change = Math.floor(Math.random() * 3) - 1; 
            baseCount += change;
            if (baseCount < 15) baseCount = 15;
            counterElement.innerText = baseCount;
        }, 8000);
    }
}

// Run counter simulation on page initialization
document.addEventListener('DOMContentLoaded', simulateLivePlayers);
