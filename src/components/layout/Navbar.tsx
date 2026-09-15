import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const menus = [
  {
    label: 'About',
    to: '/about',
    children: [
      ['About School', '/about'],
      ["Director's Message", '/leadership/director'],
      ["Principal's Message", '/leadership/principal'],
      ['Toppers', '/toppers'],
      ['Announcements', '/announcements'],
    ],
  },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      ['Overview', '/academics'],
      ['Comprehensive Curriculum', '/academics'],
      ['Methodology', '/academics'],
      ['School Uniform', '/academics'],
      ['Academic Calendar', '/academics'],
      ['Hostel', '/academics'],
    ],
  },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Results', to: '/results' },
  { label: 'Notices', to: '/announcements' },
  { label: 'Toppers', to: '/toppers' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="navbar classic-navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand classic-brand" onClick={() => setOpen(false)}>
          <img src="/assets/images/logo/bes-logo.svg" alt="British English School logo" />
          <span><b>British English School</b><small>A Complete Child Maker • Gaya</small></span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? 'nav-links classic-nav-links open' : 'nav-links classic-nav-links'} aria-label="Main navigation">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          {menus.map((item) => item.children ? (
            <div className="nav-dropdown" key={item.label} onMouseEnter={() => setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}>
              <NavLink to={item.to} onClick={() => setOpen(false)}>{item.label}<ChevronDown size={13} /></NavLink>
              <div className={`dropdown-menu ${dropdown === item.label ? 'visible' : ''}`}>
                {item.children.map(([label, to]) => <Link key={`${item.label}-${label}`} to={to} onClick={() => { setOpen(false); setDropdown(null); }}>{label}</Link>)}
              </div>
            </div>
          ) : <NavLink key={item.label} to={item.to} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
          <Link className="nav-cta classic-nav-cta" to="/admission" onClick={() => setOpen(false)}>Admission<br />2026-27</Link>
        </nav>
      </div>
    </header>
  );
}
