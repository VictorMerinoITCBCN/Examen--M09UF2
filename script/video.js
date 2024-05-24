class Video {
    constructor(video,isPlaying = false) {
        this.video = video
        this.isPlaying = isPlaying
    }

    play() {
        if (this.isPlaying) alert("El vídeo s'està reproduint")
        else {
            this.video.play()
            this.isPlaying = true
        }
    }

    pause() {
        if (!this.isPlaying) alert("El vídeo està parat")
            else {
                this.video.pause()
                this.isPlaying = false
            }
    }
}


const videoElement = document.getElementById('video')

const video = new Video(videoElement)

const btnPlay = document.getElementById('btn-play')
const btnPause = document.getElementById('btn-pause')

btnPlay.addEventListener('click', () => video.play())
btnPause.addEventListener('click', () =>video.pause())

const videoContainer = document.querySelector('.video-container')
window.addEventListener('scroll',() => autoPauseVideo())

const autoPauseVideo = () => {
    if (videoContainer.scrollTop < 800 && video.isPlaying) {
        video.pause()
    }
}

document.addEventListener('DOMContentLoaded',() => video.play())