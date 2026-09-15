import { Outlet } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return <><TopBar /><Navbar /><main><Outlet /></main><Footer /><button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={18} /></button></>;
}
