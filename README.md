# 🎵 MoodSync

Aplicación web que recomienda música personalizada según tu estado emocional usando inteligencia artificial.

## ✨ Features

- **Detección de mood con IA**: OpenAI GPT-3.5 interpreta tu estado emocional desde texto libre
- **UI dinámica**: 7 temas visuales diferentes que cambian según el mood detectado
- **Recomendaciones personalizadas**: Canciones y álbumes curados para cada estado
- **Audio ambiente reactivo**: Sonido de fondo que se adapta a tu mood
- **Integración con Spotify**: Click en canciones/álbumes para escuchar directamente
- **Responsive design**: Funciona perfecto en desktop, tablet y mobile

## 🎨 Moods Disponibles

- **Happy** - Energía positiva y alegría
- **Sad** - Momentos de tristeza o melancolía
- **Energetic** - Alta energía y motivación
- **Chill** - Relajación y calma
- **Angry** - Frustración o enojo
- **Tired** - Cansancio y fatiga
- **Neutral** - Estado neutral o indeciso

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **IA**: OpenAI API (GPT-3.5-turbo)
- **Styling**: CSS puro con variables dinámicas
- **Animations**: CSS animations + React
- **Audio**: HTML Audio API
- **3D Graphics**: Three.js (partículas y background)
- **Deployment**: Vercel

## 🚀 Demo

🔗 **[Ver demo en vivo](https://moodsync-app.vercel.app)**

## 💻 Instalación Local

### Prerequisitos

- Node.js 16+ 
- npm o yarn
- API Key de OpenAI

### Setup

1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/moodsync.git
cd moodsync
```

2. Instalar dependencias
```bash
npm install
```

3. Crear archivo `.env` en la raíz
```bash
OPENAI_API_KEY=tu_openai_key_aqui
```

4. Iniciar servidor de desarrollo
```bash
npm run dev
```

5. Abrir [http://localhost:5173](http://localhost:5173)

## 🔑 Variables de Entorno

Crear un archivo `.env` con:
```
OPENAI_API_KEY=sk-...
```

Obtener tu API key en: https://platform.openai.com/api-keys

## 📂 Estructura del Proyecto
```
moodsync/
├── api/
│   └── chat.js              # Backend OpenAI handler
├── public/
│   └── audio/               # Audio files por mood
├── src/
│   ├── components/          # Componentes React
│   │   ├── MoodInput/
│   │   ├── MoodResult/
│   │   ├── Logo/
│   │   └── ...
│   ├── services/
│   │   ├── aiService.js     # OpenAI integration
│   │   └── moodAI.js        # Mood normalization
│   ├── styles/
│   │   ├── global.css
│   │   └── themes.css       # CSS variables por mood
│   └── App.jsx
└── README.md
```

## 🎯 Cómo Funciona

1. **Input**: El usuario escribe su estado emocional en texto libre
2. **Detección**: OpenAI analiza el texto y detecta el mood
3. **Normalización**: El mood se mapea a una de las 7 categorías
4. **UI Update**: Los colores, animaciones y audio cambian dinámicamente
5. **Recomendaciones**: Se muestran canciones y álbumes curados
6. **Spotify**: Click para escuchar directamente en Spotify

## 🎨 Sistema de Temas

Cada mood tiene su propia paleta de colores y estética:

- **Happy**: Verde vibrante (#22c55e)
- **Sad**: Azul melancólico (#3b82f6)
- **Energetic**: Naranja intenso (#f97316)
- **Chill**: Violeta suave (#a78bfa)
- **Angry**: Rojo fuerte (#ef4444)
- **Tired**: Gris apagado (#64748b)
- **Neutral**: Teal (#14b8a6)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/NuevaFeature`)
3. Commit cambios (`git commit -m 'Add: nueva feature'`)
4. Push al branch (`git push origin feature/NuevaFeature`)
5. Abrir Pull Request

## 📝 Licencia

MIT License - ver archivo [LICENSE](LICENSE) para detalles

## 👤 Autor

**Tomas Rivarola**
- GitHub: [@tomasrivarola451](https://github.com/tomasrivarola451)
- LinkedIn: [Tomas Rivarola](https://linkedin.com/in/tomas-rivarola)

## 🙏 Agradecimientos

- OpenAI por la API
- Comunidad de React
- Vercel por el hosting
- Spotify por los datos de música

---

⭐ Si te gustó el proyecto, dejá una estrella en GitHub!
```
