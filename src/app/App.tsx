import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/Home/HomePage';
import { AboutPage } from '../pages/About/AboutPage';
import { AcademicsPage } from '../pages/Academics/AcademicsPage';
import { FacilitiesPage } from '../pages/Facilities/FacilitiesPage';
import { AdmissionPage } from '../pages/Admission/AdmissionPage';
import { AnnouncementsPage } from '../pages/Announcements/AnnouncementsPage';
import { ResultsPage } from '../pages/Results/ResultsPage';
import { ToppersPage } from '../pages/Toppers/ToppersPage';
import { GalleryPage } from '../pages/Gallery/GalleryPage';
import { DownloadsPage } from '../pages/Downloads/DownloadsPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

export default function App() {
  return <Routes><Route element={<Layout />}><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/academics" element={<AcademicsPage />} /><Route path="/facilities" element={<FacilitiesPage />} /><Route path="/admission" element={<AdmissionPage />} /><Route path="/announcements" element={<AnnouncementsPage />} /><Route path="/results" element={<ResultsPage />} /><Route path="/toppers" element={<ToppersPage />} /><Route path="/gallery" element={<GalleryPage />} /><Route path="/downloads" element={<DownloadsPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes>;
}
