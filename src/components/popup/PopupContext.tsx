import { useState, type ReactNode } from 'react';
import { FullScreenPopup } from './FullScreenPopup';
import { PopupContext } from './hook/usePopup';

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode>(null);

    const openPopup = (newContent: ReactNode) => {
        setContent(newContent);
        setIsOpen(true);
    };

    const closePopup = () => setIsOpen(false);

    return (
        <PopupContext.Provider value={{ openPopup, closePopup }}>
            {children}
            <FullScreenPopup isOpen={isOpen} onClose={closePopup}>
                {content}
            </FullScreenPopup>
        </PopupContext.Provider>
    );
};
