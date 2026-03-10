import { cover } from "three/src/extras/TextureUtils.js";

export const moodSongs = {
  happy: {
    label: "contento",
    title: "Energía positiva al máximo",
    description: "Subí el volumen y dejate llevar por el buen ánimo.",
    quote: "Aprovechá este momento. Guardate este mood para los días grises.",
    songs: [
      { title: "Happy", artist: "Pharrell Williams", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/76/ff/5e/76ff5ee0-7ab4-2ac2-2598-486a9ccc06e1/886444516877.jpg/600x600.webp", spotifyId: "60nZcImufyMA1MKQY3dcCH" },
      { title: "Good as Hell", artist: "Lizzo", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bf/ce/0a/bfce0a2a-8025-9f25-0d18-e9f77c964d4e/075679833518.jpg/600x600bb.webp", spotifyId: "07Oz5StQ7GRoygNLaXs2pd?si=4b8103c669e84116" },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/52/d0/02/52d002d7-1f7f-8d91-4791-ed04c460ec93/886445894653.jpg/600x600bb.webp", spotifyId: "1WkMMavIMc4JZ8cfMmxHkI" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/de/5d/5f/de5d5ff5-83c4-7687-8130-aaec5552d04a/886445360462.jpg/600x600bb.webp", spotifyId: "32OlwWuMpZ6b0aN2RZOeMS" },
      { title: "Walking on Sunshine", artist: "Katrina & The Waves", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/b6/37/f6b6378c-9b34-72fb-9abe-4a6d6042ad53/13ULAIM49571.rgb.jpg/600x600bb.webp", spotifyId: "05wIrZSwuaVWhcv5FfqeH0" },
      { title: "Blinding Lights", artist: "The Weeknd", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/6e/bf/a66ebf79-5008-8948-b352-a790fc87446b/19UM1IM04638.rgb.jpg/600x600bb.webp", spotifyId: "0VjIjW4GlUZAMYd2vXMi3b" },
      { title: "Good Life", artist: "OneRepublic", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/26/a1/c626a111-e2f8-0662-1705-fef158c1a548/09UMGIM45269.rgb.jpg/600x600bb.webp", spotifyId: "59KOoHFcw5XfICnO57holu" },
      { title: "Best Day of My Life", artist: "American Authors", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/eb/b2/be/ebb2bef9-1aae-ca9b-6899-09c27f57b975/14UMGIM04468.rgb.jpg/600x600bb.webp", spotifyId: "5Hroj5K7vLpIG4FNCRIjbP?si=7c716c2a58b9425a" },
      { title: "Shut Up and Dance", artist: "WALK THE MOON", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0c/13/ca/0c13ca44-3b42-95b1-340a-56304dd408c3/886444911689.jpg/600x600bb.webp", spotifyId: "4kbj5MwxO1bq9wjT5g9HaA" },
      { title: "Shake It Off", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/57/5f/fe575f85-b843-e190-b043-2605d5f6ec59/14UMGIM34830.rgb.jpg/600x600bb.webp", spotifyId: "0cqRj7pUJDkTCEsJkx8snD" },
      { title: "On Top of the World", artist: "Imagine Dragons", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f1/47/fd/f147fd03-d70a-1449-3fa4-1b1d544efdb2/12UMGIM46901.rgb.jpg/600x600bb.webp", spotifyId: "213x4gsFDm04hSqIUkg88w?si=2cec2839cd874610" },
      { title: "Feel Good Inc.", artist: "Gorillaz", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/17/2b/27/172b27d5-1d4e-8ade-cb2b-a4ff47aca407/mza_8524132254078437865.jpg/600x600.webp", spotifyId: "0d28khcov6AiegSCpG5TuT" },
      { title: "I Gotta Feeling", artist: "Black Eyed Peas", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/2f/81/a22f8153-2de8-d659-0e73-d4fc1997f65f/24UM1IM35645.rgb.jpg/600x600bb.webp", spotifyId: "4kLLWz7srcuLKA7Et40PQR?si=ec41974b6a264ad9" },
      { title: "Levitating", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/16/9c/e6/169ce699-5506-0e08-f514-81f08a9ed7f5/190295132651.jpg/600x600bb.webp", spotifyId: "39LLxExYz6ewLAcYrzQQyP" },
      { title: "Sugar", artist: "Maroon 5", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/09/af/f5/09aff5b2-a9a0-a357-7d0f-70a937e391b1/00602547297396.rgb.jpg/600x600bb.webp", spotifyId: "2iuZJX9X9P0GKaE93xcPjk?si=43acdefe26b54503" }
    ],
    albums: [
      { title: "24K Magic", artist: "Bruno Mars", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8a/33/2f/8a332f0c-503f-08ca-b3e6-06550cf973c1/075679894229.jpg/600x600bb.webp" , spotifyId: "4PgleR09JVnm3zY1fW3XBA?si=AdOicDC-SY-POl65CZxKQQ"},
      { title: "Purpose", artist: "Justin Bieber", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/600x600bb.webp", spotifyId: "6Fr2rQkZ383FcMqFyT7yPr?si=PJVlrlY3TBSAycUmYTPNFQ" },
      { title: "Dua Lipa", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c1/54/2d/c1542d45-c6c2-12ca-7308-6eacd762c562/190295807870.jpg/600x600bb.webp", spotifyId: "01sfgrNbnnPUEyz6GZYlt9?si=-YGKNwOhQYu7jZFpm6b0xg" },
      { title: "Future Nostalgia", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.webp", spotifyId: "7fJJK56U9fHixgO0HQkhtI?si=J0IwsfxwQhaCyzLxvBH3SA" },
      { title: "÷", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/24/35/6f2435c0-bd47-5882-8211-c4bab6661841/190295694975.jpg/600x600.webp", spotifyId: "3T4tUhGYeRNVUGevb0wThu?si=J3p9DR5WSXio1uSc1odVyQ" },
      { title: "Random Access Memories", artist: "Daft Punk", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/43/5f/e8435ffa-b6b9-b171-40ab-4ff3959ab661/886443919266.jpg/600x600bb.webp", spotifyId: "4m2880jivSbbyEGAKfITCa?si=ybfr8aJaSKmgCi3TbK8J3Q" }
    ]
  },
  sad: {
    label: "bajón",
    title: "Para días grises",
    description: "Canciones para acompañarte y levantar de a poco.",
    quote: "No pasa nada por sentirte así. Tomate tu tiempo.",
    songs: [
      { title: "Someone Like You", artist: "Adele", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/ca/25/ebca2596-cd1e-b295-91a3-771c868d0a79/191404113868.png/600x600bb.webp", spotifyId: "1zwMYTA5nlNjZxYrvBB2pV" },
      { title: "Fix You", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1b/28/6b/1b286b92-a0ef-d94f-ba3a-e9b9072530f5/190295530983.jpg/600x600bb.webp", spotifyId: "7LVHVU3tWfcxj5aiPFEW4Q" },
      { title: "The Night We Met", artist: "Lord Huron", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/41/4a/55414a18-861a-79d1-e575-5bf8cf205dbe/886445056839_Cover.jpg/600x600bb.webp", spotifyId: "5yJaXWIErrrsjQ3J0eR5aK?si=7acc047f9fca46eb" },
      { title: "All I Want", artist: "Kodaline", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/90/07/87/90078751-1dbb-3e85-50f0-d8b40e5655aa/886443897267.jpg/600x600bb.webp", spotifyId: "6g0mn3tzAds6aGULBLd8pl" },
      { title: "Skinny Love", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.webp", spotifyId: "0GONea6G2XdnHWjNZd6zt3" },
      { title: "When the Party's Over", artist: "Billie Eilish", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.webp", spotifyId: "43zdsphuZLzwA9k4DJhU0I" },
      { title: "Creep (Acoustic)", artist: "Radiohead", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/28/7a/7c/287a7ca9-ed95-1a21-e3bb-4559a1a0ac0e/191404134351.png/600x600bb.webp", spotifyId: "70LcF31zb1H0PyJoS1Sx1r" },
      { title: "River", artist: "Leon Bridges", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/27/37/70/273770eb-92ac-1d00-87e6-e0f5ec0e97ab/886445452204.jpg/600x600bb.webp", spotifyId: "3hhbDnFUb2bicI2df6VurK?si=15ff3062b93b4f89" },
      { title: "Let Her Go", artist: "Passenger", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/36/6d/17/366d176b-a2a3-756c-6aaf-598e121cd19c/859729877154_cover.jpg/600x600bb.webp", spotifyId: "2pUpNOgJBIBCcjyQZQ00qU?si=c56d83cc7c604250" },
      { title: "The Scientist", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1b/28/6b/1b286b92-a0ef-d94f-ba3a-e9b9072530f5/190295530983.jpg/600x600bb.webp", spotifyId: "75JFxkI2RXiU7L9VXzMkle" },
      { title: "Jealous", artist: "Labrinth", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ca/80/fd/ca80fd5f-e96b-4407-8d79-a3371b8d0eea/0878390006526_cover.jpg/600x600bb.webp", spotifyId: "0bhudMmr0XdtBOjFbjq8R0?si=3cdce5a55b264018" },
      { title: "Liability", artist: "Lorde", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/600x600bb.webp", spotifyId: "4U45aEWtQhrm8A5mxPaFZ7" },
      { title: "I Can't Make You Love Me", artist: "Bonnie Raitt", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8c/e9/c1/8ce9c14c-d183-2fe1-2862-cd3fa821b69d/191404114957.png/600x600bb.webp", spotifyId: "69uJi5QsBtqlYkGURTBli8?si=a3e2931cf09146fe" },
      { title: "Rosas", artist: "La Oreja de Van Gogh", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/a0/9d/7b/a09d7be9-4105-e2bf-13ed-22a6482692a2/888880742360.jpg/600x600bb.webp", spotifyId: "4waqcUQWdj0yH26STWl2Rq?si=6606bda872114f72" },
      { title: "Te Extraño", artist: "Xtreme", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/13/51/37/13513726-9197-8dea-bf06-b134044f8d34/06UMGIM00648.rgb.jpg/600x600bb.webp", spotifyId: "0muI8DpTEpLqqibPm3sKYf?si=c4fdebb5ba2540e1" }
    ],
    albums: [
      { title: "21", artist: "Adele", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/ca/25/ebca2596-cd1e-b295-91a3-771c868d0a79/191404113868.png/600x600bb.webp" , spotifyId: "0Lg1uZvI312TPqxNWShFXL?si=yHsl5sDbSjK69uaNgN-sdQ"},
      { title: "A Rush of Blood to the Head", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9d/c2/1b/9dc21ba1-4a8f-0a92-c428-3e62647e6168/825646280452.jpg/600x600bb.webp", spotifyId: "0RHX9XECH8IVI3LNgWDpmQ?si=g716TF4STcqqbMaPEOKXuw" },
      { title: "When We All Fall Asleep", artist: "Billie Eilish", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/600x600bb.webp", spotifyId: "0S0KGZnfBGSIssfF54WSJh?si=cXmiNzDiS5-gFttx2utKtw" },
      { title: "Strange Trails", artist: "Lord Huron", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/41/4a/55414a18-861a-79d1-e575-5bf8cf205dbe/886445056839_Cover.jpg/600x600bb.webp" ,spotifyId: "0Rfqw98N7kZ4qVPGWvt8Gn?si=W1z6E80FSVmn1yY8vIVg1A"},
      { title: "For Emma, Forever Ago", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.webp", spotifyId: "7EJ0OT5ZqybXxcYRa6mccM?si=AOl9St4oQ3aa4ospvFu5uQ" },
      { title: "Melodrama", artist: "Lorde", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/600x600bb.webp", spotifyId: "2B87zXm9bOWvAJdkJBTpzF?si=fvI9rwSZSpeAvGsSaCn1lQ" }
    ]
  },
  chill: {
    label: "tranqui",
    title: "Para relajar la mente",
    description: "Sonidos suaves para bajar revoluciones y respirar profundo.",
    quote: "Respirá hondo. Estás acá, ahora.",
    songs: [
      { title: "Sunset Lover", artist: "Petit Biscuit", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/78/1c/93/781c934a-c233-cfce-39db-31f7284969b4/cover.jpg/600x600bb.webp", spotifyId: "0F5PTnXUHMiGJPNiNTXr8m" },
      { title: "Pink + White", artist: "Frank Ocean", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/45/68/bb4568f3-68cd-619d-fbcb-4e179916545d/BlondCover-Final.jpg/600x600bb.webp", spotifyId: "3xKsf9qdS1CyvXSMEid6g8?si=1e849f328efc4315" },
      { title: "Location", artist: "Khalid", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d2/d1/c6/d2d1c6d0-57d0-139c-f930-aeee596cdf84/886446057019.jpg/600x600bb.webp", spotifyId: "152lZdxL1OR0ZMW6KquMif" },
      { title: "Lost in Japan", artist: "Shawn Mendes", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/34/34/ab/3434abcc-3b47-ca75-71df-c6a8392005d0/18UMGIM23926.rgb.jpg/600x600bb.webp", spotifyId: "79esEXlqqmq0GPz0xQSZTV?si=63dd2ef76c2448d5" },
      { title: "Coffee", artist: "beabadoobee", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9a/9e/05/9a9e0570-bee1-20b5-e512-38b5e1168a76/192641174858_Cover.jpg/600x600bb.webp", spotifyId: "429NtPmr12aypzFH3FkN9l?si=c845a81af21f4c8f" },
      { title: "Stay Ready", artist: "Jhene Aiko ft. Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/d4/14/a0d414f8-6cf5-bf24-f722-4a4f32770d22/13UAAIM83456.rgb.jpg/600x600bb.webp", spotifyId: "5nkUIVKqOqdpB6ApKgEMkv?si=4c32a88b27a6463a" },
      { title: "Night Owl", artist: "Galimatias", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/3d/d0/5c3dd029-2f99-a6b1-2b97-a6531a4ac640/artwork.jpg/600x600bb.webp", spotifyId: "5tuhOP6bY3NlwTHghY5MbN?si=ee951bd66b3a41c3" },
      { title: "3 Nights", artist: "Dominic Fike", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2d/37/18/2d3718e9-8620-b603-d3cc-f34ce817070d/886447290170.jpg/600x600bb.webp", spotifyId: "1tNJrcVe6gwLEiZCtprs1u?si=c8bdc89fde904b95" },
      { title: "Borderline", artist: "Tame Impala", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/e3/e7/65e3e740-b69f-f5cb-f2e6-7dedb5265ac9/19UMGIM96748.rgb.jpg/600x600bb.webp", spotifyId: "5hM5arv9KDbCHS0k9uqwjr?si=38b5847b360d4f49" },
      { title: "Get You", artist: "Daniel Caesar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b6/cd/1a/b6cd1a5b-83af-a1e2-0ad7-ea530fcf2522/859722261219.jpg/600x600bb.webp", spotifyId: "2uP6t2J5MEwhr9rDkAAzwh?si=2bc78fb9ff0046cf" },
      { title: "Redbone", artist: "Childish Gambino", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/40/2d/68/402d682f-9eb4-664d-be54-dcd7fc511e88/0044003173460_Cover.jpg/600x600bb.webp", spotifyId: "3vQ4T78TTMOjQXGfXVKQJo?si=9b23ac3252294121" },
      { title: "Ocean Eyes", artist: "Billie Eilish", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/02/1d/30/021d3036-5503-3ed3-df00-882f2833a6ae/17UM1IM17026.rgb.jpg/600x600bb.webp", spotifyId: "7hDVYcQq6MxkdJGweuCtl9?si=4ef427e5048f49ec" },
      { title: "Sunflower", artist: "Post Malone, Swae Lee", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.webp", spotifyId: "0RiRZpuVRbi7oqRdSMwhQY" },
      { title: "Come Through and Chill", artist: "Miguel", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/36/b1/91/36b191ad-319e-729e-653a-6590248059e8/886446846248.jpg/600x600bb.webp", spotifyId: "1m8WpLYXEiNVZchsWEcCSy?si=ac568695fbf54df8" },
      { title: "Good News", artist: "Mac Miller", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/23/39/38/23393826-762f-ec76-dc1e-9344f647c958/093624905981.jpg/600x600bb.webp", spotifyId: "1DWZUa5Mzf2BwzpHtgbHPY?si=5cf85f91112f43f5" }
    ],
    albums: [
      { title: "Blonde", artist: "Frank Ocean", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/45/68/bb4568f3-68cd-619d-fbcb-4e179916545d/BlondCover-Final.jpg/600x600bb.webp", spotifyId: "3mH6qwIy9crq0I9YQbOuDf?si=x95qKRpuRZyuf0CtdlfAXQ" },
      { title: "American Teen", artist: "Khalid", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d0/60/02/d060028d-d39c-2ea4-5af3-cc8b18fb14f8/196873591797.jpg/600x600bb.webp", spotifyId: "6kf46HbnYCZzP6rjvQHYzg?si=p2xwPidnRAKsJGYygGkgSg" },
      { title: "Currents", artist: "Tame Impala", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/65/e3/e7/65e3e740-b69f-f5cb-f2e6-7dedb5265ac9/19UMGIM96748.rgb.jpg/600x600bb.webp", spotifyId: "79dL7FLiJFOO0EoehUHQBv?si=tnM9Fe42S1KHD6A6Jrt0Yw" },
      { title: "Freudian", artist: "Daniel Caesar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b6/cd/1a/b6cd1a5b-83af-a1e2-0ad7-ea530fcf2522/859722261219.jpg/600x600bb.webp" , spotifyId: "4E1XUBMTpLO7GpBzUo65Jp?si=mujTtA0_R4S0-LU2WbqKFw"},
      { title: "Swimming", artist: "Mac Miller", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b2/10/35/b2103580-58fc-2337-1d87-0cf0aad92790/093624828785.jpg/600x600bb.webp" , spotifyId: "5wtE5aLX5r7jOosmPhJhhk?si=P9XtQVy1Stq-MP5vi_MXWQ"},
      { title: "Sunset Season", artist: "Conan Gray", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/1e/6d/5e/1e6d5ebd-af93-8e47-dbfc-18969b72a9f9/18UMGIM66643.rgb.jpg/600x600bb.webp" , spotifyId: "16pubXUlqRziVWRsT6lLNz?si=-75Gum_CSIep5GjDll9v0A"}
    ]
  },
  energetic: {
    label: "a full",
    title: "Para activarte al 100%",
    description: "Temas que te empujan a moverte, entrenar o arrancar el día.",
    quote: "Poné play y dejá que el cuerpo haga el resto.",
    songs: [
      { title: "Stronger", artist: "Kanye West", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/09/c5/45/09c545b8-3973-22b0-5618-864bfa0f08a5/07UMGIM10842.rgb.jpg/600x600bb.webp", spotifyId: "0j2T0R9dR9qdJYsB7ciXhf?si=27ea02ba2a2e46c8" },
      { title: "Titanium", artist: "David Guetta ft. Sia", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/f0/a4/2c/f0a42c10-829c-8b84-7ac2-271f45d4687e/dj.zykhivrk.jpg/600x600bb.webp", spotifyId: "0TDLuuLlV54CkRRUOahJb4?si=5e801186da624ffd" },
      { title: "Don't Stop Me Now", artist: "Queen", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/55/46/bd/5546bd24-083f-e7d5-57be-d66bd3ee24e5/19UM1IM12053.rgb.jpg/600x600bb.webp", spotifyId: "5T8EDUDqKcs6OSOwEsfqG7?si=1823f911ff2b4ecc" },
      { title: "POWER", artist: "Kanye West", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0a/0b/31/0a0b31cc-077c-31bf-e7fe-612191774948/10UMGIM30072.rgb.jpg/600x600bb.webp", spotifyId: "2gZUPNdnz5Y45eiGxpHGSc?si=6b94bff146df4bdc" },
      { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5e/5f/81/5e5f81c7-849e-63f6-6ffd-8801145bfd97/707541525398.jpg/600x600bb.webp", spotifyId: "3bidbhpOYeV4knp8AIu8Xn?si=2fd4bbe337bf4206" },
      { title: "Lose Yourself", artist: "Eminem", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/74/2c/87/742c8794-2a24-9672-dc81-bc6bd2992589/25UMGIM74636.rgb.jpg/600x600bb.webp", spotifyId: "7MJQ9Nfxzh8LPZ9e9u68Fq?si=b6f0cd6a4aa04239" },
      { title: "Remember the Name", artist: "Fort Minor", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e8/e3/fd/e8e3fd40-94e1-5637-01fc-f852a24a61ee/093624992066.jpg/600x600bb.webp", spotifyId: "6ndmKwWqMozN2tcZqzCX4K?si=6ba525b794364c03" },
      { title: "Eye of the Tiger", artist: "Survivor", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f9/02/8f/f9028f63-7a55-235e-f789-1e8946430fa2/614223201122.jpg/600x600bb.webp", spotifyId: "2KH16WveTQWT6KOG9Rg6e2?si=2f1ae5371b2e4d89" },
      { title: "Dance Monkey", artist: "Tones and I", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d2/3a/b8/d23ab839-660d-ef93-2ccb-d0825fc3e8f5/075679838872.jpg/600x600bb.webp", spotifyId: "2XU0oxnq2qxCpomAAuJY8K?si=0685d98dda244cf2" },
      { title: "Thunderstruck", artist: "AC/DC", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/bd/c3/48/bdc34862-f50d-b32a-39f9-354113a3f3eb/dj.gkzjejoy.jpg/600x600bb.webp", spotifyId: "57bgtoPSgt236HzfBOd8kj?si=5d179c7bed444123" },
      { title: "Turn Down for What", artist: "DJ Snake, Lil Jon", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/54/4a/6d/544a6dc7-8d93-a8fe-74cc-530f4c078620/886444410779.jpg/600x600bb.webp", spotifyId: "67awxiNHNyjMXhVgsHuIrs?si=93a486a29d404ce3" },
      { title: "Rain On Me", artist: "Lady Gaga, Ariana Grande", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5d/4d/f9/5d4df96a-e95e-2fe9-404a-5d570513762d/20UMGIM15390.rgb.jpg/600x600bb.webp", spotifyId: "7ju97lgwC2rKQ6wwsf9no9?si=fec1a91c1ba34a3e" },
      { title: "Can't Stop", artist: "Red Hot Chili Peppers", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.webp", spotifyId: "3ZOEytgrvLwQaqXreDs2Jx?si=862806628f6145bb" },
      { title: "Rock Your Body", artist: "Justin Timberlake", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0e/79/86/0e798631-1a91-4a73-9db6-80d87c7e550b/886446781471.jpg/600x600bb.webp", spotifyId: "1AWQoqb9bSvzTjaLralEkT?si=030ef105d7af4d06" },
      { title: "Tusa", artist: "Karol G, Nicki Minaj", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/98/ab/c9/98abc973-ae06-d1c6-3ec4-eb5c0a45b4a5/19UMGIM93544.rgb.jpg/600x600bb.webp", spotifyId: "7k4t7uLgtOxPwTpFmtJNTY?si=8d250c706cc14c03" }
    ],
    albums: [
      { title: "The Eminem Show", artist: "Eminem", cover: "https://acdn-us.mitiendanube.com/stores/427/437/products/71n0xmxpw7l-_uf10001000_ql80_-7317d841e31a9bf27517061910025050-480-0.webp", spotifyId: "2cWBwpqMsDJC1ZUwz813lo?si=96ciUUhWTLCvXmmIHozq3A" },
      { title: "The Rising Tied", artist: "Fort Minor", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/9c/7b/2b9c7b42-e391-f760-4662-d059ebc13d16/093624857655.jpg/600x600bb.webp", spotifyId: "1rKm9mmLsFu0Dt9agiSLbw?si=QM14WiLeQu2wuJAALcB1rw" },
      { title: "Meteora", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c8/2b/68/c82b6899-6bc1-a528-560e-0c82aa035b08/093624833819.jpg/600x600bb.webp", spotifyId: "4Gfnly5CzMJQqkUFfoHaP3?si=A818rg8zTzalKlw20442Cw" },
      { title: "A Night at the Opera", artist: "Queen", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2a/79/5e/2a795e51-8e3e-a743-0dd5-0947ad3383f0/14UMGIM39390.rgb.jpg/600x600bb.webp", spotifyId: "1GbtB4zTqAsyfZEsm1RZfx?si=GQEbewlHSZad3vje2SjHFQ" },
      { title: "The Heist", artist: "Macklemore & Ryan Lewis", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/91/c1/b5/91c1b5cc-d4f1-da61-d3dc-2dd93e6b0a7d/707541525299.jpg/600x600bb.webp", spotifyId: "76FXHQhTuT4QMIxfL09gX8?si=2CX7agaNTVCugQZwRI04LQ" },
      { title: "Nevermind", artist: "Nirvana", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/03/d2/3203d294-c0a0-a016-ddcb-508a093aa0b0/11UMGIM26899.rgb.jpg/600x600bb.webp" , spotifyId: "2UJcKiJxNryhL050F5Z1Fk?si=2evkPWdARfGvYN6PkECJvA"}
    ]
  },
  angry: {
    label: "con bronca",
    title: "Para soltar la bronca",
    description: "Temas intensos para descargar energía sin guardarte nada.",
    quote: "Sentir enojo también es humano. Lo importante es cómo lo soltás.",
    songs: [
      { title: "Killing in the Name", artist: "Rage Against The Machine", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8e/08/bf/8e08bf66-8690-1ba7-affb-fe173c08623d/074645295923.jpg/600x600bb.webp", spotifyId: "59WN2psjkt1tyaxjspN8fp?si=39a30167fd014ec9" },
      { title: "Smells Like Teen Spirit", artist: "Nirvana", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/03/d2/3203d294-c0a0-a016-ddcb-508a093aa0b0/11UMGIM26899.rgb.jpg/600x600bb.webp", spotifyId: "4CeeEOM32jQcH3eN9Q2dGj?si=ce5202aa70834a73" },
      { title: "Break Stuff", artist: "Limp Bizkit", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/54/2c/e5/542ce5e4-b086-c9a8-bef5-5be01b0dd025/06UMGIM01666.rgb.jpg/600x600bb.webp", spotifyId: "5cZqsjVs6MevCnAkasbEOX?si=7c71624145fc43b7" },
      { title: "Chop Suey!", artist: "System Of A Down", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/82/51/52/825152b4-9423-b23b-c036-cc67ead732d4/888888046775.jpg/600x600bb.webp", spotifyId: "2DlHlPMa4M17kufBvI2lEN?si=2893b02619df4e92" },
      { title: "Duality", artist: "Slipknot", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bf/91/02/bf9102b3-0454-40bb-46df-6f9465642756/075679762160.jpg/600x600bb.webp", spotifyId: "61mWefnWQOLf90gepjOCb3?si=411a108cb9a84cad" },
      { title: "Given Up", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f5/d6/68/f5d6681a-734c-8225-aa28-418c3715b6da/dj.xkwgleci.jpg/600x600bb.webp", spotifyId: "1fLlRApgzxWweF1JTf8yM5?si=12f1d5d636f44cbb" },
      { title: "Feeling This", artist: "blink-182", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/57/be/19/57be194f-7b85-86ed-f59b-afc86806b6e5/16UMGIM35664.rgb.jpg/600x600bb.webp", spotifyId: "26AYR77170U49cMcXB7aRV?si=3835eefda8204c53" },
      { title: "Misery Business", artist: "Paramore", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9a/3a/26/9a3a2608-29a7-5585-f990-cdfeb10b7394/075679955005.jpg/600x600bb.webp", spotifyId: "3l9CW99AHtExIRV4hW2N5m?si=4a532661f8264b48" },
      { title: "American Idiot", artist: "Green Day", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/1b/c1/ec/1bc1ec2b-ea7a-f4fb-927e-7c022a09752b/093624915669.jpg/600x600bb.webp", spotifyId: "6nTiIhLmQ3FWhvrGafw2zj?si=7cc93a2ff3324588" },
      { title: "Bodies", artist: "Drowning Pool", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d6/80/1b/d6801bac-64cd-4e05-1007-edabf5bf13d8/193436455626_SorryXTheWrongOneArtConcept.jpg/600x600bb.webp", spotifyId: "7CpbhqKUedOIrcvc94p60Y?si=a1da0cfe5a124b4c" },
      { title: "The Pretender", artist: "Foo Fighters", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/b7/cb/39/b7cb39df-ddd0-ff34-fb81-22ee699c0865/886447850350.jpg/600x600bb.webp", spotifyId: "7x8dCjCr0x6x2lXKujYD34?si=5137db8dc6004e09" },
      { title: "Welcome to the Jungle", artist: "Guns N' Roses", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2b/f6/b1/2bf6b19e-2995-f2ce-e01a-ed098e6d4719/18UMGIM24877.rgb.jpg/600x600bb.webp", spotifyId: "0G21yYKMZoHa30cYVi1iA8?si=6a693b3c35ac4137" },
      { title: "Freak on a Leash", artist: "Korn", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/aa/e5/bf/aae5bfc6-2fe4-7888-4794-7df1419d536e/5054526425774.jpg/600x600bb.webp", spotifyId: "6W21LNLz9Sw7sUSNWMSHRu?si=55cae740e84341d3" },
      { title: "Down with the Sickness", artist: "Disturbed", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a9/ca/96/a9ca964f-78f0-b6a3-d3ea-08370fad7f90/054391308696.jpg/600x600bb.webp", spotifyId: "40rvBMQizxkIqnjPdEWY1v?si=1414f0bba02748fc" },
      { title: "One Step Closer", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f5/d6/68/f5d6681a-734c-8225-aa28-418c3715b6da/dj.xkwgleci.jpg/600x600bb.webp", spotifyId: "3K4HG9evC7dg3N0R9cYqk4?si=75c47ffc625e41f8" }
    ],
    albums: [
      { title: "Rage Against The Machine", artist: "Rage Against The Machine", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8e/08/bf/8e08bf66-8690-1ba7-affb-fe173c08623d/074645295923.jpg/600x600bb.webp", spotifyId: "4LaRYkT4oy47wEuQgkLBul?si=nus45AhHTDq4tJzo4bgt6A" },
      { title: "Nevermind", artist: "Nirvana", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/03/d2/3203d294-c0a0-a016-ddcb-508a093aa0b0/11UMGIM26899.rgb.jpg/600x600bb.webp", spotifyId: "2UJcKiJxNryhL050F5Z1Fk?si=US2t4mv2TYyPtYSdHEJDwQ" },
      { title: "American Idiot", artist: "Green Day", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/1b/c1/ec/1bc1ec2b-ea7a-f4fb-927e-7c022a09752b/093624915669.jpg/600x600bb.webp" , spotifyId: "5dN7F9DV0Qg1XRdIgW8rke?si=cFMLksDvRMC5bClhM5IBOg"},
      { title: "Hybrid Theory", artist: "Linkin Park", cover: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f5/d6/68/f5d6681a-734c-8225-aa28-418c3715b6da/dj.xkwgleci.jpg/600x600bb.webp", spotifyId: "6PFPjumGRpZnBzqnDci6qJ?si=Aez30zJKS4K01pn0n9Pj2g" },
      { title: "Appetite for Destruction", artist: "Guns N' Roses", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a0/4d/c4/a04dc484-03cc-02aa-fa82-5334fcb4bc16/18UMGIM24878.rgb.jpg/600x600bb.webp", spotifyId: "28yHV3Gdg30AiB8h8em1eW?si=nPj89CcuQKW8oE9zZ6TB-Q" },
      { title: "The Sickness", artist: "Disturbed", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a9/ca/96/a9ca964f-78f0-b6a3-d3ea-08370fad7f90/054391308696.jpg/600x600bb.webp", spotifyId: "6IvosVciDOQ9NAPaKwhtLY?si=45yt9jvGQA6DWO9IOc0PjQ" }
    ]
  },
  neutral: {
    label: "neutro",
    title: "Para acompañar el momento",
    description: "Música tranquila para esos días que no son ni muy arriba ni muy abajo.",
    quote: "No todos los días tienen que ser épicos. A veces, solo está bien estar.",
    songs: [
      { title: "Put It All On Me", artist: "Ed Sheeran ft. Ella Mai", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/ba/e2/2a/bae22a5e-c878-da64-0ecc-4a3584a1a139/190295411411.jpg/600x600bb.webp", spotifyId: "5T03itPFOPGGkvVPvPiyla?si=6ff6cfbfe855431b" },
      { title: "Budapest", artist: "George Ezra", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/24/e1/72/24e1722e-c15e-b57d-c8e7-65e0493da082/dj.kajsgkun.jpg/600x600bb.webp", spotifyId: "2ixsaeFioXJmMgkkbd4uj1?si=0dd18f3cabf2403e" },
      { title: "Riptide", artist: "Vance Joy", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7a/1c/65/7a1c6571-34e9-bb77-32be-90c72ba003c0/075679920355.jpg/600x600bb.webp", spotifyId: "7yq4Qj7cqayVTp3FF9CWbm?si=d1642319cf5b437a" },
      { title: "Better Together", artist: "Jack Johnson", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/06/fd/4406fdc0-aab5-e300-82ba-3e5fe81a68a7/00602537868858.rgb.jpg/600x600bb.webp", spotifyId: "2iXdwVdzA0KrI2Q0iZNJbX?si=1405f8251a0a4b2d" },
      { title: "Holocene", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/2a/21/1f/mzi.zfjbltpq.jpg/600x600bb.webp", spotifyId: "35KiiILklye1JRRctaLUb4?si=42920bc26e0141b4" },
      { title: "Skinny Love", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/2f/ea/212fea18-5fdc-ba4d-5dd7-1b07aaa88b67/656605211565.tif/600x600bb.webp", spotifyId: "3B3eOgLJSqPEA0RfboIQVM?si=7857218175ac46a1" },
      { title: "Slow Dancing in a Burning Room", artist: "John Mayer", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7a/a0/f4/7aa0f487-f983-390e-73ef-005115eea1e0/dj.oqpplyfm.jpg/600x600bb.webp", spotifyId: "2jdAk8ATWIL3dwT47XpRfu?si=e9f4d2f5fb624f25" },
      { title: "Heartbeats", artist: "José González", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/49/24/63/4924632f-da03-e179-6590-b4176b4f99d4/7350012240561.png/600x600bb.webp", spotifyId: "5ibNaVO251Pb2c0Wdl00gG?si=389d75bbfc8f4dc7" },
      { title: "Come Away with Me", artist: "Norah Jones", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.webp", spotifyId: "6jGnykaS6TkWp15utXSAeI?si=a7349985e07a482e" },
      { title: "Home", artist: "Edward Sharpe & The Magnetic Zeros", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e0/98/72/e098729e-e8ff-2d62-6391-1fc43b7f466c/4050538542318_.jpg/600x600bb.webp", spotifyId: "2x1jP9BexWtOKudvuUHbaD?si=24e82c2e6c5942de" },
      { title: "Banana Pancakes", artist: "Jack Johnson", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/06/fd/4406fdc0-aab5-e300-82ba-3e5fe81a68a7/00602537868858.rgb.jpg/600x600bb.webp", spotifyId: "0BgbobvykXxEvxo2HhCuvM?si=553d33d3430d47ea" },
      { title: "Holocene", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/2a/21/1f/mzi.zfjbltpq.jpg/600x600bb.webp", spotifyId: "35KiiILklye1JRRctaLUb4?si=8d483f218c7842f2" },
      { title: "Let It Go", artist: "James Bay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/71/de/d8/71ded8e1-f369-5664-aad7-1ac265f38157/14UMGIM63212.rgb.jpg/600x600bb.webp", spotifyId: "3nnG7AM9QopHVPEuLX3Khk?si=718ae03d20a64d01&nd=1&dlsi=ec70a0ff2eeb4fa8" },
      { title: "Yellow", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/27/16/8d2716ea-4e3a-466f-5aa7-cf750e762bb6/5099941647356_1500x1500_300dpi.jpg/600x600bb.webp", spotifyId: "3AJwUDP919kvQ9QcozQPxg?si=c1b2d7647bd146a7" },
      { title: "Gravity", artist: "John Mayer", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7a/a0/f4/7aa0f487-f983-390e-73ef-005115eea1e0/dj.oqpplyfm.jpg/600x600bb.webp", spotifyId: "3SktMqZmo3M9zbB7oKMIF7?si=28fef2a428d6463c" }
    ],
    albums: [
      { title: "In Between Dreams", artist: "Jack Johnson", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/06/fd/4406fdc0-aab5-e300-82ba-3e5fe81a68a7/00602537868858.rgb.jpg/600x600bb.webp" , spotifyId: "2B9q4KPjOEYu885Keo9dfX?si=Sw_9xwoaTLm0lBWFIOp8Fg"},
      { title: "Come Away With Me", artist: "Norah Jones", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.webp", spotifyId: "3ArSFkv4OQOosOvYTrZNIl?si=RFmd9k32R0OXBT-r0tN0Qg" },
      { title: "Parachutes", artist: "Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/94/b3/0a/94b30a04-0a48-f7c2-d392-09e32311ea11/5021732960849.jpg/600x600bb.webp", spotifyId: "6ZG5lRT77aJ3btmArcykra?si=2ymR9k5_RcK6431gg7sJDg" },
      { title: "Vespertine", artist: "Björk", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/34/f3/e2/34f3e209-81a0-1f2e-03dd-62f26a24e455/5016958995102.png/600x600bb.webp", spotifyId: "7sScYIMy44GyOll7TpWcak?si=pOu7t885SCCHtKghhJT7Vw" },
      { title: "Wanted on Voyage", artist: "George Ezra", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/24/e1/72/24e1722e-c15e-b57d-c8e7-65e0493da082/dj.kajsgkun.jpg/600x600bb.webp", spotifyId: "6mcMKGEgukjyiR5IKElQ2E?si=KrfFVJNYTLSxqEmAm_XSJQ" },
      { title: "Chaos and the Calm", artist: "James Bay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/be/2b/84/be2b84a4-f31e-6785-0436-58883d9683f4/25UMGIM59987.rgb.jpg/600x600bb.webp", spotifyId: "3GqsyMrJu3o8jLiGyBsBQW?si=WHdpN-R7SvOI7rv2jgvfEA" }
    ]
  },
  tired: {
    label: "agotado",
    title: "Para descansar la cabeza",
    description: "Música suave para cerrar el día y soltar tensiones.",
    quote: "Está bien frenar. No tenés que poder con todo hoy.",
    songs: [
      { title: "Holocene", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/2a/21/1f/mzi.zfjbltpq.jpg/600x600bb.webp", spotifyId: "35KiiILklye1JRRctaLUb4?si=ab9b5e8685e44db7" },
      { title: "Slow Dancing in the Dark", artist: "Joji", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b8/42/74/b8427409-1c8f-5c8a-dee2-82a4ed7b6954/190296940323.jpg/600x600bb.webp", spotifyId: "6rY5FAWxCdAGllYEOZMbjW?si=a05e05e46be44893" },
      { title: "Like Real People Do", artist: "Hozier", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/ba/b8/1abab888-59d3-bced-1423-6b5ec340f23b/15UMGIM58108.rgb.jpg/600x600bb.webp", spotifyId: "4LGJ2pLDvTRnul3EcZoYkX?si=e64603c870c042c1" },
      { title: "Cherry Wine (Live)", artist: "Hozier", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/ba/b8/1abab888-59d3-bced-1423-6b5ec340f23b/15UMGIM58108.rgb.jpg/600x600bb.webp", spotifyId: "4Q66chx9WzqWcLItXoZ5r4?si=0e26d5208e1f438a" },
      { title: "Bloom", artist: "The Paper Kites", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a3/02/cd/a302cda7-7d2e-6b56-ee05-37f4f2fd4c1e/98f8c51c-049c-41bd-bc2d-6809a5e07aa0.png/600x600bb.webp", spotifyId: "44alNkXsYnTyPnkMdohBcx?si=fd010045ab3a4dd3" },
      { title: "Work Song", artist: "Hozier", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/13/e9/77/13e97701-a1a6-6618-c363-a2c72927d473/00602537792290.rgb.jpg/600x600bb.webp", spotifyId: "35PKfoynRpVFoAUE3D5Kc6?si=0a3031f1d76c40d5" },
      { title: "Breathe Me", artist: "Sia", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8d/c2/67/8dc26773-bccc-94f8-86c7-dd97b9a4816e/00602547823892.rgb.jpg/600x600bb.webp", spotifyId: "7jqzZyJJLrpkRFYGpkqSK6?si=0df02bbdd4b64eda" },
      { title: "Motion Picture Soundtrack", artist: "Radiohead", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bd/8e/13/bd8e1358-b367-a689-cb84-cebd0b067dc4/634904078263.png/600x600bb.webp", spotifyId: "4SrRrB27n7fiRkQcPoKfpk?si=4ac4cf94ab4642e1" },
      { title: "Turning Page", artist: "Sleeping At Last", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cf/2d/64/cf2d64ff-11a4-d1bd-cb8e-a9cdc5aabaea/Cover.jpg/600x600bb.webp", spotifyId: "2kfGoV9a5dbSKCNmUWH2ZF?si=0a9517c83ce5463c" },
      { title: "Sea of Love", artist: "Cat Power", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/cc/ed/b8/ccedb89c-e5ba-c59c-465b-bfc517e4a9ba/744861042631.png/600x600bb.webp", spotifyId: "33kKcOJoyNduHwXhEnga8X?si=2fc601e64f064a9e" },
      { title: "Fourth of July", artist: "Sufjan Stevens", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ba/61/bc/ba61bcaf-2034-f13e-6f66-fdb578d618dc/656605609966.jpg/600x600bb.webp", spotifyId: "5Qnrgqy1pAm9GyNQOgyVFz?si=36c68f57e8424eb6" },
      { title: "Liability (Reprise)", artist: "Lorde", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/600x600bb.webp", spotifyId: "6lFDB0BFDRV58qaQDX85jV?si=c81e735067814e45" },
      { title: "Saturn", artist: "Sleeping At Last", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/be/aa/64/beaa6443-007d-acd2-4488-141675b63ef5/859711635557_cover.jpg/600x600bb.webp", spotifyId: "3tJjZMHLqhD8DaGgdBICnc?si=444628c105b94a2d" },
      { title: "Cherry", artist: "Lana Del Rey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fc/d3/81/fcd381c9-451f-0917-da01-06678a92b85c/17UMGIM90308.rgb.jpg/600x600bb.webp", spotifyId: "1Ym6aMuT5bliaZMC67AmPp?si=c9ce55c7256f4f03" },
      { title: "The Stable Song", artist: "Gregory Alan Isakov", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/64/23/79/642379a1-284f-615b-7181-d12738444ab6/190394424190.jpg/600x600bb.webp", spotifyId: "3G9ETaH55bMQx8hwNhAgbU?si=4eaa64e48b3c4a32" }
    ],
    albums: [
      { title: "22, A Million", artist: "Bon Iver", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/df/7d/90/df7d908a-b7ae-5565-4f89-40f8bc9440ab/656605230061.jpg/600x600bb.webp", spotifyId: "4bJCKmpKgti10f3ltz6LLl?si=eY0v1sG5RpiWrvm8mEeJMw" },
      { title: "Nectar", artist: "Joji", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/06/fb/8e/06fb8e9a-6748-3bad-8a84-5d00b15e4857/190296849497.jpg/600x600bb.webp", spotifyId: "65edimIChzNNK8VGn56pIK?si=rCBc4bTsTLmClcQWKDdBlA" },
      { title: "Wasteland, Baby!", artist: "Hozier", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/05/62/dd/0562ddee-754e-f261-cdbf-a733a9a8f0fd/18UMGIM87114.rgb.jpg/600x600bb.webp", spotifyId: "5j1ZsFyNCsnt62prbs85eE?si=wmaZJV-zRgCrGeWusC8aIg" },
      { title: "Atlas: Space", artist: "Sleeping At Last", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/fc/29/2d/fc292df7-2df0-3d18-4598-9565090f0f91/859719777938_cover.jpg/600x600bb.webp", spotifyId: "4D4rqEvVjxiQfN4iTUCiQH?si=pqTGbOinQSiGmvM79V0OGg" },
      { title: "Ultraviolence", artist: "Lana Del Rey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/18/3f/ad/183fadf3-0d36-6db2-b733-d8f032654b07/14UMGIM20562.rgb.jpg/600x600bb.webp", spotifyId: "1ORxRsK3MrSLvh7VQTF01F?si=kMPHP2iLTK-qhHy6G3hDuw" },
      { title: "The Weatherman", artist: "Gregory Alan Isakov", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/12/00/1c/12001c80-04b7-2b53-0b29-3021749425ba/Weatherman_vinyl_front_cover-ALT-1600px-300_dpi.jpg/600x600bb.webp", spotifyId: "3IcfYXw7lTtLfG5XWLlSZi?si=xyel7x2_Slihp38loNhu_A" }
    ]
  }
};