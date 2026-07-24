import { create } from 'zustand';

export interface Track {
    id: string;
    musicName: string;
    artistName: string;
    imagePath: string;
    albumId: string;
    artistId: string;
    audioUrl?: string;
}

interface PlayerState {
    currentTrack: Track | null;
    isPlaying: boolean;
    fullTime: number;
    currentTime: number;
    isFullScreen: boolean;

    playTrack: (track: Track) => void;
    togglePlay: () => void;
    nextTrack: () => void;
    previousTrack: () => void;
    setFullTime: (time: number) => void;
    setCurrentTime: (time: number) => void;
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
    currentTrack: mockTrack,
    isPlaying: true,
    currentTime: 0,
    fullTime: 245,
    isFullScreen: false,

    playTrack: (track) => set({ currentTrack: track, isPlaying: true }),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
    nextTrack: () => console.log('Next Music'),
    previousTrack: () => console.log('Previous music'),
    setFullTime: (time) => set({ fullTime: time }),
    setCurrentTime: (time) => set({ currentTime: time }),
    toggleFullScreen: () => set((state) => ({ isFullScreen: !state.isFullScreen })),
}));