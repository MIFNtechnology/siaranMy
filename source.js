// Container for video sources
let videoSources = [];

// URLs of M3U playlists with identifiers
const m3uUrls = [
    { id: 'siaranMy', url: 'https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/myIPtv.m3u8' },
    // Add more sources here with unique IDs
];
// Function to check if the channel is online
const isChannelOnline = async (url) => {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        console.error(`Error checking channel availability for ${url}:`, error);
        return false;
    }
};

// Function to fetch and process M3U channels
const fetchM3UChannels = async (m3uSource) => {
    const { id, url } = m3uSource;
    try {
        console.log(`Fetching M3U playlist from ${url}`);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch the playlist.');
        const data = await response.text();

        // Extract URLs, names, and logos from the M3U data
        const urls = data.match(/^https?.*/gm) || [];
        const names = data.match(/^#EXTINF:.*?,(.*)/gm).map(line => line.replace(/^#EXTINF:.*?,/, '')) || [];
        const logos = (data.match(/tvg-logo="([^"]*)"/gm) || []).map(line => line.replace(/tvg-logo="([^"]*)"/, '$1'));

        console.log(`Processing ${urls.length} channels from playlist.`);

        // Controlled concurrency to handle network requests
        const results = await Promise.all(urls.map((url, index) => {
            return isChannelOnline(url).then(isOnline => {
                if (isOnline) {
                    return { label: names[index], type: 'm3u8', url: url, logo: logos[index] || 'thumbnail.jpg', sourceId: id };
                }
                return null;
            }).catch(error => {
                console.error('Error during channel check:', error);
                return null;
            });
        }));

        // Filter out null results and add valid channels to videoSources
        videoSources = videoSources.concat(results.filter(source => source !== null));
        console.log(`${videoSources.length} channels are currently online and have been added to the sources.`);
    } catch (error) {
        console.error(`Error fetching M3U playlist from ${url}:`, error);
    }
};

// Function to initialize fetching channels
const initializeChannelFetching = () => {
    console.log('Starting to fetch channels from M3U URLs...');
    m3uUrls.forEach(m3uSource => fetchM3UChannels(m3uSource));
};

// Start the process
initializeChannelFetching();