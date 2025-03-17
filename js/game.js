document.addEventListener("DOMContentLoaded", function () {
    const terminalText = document.getElementById("terminal-text");
    const inputField = document.getElementById("command-input");

    // Typing animation function
    function typeTextEffect(element, text, speed = 30) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Terminal intro text
    const introText = `
    ██╗███████╗ ██████╗  ██████╗ ███████╗████████╗
    ██║██╔════╝██╔═══██╗██╔═══██╗██╔════╝╚══██╔══╝
    ██║███████╗██║   ██║██║   ██║█████╗     ██║   
    ██║╚════██║██║   ██║██║   ██║██╔══╝     ██║   
    ██║███████║╚██████╔╝╚██████╔╝███████╗   ██║   
    ╚═╝╚══════╝ ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝   
        MIL-INT PROTOCOL 09-███ // [REDACTED]                    
───────────────────────────────────────────
CONNECTION ESTABLISHED... ACCESSING DATA...
[UNKNOWN SYSTEM BOOTING...]
        
⚠ WARNING: PARTIAL MEMORY FAILURE DETECTED. 
⚠ UNAUTHORIZED ACCESS MAY RESULT IN SYSTEM BREACH. 

COMMANDS AVAILABLE:
───────────────────────────────────────────
> TYPE 'look flyers'       [Curatorial Portfolio]
> TYPE 'access texts'      [Writings]
> TYPE 'scan audio'        [Audio Works]
> TYPE 'decrypt talks'     [Public Talks]
> TYPE 'initiate cipher'   [???]
> TYPE 'exit system'       [Shut Down]

Enter your command below:
───────────────────────────────────────────
`;

    // Start typing effect on page load
    typeTextEffect(terminalText, introText);

    // Handle input field submission
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
                typeText("\n> You shuffle through the dusty flyers... [LOADING CURATORIAL PORTFOLIO]");
                setTimeout(() => { window.location.href = "exhibitions.html"; }, 2000);
                break;

            case "access texts":
                typeText("\n> Decrypting written archives... [LOADING TEXTS]");
                setTimeout(() => { window.location.href = "texts.html"; }, 2000);
                break;

            case "scan audio":
                typeText("\n> Scanning for audio signals... [LOADING AUDIO]");
                setTimeout(() => { window.location.href = "audio.html"; }, 2000);
                break;

            case "decrypt talks":
                typeText("\n> Decrypting lecture data... [LOADING TALKS]");
                setTimeout(() => { window.location.href = "talks.html"; }, 2000);
                break;

            case "exit system":
                typeText("\n> SYSTEM SHUTTING DOWN... ██████████");
                setTimeout(() => { window.close(); }, 2000);
                break;

            default:
                typeText("\nERROR 404: COMMAND NOT RECOGNIZED.");
        }
    }

    function typeText(text) {
        terminalText.innerHTML += `\n> ${text}`;
        terminalText.scrollTop = terminalText.scrollHeight;
    }
});

