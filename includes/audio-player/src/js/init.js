import "@babel/polyfill";
import RMRadioStation from "./RMRadioStation.js";

// ========================================

document.addEventListener( "DOMContentLoaded", () =>
{
    let data = getData();
    
    let radioStation = new RMRadioStation(
        data[ "name" ],
        data[ "logo" ],
        data[ "imgDuration" ],
        data[ "player" ],
        data[ "genres" ],
        data[ "playlistItems" ],
        data[ "posts" ],
        data[ "warnings" ]
    );
    
    radioStation.setRadioName( data[ "name" ] );
    radioStation.setMusicianImage( data[ "logo" ] );
    radioStation.addEventListeners();
    radioStation.createPlaylistLoop();
    radioStation.play();
})

// ========================================

function getData()
{
    return {
        "name": "Radio Classic",
        "logo": "test/radio-classic.jpg",
        "imgDuration": 3,
        "posts": [
            {
                "image": "test/tradition-1.jpg",
                "content": "Myslivost, or game-keeping, is a set of wildlife activities which serves to manage a population of animals within an environment's ecological capacity, including hunting animals due to overpopulation, when natural checks, such as predators, are missing, to breeding them if they are underrepresented in the forest. Animals are hunted for population control, food, and trophies. Myslivci (gamekeepers) breed animals in captivity and then release them into nature, preserving the species.",
            },
            {
                "image": "test/tradition-2.jpg",
                "content": "Have you ever heard about St. Mikulas? If not, you should at least know the name Nicholas. The story surrounding St. Mikulas is actually quite intriguing and inspirational. First of all, the name Mikulas is the Czech equivalent of the Greek name Nikolaos, meaning 'the victory of people' or 'winner among the people,' which may provide some foreshadowing of the story. Mikulas was very a generous and helpful bishop who lived in the 4th century in Greece. During his lifetime, he developed a reputation for being helpful to those in need and putting coins in their shoes. For a great number of miracles, which occurred during his time, he was also called 'Nicholas the Thaumaturge.'",
            },
            {
                "image": "test/tradition-3.jpg",
                "content": "One of the strongest Czech traditions, even embodied by national law, is Jmeniny (Name's Day). There is more to this tradition than just simply celebrating your name day on the calendar. Here's a peek behind the curtain. First of all, it's almost exclusively a European holiday. The tradition can find its roots, as with many European traditions, in religion. Specifically, in Christianity. It has been, without a doubt, the dominant religion throughout time across the ever-changing European borders. The Christian tradition of celebrating the patron saints gave the church an opportunity to enhance the official calendar and enable the parishioners and the faithful to worship their saints, day by day, all year round. As expected, the first names in the calendar were of various patron saints. On any given day, not only were the life and deeds of the saint celebrated, but also all the holders of the same name were allowed to celebrate the day as their own. In some Christian communities, one's Name Day may hold even bigger importance than one´s birthday. Many saints held the same name, thus Christian worshipers of the same name may have celebrated their Name Days on different days in the year, depending on which saint they had chosen as their patron saint. The saint’s day is based on the date of their passing. Many Christian calendars may differ from the official John Paul IV´s. Some Christians were also given various names during the act of confirmation or entry to the Order, so they celebrate more Name Days according to the names they bear.",
            },
        ],
        "player": "rm-radio-player",
        "playlistItems": [
            {
                "genre": "classical_jingles",
                "numOfMusicians": 1,
                "numOfSongsPerMusician": 1,
                "showPosts": 0,
            },
            {
                "genre": "classical",
                "numOfMusicians": 3,
                "numOfSongsPerMusician": 1,
                "showPosts": 0,
            }
        ],
        "warnings": [],
        "genres": [
            {
                "slug": "classical_jingles",
                "musicians": [
                    {
                        name: "Czech-American TV",
                        description: "",
                        images: [
                        ],
                        records: [
                            {
                                "title": "",
                                "url": "test/radio-classic-jingle-1.mp3",
                            },
                            {
                                "title": "",
                                "url": "test/radio-classic-jingle-2.mp3",
                            },
                            {
                                "title": "",
                                "url": "test/radio-classic-jingle-3.mp3",
                            },
                            {
                                "title": "",
                                "url": "test/radio-classic-jingle-4.mp3",
                            },
                            {
                                "title": "",
                                "url": "test/radio-classic-jingle-5.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                ],
            },
            {
                "slug": "classical",
                "musicians": [
                    {
                        name: "Adam Vaclav Michna z Otradovic",
                        description: "Poucny text o Adamovi.",
                        images: [
                            {
                                "url": "test/adam-vaclav-michna-z-otradovic.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "The Czech Lute",
                                "url": "test/adam-vaclav-michna-z-otradovic-the-czech-lute.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Antonin Dvorak",
                        description: "Poucny text o Antoninovi D.",
                        images: [
                            {
                                "url": "test/antonin-dvorak.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Humoresque No. 7",
                                "url": "test/antonin-dvorak-humoresque-no-7.mp3",
                            },
                            {
                                "title": "New World Symphony",
                                "url": "test/antonin-dvorak-new-world-symphony.mp3",
                            },
                            {
                                "title": "O Lovely Silver Moon",
                                "url": "test/antonin-dvorak-o-lovely-silver-moon.mp3",
                            },
                            {
                                "title": "Slavonic Dances",
                                "url": "test/antonin-dvorak-slavonic-dances.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Antonin Rejcha",
                        description: "Poucny text o Antoninovi R.",
                        images: [
                            {
                                "url": "test/antonin-rejcha.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Wind Quintet",
                                "url": "test/antonin-rejcha-wind-quintet.mp3",
                            },
                        ],
                        introductions: [
                            {
                                "url": "test/brezovska-desitka-introduction.mp3",
                            },
                            {
                                "url": "test/galanecka-introduction.mp3",
                            },
                        ],
                    },
                    {
                        name: "Bedrich Smetana",
                        description: "Poucny text o Bedrichovi.",
                        images: [
                            {
                                "url": "test/bedrich-smetana.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "From Bohemia's Woods and Fields",
                                "url": "test/bedrich-smetana-from-bohemias-woods-and-fields.mp3",
                            },
                            {
                                "title": "From My Life",
                                "url": "test/bedrich-smetana-from-my-life.mp3",
                            },
                            {
                                "title": "Sarka",
                                "url": "test/bedrich-smetana-sarka.mp3",
                            },
                            {
                                "title": "The Bartered Bride",
                                "url": "test/bedrich-smetana-the-bartered-bride.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Bohuslav Martinu",
                        description: "Poucny text o Bohuslavovi M.",
                        images: [
                            {
                                "url": "test/bohuslav-martinu.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Bouquet of Flowers",
                                "url": "test/bohuslav-martinu-bouquet-of-flowers.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Bohuslav Matej Cernohorsky",
                        description: "Poucny text o Bohuslavovi MC.",
                        images: [
                            {
                                "url": "test/bohuslav-matej-cernohorsky.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Toccata",
                                "url": "test/bohuslav-matej-cernohorsky-toccata.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Frantisek Xaver Brixi",
                        description: "Poucny text o Frantiskovi.",
                        images: [
                            {
                                "url": "test/frantisek-xaver-brixi-1.jpg",
                            },
                            {
                                "url": "test/frantisek-xaver-brixi-2.jpg",
                            },
                            {
                                "url": "test/frantisek-xaver-brixi-3.jpg",
                            },
                            {
                                "url": "test/frantisek-xaver-brixi-4.jpg",
                            },
                            {
                                "url": "test/frantisek-xaver-brixi-5.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Concerto for Organ",
                                "url": "test/frantisek-xaver-brixi-concerto-for-organ.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Jan Vaclav Vorisek",
                        description: "Poucny text o Janovi.",
                        images: [
                            {
                                "url": "test/jan-vaclav-vorisek.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Symphony",
                                "url": "test/jan-vaclav-vorisek-symphony.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Josef Suk",
                        description: "Poucny text o Josefovi.",
                        images: [
                            {
                                "url": "test/josef-suk.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Fairy Tale",
                                "url": "test/josef-suk-fairy-tale.mp3",
                            },
                            {
                                "title": "Serenade",
                                "url": "test/josef-suk-serenade.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Leos Janacek",
                        description: "Poucny text o Leosovi.",
                        images: [
                            {
                                "url": "test/leos-janacek.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "On an Overgrown Path",
                                "url": "test/leos-janacek-on-an-overgrown-path.mp3",
                            },
                            {
                                "title": "Sinfonietta",
                                "url": "test/leos-janacek-sinfonietta.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Pavel Josef Vejvanovsky",
                        description: "Poucny text o Pavlovi.",
                        images: [
                            {
                                "url": "test/pavel-josef-vejvanovsky.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Serenade",
                                "url": "test/pavel-josef-vejvanovsky-serenade.mp3",
                            },
                            {
                                "title": "Sonata Venatoria",
                                "url": "test/pavel-josef-vejvanovsky-sonata-venatoria.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Vitezslav Novak",
                        description: "Poucny text o Vitezslavovi.",
                        images: [
                            {
                                "url": "test/vitezslav-novak.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "A Pair in Love",
                                "url": "test/vitezslav-novak-a-pair-in-love.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                    {
                        name: "Zdenek Fibich",
                        description: "Poucny text o Zdenkovi.",
                        images: [
                            {
                                "url": "test/zdenek-fibich.jpg",
                            },
                        ],
                        records: [
                            {
                                "title": "Poem from an Idyll",
                                "url": "test/zdenek-fibich-poem-from-an-idyll.mp3",
                            },
                        ],
                        introductions: [
                        ],
                    },
                ],
            },
        ],
    };
} // GET DATA
