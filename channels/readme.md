# Cara untuk membuat pautan m3u/m3u8 & HTML.
- Hanya untuk nota saya sendiri,supaya saya tidak lupa.
- Jika bermanfaat untuk sesiapa,sila gunakan sahaja.

___
## Membuat pautan m3u/m3u8
1. Salin fail ini dan isikan pautan m3u8 disetiap satu resolasi pada tempat yang ditanda (isi..).
2. Simpan dengan "nama".m3u/m3u8 .
3. Jangan lupa buang simbol () .
 
| #EXT-X-STREAM-INF |
|----|
|#EXTM3U
#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=1190000,BANDWIDTH=1490000,RESOLUTION=852x480,FRAME-RATE=25.000,CODECS="avc1.4d001e,mp4a.40.2",CLOSED-CAPTIONS=NONE <copy-icon>|
| (Isi pautan resolasi 853×480 m3u8) |
|#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=2400000,BANDWIDTH=3000000,RESOLUTION=1280x720,FRAME-RATE=25.000,CODECS="avc1.4d001f,mp4a.40.2",CLOSED-CAPTIONS=NONE|
| (Isi pautan resolasi 1920×720 m3u8) |
|#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=3440000,BANDWIDTH=4300000,RESOLUTION=1920x1080,FRAME-RATE=25.000,CODECS="avc1.4d0028,mp4a.40.2",CLOSED-CAPTIONS=NONE|
| (Isi pautan resolasi 1920×1080 m3u8) |
____
## Membuat pautan HTML
1. Salin fail HTML dan isikan pada tempat yang ditanda (isi..) .
2. '<title> (isi tajuk) </title>'
3. '<source src= "(isi pautan m3u8)" '
4. Simpan dengan 'nama'.html
5. Jangan lupa buang simbol '[ ` (  )  ]'

| HTML |
|----|
| `[<!DOCTYPE html> <html> <head> <title> (isi tajuk) </title> <style type="text/css" > * {user-select: auto !important; -webkit-user-select: auto !important;} </style> <input type="hidden" id="inject-idm-text-selection" > <style> </style> </head> <body> <video controls="" autoplay="" name="media" > <source src="(isi pautan m3u8)" type="application/vnd.apple.mpegurl" > </video> </body> </html>]` |
____
## Membuat senarai pemain m3u/m3u8
1. Salin fail ini dan isi pada tempat yang ditanda (isi..) .
2. Simpan dengan 'nama'.m3u/m3u8 .
3. Jangan lupa buang simbol ()

| M3U/M3U8 PLAYLIST |
|----|
|#EXTM3U
#EXTINF:-1 tvg-id="fill in" tvg-name="fill in" tvg-number="fill in" tvg-logo="`HTTPS://fill in .png`"
(pautan m3u/m3u8/html)
#EXTINF:-1 tvg-id="fill in" tvg-name="fill in" tvg-number="fill in" tvg-logo="`HTTPS://fill in .png`"
(pautan m3u/m3u8/html)
#EXTINF:-1 tvg-id="fill in" tvg-name="fill in" tvg-number="fill in" tvg-logo="`HTTPS://fill in .png`"
(pautan m3u/m3u8/html) |
