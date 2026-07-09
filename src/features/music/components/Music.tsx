import { NumberToTimeString } from "../../../utils/formatters";

interface MusicProps {
    title: string;
    id: string | number;
    albumUrl?: string;
    imageUrl: string;
    explicit?: boolean;
    totalTime: number;
    totalViews: number;
    saved: boolean;
    onClick: () => void;
    onClickSave?: () => void;
}

export function Music({
    title,
    id,
    albumUrl,
    imageUrl,
    explicit = false,
    totalTime,
    totalViews,
    saved,
    onClick,
    onClickSave
}: MusicProps) {
    return (
        <div className="flex items-center justify-between font-poppins bg-transparent py-1 px-2 gap-2.5 rounded-sm" onClick={onClick}>
            <div>
                <span className="font-medium text-xs text-text-subdued">{id}</span>
                <div>
                    <img src={imageUrl} alt="foto do álbum" />
                    <div>
                        <a href={albumUrl}>
                            <span className="text-xs font-bold text-text-base">{title}</span>
                        </a>
                        {explicit && <img src="/tag/explicit.svg" alt="explicit" className="w-3" />}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 font-poppins text-xs font-medium text-text-subdued">
                <span>{NumberToTimeString(totalTime)}</span>
                <button type="button" onClick={onClickSave} className="w-3.5 cursor-pointer">
                    <img src={saved ? "/tag/saved.svg" : "/tag/unsaved.svg"} alt={saved ? "Saved" : "Unsaved"} className="w-full" />
                </button>
                <span>{totalViews}</span>
                <button type="button" className="w-3 cursor-pointer" onClick={onClick}>
                    <img src="/action/3dots.svg" alt="Mais ações" className="w-full" />
                </button>
            </div>
        </div>
    );
}
