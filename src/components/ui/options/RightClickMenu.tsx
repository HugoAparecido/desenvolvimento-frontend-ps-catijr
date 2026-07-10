import { RightClickMenuItem, type RightClickMenuNode } from "./RightClickMenuItem";

interface RightClickMenuProps {
    options: RightClickMenuNode[];
    className?: string;
}

export function RightClickMenu({ options, className = "" }: RightClickMenuProps) {
    return (
        <div className={`bg-popup-bg rounded-1 px-1 w-max ${className}`}>
            {
                options.map((userOption, index) => (
                    <RightClickMenuItem
                        key={index}
                        item={userOption} />
                ))
            }
        </div>
    )
}