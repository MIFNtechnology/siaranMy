async function init() {
				const video = document.getElementById('video');
				const ui = video['ui'];
				const controls = ui.getControls();
				const player = controls.getPlayer();
				player.configure({
					drm: {
						clearKeys: {
							// 'key-id-in-hex': 'key-in-hex',
							'c3e956b38ae993be1494c7cfa17b1110': '55ccaee886b340dd901f4bf8dd9d3a6a'
						}
					}
				});
				player.setTextTrackVisibility(true);
				//player.configure({drm:{servers:{'com.widevine.alpha':'https://license.dstv.com/widevine/getLicense?CrmId=afl&AccountId=afl&ContentId=SH2&SessionId=D3C00F885C24B9C6&Ticket=C839A8D71AB94299'}}}); 
				window.player = player;
				window.ui = ui;
				player.addEventListener('error', onPlayerErrorEvent);
				controls.addEventListener('error', onUIErrorEvent);
				try {
					await player.load('https://linearjitp-playback.astro.com.my/dash-wv/linear/5021/default_ott.mpd');
					console.log('The video has now been loaded!');
				} catch (error) {
					onPlayerError(error);
				}
			}

			function onPlayerErrorEvent(errorEvent) {
				onPlayerError(event.detail);
			}

			function onPlayerError(error) {
				console.error('Error code', error.code, 'object', error);
			}

			function onUIErrorEvent(errorEvent) {
				onPlayerError(event.detail);
			}

			function initFailed(errorEvent) {
				console.error('Unable to load the UI library!');
			}
			document.addEventListener('shaka-ui-loaded', init);
			document.addEventListener('shaka-ui-load-failed', initFailed);