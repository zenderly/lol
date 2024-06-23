let clocks = {
    1: {
        timer: null,
        seconds: 0
    },
    2: {
        timer: null,
        seconds: 0
    }
};

function startClock(clockId) {
    let clock = clocks[clockId];
    if (!clock.timer) {
        clock.timer = setInterval(() => {
            clock.seconds += 0.1; // Increment by 0.1 seconds (for milliseconds)
            updateClockDisplay(clockId);
        }, 100); // Update every 100 milliseconds
    }
}

function pauseClock(clockId) {
    let clock = clocks[clockId];
    clearInterval(clock.timer);
    clock.timer = null;
}

function stopClock(clockId) {
    let clock = clocks[clockId];
    clearInterval(clock.timer);
    clock.timer = null;
    clock.seconds = 0;
    updateClockDisplay(clockId);
}

function stopAllClocks() {
    Object.keys(clocks).forEach(clockId => {
        clearInterval(clocks[clockId].timer);
        clocks[clockId].timer = null;
        clocks[clockId].seconds = 0;
        updateClockDisplay(clockId);
    });
}

function updateClockDisplay(clockId) {
    let clock = clocks[clockId];
    let minutes = Math.floor(clock.seconds / 60);
    let seconds = Math.floor(clock.seconds % 60);
    let milliseconds = Math.floor((clock.seconds - Math.floor(clock.seconds)) * 10); // Milliseconds
    let display = `${pad(minutes)}:${pad(seconds)}.${milliseconds}`;
    document.querySelector(`.clock-${clockId} .clock-display`).textContent = display;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}
