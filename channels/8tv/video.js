const manifestUri = 'https://unifi-live07.secureswiftcontent.com/UnifiHD/live08.mpd';

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
      
      // Configure ClearKey DRM
            player.configure({
                drm: {
                    clearKeys: {
                        'a9c619074ed38c20e25ad36c3c57c10c': '056e1e49573d2caee5cb4fe78f8c4f3d'
                    }
                }
            });

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
