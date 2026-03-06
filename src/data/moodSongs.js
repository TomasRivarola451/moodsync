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
      { title: "I Gotta Feeling", artist: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/2f/81/a22f8153-2de8-d659-0e73-d4fc1997f65f/24UM1IM35645.rgb.jpg/600x600bb.webp" },
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
      { title: "Stronger", artist: "Kanye West" },
      { title: "Titanium", artist: "David Guetta ft. Sia" },
      { title: "Don't Stop Me Now", artist: "Queen" },
      { title: "POWER", artist: "Kanye West" },
      { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis" },
      { title: "Lose Yourself", artist: "Eminem" },
      { title: "Remember the Name", artist: "Fort Minor" },
      { title: "Eye of the Tiger", artist: "Survivor" },
      { title: "Dance Monkey", artist: "Tones and I" },
      { title: "Thunderstruck", artist: "AC/DC" },
      { title: "Turn Down for What", artist: "DJ Snake, Lil Jon" },
      { title: "Rain On Me", artist: "Lady Gaga, Ariana Grande" },
      { title: "Can't Stop", artist: "Red Hot Chili Peppers" },
      { title: "Rock Your Body", artist: "Justin Timberlake" },
      { title: "Tusa", artist: "Karol G, Nicki Minaj" }
    ],
    albums: [
      { title: "The Eminem Show", artist: "Eminem", cover: "" },
      { title: "The Rising Tied", artist: "Fort Minor", cover: "" },
      { title: "Meteora", artist: "Linkin Park", cover: "" },
      { title: "A Night at the Opera", artist: "Queen", cover: "" },
      { title: "The Heist", artist: "Macklemore & Ryan Lewis", cover: "" },
      { title: "Nevermind", artist: "Nirvana", cover: "" }
    ]
  },
  angry: {
    label: "con bronca",
    title: "Para soltar la bronca",
    description: "Temas intensos para descargar energía sin guardarte nada.",
    quote: "Sentir enojo también es humano. Lo importante es cómo lo soltás.",
    songs: [
      { title: "Killing in the Name", artist: "Rage Against The Machine" },
      { title: "Smells Like Teen Spirit", artist: "Nirvana" },
      { title: "Break Stuff", artist: "Limp Bizkit" },
      { title: "Chop Suey!", artist: "System Of A Down" },
      { title: "Duality", artist: "Slipknot" },
      { title: "Given Up", artist: "Linkin Park" },
      { title: "Feeling This", artist: "blink-182" },
      { title: "Misery Business", artist: "Paramore" },
      { title: "American Idiot", artist: "Green Day" },
      { title: "Bodies", artist: "Drowning Pool" },
      { title: "The Pretender", artist: "Foo Fighters" },
      { title: "Welcome to the Jungle", artist: "Guns N' Roses" },
      { title: "Freak on a Leash", artist: "Korn" },
      { title: "Down with the Sickness", artist: "Disturbed" },
      { title: "One Step Closer", artist: "Linkin Park" }
    ],
    albums: [
      { title: "Rage Against The Machine", artist: "Rage Against The Machine", cover: "" },
      { title: "Nevermind", artist: "Nirvana", cover: "" },
      { title: "American Idiot", artist: "Green Day", cover: "" },
      { title: "Hybrid Theory", artist: "Linkin Park", cover: "" },
      { title: "Appetite for Destruction", artist: "Guns N' Roses", cover: "" },
      { title: "The Sickness", artist: "Disturbed", cover: "" }
    ]
  },
  neutral: {
    label: "neutro",
    title: "Para acompañar el momento",
    description: "Música tranquila para esos días que no son ni muy arriba ni muy abajo.",
    quote: "No todos los días tienen que ser épicos. A veces, solo está bien estar.",
    songs: [
      { title: "Put It All On Me", artist: "Ed Sheeran ft. Ella Mai" },
      { title: "Budapest", artist: "George Ezra" },
      { title: "Riptide", artist: "Vance Joy" },
      { title: "Better Together", artist: "Jack Johnson" },
      { title: "Holocene", artist: "Bon Iver" },
      { title: "Skinny Love", artist: "Bon Iver" },
      { title: "Slow Dancing in a Burning Room", artist: "John Mayer" },
      { title: "Heartbeats", artist: "José González" },
      { title: "Come Away with Me", artist: "Norah Jones" },
      { title: "Home", artist: "Edward Sharpe & The Magnetic Zeros" },
      { title: "Banana Pancakes", artist: "Jack Johnson" },
      { title: "Holocene", artist: "Bon Iver" },
      { title: "Let It Go", artist: "James Bay" },
      { title: "Yellow", artist: "Coldplay" },
      { title: "Gravity", artist: "John Mayer" }
    ],
    albums: [
      { title: "In Between Dreams", artist: "Jack Johnson", cover: "" },
      { title: "Come Away With Me", artist: "Norah Jones", cover: "" },
      { title: "Parachutes", artist: "Coldplay", cover: "" },
      { title: "Vespertine", artist: "Björk", cover: "" },
      { title: "Wanted on Voyage", artist: "George Ezra", cover: "" },
      { title: "Chaos and the Calm", artist: "James Bay", cover: "" }
    ]
  },
  tired: {
    label: "agotado",
    title: "Para descansar la cabeza",
    description: "Música suave para cerrar el día y soltar tensiones.",
    quote: "Está bien frenar. No tenés que poder con todo hoy.",
    songs: [
      { title: "Holocene", artist: "Bon Iver" },
      { title: "Slow Dancing in the Dark", artist: "Joji" },
      { title: "Like Real People Do", artist: "Hozier" },
      { title: "Cherry Wine (Live)", artist: "Hozier" },
      { title: "Bloom", artist: "The Paper Kites" },
      { title: "Work Song", artist: "Hozier" },
      { title: "Breathe Me", artist: "Sia" },
      { title: "Motion Picture Soundtrack", artist: "Radiohead" },
      { title: "Turning Page", artist: "Sleeping At Last" },
      { title: "Sea of Love", artist: "Cat Power" },
      { title: "Fourth of July", artist: "Sufjan Stevens" },
      { title: "Liability (Reprise)", artist: "Lorde" },
      { title: "Saturn", artist: "Sleeping At Last" },
      { title: "Cherry", artist: "Lana Del Rey" },
      { title: "The Stable Song", artist: "Gregory Alan Isakov" }
    ],
    albums: [
      { title: "22, A Million", artist: "Bon Iver", cover: "" },
      { title: "Nectar", artist: "Joji", cover: "" },
      { title: "Wasteland, Baby!", artist: "Hozier", cover: "" },
      { title: "Atlas: Space", artist: "Sleeping At Last", cover: "" },
      { title: "Ultraviolence", artist: "Lana Del Rey", cover: "" },
      { title: "The Weatherman", artist: "Gregory Alan Isakov", cover: "" }
    ]
  }
};