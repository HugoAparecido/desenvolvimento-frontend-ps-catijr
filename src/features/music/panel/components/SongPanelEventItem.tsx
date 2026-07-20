import React, { useEffect, useRef, useState } from "react";
import { truncateShort } from "../../../../utils/delimiters";
import { LinkButton } from "../../../../components/ui/buttons/LinkButton";

interface SongPanelEventItemProps {
    eventInfos: {
        date: {
            day: number | string,
            month: number | string,
            weekDay: number | string,
            hour: number | string,
            minutes: number | string
        }
        local: string,
        artists: {
            id: string | number,
            name: string
        }[],
    }
}

export function SongPanelEventItem({ eventInfos }: SongPanelEventItemProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [scrollDist, setScrollDist] = useState(0);

    const formatedHour =
        Number.isInteger(eventInfos.date.hour) ?
            `${eventInfos.date.hour.toString().padStart(2, '0')}:${eventInfos.date.minutes.toString().padStart(2, '0')}` :
            `${eventInfos.date.hour}:${eventInfos.date.minutes}`

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const calculateDistance = () => {
            const containerWidth = containerRef.current!.offsetWidth;
            const textWidth = textRef.current!.scrollWidth;

            if (textWidth > containerWidth) {
                setScrollDist(textWidth - containerWidth);
            } else {
                setScrollDist(0);
            }
        };

        const observer = new ResizeObserver(() => calculateDistance());
        observer.observe(containerRef.current);
        observer.observe(textRef.current);

        return () => observer.disconnect();
    }, [eventInfos.artists]);

    return (
        <div
            className="group w-66.75 flex gap-3 items-center justify-start duration-500 ease-out rounded-lg ring-4 ring-transparent hover:bg-textbox-bg hover:ring-textbox-bg"
        >
            <div className="w-10.5 h-10.5 flex flex-col items-center justify-center gap-0.5 rounded-sm bg-background-base text-text-base font-bold font-default-font shrink-0">
                <span className="text-xs">{truncateShort(eventInfos.date.month.toString(), 3)}</span>
                <span className="text-h6 leading-none">{eventInfos.date.day}</span>
            </div>

            <div className="flex flex-1 min-w-0 flex-col justify-start items-start gap-1">
                <span className="text-text-base font-default-font text-[11px] font-semibold truncate w-full">
                    {eventInfos.local}
                </span>

                <div
                    ref={containerRef}
                    className="relative flex overflow-hidden whitespace-nowrap w-full"
                    style={{ "--scroll-dist": `-${scrollDist}px` } as React.CSSProperties}
                >
                    <span
                        ref={textRef}
                        className={`text-text-subdued font-default-font text-xs font-medium w-max shrink-0
                        ${scrollDist > 0 ? 'group-hover:animate-scroll-text' : ''}`}
                    >
                        {eventInfos.artists.map((artist, index) => (
                            <React.Fragment key={artist.id}>
                                <LinkButton
                                    text={artist.name}
                                    variant="default_subdued_10"
                                    route_link={`artist/${artist.id}`}
                                />
                                {index < eventInfos.artists.length - 2 && ', '}
                                {index == eventInfos.artists.length - 2 && ' e '}
                            </React.Fragment>
                        ))}
                    </span>
                </div>

                <span className="text-text-subdued font-default-font text-xs font-medium flex gap-0.5 items-center truncate w-full">
                    {truncateShort(eventInfos.date.weekDay.toString(), 3)}, {formatedHour}
                    <div className="h-0.75 w-0.75 bg-text-subdued rounded-full shrink-0"></div>
                    <span className="truncate">{eventInfos.local}</span>
                </span>
            </div>
        </div>
    )
}