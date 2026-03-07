/* ---------------- Mood Result ---------------- */
import { useEffect, useMemo, useState } from "react";
import { moodSongs } from "../../data/moodSongs";
import { normalizeMood } from "../../services/moodAI";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "./MoodResult.css";

function getRandomSongs(songs, count) {
  if (!Array.isArray(songs) || songs.length === 0) return [];

  const copy = [...songs];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, Math.min(count, copy.length));
}

function MoodResult({ mood, error }) {
  const [songsSeed, setSongsSeed] = useState(0);
  const [albumsSeed, setAlbumsSeed] = useState(0);

  const hasApiMood = Boolean(mood);
  const normalizedMood = hasApiMood ? normalizeMood(mood) : null;
  const moodData =
    hasApiMood && normalizedMood ? moodSongs[normalizedMood] || null : null;

  const [songsRef, songsVisible] = useIntersectionObserver();
  const [albumsRef, albumsVisible] = useIntersectionObserver();

  useEffect(() => {
    if (hasApiMood) {
      setSongsSeed((prev) => prev + 1);
      setAlbumsSeed((prev) => prev + 1);
    }
  }, [hasApiMood, normalizedMood]);

  // 8 canciones para un grid 2x4
  const songs = useMemo(
    () =>
      moodData && Array.isArray(moodData.songs)
        ? getRandomSongs(moodData.songs, 8)
        : [],
    [moodData, songsSeed]
  );

  // 3 álbumes aleatorios de los 6 disponibles
  const albums = useMemo(
    () =>
      moodData && Array.isArray(moodData.albums)
        ? getRandomSongs(moodData.albums, 3)
        : [],
    [moodData, albumsSeed]
  );

  if (error) {
    return (
      <div className="mood-result">
        <p className="error">{error}</p>
      </div>
    );
  }

  if (!hasApiMood) return null;

  const handleAnotherSongs = () => {
    setSongsSeed((prev) => prev + 1);
  };

  const handleAnotherAlbums = () => {
    setAlbumsSeed((prev) => prev + 1);
  };

  const hasSongs = songs.length > 0;
  const hasAlbums = albums.length > 0;

  return (
    <div className="mood-result">
      {hasSongs && (
        <section
          ref={songsRef}
          className={`songs-section scroll-fade-section ${
            songsVisible ? "fade-in-up" : ""
          }`}
        >
          <header className="songs-section-header">
            <p className="songs-section-kicker">Selección generada por IA</p>
            <h2 className="songs-section-title">TRACKS SUGERIDOS</h2>
            <p className="songs-section-subtitle">
              Una mezcla de temas pensados para acompañar este momento
              emocional.
            </p>
          </header>

          <ul className="song-list">
            {songs.map((song, index) => (
              <li
                key={`${song.title}-${song.artist}-${songsSeed}-${index}`}
                className="song-card"
              >
                <div className="song-card-cover">
                  {song.cover || song.image ? (
                    <img
                      src={song.cover || song.image}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <span className="song-card-cover-placeholder" />
                  )}
                </div>

                <div className="song-card-info">
                  <strong className="song-card-title">{song.title}</strong>
                  <span className="song-card-artist">{song.artist}</span>
                  {song.album && (
                    <span className="song-card-album">{song.album}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="another-recommendation"
            onClick={handleAnotherSongs}
          >
            Otra recomendación
          </button>
        </section>
      )}

      {hasAlbums && (
        <section
          ref={albumsRef}
          className={`albums-section scroll-fade-section ${
            albumsVisible ? "fade-in-up" : ""
          }`}
        >
          <div className="albums-container">
            <div className="albums-stack-wrapper">
              <div className="albums-stack">
                {albums.map((album, index) => (
                  <div
                    key={`${album.title}-${album.artist}-${albumsSeed}-${index}`}
                    className="album-card"
                  >
                    {album.cover ? (
                      <img
                        src={album.cover}
                        alt={album.title}
                        loading="lazy"
                      />
                    ) : (
                      <span className="album-card-cover-placeholder" />
                    )}

                    <div className="album-overlay">
                      <div className="album-card-title">{album.title}</div>
                      <div className="album-card-artist">{album.artist}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="albums-info">
              <h2 className="albums-info-title">ÁLBUMES RECOMENDADOS</h2>
              <p className="albums-description">
                Explorá álbumes completos curados especialmente según tu estado
                emocional. Ideal para poner de fondo y dejar que la experiencia
                fluya de principio a fin.
              </p>
              <ul className="albums-features">
                <li>Curación personalizada por IA según tu mood.</li>
                <li>Experiencia de escucha continua, sin saltar de tema.</li>
                <li>Descubrí artistas y discos que pueden marcarte.</li>
              </ul>

              <button
                type="button"
                className="another-recommendation another-recommendation-albums"
                onClick={handleAnotherAlbums}
              >
                Otra recomendación
              </button>
            </div>
          </div>
        </section>
      )}

      {!hasSongs && !hasAlbums && (
        <p className="mood-result-empty">
          Todavía no hay canciones para este estado.
        </p>
      )}
    </div>
  );
}

export default MoodResult;