body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    overflow: hidden;
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
    filter: blur(8px); /* Blurs the video */
}

.unmute-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    font-size: 1em;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    z-index: 10;
    transition: background 0.3s ease;
    font-family: 'Inter', sans-serif;
}

.unmute-btn:hover {
    background: rgba(0, 0, 0, 0.7);
}

.content-box {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
    border: 4px solid rgba(255, 255, 255, 0.5);
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.description {
    color: white;
    font-size: 1.4em;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
