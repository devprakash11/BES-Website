import { MapPin, Phone, Mail } from 'lucide-react';
import { school } from '../../data/school';
export function TopBar(){return <div className="topbar"><div className="container topbar-inner"><span><MapPin size={14}/>{school.address}</span><span><Phone size={14}/>{school.phones[0]}</span><span><Mail size={14}/>{school.email}</span></div></div>}
