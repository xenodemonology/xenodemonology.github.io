document.addEventListener("DOMContentLoaded", function () {
    const terminalText = document.getElementById("terminal-text");
    const inputField = document.getElementById("command-input");

    // Typing animation function
    function typeTextEffect(text, speed = 30) {
        let i = 0;
        function type() {
            if (i < text.length) {
                terminalText.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                inputField.style.display = "block"; // Show input after typing finishes
                inputField.focus();
            }
        }
        terminalText.innerHTML = ""; // Clear terminal before typing
        type();
    }

    // Terminal intro text
    const introText = `
███████╗██╗     ██╗     ██╗████████╗████████╗
██╔════╝██║     ██║     ██║╚══██╔══╝╚══██╔══╝
█████╗  ██║     ██║     ██║   ██║      ██║   
██╔══╝  ██║     ██║     ██║   ██║      ██║   
██║     ███████╗███████╗██║   ██║      ██║   
╚═╝     ╚══════╝╚══════╝╚═╝   ╚═╝      ╚═╝   

PORTFOLIO SYSTEM BOOTING...
───────────────────────────────────────────
COMMANDS AVAILABLE:
> TYPE 'look flyers'       [Curatorial Portfolio]
> TYPE 'access texts'      [Writings]
> TYPE 'scan audio'        [Audio Works]
> TYPE 'decrypt talks'     [Public Talks]
> TYPE 'exit system'       [Shut Down]
───────────────────────────────────────────
`;

    // Run typing effect on page load
    inputField.style.display = "none"; // Hide input initially
    typeTextEffect(introText, 20);

    // Process command input
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
                typeText("\n> You shuffle through the dusty flyers... [LOADING]");
                setTimeout(() => { window.location.href = "exhibitions.html"; }, 2000);
                break;

            case "access texts":
                typeText("\n> Decrypting written archives... [LOADING]");
                setTimeout(() => { window.location.href = "texts.html"; }, 2000);
                break;

            case "scan audio":
                typeText("\n> Scanning for audio signals... [LOADING]");
                setTimeout(() => { window.location.href = "audio.html"; }, 2000);
                break;

            case "decrypt talks":
                typeText("\n> Decrypting lecture data... [LOADING]");
                setTimeout(() => { window.location.href = "talks.html"; }, 2000);
                break;

            case "exit system":
                typeText("\n> SYSTEM SHUTTING DOWN...");
                setTimeout(() => { window.close(); }, 2000);
                break;

            default:
                typeText("\nERROR: COMMAND NOT RECOGNIZED.");
        }
    }

    function typeText(text) {
        terminalText.innerHTML += `\n> ${text}`;
        terminalText.scrollTop = terminalText.scrollHeight;
    }
});

