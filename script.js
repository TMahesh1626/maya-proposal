// Start the journey
function startJourney() {

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

}

//Show the Audio
function showAudio() {
    document.getElementById("audio").scrollIntoView({
        behavior: "smooth"
    });
}


// Show the personal message
function showMessage() {

    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });

}


// Show the proposal
function showProposal() {

    document.getElementById("proposal").scrollIntoView({
        behavior: "smooth"
    });

}


// When she says YES ❤️
function sayYes() {

    document.getElementById("final").scrollIntoView({
        behavior: "smooth"
    });

    createHearts();

}


// If she wants to think 🙈
function thinkAboutIt() {

    alert(
        "Take your time, Maya ❤️\n\n" +
        "But just remember...\n" +
        "there is someone here who is hoping for a beautiful future with you. 😊"
    );

}


// Create falling hearts after YES
function createHearts() {

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";

        heart.style.fontSize =
            (Math.random() * 25 + 15) + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            "heartFall " +
            (Math.random() * 3 + 2) +
            "s linear forwards";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 6000);

    }

}


// Add falling-heart animation
const style = document.createElement("style");

style.innerHTML = `

@keyframes heartFall {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    100% {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);
