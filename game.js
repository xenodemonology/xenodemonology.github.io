document.addEventListener("DOMContentLoaded", function () {
    const terminalText = document.getElementById("terminal-text");
    const inputField = document.getElementById("command-input");

    inputField.style.display = "none"; // Hide input initially

    // Typing animation function
    function typeTextEffect(text, speed = 40, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                terminalText.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        terminalText.innerHTML = "";
        type();
    }

    // Terminal startup text
    const introText = `
███╗   ███╗██╗███████╗██╗  ██╗ █████╗ ███████╗███╗   ██╗ ██████╗ ███████╗
████╗ ████║██║██╔════╝██║  ██║██╔══██╗██╔════╝████╗  ██║██╔════╝ ██╔════╝
██╔████╔██║██║███████╗███████║███████║███████╗██╔██╗ ██║██║  ███╗█████╗  
██║╚██╔╝██║██║╚════██║██╔══██║██╔══██║╚════██║██║╚██╗██║██║   ██║██╔══╝  
██║ ╚═╝ ██║██║███████║██║  ██║██║  ██║███████║██║ ╚████║╚██████╔╝███████╗
╚═╝     ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝

███████████████████████████████████████████████████████
Welcome to the [ERROR: UNSTABLE SYSTEM] of the Miskatonic Museum.
This archive is corrupted, but some fragments remain accessible.

COMMANDS AVAILABLE:
> TYPE 'access texts'      [Writings]
> TYPE 'scan audio'        [Audio Works]
> TYPE 'decrypt talks'     [Public Talks]
> TYPE 'look exhibitions'  [Exhibition Archives]
> TYPE 'shutdown'          [Exit System]
███████████████████████████████████████████████████████
`;

    // Run typing effect, then reveal input field
    typeTextEffect(introText, 20, function() {
        inputField.style.display = "block";
        inputField.focus();
    });

    // Handle command input
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            processCommand(inputField.value.toLowerCase().trim());
            inputField.value = "";
        }
    });

    function processCommand(command) {
        switch (command) {
            case "access texts":
                window.location.href = "texts.html";
                break;
            case "scan audio":
                window.location.href = "audio.html";
                break;
            case "decrypt talks":
                window.location.href = "talks.html";
                break;
            case "look exhibitions":
                window.location.href = "exhibitions.html";
                break;
            case "shutdown":
                window.close();
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
