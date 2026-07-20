import { useEffect, useState } from "react";

export function useSongPanelActions() {

    const [menuState, setMenuState] = useState<{ isOpen: boolean; x: number, y: number }>({
        isOpen: false,
        x: 0,
        y: 0,
    })

    useEffect(() => {
        if (!menuState.isOpen) return;

        const handleOutsideClick = () => {
            setMenuState((prev) => ({
                ...prev, isOpen: false
            }));
        };

        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [menuState.isOpen]);

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuState({
            isOpen: true,
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleThreeDotsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuState({
            isOpen: true,
            x: e.clientX,
            y: e.clientY,
        });
    };

    return {
        menuState,
        handleContextMenu,
        handleThreeDotsClick,
    };
}