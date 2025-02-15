var playerInstance = jwplayer("myElement");
jwplayer.key = "jTL7dlu7ybUI5NZnDdVgb1laM8/Hj3ftIJ5Vqg==";
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