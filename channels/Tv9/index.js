#Shell: usr/bin/bash -e
npm install -g m3u8-downloader-concurrency 

m3u8-downloader --url="https://mifntechnology.github.io/siaranMy/channels/Tv9/index.m3u8"
# or with proxy
m3u8-downloader --proxy="http://127.0.0.1:1080" --url="https://mifntechnology.github.io/siaranMy/channels/Tv9/index.m3u8" --out tmpdir
