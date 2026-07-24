import { useEffect, useRef } from 'react';
import { usePlayerStore } from '../store/usePlayerStore';

export function useAudioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const {
        currentTrack,
        isPlaying,
        setCurrentTime,
        setFullTime,
        togglePlay,
    } = usePlayerStore();


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play().catch(() => console.log('Autoplay bloqueado pelo navegador'));
        } else {
            audio.pause();
        }
    }, [isPlaying, currentTrack]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

        const handleLoadedMetadata = () => setFullTime(audio.duration);

        const handleEnded = () => {
            setCurrentTime(0);

            if (isPlaying) togglePlay();
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [setCurrentTime, setFullTime, togglePlay, isPlaying]);

    return { audioRef };
}