import { FormatIntegersToBrazilianFormat } from "../../utils/formatters"

interface ProfileHeaderProps {
    profile: {
        name: string,
        imagePath: string,
        qtdPlaylists: number,
        qtdFollowers: number,
        qtdFollowing: number
    }
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
    return (
        <div className="w-full h-max flex bg-profile-header pt-10 px-5 pb-4 gap-2.5 rounded-t-xl">
            <div className="w-max h-max flex gap-3 items-center">
                <img src={profile.imagePath} alt="User"
                    className="w-15 h-15 md:w-43.75 md:h-43.75 object-cover rounded-full shadow-profile-header shrink-0"
                />
                <div className="flex gap-2.5 flex-col min-w-0 w-full">
                    <span className="text-xs font-medium font-default-font text-text-base lining-none">Perfil</span>
                    <span className="text-[18px] md:text-[64px] font-bold md:font-black font-default-font text-white lining-none truncate block">
                        {profile.name}
                    </span>
                    <div className="flex gap-1 items-center text-xs font-medium font-default-font text-text-subdued lining-none">
                        <span>{FormatIntegersToBrazilianFormat(profile.qtdPlaylists)} playlists públicas</span>
                        <div className="bg-text-subdued h-0.75 w-0.75 rounded-full" />
                        <span>{FormatIntegersToBrazilianFormat(profile.qtdFollowers)} seguidores</span>
                        <div className="bg-text-subdued h-0.75 w-0.75 rounded-full" />
                        <span>{FormatIntegersToBrazilianFormat(profile.qtdFollowing)} seguindo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}