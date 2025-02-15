var playerInstance = jwplayer("myElement");
playerInstance.setup({
  playlist: [{
    sources: [{
      file: "https://mifntechnology.github.io/siaranMy/channels/Tv1/index.m3u8",
      type: "hls"
    }],
    image: "https://mifntechnology.github.io/siaranMy/logo/Tv1.png",
    title: "TV1",
    description: "TV1 | RTM"
  }],
  width: 640,
  height: 360,
  mute: true
});
