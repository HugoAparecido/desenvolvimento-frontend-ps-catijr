import { create } from 'zustand';

// Tipagem baseada no que o MiniMusicInformation precisa
export interface Track {
    id: string;
    musicName: string;
    artistName: string;
    imagePath: string;
    albumId: string;
    artistId: string;
    audioUrl?: string; // Necessário para tocar o áudio real depois
}

interface PlayerState {
    // === ESTADO ===
    currentTrack: Track | null;
    isPlaying: boolean;
    currentTime: number;
    fullTime: number;
    isFullScreen: boolean; // Para o parentIsFull e os ícones

    // === AÇÕES ===
    playTrack: (track: Track) => void;
    togglePlay: () => void;
    nextTrack: () => void;
    previousTrack: () => void;
    setCurrentTime: (time: number) => void;
    setFullTime: (time: number) => void;
    toggleFullScreen: () => void;
}

const mockTrack: Track = {
    id: 'trk-01',
    musicName: 'Shiyu Defense (Ice Anomaly Mix)',
    artistName: 'Proxy Studios',
    imagePath: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=150&auto=format&fit=crop',
    albumId: 'alb-10',
    artistId: 'art-99',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
};

export const usePlayerStore = create<PlayerState>((set) => ({
    // Valores Iniciais
    currentTrack: mockTrack,
    isPlaying: true,
    currentTime: 45,
    fullTime: 245,
    isFullScreen: false,

    // Implementação das Ações
    playTrack: (track) => set({ currentTrack: track, isPlaying: true }),

    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

    // Em um app real, essas duas funções manipulariam uma array de "Fila" (Queue)
    nextTrack: () => console.log('Lógica para pular para a próxima música'),
    previousTrack: () => console.log('Lógica para voltar a música'),

    setCurrentTime: (time) => set({ currentTime: time }),

    setFullTime: (time) => set({ fullTime: time }),

    toggleFullScreen: () => set((state) => ({ isFullScreen: !state.isFullScreen })),
}));