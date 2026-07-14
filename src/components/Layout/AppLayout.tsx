import { Outlet } from 'react-router-dom';
import { Player } from '../../features/player/Player';
import { Navbar } from '../../features/explore/NavBar';

export function AppLayout() {
    return (<div className="flex min-h-screen flex-col">
        <Navbar />
        <div className='min-h-screen'>
            <aside></aside>
            <main>
                <Outlet />
            </main>
            <aside></aside>
        </div>
        <footer className='fixed bottom-0 w-full'>
            <Player />
        </footer>
    </div>)
}