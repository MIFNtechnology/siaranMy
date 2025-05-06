async function init() {
	const video = document.getElementById('video');
	const ui = video['ui'];
	const controls = ui.getControls();
	const player = controls.getPlayer();
	const config = {
		enableKeyboardPlaybackControls: true,
		'seekBarColors': {
			base: 'rgba(255,255,255,.2)',
			buffered: 'rgba(255,255,255,.4)',
			played: 'rgb(255,0,0)',
          },
         };
            ui.configure(config);
            
            player.configure({
            	drm: {
            	  clearKeys: {
            	// 'key-id-in-hex': 'key-in-hex',
            "4745ac4464797aa9d5ed653c1e987917": "ffe2dd898757fb14c156b3e014058ecc"
            }
          }
        });
        player.getNetworkingEngine().registerRequestFilter(function(type, request) {
        	if (type == shaka.net.NetworkingEngine.RequestType.SEGMENT) {
        	//   request.headers['authorization'] = '';
        }
      });
      
      player.setTextTrackVisibility(true);
    //player.configure({drm:{servers:{'com.widevine.alpha':'https://license.dstv.com/widevine/getLicense?CrmId=afl&AccountId=afl&ContentId=SH2&SessionId=D3C00F885C24B9C6&Ticket=C839A8D71AB94299'}}});
    
    window.player = player;
    window.ui = ui;
    player.addEventListener('error', onPlayerErrorEvent);
    controls.addEventListener('error', onUIErrorEvent);
    try{await player.load('https://unifi-live01.secureswiftcontent.com/UnifiHD/live07.mpd');
    console.log('The video has now been loaded!');} catch (error) {onPlayerError(error);}}
    function onPlayerErrorEvent(errorEvent) {onPlayerError(event.detail);}
    function onPlayerError(error) {console.error('Error code', error.code, 'object', error);}
    function onUIErrorEvent(errorEvent) {onPlayerError(event.detail);}
    function initFailed(errorEvent) {console.error('Unable to load the UI library!');}
    document.addEventListener('shaka-ui-loaded', init);
    document.addEventListener('shaka-ui-load-failed', initFailed);