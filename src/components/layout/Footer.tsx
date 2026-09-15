import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { school } from '../../data/school';

export function Footer() {
  return (
    <footer className="footer classic-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">British English School</div>
          <p>British English School, Gere, Manpur, Gaya, a learning environment focused on academic growth, values and all-round development.</p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={17} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={17} /></a>
          </div>
        </div>
        <div><h4>QUICK LINKS</h4><Link to="/">Home</Link><Link to="/about">About School</Link><Link to="/academics">Academics</Link><Link to="/gallery">Photo Gallery</Link></div>
        <div><h4>IMPORTANT</h4><Link to="/announcements">Announcement</Link><Link to="/toppers">Our Toppers</Link><Link to="/results">Results</Link><Link to="/downloads">Downloads</Link><Link to="/admission">Apply Online</Link></div>
        <div><h4>CONTACT INFO</h4><p><MapPin size={15} /> {school.address}</p><p><Phone size={15} /> {school.phones.join(', ')}</p><p><Mail size={15} /> {school.email}</p><p>Working Hours: {school.hours}</p></div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} British English School. All Rights Reserved. <span>Web Design by Savarna Cloudtech</span></div>
    </footer>
  );
}
