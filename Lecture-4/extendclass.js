// Parent class
class Media {
    constructor(info) {
        this.publistDate = info.publistDate;
        this.name = info.name;
    }
}

// Child class
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Oasis",
    name: 'Champagne Supernova',
    publistDate: 1996
});

console.log(mySong);