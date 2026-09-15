import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="navbar classic-navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/assets/images/logo/bes-logo.svg" alt="British English School logo" />
          <span>
            <b>BRITISH ENGLISH SCHOOL</b>
            <small>Gere, Manpur, Gaya</small>
          </span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          {navigation.map((item) => (
            <div
              className="nav-dropdown"
              key={item.label}
              onMouseEnter={() => setDropdown(item.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <NavLink to={item.to} onClick={() => setOpen(false)}>
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </NavLink>
              {item.children && <div className={`dropdown-menu ${dropdown === item.label ? 'visible' : ''}`}>
                {item.children.map((child) => <Link key={child.label} to={child.to} onClick={() => { setOpen(false); setDropdown(null); }}>{child.label}</Link>)}
              </div>}
            </div>
          ))}
          <Link className="nav-cta" to="/admission" onClick={() => setOpen(false)}>Mandatory Disclosure</Link>
        </nav>
      </div>
    </header>
  );
}
