# <center>MIFNtechnology WEB_PLAYER</center>

# KOD  HTML UNTUK PEMAIN TV&RADIO

## TV_WEB_PLAYER

* MASUKKAN/TUKAR LINK


* `control poster="image link png,jpg etc"`
* `<source src="video link m3u8 etc" type="application/vnd.apple.mpegurl">`


```html

<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" href="https://ejunds.github.io/mifn-iptv/style.css">
			<link href="https://vjs.zencdn.net/8.9.0/video-js.css" rel="stylesheet" />
			<script defer src="https://vjs.zencdn.net/8.9.0/video.min.js">
			</script>
		</head>
		<center>
			<body>
				<video
					id="siaranMy"
					class="video-js"
					controls
					preLoad="auto"
					control poster="https://github.com/MIFNtechnology/siaranMy/raw/main/logo/Tv1.png"
					width="900"
					height="700"
					data-setup="{}"
					>
					<source src=" https://mifntechnology.github.io/siaranMy/channels/Tv1/index.m3u8" type="application/vnd.apple.mpegurl">
				</video>
			</body>
		</center>
    </html>
 ```
 
## RADIO_WEB_PLAYER

* MASUKKAN/TUKAR LINK


* `<audio id="radioPlayer" src="radio link m3u8,aac etc" autoplay="true" controls="true"></audio>`


```html
<link href="https://mifntechnology.github.io/siaranMy/script/radio.css" rel="stylesheet" />

<div class="radio-container">
  <div class="radio-header">
    <div class="radio-name">Best Fm</div>
    <div class="current-presenter">by@Kaitou_E</div>
  </div>
  <div class="radio-body">
    <div class="shine"></div>
    <div class="current-song">
      MIFNtechnology
    </div>
    <div class="radio-buttons">
      <audio id="radioPlayer" src="https://mifntechnology.github.io/siaranMy/radio/BestFm/playlist.m3u8" autoplay="true" controls="true"></audio>
      <div class="button button-play"><i class="fa fa-pause" aria-hidden="true"></i></div>
      <div class="button button-stop"><i class="fa fa-stop" aria-hidden="true"></i></div> 
      
<div class="button button-request">Request</div>

    </div>
    <div class="wave-bars">
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
      <div class="wave wave-4"></div>
      <div class="wave wave-5"></div>
    </div>
  </div>
  <div class="radio-message">
    <div class="message-header">
     RADIOmy
    </div>
    <div class="message-body">
      
    </div>
  </div>
  <div class="radio-volume">
    <div class="button button-sound"><i class="fa fa-volume-up" aria-hidden="true"></i></div>
    <input id="radioVol" class="range" type="range" value="50" oninput="setVolume()" onchange="setVolume()">
  </div>
</div>
```


* CSS SCRIPT (radio.css)
* GUNA SCRIPT CSS INI ATAU GUNA LINK YANG TERSEDIA PADA KOD HTML
* CONTOH;

* `<link href="https://mifntechnology.github.io/siaranMy/script/radio.css" rel="stylesheet" />`



