import { useEffect, useRef } from 'react';
import { usePlayerStore } from '../store/usePlayerStore';

export function useAudioPlayer() {
    // Cria uma referência para a tag <audio> que vamos colocar no HTML
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const {
        currentTrack,
        isPlaying,
        setCurrentTime,
        setFullTime,
        togglePlay, // Usaremos para pausar quando a música acabar
    } = usePlayerStore();

    // Efeito 1: Controla o Play/Pause sempre que o Zustand mudar
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            // O catch previne erros caso o navegador bloqueie o autoplay
            audio.play().catch(() => console.log('Autoplay bloqueado pelo navegador'));
        } else {
            audio.pause();
        }
    }, [isPlaying, currentTrack]);

    // Efeito 2: Escuta os eventos do navegador para atualizar a barra
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Dispara várias vezes por segundo enquanto toca
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

        // Pega o tempo total assim que o arquivo carregar
        const handleLoadedMetadata = () => setFullTime(audio.duration);

        // O QUE VOCÊ PEDIU: Quando chegar no final, volta pro zero
        const handleEnded = () => {
            setCurrentTime(0); // Zera a barra

            // Aqui você tem duas opções: 
            // Opção A: Pausar a música (o que faremos agora)
            if (isPlaying) togglePlay();

            // Opção B: Tocar a próxima (se você já tiver a função nextTrack)
            // nextTrack(); 
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);

        // Limpeza dos eventos para não vazar memória
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [setCurrentTime, setFullTime, togglePlay, isPlaying]);

    return { audioRef };
}