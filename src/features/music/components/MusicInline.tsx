interface MusicInlineProps {
    title: string;
    id: string;
    albumUrl?: string;
    imageUrl: string;
    explicit?: boolean;
    totalTime: number;
    totalViews: number;
    saved: boolean;
    onClick: () => void;
    onClickSave?: () => void;
}

export function MusicInline({
    title,
    id,
    albumUrl,
    imageUrl,
    explicit,
    totalTime,
    totalViews,
    saved,
    onClick,
    onClickSave
}: MusicInlineProps) {
    return (
        <div onClick={onClick}>
            <div>
                <span>{id}</span>
                <div>
                    <img src={imageUrl} alt="foto do álbum" />
                    <div>
                        <a href={albumUrl}>
                            <span>{title}</span>
                        </a>
                        {explicit && <img src="/tag/explicit.svg" alt="explicit" />}
                    </div>
                </div>
            </div>
            <div>
                <span>{totalTime}</span>
                <button type="button" onClick={onClickSave}>
                    <img src={saved ? "/tag/saved.svg" : "/tag/unsaved.svg"} alt={saved ? "Saved" : "Unsaved"} />
                </button>
                <span>{totalViews}</span>
                <button type="button" onClick={onClick}>
                    <img src="/action/3dots.svg" alt="Mais ações" />
                </button>
            </div>
        </div>
    );
}
