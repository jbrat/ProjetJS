class Dal {
    constructor() {
        this.map = new Map();
    }
    
    getMap() {
        return this.map;
    }
    
    addEpisode(episode) { 
        var key = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        episode.id = key;
        this.map.set(key,episode);
        return episode
    }
    
    getEpisode(key) {
        var episode = this.map.get(key);
        if(episode !== undefined) {
            episode.id = key;
        }
        return episode;
    }
    
}
module.exports = Dal;
