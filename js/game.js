document.addEventListener("DOMContentLoaded", function () {
    const terminalText = document.getElementById("terminal-text");
    const inputField = document.getElementById("command-input");

    // Ensure input field starts hidden
    inputField.style.display = "none"; 

    // Typing animation function
    function typeTextEffect(text, speed = 30, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                terminalText.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback(); // Show input field after typing
            }
        }
        terminalText.innerHTML = ""; // Clear terminal before typing
        type();
    }

    // Terminal startup text
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

    // Run typing effect, then show input field
    typeTextEffect(introText, 20, function() {
        inputField.style.display = "block"; // Make input visible after text loads
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
                setTimeout(() => { window.location.href = "talks.html"; }

