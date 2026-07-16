import { Outlet } from 'react-router-dom';
import { Player } from '../../features/player/Player';
import { Navbar } from '../../features/explore/NavBar';

export function AppLayout() {
    return (<div className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <div className='min-h-screen pb-24'>
            <aside></aside>
            <main className='w-full h-full flex justify-center items-start'>
                <Outlet />
            </main>
            <aside></aside>
        </div>
        <footer className='fixed bottom-0 w-full'>
            <Player />
        </footer>
    </div>)
}