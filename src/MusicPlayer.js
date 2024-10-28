import React, { useState, useRef, useEffect } from 'react';
import './musicplayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 0.5
  const audioRef = useRef(null);

  const songs = [
    { title: "The Royal Heartaches - Yu ch bitgii uldee", src: `${process.env.PUBLIC_URL}/Music/The Royal Heartaches  Yu ch bitgii uldee.mp3` },
    { title: "Radiohead - Creep", src: `${process.env.PUBLIC_URL}/Music/Radiohead - Creep.mp3` },
    { title: "Sufjan Stevens - Mystery of Love", src: `${process.env.PUBLIC_URL}/Music/Sufjan Stevens - Mystery of Love (From Call Me By Your Name Soundtrack).mp3` },
    { title: "Salvatore - Lana Del Rey", src: `${process.env.PUBLIC_URL}/Music/Salvatore - Lana Del Rey.mp3` },
    { title: "Good Looking", src: `${process.env.PUBLIC_URL}/Music/Good Looking.mp3` }
  ];

  const playPauseMusic = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
      console.log("Paused:", audioElement.src);
    } else {
      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      console.log("Playing:", audioElement.src);
    }
    setIsPlaying(!isPlaying);
  };

  const changeSong = (index) => {
    setCurrentSongIndex(index);
    const audioElement = audioRef.current;
    audioElement.src = songs[index].src;
    audioElement.load(); // Load the new song
    audioElement.play().catch((error) => {
      console.error("Error playing new song:", error);
    });
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    changeSong(nextIndex);
  };

  const playPreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong(prevIndex);
  };

  const playSongByName = (songTitle) => {
    const songIndex = songs.findIndex(song => song.title === songTitle);
    if (songIndex !== -1) {
      changeSong(songIndex);
    } else {
      console.error("Song not found:", songTitle);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  useEffect(() => {
    audioRef.current.volume = volume; // Set initial volume
  }, [volume]);

  return (
    <div className="music-player">
      <h2>Cyberpunk Music Player</h2>
      <p>{songs[currentSongIndex].title}</p>
      <audio ref={audioRef}></audio>

      <div className="controls">
        <button onClick={playPreviousSong}>⏮ Prev</button>
        <button onClick={playPauseMusic}>{isPlaying ? '⏸ Pause' : '▶ Play'}</button>
        <button onClick={playNextSong}>⏭ Next</button>
      </div>

      <div className="options">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange} 
        />
      </div>

      {/* Example buttons to play songs by name */}
      <div className="song-list">
        {songs.map((song, index) => (
          <button key={index} onClick={() => playSongByName(song.title)}>
            {song.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