```CSS
body {

  background: #ccc;

  user-select: none;

  color: #fff;

  font-family: "Open Sans", sans-serif;

}



.radio-container {

  width: 350px;

  margin: auto;

}

.radio-container .radio-header {

  background-color: #fff;

  text-align: center;

  padding: 10px 0;

}

.radio-container .radio-header .radio-name {

  font-size: 26px;

  font-weight: 100;

  color: #43ac6a;

}

.radio-container .radio-header .current-presenter {

  font-size: 14px;

  font-weight: 400;

  color: #43ac6a;

}

.radio-container .radio-body {

  background: #43ac6a;

  /* For browsers that do not support gradients */

  background: -webkit-linear-gradient(left top, #4eee8a, #183e26);

  /* For Safari 5.1 to 6.0 */

  background: -o-linear-gradient(top left, #4eee8a, #183e26);

  /* For Opera 11.1 to 12.0 */

  background: -moz-linear-gradient(top left, #4eee8a, #183e26);

  /* For Firefox 3.6 to 15 */

  background: linear-gradient(to bottom right, #4eee8a, #183e26);

  /* Standard syntax */

  background-size: 100% 200%;

  animation: background-scroll 7s alternate ease-in-out infinite;

  height: 250px;

  position: relative;

  overflow: hidden;

}

.radio-container .radio-body .current-song {

  font-size: 20px;

  font-weight: 100;

  text-align: center;

  padding: 110px 0;

  position: absolute;

  z-index: 2;

  width: 350px;

}

.radio-container .radio-body .radio-buttons {

  position: absolute;

  bottom: 0;

  left: 15px;

  height: 50px;

  width: 320px;

  z-index: 2;

}

.radio-container .radio-body .radio-buttons .button {

  color: rgba(255, 255, 255, 0.6);

  float: left;

}

.radio-container .radio-body .radio-buttons .button:hover {

  color: rgba(255, 255, 255, 0.8);

}

.radio-container .radio-body .radio-buttons .button-play {

  font-size: 2em;

  width: 25px;

}

.radio-container .radio-body .radio-buttons .button-stop {

  margin: 12px;

}

.radio-container .radio-body .radio-buttons .button-request {

  float: right;

  margin-top: 16px;

  font-size: 14px;

}

.radio-container .radio-body .shine {

  position: absolute;

  top: -50px;

  left: -90px;

  height: 120px;

  width: 300px;

  background: linear-gradient(360deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));

  transform: rotate(-45deg);

}

.radio-container .radio-body .wave-bars {

  position: relative;

  z-index: 1;

  height: 100%;

}

.radio-container .radio-body .wave-bars .wave {

  margin-top: 125px;

  transform: translateY(-50%);

  height: 3px;

  width: 4px;

  background: rgba(255, 255, 255, 0.2);

  float: left;

  margin-right: 3px;

  animation-delay: 2s;

}

.radio-container .radio-body .wave-bars .wave:first-child {

  margin-left: 2px;

}

.radio-container .radio-body .wave-bars .wave:last-child {

  margin-right: 0;

}

.radio-container .radio-body .wave-bars .wave.wave-1 {

  animation: wave1 0.5s linear alternate infinite;

}

.radio-container .radio-body .wave-bars .wave.wave-2 {

  animation: wave2 0.7s linear alternate infinite;

}

.radio-container .radio-body .wave-bars .wave.wave-3 {

  animation: wave3 0.6s linear alternate infinite;

}

.radio-container .radio-body .wave-bars .wave.wave-4 {

  animation: wave4 0.5s linear alternate infinite;

}

.radio-container .radio-body .wave-bars .wave.wave-5 {

  animation: wave5 0.6s linear alternate infinite;

}

.radio-container .radio-body .wave-bars .wave.no-animation {

  animation: stopwaves 1s linear;

  animation-iteration-count: 1;

  animation-fill-mode: forwards;

}

.radio-container .radio-message {

  background: linear-gradient(to bottom, #381026, #462E48);

  padding: 15px;

  text-align: center;

}

.radio-container .radio-message .message-header {

  font-weight: 600;

}

.radio-container .radio-volume {

  background: #fff;

  padding: 10px 15px;

  height: 40px;

}

.radio-container .radio-volume .button-sound {

  float: left;

  font-size: 2em;

  color: #ddd;

  width: 30px;

}

.radio-container .radio-volume .button-sound:hover {

  color: #bbb;

}

.radio-container .radio-volume input[type=range] {

  position: relative;

  top: 8px;

  width: 260px;

  height: 9px;

  margin: 10px 12px;

  display: inline;

  -webkit-appearance: none;

  border-radius: 8px;

  border: 1px solid #ddd;

  background-color: #fff;

}

.radio-container .radio-volume input[type=range]::-webkit-slider-thumb {

  -webkit-appearance: none;

  background-color: #fff;

  border: 1px solid #ccc;

  width: 20px;

  height: 20px;

  border-radius: 10px;

  cursor: pointer;

}

.radio-container .radio-volume input[type=range]::-moz-range-track {

  border-radius: 8px;

  width: 260px;

  height: 7px;

  border: 1px solid #ddd;

  background-color: #fff;

}

.radio-container .radio-volume input[type=range]::-moz-range-thumb {

  background: #fff;

  border: 1px solid #ccc;

  width: 18px;

  height: 18px;

  border-radius: 9px;

  cursor: pointer;

}

.radio-container .radio-volume input[type=range]::-ms-track {

  width: 164px;

  height: 7px;

  cursor: pointer;

  background: transparent;

  border-color: transparent;

  color: transparent;

}

.radio-container .radio-volume input[type=range]:focus {

  outline: 0;

}

.radio-container .button {

  cursor: pointer;

}



@-webkit-keyframes background-scroll {

  0% {

    background-position: 0 0;

  }

  100% {

    background-position: 0 100%;

  }

}

@-moz-keyframes background-scroll {

  0% {

    background-position: 0 0;

  }

  100% {

    background-position: 0 100%;

  }

}

@keyframes background-scroll {

  0% {

    background-position: 0 0;

  }

  100% {

    background-position: 0 100%;

  }

}

@-webkit-keyframes wave1 {

  0% {

    height: 10%;

  }

  33% {

    height: 30%;

  }

  66% {

    height: 15%;

  }

  100% {

    height: 35%;

  }

}

@-moz-keyframes wave1 {

  0% {

    height: 10%;

  }

  33% {

    height: 30%;

  }

  66% {

    height: 15%;

  }

  100% {

    height: 35%;

  }

}

@keyframes wave1 {

  0% {

    height: 10%;

  }

  33% {

    height: 30%;

  }

  66% {

    height: 15%;

  }

  100% {

    height: 35%;

  }

}

@-webkit-keyframes wave2 {

  0% {

    height: 40%;

  }

  33% {

    height: 20%;

  }

  66% {

    height: 40%;

  }

  100% {

    height: 20%;

  }

}

@-moz-keyframes wave2 {

  0% {

    height: 40%;

  }

  33% {

    height: 20%;

  }

  66% {

    height: 40%;

  }

  100% {

    height: 20%;

  }

}

@keyframes wave2 {

  0% {

    height: 40%;

  }

  33% {

    height: 20%;

  }

  66% {

    height: 40%;

  }

  100% {

    height: 20%;

  }

}

@-webkit-keyframes wave3 {

  0% {

    height: 30%;

  }

  33% {

    height: 45%;

  }

  66% {

    height: 30%;

  }

  100% {

    height: 15%;

  }

}

@-moz-keyframes wave3 {

  0% {

    height: 30%;

  }

  33% {

    height: 45%;

  }

  66% {

    height: 30%;

  }

  100% {

    height: 15%;

  }

}

@keyframes wave3 {

  0% {

    height: 45%;

  }

  33% {

    height: 20%;

  }

  66% {

    height: 30%;

  }

  100% {

    height: 15%;

  }

}

@-webkit-keyframes wave4 {

  0% {

    height: 30%;

  }

  33% {

    height: 25%;

  }

  66% {

    height: 45%;

  }

  100% {

    height: 25%;

  }

}

@-moz-keyframes wave4 {

  0% {

    height: 30%;

  }

  33% {

    height: 25%;

  }

  66% {

    height: 45%;

  }

  100% {

    height: 25%;

  }

}

@keyframes wave4 {

  0% {

    height: 30%;

  }

  33% {

    height: 25%;

  }

  66% {

    height: 45%;

  }

  100% {

    height: 25%;

  }

}

@-webkit-keyframes wave5 {

  0% {

    height: 20%;

  }

  33% {

    height: 35%;

  }

  66% {

    height: 15%;

  }

  100% {

    height: 35%;

  }

}

@-moz-keyframes wave5 {

  0% {

    height: 20%;

  }

  33% {

    height: 35%;

  }

  66% {

    height: 15%;

  }

  100% {

    height: 35%;

  }

}

@keyframes wave5 {

  0% {

    height: 20%;

  }

  33% {

    height: 35%;

  }

  66% {

    height: 15%;

  }

  100% {

    height: 35%;

  }

}

@keyframes stopwaves {

  100% {

    height: 3px;

  }

}
```