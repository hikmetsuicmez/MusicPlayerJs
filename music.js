class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const MusicList = [
    new Music("Boşver", "Nilüfer", "1.jpeg", "1.mp3"),
    new Music("Bu da Geçer mi Sevgilim", "Yalın", "2.jpeg", "2.mp3"),
    new Music("Aramızda Uçurumlar", "Suat Suna", "3.jpeg", "3.mp3"),
    new Music("Yolla", "Tarkan", "4.jpeg", "4.mp3"),
    new Music("Sen", "İdo Tatlıses", "5.jpeg", "5.mp3"),
    new Music("Bulutlara Esir Olduk", "Oğuzhan Koç", "6.jpeg", "6.mp3")
];