import type { ReactNode } from "react"

interface FullScreenPopupProps {
    isOpen: boolean,
    children: ReactNode,
    onClose?: () => void,
}

export function FullScreenPopup({ isOpen, children, onClose }: FullScreenPopupProps) {
    if (!isOpen)
        return null;

    return (
        <div
            className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="w-full overflow-y-auto max-w-lg rounded-xl bg-gray-900 p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};