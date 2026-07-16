export function SearchLoadingItem() {
    return (
        <div className="w-full flex gap-2 items-center justify-start">
            <div
                className="w-9 h-9 rounded-xs
                bg-linear-to-r from-[#424242] via-[#525252] to-[#424242]
            "></div>
            <div
                className="w-max flex flex-col gap-1.25"
            >
                <div className="w-55 h-3.25 rounded-[20px]
                bg-linear-to-r from-[#424242] via-[#525252] to-[#424242]
                "></div>
                <div className="w-29.25 h-2 rounded-[20px]
                bg-linear-to-r from-[#424242] via-[#525252] to-[#424242]
                "></div>
            </div>
        </div>
    )
}