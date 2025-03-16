const output = document.getElementById("output");
const inputField = document.getElementById("userInput");

const responses = {
    "start": "Welcome to the Cybernetic Intelligence Skunkworks. You are in a dark terminal. Type 'help' for instructions.",
    "help": "Commands available: 'look', 'explore', 'inventory', 'exit', 'data', 'hack'. Use these to navigate the skunkworks.",
    "look": "You see a dimly lit terminal room with walls covered in holographic data streams. A faint glow casts eerie shadows.",
    "explore": "You begin exploring the terminal's interface. The data reveals sensitive military projects, cyborg enhancements, and AI protocols. Something seems off.",
    "inventory": "You have no physical inventory. But your cybernetic interface gives you access to valuable data.",
    "exit": "The terminal is locked. You can't leave. The data streams are overwhelming. You must continue.",
    "data": "You pull up classified military data. It speaks of experiments with neural hacking and cybernetic warfare. This is bigger than you thought.",
    "hack": "You attempt to hack the terminal. A warning flashes: 'Unauthorized Access'. You risk it anyway. A new window opens, revealing secret documents.",
    "branch1": "You discover a hidden protocol that leads to a classified AI project. Type 'investigate' to learn more or 'ignore' to continue with your exploration.",
    "investigate": "You investigate the AI project. It speaks of creating autonomous combat machines. The data is terrifying. Should you risk it and 'launch' the project or 'destroy' it?",
    "launch": "You launch the AI project. A countdown begins. The machines are awakening. There's no turning back. The countdown is at 5 seconds...",
    "destroy": "You destroy the project. The terminal shakes. Warning: Unauthorized action. System malfunctioning.",
    "branch2": "You discover a hidden backdoor that lets you access the base's security systems. You could shut it down, or use it to your advantage. Type 'shut down' or 'use'.",
    "shut down": "You shut down the security system, leaving the facility vulnerable. The whole building goes into lockdown mode.",
    "use": "You use the backdoor to manipulate the security system. You control the base now. What will you do next?",
    "unknown": "Unrecognized command. Type 'help' to see a list of valid commands.",
    "end": "Game Over. System Resetting..."
};

let gameState = {
    inSkunkworks: true,
    foundData: false,
    hacked: false,
    aiProjectLaunched: false,
    securityUsed: false
};

function updateOutput(text) {
    output.innerHTML += `<br>${text}`;
    output.scrollTop = output.scrollHeight;
}

function processCommand(command) {
    command = command.toLowerCase().trim();

    if (command === "start") {
        updateOutput(responses.start);
    } else if (command === "help") {
        updateOutput(responses.help);
    } else if (command === "look") {
        updateOutput(responses.look);
    } else if (command === "explore") {
        updateOutput(responses.explore);
    } else if (command === "inventory") {
        updateOutput(responses.inventory);
    } else if (command === "exit") {
        updateOutput(responses.exit);
    } else if (command === "data" && !gameState.foundData) {
        updateOutput(responses.data);
        gameState.foundData = true;
    } else if (command === "hack" && !gameState.hacked) {
        updateOutput(responses.hack);
        gameState.hacked = true;
        updateOutput(responses.branch1);
    } else if (command === "investigate" && gameState.hacked && !gameState.aiProjectLaunched) {
        updateOutput(responses.investigate);
        updateOutput("Type 'launch' to start the project or 'destroy' to terminate it.");
    } else if (command === "launch" && gameState.hacked && !gameState.aiProjectLaunched) {
        updateOutput(responses.launch);
        gameState.aiProjectLaunched = true;
    } else if (command === "destroy" && gameState.hacked && !gameState.aiProjectLaunched) {
        updateOutput(responses.destroy);
    } else if (command === "shut down" && !gameState.securityUsed) {
        updateOutput(responses.shut down);
        gameState.securityUsed = true;
    } else if (command === "use" && !gameState.securityUsed) {
        updateOutput(responses.use);
        gameState.securityUsed = true;
    } else if (command === "branch1" && gameState.foundData && !gameState.hacked) {
        updateOutput(responses.branch1);
    } else if (command === "branch2" && gameState.foundData && !gameState.securityUsed) {
        updateOutput(responses.branch2);
    } else {
        updateOutput(responses.unknown);
    }
}

inputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const userCommand = inputField.value;
        inputField.value = "";
        updateOutput(`> ${userCommand}`);
        processCommand(userCommand);
    }
});

// Initiate game
updateOutput("Type 'start' to begin the adventure.");

