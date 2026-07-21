import { Outlet } from 'react-router-dom';
import { Player } from '../../features/player/Player';
import { Navbar } from '../../features/explore/NavBar';
import { SongPanel } from '../../features/music/panel/SongPanel';
import { PopupProvider } from '../popup/PopupContext';
import { Library } from '../../features/library/Library';

export function AppLayout() {

    return (<div className="flex min-h-screen flex-col bg-black">
        <PopupProvider>
            <Navbar />
            <div className='flex w-full h-screen overflow-hidden pb-24'>
                <aside className='w-max'>
                    <Library />
                </aside>
                <main className='flex-1 h-full overflow-y-auto flex justify-center items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none'>
                    <Outlet />
                </main>
                <aside className='w-max'>
                    <SongPanel />
                </aside>
            </div>
            <footer className='shrink-0 h-full overflow-y-auto'>
                <Player />
            </footer>
        </PopupProvider>
    </div>)
}