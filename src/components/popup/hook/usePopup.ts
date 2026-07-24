import { createContext, useContext, type ReactNode } from "react";

interface PopupContextType {
    openPopup: (content: ReactNode) => void;
    closePopup: () => void;
}

export const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function usePopup() {
    const context = useContext(PopupContext);
    if (!context) throw new Error("usePopup deve ser usado dentro de um PopupProvider");
    return context;
};