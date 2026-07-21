import { ProfileHeader } from "../features/profile/ProfileHeader";

const mockProfileData = {
    profile: {
        name: "Hugo Aparecido",
        imagePath: "profile/profile.png",
        qtdPlaylists: 14,
        qtdFollowers: 1250,
        qtdFollowing: 345
    }
};

export function Profile() {
    return (
        <div className="flex w-full">
            <ProfileHeader profile={mockProfileData.profile} />
        </div>
    )
}