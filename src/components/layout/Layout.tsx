import { Outlet } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <>
      <div className="classic-admission-bar">
        <div className="classic-admission-inner">
          <strong>Admissions open for Nursery to IX and XI • Session 2026-27</strong>
          <Link to="/admission">Apply Online <ArrowRight size={15} /></Link>
        </div>
      </div>
      <TopBar />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={18} /></button>
    </>
  );
}
