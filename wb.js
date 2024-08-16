// script.js
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('bgVideo');
    const unmuteBtn = document.getElementById('unmuteBtn');

    unmuteBtn.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            unmuteBtn.style.display = 'none'; // Hide the button once unmuted
        }
    });
});
