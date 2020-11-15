import "@babel/polyfill";
//import $ from "jquery";
//window.jQuery = window.$ = require("jquery");
//require("jquery-ui");
import RMRadioStation from "./RMRadioStation.js";

// ========================================

document.addEventListener( "DOMContentLoaded", () =>
{
    let data = rm_data;//getData();
	
	console.log(data);
	
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
	
    console.log("jedeme metody");
	
    radioStation.setRadioName( data[ "name" ] );
    radioStation.setMusicianImage( data[ "logo" ] );
    //radioStation.addEventListeners();
    //radioStation.createPlaylistLoop();
    //radioStation.play();
	
	console.log("konec");
})

// ========================================

function getData()
{
    return {
        "name": "Radio Classic",
        "logo": "test/radio-classic.jpg",
        "imgDuration": 6,
        "player": "rm-radio-player",
        "playlistItems": [
            {
                "genre": "classical_jingles",
                "numOfMusicians": 1,
                "numOfSongsPerMusician": 1,
                "showPosts": false,
            },
            {
                "genre": "classical",
                "numOfMusicians": 3,
                "numOfSongsPerMusician": 1,
                "showPosts": false,
            }
        ],
        "warnings": [
            {
                "isActive": true,
                "first": 4,
                "step": 4,
                "title": "Membership Warning",
                "message": "Do you want to listen without the interruption? Click the OK button and register!",
                "buttonText": "OK",
                "buttonLink": "http://www.testcatv.site/membership-signup/",
            },
            {
                "isActive": true,
                "first": 8,
                "step": 8,
                "title": "Streaming Warning",
                "message": "Are you still listening? Click the OK button and continue!",
                "buttonText": "OK",
                "buttonLink": "",
            },
        ],
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
                        description: "Adam Vaclav Michna z Otradovic – literally Adam Vaclav Michna of Otradovice – (c. 1600 –  1676). Jindrichuv Hradec was a Czech Catholic poet, composer, hymn writer, organist and choir leader of the early Baroque era. He is also known in simplified form as Adam Michna and during his life as Adamus Wenceslaus Michna de Ottradowicz. He was the most important Czech composer and poet of the early Baroque who initiated the development of Czech art in that era and became a significant inspiration for Czech artists of future generations.",
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
                        description: "Antonin Leopold Dvorak (September 8, 1841 – May 1, 1904) was one of the first Czech composers to achieve widespread international acclaim. He was born in Nelahozeves, near Prague, in what was then the Austrian Empire. He was the first of eleven children born to Frantisek and Anna Dvorak, and he was baptized as a Roman Catholic in his village's church of St. Andrew. His Catholic upbringing and love of Nelahozeves and his Bohemian heritage were to strongly influence his musical career.",
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
                        description: "Antonin Rejcha (February 26, 1770 – May 28, 1836), known as Anton or Antoine Reicha, was a Czech-born French composer and music theorist. Due to his unwillingness to have his music published, he fell into obscurity soon after his death and his life and work have yet to be intensively studied. He is now best remembered for his substantial early contributions to the wind quintet literature and his role as the teacher of such pupils as Hector Berlioz and Franz Liszt.",
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
                        description: "Friedrich Smetana (March 2, 1824 – May 12, 1884), later known as Bedrich Smetana, was born in Litomysl near the traditional border between Bohemia and Moravia, which were then provinces of the Habsburg Empire. He was the third child and first son of Frantisek Smetana, a moderately wealthy brewer who played violin in a string quartet, and his third wife, Barbora Lynkova, a dancer. Frantisek had fathered eight children in two earlier marriages, five of whom (all daughters) survived infancy. He and Barbora had ten more children, seven of whom reached adulthood. German was the official language of Bohemia in the nineteenth century, as the region was then under Habsburg rule. Frantisek knew Czech, but for business and social reasons, he rarely used it, and his children were ignorant of correct Czech until much later in their lives.",
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
                        description: "Bohuslav Martinu (December 8, 1890 – August 28, 1959) was born in the tower of the St. Jakub Church in Policka, a town in Bohemia near the Moravian border. His father Ferdinand, a shoemaker, worked as the church sexton and the town’s fire watchman, positions that allowed the family to live in the tower apartment. Bohuslav was a sickly and shy child: his father and older sister frequently had to carry him up the tower’s 193 steps, and he refrained from participating in school activities like plays or pageants.",
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
                        description: "Bohuslav Matej Cernohorsky  (1684, Nymburk, Bohemia – 1742, Graz, Austria) was a Czech composer, organist and teacher of the baroque era. He wrote among other works motets, other choral works (a fugue Laudetur Jesus Christus is cited by the Baroque Music Library as an excellent example of its kind) and organ solo works.",
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
                        description: "Frantisek Xaver Brixi (1732 – 1771) was a Czech classical composer of the 18th century. His first name is sometimes given by reference works in its Germanic form, Franz.",
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
                        description: "Jan Vaclav Hugo Vorisek; also know as Johann Hugo Worzischek,  (1791, in Vamberk, Bohemia – 1825, in Vienna, Austria) was a Czech composer, pianist and organist.",
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
                        description: "Josef Suk (1874 – 1935) was a Bohemian composer and violinist. He studied under Antonin Dvorak, whose daughter he married.",
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
                        description: "Leos Janacek, baptised Leo Eugen Janacek; (1854 –  1928) was a Czech composer, musical theorist, folklorist, publicist and teacher. He was inspired by Moravian and other Slavic folk music to create an original, modern musical style.",
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
                        description: "Pavel Josef Vejvanovsky (c. 1633 or 1639 – 1693) was a Czech-Moravian composer and trumpeter of the Baroque period.",
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
                        description: "Vitezslav Augustin Rudolf Novak ( 1870 – 1949) was a Czech composer and pedagogue. Stylistically, he was part of the neo-romantic tradition, and his music has been occasionally considered an early example of Czech modernism.",
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
                        description: "Zdenek Fibich  (1850 – 1900) was a Czech composer of classical music. Among his compositions are chamber works (including two string quartets, a piano trio, piano quartet and a quintet for piano, strings and winds), symphonic poems, three symphonies, at least seven operas (the most famous probably Sarka and The Bride of Messina), melodramas including the substantial trilogy Hippodamia, liturgical music including a mass – a missa brevis; and a large cycle (almost 400 pieces, from the 1890s) of piano works called Moods, Impressions, and Reminiscences. The piano cycle served as a diary of sorts of his love for a piano pupil. He was born in Vseborice (Seborice) near Caslav.",
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
} // GET DATA*/
