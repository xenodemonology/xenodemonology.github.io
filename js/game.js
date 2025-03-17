document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("command-input");

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            processCommand(inputField.value.toLowerCase().trim());
            inputField.value = "";
        }
    });

    function processCommand(command) {
        switch (command) {
            case "look flyers":
                typeText("You shuffle through the dusty flyers... [LOADING CURATORIAL PORTFOLIO]");
                setTimeout(() => { window.location.href = "exhibitions.html"; }, 2000);
                break;

            case "access texts":
                typeText("Decrypting written archives... [LOADING TEXTS]");
                setTimeout(() => { window.location.href = "texts.html"; }, 2000);
                break;

            case "scan audio":
                typeText("Scanning for audio signals... [LOADING AUDIO]");
                setTimeout(() => { window.location.href = "audio.html"; }, 2000);
                break;

            case "decrypt talks":
                typeText("Decrypting lecture data... [LOADING TALKS]");
                setTimeout(() => { window.location.href = "talks.html"; }, 2000);
                break;

            case "exit system":
                typeText("SYSTEM SHUTTING DOWN... ██████████");
                setTimeout(() => { window.close(); }, 2000);
                break;

            case "initiate cipher":
                typeText("INITIALIZING... PROTOCOL UNKNOWN...\n\n> SYSTEM RESPONDS: 'WHO ARE YOU?'\n> TYPE 'identify' or 'ignore'");
                waitForSecondaryCommand(["identify", "ignore"]);
                break;

            default:
                typeText("ERROR 404: COMMAND NOT RECOGNIZED.");
        }
    }

    function waitForSecondaryCommand(options) {
        document.getElementById("command-input").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                let secondaryCommand = event.target.value.toLowerCase().trim();
                if (options.includes(secondaryCommand)) {
                    processSecondaryCommand(secondaryCommand);
                } else {
                    typeText("SYSTEM ERROR: INVALID RESPONSE.");
                }
                event.target.value = "";
            }
        }, { once: true });
    }

    function processSecondaryCommand(command) {
        if (command === "identify") {
            typeText("> You respond: 'I am the operator of this system.'\n\nSYSTEM RESPONDS: '[CLASSIFIED] PROTOCOL ACTIVE... DISPLAYING ARCHIVES...'");
            setTimeout(() => { window.location.href = "secret.html"; }, 3000);
        } else if (command === "ignore") {
            typeText("> You choose to ignore...\n\nSYSTEM RESPONDS: 'THEN YOU ARE NOT WHO YOU CLAIM TO BE.'\nCONNECTION LOST.");
            setTimeout(() => { window.location.href = "index.html"; }, 3000);
        }
    }

    function typeText(text) {
        const terminalText = document.getElementById("terminal-text");
        terminalText.innerHTML += `\n> ${text}\n`;
    }
});

