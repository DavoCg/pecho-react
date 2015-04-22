var baseURL =  'http://52.17.76.123:3000';

var api = {
    getPlaces: function(lat, lon, distance, hashtags){
        hashtags = hashtags.join(',').trim();
        var url = '${baseURL}/places?lat=${lat}&lon=${lon}&distance=${distance}$hashtags=${hashtags}';
        return fetch(url).then((res) => res.json())
    }
};

module.exports = api;