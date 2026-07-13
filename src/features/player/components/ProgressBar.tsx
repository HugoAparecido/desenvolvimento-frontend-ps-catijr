import { NumberToTimeString } from "../../../utils/formatters";

interface ProgressBarProps {
    currentTime: number,
    fullTime: number,
}

export function ProgressBar({ currentTime, fullTime }: ProgressBarProps) {
    const percentage = fullTime > 0 ? Math.min(Math.max((currentTime / fullTime) * 100, 0), 100) : 0;

    const trackHeight = 3;
    const fillHeight = trackHeight;
    const offsetTop = - (fillHeight - trackHeight) / 2;

    return (
        <div className="w-max flex justify-between items-center gap-1.5 font-poppins font-medium text-xs text-text-subdued relative">
            <span>{
                NumberToTimeString(currentTime)
            }</span>
            <div className="w-30 sm:w-113.5 rounded-full bg-track-bar"
                style={{ height: `${trackHeight}px` }}>
                <div className="bg-text-base rounded-full transition-all duration-300 ease-in-out ring-1 ring-text-base"
                    style={{
                        width: `${percentage}%`,
                        height: `${fillHeight}px`,
                        marginTop: `${offsetTop}px`,
                    }}
                ></div>
            </div>
            <span>{
                NumberToTimeString(fullTime)
            }</span>
        </div>
    )
}