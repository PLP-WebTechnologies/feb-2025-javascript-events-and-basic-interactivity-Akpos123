var pressedKeys = {};

window.addEventListener('keydown', (event) => {
pressedKeys[event.key] = true;
console.log(`${event.key} is pressed`);
});

window.addEventListener('keyup', (event) => {
pressedKeys[event.key] = false;
console.log(`${event.key} is released`);
});

// Check if a specific key is pressed
function isKeyPressed(key) {
return !!pressedKeys[key];
}

// Usage example
if (isKeyPressed('a')) {
console.log('The "a" key is currently pressed.');
}



  