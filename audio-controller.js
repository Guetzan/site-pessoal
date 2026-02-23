const videoWrapper = document.querySelector('div.bg-video');
const bgVideo = document.getElementById('bg-video');

const mute = document.getElementById('mute');
const unmute = document.getElementById('unmute');

function toggleBgAudio() {
    bgVideo.volume = 0.55
    bgVideo.muted = !bgVideo.muted;

    setControlIcon();
}

function setControlIcon() {
    if(bgVideo.muted) {
        mute.classList.remove('active');
        unmute.classList.add('active');

        return;
    }

    unmute.classList.remove('active');
    mute.classList.add("active");
}