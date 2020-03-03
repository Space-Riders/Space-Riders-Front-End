import React, { useState, useEffect } from "react";
import "../styles/Chat.css";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const MusicPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <button className="btn-primary" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
  );
};

export default MusicPlayer;