
function showLove() {
    const message = document.getElementById("loveMessage");
    message.innerHTML = "I know you love me ❤️<br>Sorry for hurting you babu 🥹";
    message.style.display = "block";
}

// 🎵 Play music automatically (with user interaction fallback)
window.onload = function () {
    const audio = document.getElementById("bgMusic");

    // Try autoplay
    audio.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction...");
    });

    // Play on first click anywhere
    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
};
