import "@babel/polyfill"; // due to the generators
import RMRadioStation from "./RMRadioStation.js";

// ========================================

document.addEventListener("DOMContentLoaded", () =>
{
	let data = getData();
	
	let radioStation = new RMRadioStation(
		data["name"],
		data["logo"],
		data["imgDuration"],
		data["postType"],
		data["player"],
		data["genres"],
		data["playlistItems"],
		data["warnings"]
	);
	
	radioStation.setRadioName( data["name"] );
	radioStation.setMusicianImage( data["logo"] );
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
		"postType": "",
		"player": "rm-radio-player",
		"playlistItems": [
			{
				"genre": "classical_jingles",
				"numOfMusicians": 1,
				"numOfSongsPerMusician": 1
			},
			{
				"genre": "classical",
				"numOfMusicians": 3,
				"numOfSongsPerMusician": 1
			}
		],
		"warnings": [],
		"genres": [
			{
				"slug": "classical_jingles",
				"musicians": [
					{
						name: "CATV",
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
							}
						],
						introductions: [
						]
					}
				]
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
						]
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
						]
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
						]
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
						]
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
						]
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
						]
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
						]
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
						]
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
						]
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
						]
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
						]
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
						]
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
						]
					}
				]
			}
		]
	};
} // GET DATA
