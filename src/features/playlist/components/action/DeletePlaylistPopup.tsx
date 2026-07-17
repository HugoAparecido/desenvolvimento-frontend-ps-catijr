import React, { useState, useRef, useEffect } from "react"

interface DeletePlaylistPopupProps {
    playlistName: string,
    deleteAction: () => void,
}

export function DeletePlaylistPopup({ playlistName, deleteAction }: DeletePlaylistPopupProps) {
    const [isCanceled, setIsCanceled] = useState(false);

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node))
                setIsCanceled(true)
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const handleCancelClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsCanceled(true);
    }

    const handleDeletClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        deleteAction();
        setIsCanceled(true);
    }

    if (isCanceled)
        return null;

    return (
        <div
            ref={popupRef}
            className="absolute h-43.25 w-max flex flex-col gap-4 p-10 justify-center items-center rounded-xl bg-text-base"
        >
            <div className="flex flex-col gap-2.5">
                <span className="font-bold text-h6 text-background-base font-default-font">Apagar da sua biblioteca?</span>
                <span className="text-sm font-normal font-default-font text-background-base">
                    A playlist <span className="font-bold">{playlistName}</span> será excluída da sua biblioteca
                </span>
            </div>
            <div className="w-full flex justify-end items-center gap-3">
                <button
                    className="flex h-9 min-w-20.75 w-max px-3 py-1.5 gap-1 items-center justify-center rounded-2xl bg-text-base cursor-pointer hover:bg-text-subdued duration-300 ease-out"
                    onClick={handleCancelClick}
                    type="button"
                >
                    <span className="text-sm text-black font-bold font-default-font">Cancelar</span>
                </button>
                <button
                    className="flex h-9 min-w-20.75 w-max px-3 py-1.5 gap-1 items-center justify-center rounded-2xl bg-danger-light cursor-pointer hover:bg-danger-dark duration-300 ease-out"
                    onClick={handleDeletClick}
                    type="button"
                >
                    <span className="text-sm text-text-base font-bold font-default-font">Apagar</span>
                </button>
            </div>
        </div>
    )
}