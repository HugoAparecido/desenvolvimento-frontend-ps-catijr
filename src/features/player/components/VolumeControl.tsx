export function VolumeControl() {
    const currentVolume = 70;
    const fullVolume = 100;
    const percentage = fullVolume > 0 ? Math.min(Math.max((currentVolume / fullVolume) * 100, 0), 100) : 0;

    const trackHeight = 3;
    const fillHeight = trackHeight;
    const offsetTop = - (fillHeight - trackHeight) / 2;

    return (
        <div className="w-max md:flex hidden justify-between items-center gap-1 font-poppins font-medium text-xs text-text-subdued relative">
            <img src="/audio/audio.svg" alt="Áudio" className="w-3" />
            <div className="w-17.5 rounded-full bg-track-bar"
                style={{ height: `${trackHeight}px` }}>
                <div className="bg-text-base rounded-full transition-all duration-300 ease-in-out ring-1 ring-text-base"
                    style={{
                        width: `${percentage}%`,
                        height: `${fillHeight}px`,
                        marginTop: `${offsetTop}px`,
                    }}
                ></div>
            </div>
        </div >
    )
}