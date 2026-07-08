interface FilterButtonProps {
    selected: boolean;
    text: string;
    onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ selected, text, onClick }) => {
    return (
        <button
            className={`w-14 p-2.5 ${selected ? 'text-base_color' : 'bg-options-pressed hover:bg-options-hover'} cursor-pointer ease-in-out duration-300 rounded-2xl flex items-center justify-center`}
            onClick={onClick}>
            <span className={`font-poppins font-medium text-xs ${selected ? 'text-black' : 'text-white'}`}>{text}</span>
        </button >
    )
}