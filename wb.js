// script.js
document.addEventListener('DOMContentLoaded', function () {
    const videoSource = document.getElementById('videoSource');
    const videoURL = videoSource.src;

    // Ensure video is .mp4 format
    if (!videoURL.endsWith('.mp4')) {
        alert('The provided video must be in .mp4 format.');
    }
});
