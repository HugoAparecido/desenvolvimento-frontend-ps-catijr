interface FilterButtonProps {
    selected: boolean;
    text: string;
    onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ selected, text, onClick }) => {
    return (
        <button
            className={`w-56 p-2.5`}>
            <span>{text}</span>
        </button >
    )
}