const https = require('node:https');
function fetchNosRankingData(region, server, nick) {
    let path = '/v1/';
    switch (region.toLowerCase()) {
        case 'de':
            path += 'de/';
            break;
        case 'fr':
            path += 'fr/';
            break;
        case 'en':
        case 'us':
        case 'int':
            break;
        default:
            throw new Error('Région non supportée.');
    }
    let queryParams = '';
    if (server) { queryParams += `server=${server}&` };
    if (nick) { queryParams += `nick=${encodeURIComponent(nick)}` };
    if (queryParams) { path += `?${queryParams}`};
    const options = { hostname: 'api.nosranking.com', port: 443, path: path, method: 'GET', headers: { 'Content-Type': 'application/json'}};
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {data += chunk});
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`Request failed with status code ${res.statusCode}`));
                }
            });
        });
        req.on('error', (e) => {reject(e)});
        req.end();
    });
}
module.exports = { fetchNosRankingData };
