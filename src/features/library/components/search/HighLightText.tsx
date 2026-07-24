interface HighlightTextProps {
    text: string;
    query: string;
}

export function HighlightText({ text, query }: HighlightTextProps) {
    if (!query) return <>{text}</>;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return (
        <span>
            {parts.map((part, index) =>
                part.toLowerCase() === query.toLowerCase() ? (
                    <span key={index} className="bg-blue-500 text-white rounded-sm">
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </span>
    );
}