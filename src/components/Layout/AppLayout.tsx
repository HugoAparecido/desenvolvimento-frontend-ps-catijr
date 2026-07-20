import { Outlet } from 'react-router-dom';
import { Player } from '../../features/player/Player';
import { Navbar } from '../../features/explore/NavBar';
import { SongPanel } from '../../features/music/panel/SongPanel';
import { FullScreenPopup } from '../popup/FullScreenPopup';
import { useState } from 'react';

export function AppLayout() {
    const [popupIsOpen, setPopupIsOpen] = useState(true);

    return (<div className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <div className='flex w-full h-screen overflow-hidden pb-24'>
            <aside className='shrink-0 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none'>
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
        <FullScreenPopup isOpen={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
            teste
        </FullScreenPopup>
    </div>)
}