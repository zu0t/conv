body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
}

.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

#bgVideo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(10px); /* Blurs the video */
}

.content-box {
    background: rgba(255, 255, 255, 0.1); /* Slightly transparent white background */
    backdrop-filter: blur(20px); /* Adds a blur to the background content */
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 4px solid rgba(255, 255, 255, 0.5); /* Adds a border to the circular image */
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.description {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
