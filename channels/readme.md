# How to create?
Example files to create and fill in.

## Create index m3u8
1. Copy this file and fill in https m3u8 link at remark ( fill in ) ,each on resolution.
2. After fill in,save it with name `index.m3u8` or `etc.m3u8`
3. Example afer save file,
* `(https://example.github.io/respontory/channel/tvname/index.m3u8)`
 

| FRAME-RATE |
|----|
|#EXTM3U
#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=1190000,BANDWIDTH=1490000,RESOLUTION=852x480,FRAME-RATE=25.000,CODECS="avc1.4d001e,mp4a.40.2",CLOSED-CAPTIONS=NONE <copy-icon>|
| (https:// fill in chunk,mono etc. 853×480...m3u8) |
|#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=2400000,BANDWIDTH=3000000,RESOLUTION=1280x720,FRAME-RATE=25.000,CODECS="avc1.4d001f,mp4a.40.2",CLOSED-CAPTIONS=NONE|
| (https://  fill in chunk,mono etc. 1920×720...m3u8) |
|#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=3440000,BANDWIDTH=4300000,RESOLUTION=1920x1080,FRAME-RATE=25.000,CODECS="avc1.4d0028,mp4a.40.2",CLOSED-CAPTIONS=NONE|
| (https://  fill in chunk,mono etc. 1920×1080...m3u8) |

## Create index html
1. Copy this file and fill in at remark ( fill in ) place.
2. `<title> (TvName) </title>`
3. `<source src= ("https://example.github.io/respontory/channel/tvname/index.m3u8") type= "application/... > </source>`
4. After fill in,save it name with `index.html` or `etc.html`
5. Dont forget to remove this symbol [ ` (  )  ]
6. Example after save file
* `https://example.github.io/respontory/channel/tvname/index.html`

| html |
|----|
| `<!DOCTYPE html> <html> <head> <title> (fill in) </title> <style type="text/css" > * {user-select: auto !important; -webkit-user-select: auto !important;} </style> <input type="hidden" id="inject-idm-text-selection" > <style> </style> </head> <body> <video controls="" autoplay="" name="media" > <source src="(fill in)" type="application/vnd.apple.mpegurl" > </video> </body> </html>` |

## Create m3u8 playlist
1. Copy this file and fill in at remark ( fill in ) place.
2. Save it name `your title.m3u8`.example `iptv.m3u8`.

|  |
|----|
|#EXTM3U
#EXTINF:-1 tvg-id="fill in" tvg-name="fill in" tvg-number="fill in" tvg-logo="`https://fill in .png`"
(`https://fill in your index.m3u8`)
#EXTINF:-1 tvg-id="fill in" tvg-name="fill in" tvg-number="fill in" tvg-logo="`https://fill in .png`"
(`https://fill in your index.m3u8`)
#EXTINF:-1 tvg-id="fill in" tvg-name="fill in" tvg-number="fill in" tvg-logo="`https://fill in .png`"
(`https://fill in your index.m3u8`) |
