import { useState } from "react";

export interface RightClickMenuNode {
    iconPath?: string;
    iconDescription?: string;
    text: string;
    onClick?: () => void;
    children?: RightClickMenuNode[];
}

interface RightClickMenuItem {
    item: RightClickMenuNode;
}

export function RightClickMenuItem({ item }: RightClickMenuItem) {
    const hasDropdown = item.children && item.children.length > 0;

    const [hasHovered, setHasHovered] = useState(false);

    return (
        <div className="w-54 h-7.5 relative" onMouseEnter={() => setHasHovered(true)} onMouseLeave={() => setHasHovered(false)}>
            <div className="w-auto h-auto flex justify-between items-center rotate-0.5 gap-2.5 p-2 bg-transparent">
                <div className="gap-2 flex justify-center items-center">
                    {item.iconPath && (<div className="w-4 h-4 flex items-center justify-center"><img src={item.iconPath} alt={item.iconDescription} className="w-auto" /></div>)}
                    <span className="font-poppins font-medium text-xs text-text-subdued">{item.text}</span>
                </div>
                {hasDropdown && (<img src="/public/action/dropdown_arrow.svg" alt="Dropdown arrow" className="h-3.5" />)}
            </div>
            {hasDropdown && hasHovered && (
                <div className="absolute left-full top-0 ml-1 z-10">
                    {item.children?.map((child, index) => (
                        <RightClickMenuItem
                            key={index}
                            item={child} />
                    ))}
                </div>
            )}
        </div>
    );
}