import { cover } from "three/src/extras/TextureUtils.js";

export const moodSongs = {
  happy: {
    label: "contento",
    title: "Energía positiva al máximo",
    description: "Subí el volumen y dejate llevar por el buen ánimo.",
    quote: "Aprovechá este momento. Guardate este mood para los días grises.",
    songs: [
      { title: "Happy", artist: "Pharrell Williams", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/76/ff/5e/76ff5ee0-7ab4-2ac2-2598-486a9ccc06e1/886444516877.jpg/600x600.webp" },
      { title: "Good as Hell", artist: "Lizzo", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bf/ce/0a/bfce0a2a-8025-9f25-0d18-e9f77c964d4e/075679833518.jpg/600x600bb.webp" },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/52/d0/02/52d002d7-1f7f-8d91-4791-ed04c460ec93/886445894653.jpg/600x600bb.webp" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/de/5d/5f/de5d5ff5-83c4-7687-8130-aaec5552d04a/886445360462.jpg/600x600bb.webp" },
      { title: "Walking on Sunshine", artist: "Katrina & The Waves", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/b6/37/f6b6378c-9b34-72fb-9abe-4a6d6042ad53/13ULAIM49571.rgb.jpg/600x600bb.webp" },
      { title: "Blinding Lights", artist: "The Weeknd", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/6e/bf/a66ebf79-5008-8948-b352-a790fc87446b/19UM1IM04638.rgb.jpg/600x600bb.webp" },
      { title: "Good Life", artist: "OneRepublic", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/26/a1/c626a111-e2f8-0662-1705-fef158c1a548/09UMGIM45269.rgb.jpg/600x600bb.webp" },
      { title: "Best Day of My Life", artist: "American Authors", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/eb/b2/be/ebb2bef9-1aae-ca9b-6899-09c27f57b975/14UMGIM04468.rgb.jpg/600x600bb.webp" },
      { title: "Shut Up and Dance", artist: "WALK THE MOON", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0c/13/ca/0c13ca44-3b42-95b1-340a-56304dd408c3/886444911689.jpg/600x600bb.webp" },
      { title: "Shake It Off", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/57/5f/fe575f85-b843-e190-b043-2605d5f6ec59/14UMGIM34830.rgb.jpg/600x600bb.webp" },
      { title: "On Top of the World", artist: "Imagine Dragons", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f1/47/fd/f147fd03-d70a-1449-3fa4-1b1d544efdb2/12UMGIM46901.rgb.jpg/600x600bb.webp" },
      { title: "Feel Good Inc.", artist: "Gorillaz", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/17/2b/27/172b27d5-1d4e-8ade-cb2b-a4ff47aca407/mza_8524132254078437865.jpg/600x600.webp" },
      { title: "I Gotta Feeling", artist: "Black Eyed Peas", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/2f/81/a22f8153-2de8-d659-0e73-d4fc1997f65f/24UM1IM35645.rgb.jpg/600x600bb.webp" },
      { title: "Levitating", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/16/9c/e6/169ce699-5506-0e08-f514-81f08a9ed7f5/190295132651.jpg/600x600bb.webp" },
      { title: "Sugar", artist: "Maroon 5", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/09/af/f5/09aff5b2-a9a0-a357-7d0f-70a937e391b1/00602547297396.rgb.jpg/600x600bb.webp" }
    ],
    albums: [
      { title: "24K Magic", artist: "Bruno Mars", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8a/33/2f/8a332f0c-503f-08ca-b3e6-06550cf973c1/075679894229.jpg/600x600bb.webp" },
      { title: "Purpose", artist: "Justin Bieber", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/600x600bb.webp" },
      { title: "Dua Lipa", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c1/54/2d/c1542d45-c6c2-12ca-7308-6eacd762c562/190295807870.jpg/600x600bb.webp" },
      { title: "Future Nostalgia", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.webp" },
      { title: "÷", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/24/35/6f2435c0-bd47-5882-8211-c4bab6661841/190295694975.jpg/600x600.webp" },
      { title: "Random Access Memories", artist: "Daft Punk", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/43/5f/e8435ffa-b6b9-b171-40ab-4ff3959ab661/886443919266.jpg/600x600bb.webp" }
    ]
  },
  sad: {
    label: "bajón",
    title: "Para días grises",
    description: "Canciones para acompañarte y levantar de a poco.",
    quote: "No pasa nada por sentirte así. Tomate tu tiempo.",
    songs: [
      { title: "Someone Like You", artist: "Adele", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/ca/25/ebca2596-cd1e-b295-91a3-771c868d0a79/191404113868.png/600x600bb.webp" },
      { title: "Fix You", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1b/28/6b/1b286b92-a0ef-d94f-ba3a-e9b9072530f5/190295530983.jpg/600x600bb.webp" },
      { title: "The Night We Met", artist: "Lord Huron", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/41/4a/55414a18-861a-79d1-e575-5bf8cf205dbe/886445056839_Cover.jpg/600x600bb.webp" },
      { title: "All I Want", artist: "Kodaline", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/90/07/87/90078751-1dbb-3e85-50f0-d8b40e5655aa/886443897267.jpg/600x600bb.webp" },
      { title: "Skinny Love", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.webp" },
      { title: "When the Party's Over", artist: "Billie Eilish", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.webp" },
      { title: "Creep (Acoustic)", artist: "Radiohead", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/28/7a/7c/287a7ca9-ed95-1a21-e3bb-4559a1a0ac0e/191404134351.png/600x600bb.webp" },
      { title: "River", artist: "Leon Bridges", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/27/37/70/273770eb-92ac-1d00-87e6-e0f5ec0e97ab/886445452204.jpg/600x600bb.webp" },
      { title: "Let Her Go", artist: "Passenger", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/36/6d/17/366d176b-a2a3-756c-6aaf-598e121cd19c/859729877154_cover.jpg/600x600bb.webp"},
      { title: "The Scientist", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1b/28/6b/1b286b92-a0ef-d94f-ba3a-e9b9072530f5/190295530983.jpg/600x600bb.webp" },
      { title: "Jealous", artist: "Labrinth", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ca/80/fd/ca80fd5f-e96b-4407-8d79-a3371b8d0eea/0878390006526_cover.jpg/600x600bb.webp" },
      { title: "Liability", artist: "Lorde", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/600x600bb.webp" },
      { title: "I Can't Make You Love Me", artist: "Bonnie Raitt", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8c/e9/c1/8ce9c14c-d183-2fe1-2862-cd3fa821b69d/191404114957.png/600x600bb.webp" },
      { title: "Un Año Más", artist: "La Oreja de Van Gogh", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/a0/9d/7b/a09d7be9-4105-e2bf-13ed-22a6482692a2/888880742360.jpg/600x600bb.webp" },
      { title: "Te Extraño", artist: "Xtreme", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/13/51/37/13513726-9197-8dea-bf06-b134044f8d34/06UMGIM00648.rgb.jpg/600x600bb.webp" }
    ],
    albums: [
      { title: "21", artist: "Adele", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/ca/25/ebca2596-cd1e-b295-91a3-771c868d0a79/191404113868.png/600x600bb.webp" },
      { title: "A Rush of Blood to the Head", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9d/c2/1b/9dc21ba1-4a8f-0a92-c428-3e62647e6168/825646280452.jpg/600x600bb.webp" },
      { title: "When We All Fall Asleep", artist: "Billie Eilish", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.webp" },
      { title: "Strange Trails", artist: "Lord Huron", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/41/4a/55414a18-861a-79d1-e575-5bf8cf205dbe/886445056839_Cover.jpg/600x600bb.webp" },
      { title: "For Emma, Forever Ago", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.webp" },
      { title: "Melodrama", artist: "Lorde", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/600x600bb.webp" }
    ]
  },
  chill: {
    label: "tranqui",
    title: "Para relajar la mente",
    description: "Sonidos suaves para bajar revoluciones y respirar profundo.",
    quote: "Respirá hondo. Estás acá, ahora.",
    songs: [
      { title: "Sunset Lover", artist: "Petit Biscuit", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/78/1c/93/781c934a-c233-cfce-39db-31f7284969b4/cover.jpg/600x600bb.webp" },
      { title: "Pink + White", artist: "Frank Ocean", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/45/68/bb4568f3-68cd-619d-fbcb-4e179916545d/BlondCover-Final.jpg/600x600bb.webp" },
      { title: "Location", artist: "Khalid", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d2/d1/c6/d2d1c6d0-57d0-139c-f930-aeee596cdf84/886446057019.jpg/600x600bb.webp" },
      { title: "Lost in Japan", artist: "Shawn Mendes", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/34/34/ab/3434abcc-3b47-ca75-71df-c6a8392005d0/18UMGIM23926.rgb.jpg/600x600bb.webp" },
      { title: "Coffee", artist: "beabadoobee", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9a/9e/05/9a9e0570-bee1-20b5-e512-38b5e1168a76/192641174858_Cover.jpg/600x600bb.webp" },
      { title: "Stay Ready", artist: "Jhene Aiko ft. Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/d4/14/a0d414f8-6cf5-bf24-f722-4a4f32770d22/13UAAIM83456.rgb.jpg/600x600bb.webp" },
      { title: "Night Owl", artist: "Galimatias", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/3d/d0/5c3dd029-2f99-a6b1-2b97-a6531a4ac640/artwork.jpg/600x600bb.webp" },
      { title: "3 Nights", artist: "Dominic Fike", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2d/37/18/2d3718e9-8620-b603-d3cc-f34ce817070d/886447290170.jpg/600x600bb.webp" },
      { title: "Borderline", artist: "Tame Impala", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/e3/e7/65e3e740-b69f-f5cb-f2e6-7dedb5265ac9/19UMGIM96748.rgb.jpg/600x600bb.webp" },
      { title: "Get You", artist: "Daniel Caesar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b6/cd/1a/b6cd1a5b-83af-a1e2-0ad7-ea530fcf2522/859722261219.jpg/600x600bb.webp" },
      { title: "Redbone", artist: "Childish Gambino", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/40/2d/68/402d682f-9eb4-664d-be54-dcd7fc511e88/0044003173460_Cover.jpg/600x600bb.webp" },
      { title: "Ocean Eyes", artist: "Billie Eilish", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/02/1d/30/021d3036-5503-3ed3-df00-882f2833a6ae/17UM1IM17026.rgb.jpg/600x600bb.webp" },
      { title: "Sunflower", artist: "Post Malone, Swae Lee", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.webp" },
      { title: "Come Through and Chill", artist: "Miguel", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/36/b1/91/36b191ad-319e-729e-653a-6590248059e8/886446846248.jpg/600x600bb.webp" },
      { title: "Good News", artist: "Mac Miller", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/23/39/38/23393826-762f-ec76-dc1e-9344f647c958/093624905981.jpg/600x600bb.webp" }
    ],
    albums: [
      { title: "Blonde", artist: "Frank Ocean", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/45/68/bb4568f3-68cd-619d-fbcb-4e179916545d/BlondCover-Final.jpg/600x600bb.webp" },
      { title: "American Teen", artist: "Khalid", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d0/60/02/d060028d-d39c-2ea4-5af3-cc8b18fb14f8/196873591797.jpg/600x600bb.webp" },
      { title: "Currents", artist: "Tame Impala", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/e3/e7/65e3e740-b69f-f5cb-f2e6-7dedb5265ac9/19UMGIM96748.rgb.jpg/600x600bb.webp" },
      { title: "Freudian", artist: "Daniel Caesar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b6/cd/1a/b6cd1a5b-83af-a1e2-0ad7-ea530fcf2522/859722261219.jpg/600x600bb.webp" },
      { title: "Swimming", artist: "Mac Miller", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b2/10/35/b2103580-58fc-2337-1d87-0cf0aad92790/093624828785.jpg/600x600bb.webp" },
      { title: "Sunset Season", artist: "Conan Gray", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/1e/6d/5e/1e6d5ebd-af93-8e47-dbfc-18969b72a9f9/18UMGIM66643.rgb.jpg/600x600bb.webp" }
    ]
  },
  energetic: {
    label: "a full",
    title: "Para activarte al 100%",
    description: "Temas que te empujan a moverte, entrenar o arrancar el día.",
    quote: "Poné play y dejá que el cuerpo haga el resto.",
    songs: [
      { title: "Stronger", artist: "Kanye West", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/09/c5/45/09c545b8-3973-22b0-5618-864bfa0f08a5/07UMGIM10842.rgb.jpg/600x600bb.webp" },
      { title: "Titanium", artist: "David Guetta ft. Sia", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/f0/a4/2c/f0a42c10-829c-8b84-7ac2-271f45d4687e/dj.zykhivrk.jpg/600x600bb.webp" },
      { title: "Don't Stop Me Now", artist: "Queen", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/55/46/bd/5546bd24-083f-e7d5-57be-d66bd3ee24e5/19UM1IM12053.rgb.jpg/600x600bb.webp" },
      { title: "POWER", artist: "Kanye West", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0a/0b/31/0a0b31cc-077c-31bf-e7fe-612191774948/10UMGIM30072.rgb.jpg/600x600bb.webp" },
      { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5e/5f/81/5e5f81c7-849e-63f6-6ffd-8801145bfd97/707541525398.jpg/600x600bb.webp" },
      { title: "Lose Yourself", artist: "Eminem", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/74/2c/87/742c8794-2a24-9672-dc81-bc6bd2992589/25UMGIM74636.rgb.jpg/600x600bb.webp" },
      { title: "Remember the Name", artist: "Fort Minor", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e8/e3/fd/e8e3fd40-94e1-5637-01fc-f852a24a61ee/093624992066.jpg/600x600bb.webp" },
      { title: "Eye of the Tiger", artist: "Survivor", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f9/02/8f/f9028f63-7a55-235e-f789-1e8946430fa2/614223201122.jpg/600x600bb.webp" },
      { title: "Dance Monkey", artist: "Tones and I", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d2/3a/b8/d23ab839-660d-ef93-2ccb-d0825fc3e8f5/075679838872.jpg/600x600bb.webp" },
      { title: "Thunderstruck", artist: "AC/DC", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/bd/c3/48/bdc34862-f50d-b32a-39f9-354113a3f3eb/dj.gkzjejoy.jpg/600x600bb.webp" },
      { title: "Turn Down for What", artist: "DJ Snake, Lil Jon", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/54/4a/6d/544a6dc7-8d93-a8fe-74cc-530f4c078620/886444410779.jpg/600x600bb.webp"},
      { title: "Rain On Me", artist: "Lady Gaga, Ariana Grande", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5d/4d/f9/5d4df96a-e95e-2fe9-404a-5d570513762d/20UMGIM15390.rgb.jpg/600x600bb.webp" },
      { title: "Can't Stop", artist: "Red Hot Chili Peppers", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.webp" },
      { title: "Rock Your Body", artist: "Justin Timberlake", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0e/79/86/0e798631-1a91-4a73-9db6-80d87c7e550b/886446781471.jpg/600x600bb.webp" },
      { title: "Tusa", artist: "Karol G, Nicki Minaj", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/98/ab/c9/98abc973-ae06-d1c6-3ec4-eb5c0a45b4a5/19UMGIM93544.rgb.jpg/600x600bb.webp" }
    ],
    albums: [
      { title: "The Eminem Show", artist: "Eminem", cover: "https://acdn-us.mitiendanube.com/stores/427/437/products/71n0xmxpw7l-_uf10001000_ql80_-7317d841e31a9bf27517061910025050-480-0.webp" },
      { title: "The Rising Tied", artist: "Fort Minor", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/9c/7b/2b9c7b42-e391-f760-4662-d059ebc13d16/093624857655.jpg/600x600bb.webp" },
      { title: "Meteora", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c8/2b/68/c82b6899-6bc1-a528-560e-0c82aa035b08/093624833819.jpg/600x600bb.webp" },
      { title: "A Night at the Opera", artist: "Queen", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2a/79/5e/2a795e51-8e3e-a743-0dd5-0947ad3383f0/14UMGIM39390.rgb.jpg/600x600bb.webp" },
      { title: "The Heist", artist: "Macklemore & Ryan Lewis", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/91/c1/b5/91c1b5cc-d4f1-da61-d3dc-2dd93e6b0a7d/707541525299.jpg/600x600bb.webp" },
      { title: "Nevermind", artist: "Nirvana", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/03/d2/3203d294-c0a0-a016-ddcb-508a093aa0b0/11UMGIM26899.rgb.jpg/600x600bb.webp" }
    ]
  },
  angry: {
    label: "con bronca",
    title: "Para soltar la bronca",
    description: "Temas intensos para descargar energía sin guardarte nada.",
    quote: "Sentir enojo también es humano. Lo importante es cómo lo soltás.",
    songs: [
      { title: "Killing in the Name", artist: "Rage Against The Machine", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8e/08/bf/8e08bf66-8690-1ba7-affb-fe173c08623d/074645295923.jpg/600x600bb.webp" },
      { title: "Smells Like Teen Spirit", artist: "Nirvana", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/03/d2/3203d294-c0a0-a016-ddcb-508a093aa0b0/11UMGIM26899.rgb.jpg/600x600bb.webp" },
      { title: "Break Stuff", artist: "Limp Bizkit", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/54/2c/e5/542ce5e4-b086-c9a8-bef5-5be01b0dd025/06UMGIM01666.rgb.jpg/600x600bb.webp"},
      { title: "Chop Suey!", artist: "System Of A Down", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/82/51/52/825152b4-9423-b23b-c036-cc67ead732d4/888888046775.jpg/600x600bb.webp" },
      { title: "Duality", artist: "Slipknot", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bf/91/02/bf9102b3-0454-40bb-46df-6f9465642756/075679762160.jpg/600x600bb.webp" },
      { title: "Given Up", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f5/d6/68/f5d6681a-734c-8225-aa28-418c3715b6da/dj.xkwgleci.jpg/600x600bb.webp" },
      { title: "Feeling This", artist: "blink-182", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/57/be/19/57be194f-7b85-86ed-f59b-afc86806b6e5/16UMGIM35664.rgb.jpg/600x600bb.webp" },
      { title: "Misery Business", artist: "Paramore", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9a/3a/26/9a3a2608-29a7-5585-f990-cdfeb10b7394/075679955005.jpg/600x600bb.webp" },
      { title: "American Idiot", artist: "Green Day", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/1b/c1/ec/1bc1ec2b-ea7a-f4fb-927e-7c022a09752b/093624915669.jpg/600x600bb.webp" },
      { title: "Bodies", artist: "Drowning Pool", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d6/80/1b/d6801bac-64cd-4e05-1007-edabf5bf13d8/193436455626_SorryXTheWrongOneArtConcept.jpg/600x600bb.webp" },
      { title: "The Pretender", artist: "Foo Fighters" , cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/b7/cb/39/b7cb39df-ddd0-ff34-fb81-22ee699c0865/886447850350.jpg/600x600bb.webp"},
      { title: "Welcome to the Jungle", artist: "Guns N' Roses", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2b/f6/b1/2bf6b19e-2995-f2ce-e01a-ed098e6d4719/18UMGIM24877.rgb.jpg/600x600bb.webp" },
      { title: "Freak on a Leash", artist: "Korn", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/aa/e5/bf/aae5bfc6-2fe4-7888-4794-7df1419d536e/5054526425774.jpg/600x600bb.webp" },
      { title: "Down with the Sickness", artist: "Disturbed", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a9/ca/96/a9ca964f-78f0-b6a3-d3ea-08370fad7f90/054391308696.jpg/600x600bb.webp" },
      { title: "One Step Closer", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f5/d6/68/f5d6681a-734c-8225-aa28-418c3715b6da/dj.xkwgleci.jpg/600x600bb.webp" }
    ],
    albums: [
      { title: "Rage Against The Machine", artist: "Rage Against The Machine", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8e/08/bf/8e08bf66-8690-1ba7-affb-fe173c08623d/074645295923.jpg/600x600bb.webp" },
      { title: "Nevermind", artist: "Nirvana", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/03/d2/3203d294-c0a0-a016-ddcb-508a093aa0b0/11UMGIM26899.rgb.jpg/600x600bb.webp" },
      { title: "American Idiot", artist: "Green Day", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/1b/c1/ec/1bc1ec2b-ea7a-f4fb-927e-7c022a09752b/093624915669.jpg/600x600bb.webp" },
      { title: "Hybrid Theory", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f5/d6/68/f5d6681a-734c-8225-aa28-418c3715b6da/dj.xkwgleci.jpg/600x600bb.webp" },
      { title: "Appetite for Destruction", artist: "Guns N' Roses", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a0/4d/c4/a04dc484-03cc-02aa-fa82-5334fcb4bc16/18UMGIM24878.rgb.jpg/600x600bb.webp" },
      { title: "The Sickness", artist: "Disturbed", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a9/ca/96/a9ca964f-78f0-b6a3-d3ea-08370fad7f90/054391308696.jpg/600x600bb.webp" }
    ]
  },
  neutral: {
    label: "neutro",
    title: "Para acompañar el momento",
    description: "Música tranquila para esos días que no son ni muy arriba ni muy abajo.",
    quote: "No todos los días tienen que ser épicos. A veces, solo está bien estar.",
    songs: [
      { title: "Put It All On Me", artist: "Ed Sheeran ft. Ella Mai", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/ba/e2/2a/bae22a5e-c878-da64-0ecc-4a3584a1a139/190295411411.jpg/600x600bb.webp" },
      { title: "Budapest", artist: "George Ezra", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/24/e1/72/24e1722e-c15e-b57d-c8e7-65e0493da082/dj.kajsgkun.jpg/600x600bb.webp" },
      { title: "Riptide", artist: "Vance Joy", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7a/1c/65/7a1c6571-34e9-bb77-32be-90c72ba003c0/075679920355.jpg/600x600bb.webp" },
      { title: "Better Together", artist: "Jack Johnson", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/06/fd/4406fdc0-aab5-e300-82ba-3e5fe81a68a7/00602537868858.rgb.jpg/600x600bb.webp" },
      { title: "Holocene", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/2a/21/1f/mzi.zfjbltpq.jpg/600x600bb.webp" },
      { title: "Skinny Love", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.webp"},
      { title: "Slow Dancing in a Burning Room", artist: "John Mayer", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7a/a0/f4/7aa0f487-f983-390e-73ef-005115eea1e0/dj.oqpplyfm.jpg/600x600bb.webp" },
      { title: "Heartbeats", artist: "José González", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/49/24/63/4924632f-da03-e179-6590-b4176b4f99d4/7350012240561.png/600x600bb.webp" },
      { title: "Come Away with Me", artist: "Norah Jones", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.webp" },
      { title: "Home", artist: "Edward Sharpe & The Magnetic Zeros", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e0/98/72/e098729e-e8ff-2d62-6391-1fc43b7f466c/4050538542318_.jpg/600x600bb.webp" },
      { title: "Banana Pancakes", artist: "Jack Johnson", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/06/fd/4406fdc0-aab5-e300-82ba-3e5fe81a68a7/00602537868858.rgb.jpg/600x600bb.webp" },
      { title: "Holocene", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/2a/21/1f/mzi.zfjbltpq.jpg/600x600bb.webp" },
      { title: "Let It Go", artist: "James Bay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/71/de/d8/71ded8e1-f369-5664-aad7-1ac265f38157/14UMGIM63212.rgb.jpg/600x600bb.webp" },
      { title: "Yellow", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/27/16/8d2716ea-4e3a-466f-5aa7-cf750e762bb6/5099941647356_1500x1500_300dpi.jpg/600x600bb.webp" },
      { title: "Gravity", artist: "John Mayer", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7a/a0/f4/7aa0f487-f983-390e-73ef-005115eea1e0/dj.oqpplyfm.jpg/600x600bb.webp" }
    ],
    albums: [
      { title: "In Between Dreams", artist: "Jack Johnson", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/06/fd/4406fdc0-aab5-e300-82ba-3e5fe81a68a7/00602537868858.rgb.jpg/600x600bb.webp" },
      { title: "Come Away With Me", artist: "Norah Jones", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.webp" },
      { title: "Parachutes", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/94/b3/0a/94b30a04-0a48-f7c2-d392-09e32311ea11/5021732960849.jpg/600x600bb.webp" },
      { title: "Vespertine", artist: "Björk", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/34/f3/e2/34f3e209-81a0-1f2e-03dd-62f26a24e455/5016958995102.png/600x600bb.webp" },
      { title: "Wanted on Voyage", artist: "George Ezra", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/24/e1/72/24e1722e-c15e-b57d-c8e7-65e0493da082/dj.kajsgkun.jpg/600x600bb.webp" },
      { title: "Chaos and the Calm", artist: "James Bay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/be/2b/84/be2b84a4-f31e-6785-0436-58883d9683f4/25UMGIM59987.rgb.jpg/600x600bb.webp" }
    ]
  },
  tired: {
    label: "agotado",
    title: "Para descansar la cabeza",
    description: "Música suave para cerrar el día y soltar tensiones.",
    quote: "Está bien frenar. No tenés que poder con todo hoy.",
    songs: [
      { title: "Holocene", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/2a/21/1f/mzi.zfjbltpq.jpg/600x600bb.webp" },
      { title: "Slow Dancing in the Dark", artist: "Joji", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b8/42/74/b8427409-1c8f-5c8a-dee2-82a4ed7b6954/190296940323.jpg/600x600bb.webp" },
      { title: "Like Real People Do", artist: "Hozier", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/ba/b8/1abab888-59d3-bced-1423-6b5ec340f23b/15UMGIM58108.rgb.jpg/600x600bb.webp" },
      { title: "Cherry Wine (Live)", artist: "Hozier", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/ba/b8/1abab888-59d3-bced-1423-6b5ec340f23b/15UMGIM58108.rgb.jpg/600x600bb.webp" },
      { title: "Bloom", artist: "The Paper Kites", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a3/02/cd/a302cda7-7d2e-6b56-ee05-37f4f2fd4c1e/98f8c51c-049c-41bd-bc2d-6809a5e07aa0.png/600x600bb.webp" },
      { title: "Work Song", artist: "Hozier", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/13/e9/77/13e97701-a1a6-6618-c363-a2c72927d473/00602537792290.rgb.jpg/600x600bb.webp" },
      { title: "Breathe Me", artist: "Sia", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8d/c2/67/8dc26773-bccc-94f8-86c7-dd97b9a4816e/00602547823892.rgb.jpg/600x600bb.webp" },
      { title: "Motion Picture Soundtrack", artist: "Radiohead", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bd/8e/13/bd8e1358-b367-a689-cb84-cebd0b067dc4/634904078263.png/600x600bb.webp" },
      { title: "Turning Page", artist: "Sleeping At Last", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cf/2d/64/cf2d64ff-11a4-d1bd-cb8e-a9cdc5aabaea/Cover.jpg/600x600bb.webp" },
      { title: "Sea of Love", artist: "Cat Power", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/cc/ed/b8/ccedb89c-e5ba-c59c-465b-bfc517e4a9ba/744861042631.png/600x600bb.webp" },
      { title: "Fourth of July", artist: "Sufjan Stevens", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ba/61/bc/ba61bcaf-2034-f13e-6f66-fdb578d618dc/656605609966.jpg/600x600bb.webp" },
      { title: "Liability (Reprise)", artist: "Lorde", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/600x600bb.webp" },
      { title: "Saturn", artist: "Sleeping At Last", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/be/aa/64/beaa6443-007d-acd2-4488-141675b63ef5/859711635557_cover.jpg/600x600bb.webp" },
      { title: "Cherry", artist: "Lana Del Rey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fc/d3/81/fcd381c9-451f-0917-da01-06678a92b85c/17UMGIM90308.rgb.jpg/600x600bb.webp" },
      { title: "The Stable Song", artist: "Gregory Alan Isakov", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/64/23/79/642379a1-284f-615b-7181-d12738444ab6/190394424190.jpg/600x600bb.webp" }
    ],
    albums: [
      { title: "22, A Million", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/df/7d/90/df7d908a-b7ae-5565-4f89-40f8bc9440ab/656605230061.jpg/600x600bb.webp" },
      { title: "Nectar", artist: "Joji", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/06/fb/8e/06fb8e9a-6748-3bad-8a84-5d00b15e4857/190296849497.jpg/600x600bb.webp" },
      { title: "Wasteland, Baby!", artist: "Hozier", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/05/62/dd/0562ddee-754e-f261-cdbf-a733a9a8f0fd/18UMGIM87114.rgb.jpg/600x600bb.webp" },
      { title: "Atlas: Space", artist: "Sleeping At Last", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/fc/29/2d/fc292df7-2df0-3d18-4598-9565090f0f91/859719777938_cover.jpg/600x600bb.webp" },
      { title: "Ultraviolence", artist: "Lana Del Rey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/18/3f/ad/183fadf3-0d36-6db2-b733-d8f032654b07/14UMGIM20562.rgb.jpg/600x600bb.webp" },
      { title: "The Weatherman", artist: "Gregory Alan Isakov", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/12/00/1c/12001c80-04b7-2b53-0b29-3021749425ba/Weatherman_vinyl_front_cover-ALT-1600px-300_dpi.jpg/600x600bb.webp" }
    ]
  }
};