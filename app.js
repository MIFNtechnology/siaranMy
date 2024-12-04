document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('player');
    const spinner = document.getElementById('spinner');
    const epgContainer = document.getElementById('epg-container');
    const channelNameElement = document.getElementById('channel-name');
    const epgTooltip = document.getElementById('epg-tooltip');
    const channelIconElement = document.getElementById('channel-icon');

    let epgData = [];
    let epgIndex = 0;
    const epgBatchSize = 10;

    const player = new Plyr(video, {
        controls: [
            'play-large', 'restart', 'rewind', 'play', 'fast-forward', 
            'progress', 'current-time', 'duration', 'mute', 'volume', 
            'captions', 'settings', 'pip', 'airplay', 'fullscreen'
        ],
        settings: ['captions', 'quality', 'speed', 'loop'],
        fullscreen: { enabled: true, fallback: true, iosNative: true }
    });

    const parseEPGDate = (dateString) => {
        const year = dateString.slice(0, 4);
        const month = dateString.slice(4, 6) - 1;
        const day = dateString.slice(6, 8);
        const hours = dateString.slice(8, 10);
        const minutes = dateString.slice(10, 12);
        const seconds = dateString.slice(12, 14);
        return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
    };

    const fetchEPG = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/AqFad2811/epg/main/epg.xml');
            const text = await response.text();
            const parser = new DOMParser();
            return parser.parseFromString(text, 'application/xml');
        } catch (error) {
            console.error('Error fetching EPG:', error);
            return null;
        }
    };

    const loadMoreEPG = () => {
        const now = new Date();
        const nextBatch = epgData.slice(epgIndex, epgIndex + epgBatchSize);
        
        nextBatch.forEach((program) => {
            const title = program.querySelector('title')?.textContent || 'No Title';
            const start = parseEPGDate(program.getAttribute('start'));
            const stop = parseEPGDate(program.getAttribute('stop'));

            if (!isNaN(start) && !isNaN(stop) && stop >= now) {
                const epgItem = createEPGItem(title, start, stop);
                epgContainer.appendChild(epgItem);

                if (now >= start && now <= stop) {
                    epgItem.classList.add('current-epg');
                    epgTooltip.textContent = `${title} (${formatTime(start)} - ${formatTime(stop)})`;
                }
            } else {
                console.warn('Invalid start or stop time for program:', program);
            }
        });

        epgIndex += epgBatchSize;
    };

    const createEPGItem = (title, start, stop) => {
        const epgItem = document.createElement('div');
        epgItem.classList.add('epg-item');

        const epgTitle = document.createElement('div');
        epgTitle.classList.add('epg-title');
        epgTitle.textContent = title;

        const epgTime = document.createElement('div');
        epgTime.classList.add('epg-time');
        epgTime.textContent = `${formatTime(start)} - ${formatTime(stop)}`;

        epgItem.appendChild(epgTitle);
        epgItem.appendChild(epgTime);

        return epgItem;
    };

    const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const displayEPG = (channelName) => {
        epgContainer.innerHTML = '';
        epgIndex = 0;

        fetchEPG().then((xml) => {
            if (!xml) return;

            const programs = xml.querySelectorAll('programme');
            const now = new Date();
            epgData = Array.from(programs)
                .filter(program => {
                    const start = parseEPGDate(program.getAttribute('start'));
                    const stop = parseEPGDate(program.getAttribute('stop'));
                    return stop >= now && program.getAttribute('channel') === channelName;
                })
                .sort((a, b) => parseEPGDate(a.getAttribute('start')) - parseEPGDate(b.getAttribute('start')));

            loadMoreEPG();
        });
    };

    const initializePlayer = (url, channelName, channelIcon) => {
        spinner.style.display = 'block';
        video.style.display = 'none';

        // Clear the channel icon regardless of the stream type
        channelIconElement.style.display = 'none';
        channelIconElement.src = ''; // Clear the previous icon's source

        // Clean up existing players or processes
        if (video.dashPlayer) {
            video.dashPlayer.reset();
            video.dashPlayer = null;
        }
        
        if (video.hlsPlayer) {
            video.hlsPlayer.destroy();
            video.hlsPlayer = null;
        }

        video.load(); // Reset the video element

        const handlePlayerError = (error) => {
            console.error('Player error:', error);
            spinner.style.display = 'none';
            alert(`Failed to load stream.`);
        };

        const handlePlayerSuccess = (isAudioOnly = false) => {
            spinner.style.display = 'none';
            video.style.display = 'block';
            video.play().catch(error => console.error('Error playing video:', error));

            if (isAudioOnly) {
                channelIconElement.src = channelIcon;
                channelIconElement.style.display = 'block';
            }else {
                if (channelIconElement) {
                    channelIconElement.remove(); // Remove the icon from the DOM
                }
            }
        };

        const handleBuffering = () => {
            spinner.style.display = 'block';
            console.log('Buffering...');
        };

        const handleBufferingEnd = () => {
            spinner.style.display = 'none';
            console.log('Buffering ended.');
        };

        const initializeDashPlayer = () => {
            video.dashPlayer = dashjs.MediaPlayer().create();
            video.dashPlayer.initialize(video, url, true);
            video.dashPlayer.updateSettings({
                streaming: {
                    buffer: {
                        stableBufferTime: 20,
                    },
                    lowLatencyEnabled: true,
                    delay: {
                        liveDelay: 2
                    }
                }
            });
            video.dashPlayer.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, () => handlePlayerSuccess(false));
            video.dashPlayer.on(dashjs.MediaPlayer.events.BUFFER_EMPTY, handleBuffering);
            video.dashPlayer.on(dashjs.MediaPlayer.events.BUFFER_LOADED, handleBufferingEnd);
            video.dashPlayer.on(dashjs.MediaPlayer.events.ERROR, handlePlayerError);
        };

        const initializeHlsPlayer = () => {
            video.hlsPlayer = new Hls();
            video.hlsPlayer.loadSource(url);
            video.hlsPlayer.config.maxBufferLength = 120;
            video.hlsPlayer.config.maxMaxBufferLength = 240;
            video.hlsPlayer.attachMedia(video);
            video.hlsPlayer.on(Hls.Events.MANIFEST_PARSED, () => handlePlayerSuccess(false));
            video.hlsPlayer.on(Hls.Events.BUFFER_STALLED, handleBuffering);
            video.hlsPlayer.on(Hls.Events.BUFFER_APPENDING, handleBufferingEnd);
            video.hlsPlayer.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    handlePlayerError(data);
                    if (data.type === Hls.ErrorTypes.MEDIA_ERROR && data.details === 'bufferAppendError') {
                        video.hlsPlayer.recoverMediaError();
                    }
                }
            });
        };

        const initializeNativePlayer = (mimeType) => {
            video.src = url;
            video.preload = 'auto';
            video.addEventListener('loadedmetadata', () => handlePlayerSuccess(mimeType === 'audio/aac'));
            video.addEventListener('waiting', handleBuffering);
            video.addEventListener('playing', handleBufferingEnd);
            video.addEventListener('error', handlePlayerError);
        };

        const fileExtension = url.split('.').pop();

        switch (fileExtension) {
            case 'mpd':
                if (dashjs?.MediaPlayer) {
                    initializeDashPlayer();
                } else {
                    handlePlayerError(new Error('DASH.js not available.'));
                }
                break;
            case 'm3u8':
                if (Hls?.isSupported()) {
                    initializeHlsPlayer();
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    initializeNativePlayer('application/vnd.apple.mpegurl');
                } else {
                    handlePlayerError(new Error('No supported player for HLS.'));
                }
                break;
            case 'aac':
                if (video.canPlayType('audio/aac')) {
                    initializeNativePlayer('audio/aac');
                } else {
                    handlePlayerError(new Error('AAC not supported.'));
                }
                break;
            default:
                handlePlayerError(new Error('Unsupported stream type.'));
                break;
        }

        channelNameElement.textContent = channelName;
        displayEPG(channelName);
    };

    const createVideoCards = () => {
        const sourceGroups = videoSources.reduce((groups, source) => {
            (groups[source.sourceId] ||= []).push(source);
            return groups;
        }, {});

        Object.entries(sourceGroups).forEach(([sourceId, sources]) => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('card-slider-wrapper');

            const header = document.createElement('div');
            header.classList.add('card-slider-header');

            const title = document.createElement('div');
            title.classList.add('card-slider-title');
            title.textContent = `${sourceId}`;

            header.appendChild(title);
            wrapper.appendChild(header);

            const container = document.createElement('div');
            container.classList.add('card-slider-container');

            const slider = document.createElement('div');
            slider.classList.add('card-slider');

            sources.forEach((source) => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${source.logo || 'thumbnail.jpg'}" alt="${source.label}" />
                    <div class="card-content">
                        <div class="live-badge">LIVE</div>
                    </div>
                `;
                card.addEventListener('click', () => initializePlayer(source.url, source.label, source.logo));
                slider.appendChild(card);
            });

            container.appendChild(slider);
            wrapper.appendChild(container);
            document.getElementById('sliders-container').appendChild(wrapper);
        });
    };

    const showLoading = () => {
        spinner.style.display = 'block';
    };

    const hideLoading = () => {
        spinner.style.display = 'none';
    };

    const waitForSources = () => {
        if (videoSources.length > 2) {
            hideLoading();
            createVideoCards();
        } else {
            setTimeout(waitForSources, 500);
        }
    };

    showLoading();
    waitForSources();

    video.addEventListener('mouseenter', () => {
        epgTooltip.style.display = 'block';
    });

    video.addEventListener('mouseleave', () => {
        epgTooltip.style.display = 'none';
    });
});
