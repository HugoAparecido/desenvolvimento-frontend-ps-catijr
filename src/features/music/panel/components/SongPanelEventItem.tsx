import React from "react";
import { truncateShort } from "../../../../utils/delimiters"
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
    const formatedHour =
        Number.isInteger(eventInfos.date.hour) ?
            `${eventInfos.date.hour.toString().padStart(2, '0')}:${eventInfos.date.minutes.toString().padStart(2, '0')}` :
            `${eventInfos.date.hour}:${eventInfos.date.minutes}`

    return (
        <div className="w-66.75 flex gap-3 items-center justify-start duration-500 ease-out rounded-lg border-4 hover:bg-textbox-bg hover:border-textbox-bg"
        >
            <div
                className="w-10.5 h-10.5 flex flex-col items-center justify-center gap-0.5 rounded-sm bg-background-base
            text-text-base font-bold font-default-font">
                <span className="text-xs">{truncateShort(eventInfos.date.month.toString(), 3)}</span>
                <span className="text-h6 leading-none">{eventInfos.date.day}</span>
            </div>
            <div className="flex w-max flex-col justify-start items-start gap-1">
                <span className="text-text-base font-default-font text-[11px] font-semibold">{eventInfos.local}</span>
                <span className="text-text-subdued font-default-font text-xs font-medium">
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
                    ))}</span>
                <span className="text-text-subdued font-default-font text-xs font-medium flex gap-0.5 items-center">
                    {truncateShort(eventInfos.date.weekDay.toString(), 3)}, {formatedHour}
                    <div className="h-0.75 w-0.75 bg-text-subdued rounded-full"></div>
                    {eventInfos.local}
                </span>
            </div>
        </div>
    )
}