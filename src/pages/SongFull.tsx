import { usePlayerStore } from "../features/player/store/usePlayerStore"

export function SongFull() {
    const currentTrack = usePlayerStore((state) => state.currentTrack);

    return (
        <div className="w-full h-full flex border p-2.5 gap-2.5 items-center justify-center bg-song-full rounded-2xl">
            <img
                src={currentTrack?.imagePath} alt="Album image"
                className="w-full h-auto aspect-square max-w-157.25 max-h-full rounded-2xl object-cover shadow-song-full"
            />
        </div>
    )
}