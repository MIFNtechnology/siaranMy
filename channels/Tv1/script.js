document.addEventListener("DOMContentLoaded", () => {
  const source =
  "https://mifntechnology.github.io/siaranMy/channels/Tv1/index.m3u8";
  const video = document.querySelector("video");
  const player = new Plyr(video, {
    captions: { active: true, update: true, } });


  if (!Hls.isSupported()) {
    video.src = source;
  } else {
    const hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video);
    window.hls = hls;

    player.on("languagechange", () => {
      setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
    });
  }

  window.player = player;
});