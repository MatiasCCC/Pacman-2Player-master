class AudioLoader {
  constructor() {
    this.audios = {};
    this.numberOfAudios = 0;
    this.numberOfLoadedAudios = 0;
    this.init();
	this.isFrightenedSoundPlaying = false;
  }

  init() {
    this.loadAudio("die", "audio/die.mp3");
    this.loadAudio("eatghost", "audio/eatghost.wav");
    this.loadAudio("eatingSound1", "audio/eatingSound1.wav");
	this.loadAudio("eatingSound2", "audio/eatingSound2.wav");
    this.loadAudio("eating.short", "audio/eating.short.mp3");
    this.loadAudio("eatpill", "audio/eatpill.mp3");
    this.loadAudio("extralives", "audio/extra-lives.wav");
    this.loadAudio("intermission", "audio/intermission.wav");
    this.loadAudio("opening_song", "audio/opening_song.wav");
    this.loadAudio("siren", "audio/siren.wav");
    this.loadAudio("vcs_90", "audio/vcs_90.mp3");
	this.loadAudio("energizer", "audio/power_pellet.wav")

    this.numberOfAudios = Object.keys(this.audios).length;
  }

  loadAudio(identifier, source) {
    let audio = new Audio();
    audio.src = source;
    audio.addEventListener("canplay", () => this.numberOfLoadedAudios++);
    this.audios[identifier] = audio;
  }

  hasAllAudiosLoaded() {
    return this.numberOfLoadedAudios == this.numberOfAudios ? true : false;
  }

  play(keyword, speed = 1) {
    let promise = this.audios[keyword].play();

    //only kept for solving dom exception for premise
    if (promise !== undefined) {
      promise.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
    }

    this.audios[keyword].playbackRate = speed;
    this.audios[keyword].onended = () => {
      this.stop(keyword);
    };
  }

  stop(keyword) {
    this.audios[keyword].pause();
    this.audios[keyword].currentTime = 0;
  }

  playClone(keyword) {
    let currentAudioSrc = this.audios[keyword].cloneNode(false);
    currentAudioSrc.play();
    currentAudioSrc.playbackRate = 1.2;
    currentAudioSrc.onended = () => {
      currentAudioSrc.pause();
      currentAudioSrc.currentTime = 0;
    };
  }

  playLoop(keyword) {
    if (this.audios[keyword]) {
      this.audios[keyword].loop = true;
      this.audios[keyword].play();
    }
  }
}
