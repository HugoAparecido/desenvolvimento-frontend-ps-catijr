import { GoScreenFull, GoScreenNormal } from "react-icons/go";
import { MiniMusicInformation } from "../music/components/MiniMusicInformation";
import { PlayControl } from "./components/PlayControl";
import { PlayerProgressBar } from "./components/PlayerProgressBar";
import { VolumeControl } from "./components/VolumeControl";
import { usePlayerStore } from "./store/usePlayerStore";
import { useAudioPlayer } from "./hooks/useAudioPlayer";

export function Player() {
    const {
        currentTrack,
        isPlaying,
        currentTime,
        fullTime,
        isFullScreen,
        togglePlay,
        nextTrack,
        previousTrack,
        toggleFullScreen
    } = usePlayerStore();

    const { audioRef } = useAudioPlayer();

    if (!currentTrack) {
        return <div className="h-24 bg-zinc-950">Selecione uma música...</div>;
    }

    return (
        <div className="h-16 p-2.5 flex justify-between items-center w-full">
            <audio
                ref={audioRef}
                src={currentTrack.audioUrl}
                className="hidden"
            />
            <MiniMusicInformation
                artistName={currentTrack.artistName}
                imagePath={currentTrack.imagePath}
                musicName={currentTrack.musicName}
                parentIsFull={isFullScreen}
                toAlbum={`/album/${currentTrack.albumId}`}
                toArtist={`/artist/${currentTrack.artistId}`}
            />
            <div className="flex flex-col justify-center items-center gap-1 w-max">
                <PlayControl
                    isPlaying={isPlaying}
                    nextMusicClick={nextTrack}
                    onTogglePlay={togglePlay}
                    previousMusicClick={previousTrack}
                />
                <PlayerProgressBar
                    currentTime={currentTime}
                    fullTime={fullTime}
                />
            </div>
            <div className="flex gap-2 flex-1 min-w-0 justify-end">
                <VolumeControl />
                <button onClick={toggleFullScreen}>
                    {isFullScreen ?
                        <GoScreenFull className="text-white" /> :
                        <GoScreenNormal className="text-white" />
                    }
                </button>
            </div>
        </div>
    )
}