import { Outlet } from 'react-router-dom';
import { Player } from '../../features/player/Player';
import { Navbar } from '../../features/explore/NavBar';
import { SongPanel } from '../../features/music/panel/SongPanel';
import { PopupProvider } from '../popup/PopupContext';
import { Library } from '../../features/library/Library';
import { usePlayerStore } from '../../features/player/store/usePlayerStore';

export function AppLayout() {
    const isFullScreen = usePlayerStore((state) => state.isFullScreen);

    return (<div className="flex h-screen flex-col bg-black overflow-hidden">
        <PopupProvider>
            {!isFullScreen && (
                <Navbar />
            )}
            <div className='flex w-full flex-1 overflow-hidden p-1'>
                {!isFullScreen && (
                    <aside className='w-max'>
                        <Library />
                    </aside>
                )}
                <main className='flex-1 h-full overflow-y-auto flex justify-center items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none'>
                    <Outlet />
                </main>
                {!isFullScreen && (
                    <aside className='w-max'>
                        <SongPanel />
                    </aside>
                )}
            </div>
            <footer className='shrink-0 w-full'>
                <Player />
            </footer>
        </PopupProvider>
    </div>)
}