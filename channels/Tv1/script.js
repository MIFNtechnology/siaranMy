	var initPlayer = function(id,setup) {
		var gluePlayer = new GluePlyr();
		gluePlayer.setup(id,setup);
		return gluePlayer;
	};
	var title = "TV1";
	var img = "https://rtm.glueapi.io/v1/content/1/image/960x540/images.title?c=20230104";
	var token = "";
	var playerSettings = {
		apiPath : "https://rtm.glueapi.io",
		svgPath : "/latest/includes",
		watermark : "https://rtm-images.glueapi.io/filters:quality(100)/200x0/system/rtm-watermark.png",
		target : "player-card-1",
		poster :  "https://rtm.glueapi.io/v1/content/1/image/960x540/images.title?c=20230104",
		site : "RTMKlik",
		type : "video",
		skin : "0",
		psa : "",
		ads : false,
		casting : true
	}
	
	if(token != "") playerSettings.token = token;
	window.addEventListener('DOMContentLoaded', function(event){
		window.gluePlayer = initPlayer(1,playerSettings);
	});