document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    setInterval(() => {
        let glitchIntensity = Math.random() * 2;
        body.style.transform = `translate(${glitchIntensity}px, ${glitchIntensity}px)`;
        setTimeout(() => body.style.transform = "translate(0,0)", 100);
    }, 500);
});
