const manifestUri = 'https://mifntechnology.github.io/siaranMy/channels/8tv/index.m3u8';

    function initApp() {
      shaka.polyfill.installAll();
      if (shaka.Player.isBrowserSupported()) {
        init();
      } else {
        console.error('Browser not supported!');
      }
    }

    async function init() {
      const video = document.getElementById('video');
      const ui = video['ui'];
      const controls = ui.getControls();
      const player = controls.getPlayer();
      const config = {
        'seekBarColors': {
          base: 'rgba(66, 133, 244, 0.35)',
          buffered: 'rgba(66, 133, 244, 0.6)',
          played: 'rgba(66, 133, 244, 0.8)',
        },
        'volumeBarColors': {
          base: 'rgba(66, 133, 244, 0.8)',
          level: 'rgb(66, 133, 244)',
        }
      }
      ui.configure(config);

      window.player = player;
      window.ui = ui;
      window.controls = controls;

      player.addEventListener("error", onPlayerErrorEvent);
      controls.addEventListener("error", onUIErrorEvent);

      try {
        await player.load(manifestUri);
        console.log('The video has now been loaded!');
      } catch (error) {
        onPlayerError(error);
      }

      function onPlayerErrorEvent(errorEvent) {
        onPlayerError(event.detail);
      }

      function onPlayerError(error) {
        console.error('Error code', error.code + ':', 'Video could not be loaded!', '[Media not found].');
      }

      function onUIErrorEvent(errorEvent) {
        onPlayerError(event.detail);
      }
    }

    function initFailed(errorEvent) {
      console.error('Unable to load the UI library!');
    }

    document.addEventListener('shaka-ui-loaded', init);
    document.addEventListener('shaka-ui-load-failed', initFailed);
    document.addEventListener('DOMContentLoaded', initApp);

    Object.defineProperty(navigator, 'userAgent', {
      get: function() { // Latest (Feb 18, 2024)
        return 'User Agent: Mozilla/5.0 (Linux; Android 10; CPH1819 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/135.0.7049.99 Mobile Safari/537.36';
      }
    });