interface FollowingButtonProps {
    isFollowing: boolean;
    unfollow: boolean;
    onClick: () => void;
}

export const FollowingButton: React.FC<FollowingButtonProps> = ({ isFollowing, unfollow, onClick }) => {

    return (
        <button className={`w-auto h-auto px-3 py-1.5 gap-1 flex items-center justify-center rounded-2xl border border-essential-subdued text-xs font-bold font-poppins hover:text-sm text-text-base hover:border-text-base hover:ring-[0.5px] hover:ring-text-base cursor-pointer ease-out duration-300`}
            onClick={onClick}
        >
            <span className="">{isFollowing ? (unfollow ? "Deixar de seguir" : "Seguindo") : "Seguir"}</span>
        </button>
    );
}