import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { announcements } from '../../data/content';
import { facilityImages, galleryImages, schoolImages, topperImages } from '../../data/images';
import { school } from '../../data/school';
import { toppers } from '../../data/toppers';

const slides = [schoolImages.hero, schoolImages.campusWide, schoolImages.campus, schoolImages.outdoorAssembly, schoolImages.event];
const academicCards = [
  ['Strong Foundation', 'A focused start that builds curiosity, confidence and strong learning habits.'],
  ['Holistic Learning', 'Balanced academics, activities, sports and values for complete development.'],
  ['Technology Integration', 'Modern classrooms and digital tools that support meaningful learning.'],
  ['Student Support', 'A caring school environment where every learner receives guidance and encouragement.'],
];
const facilityList = Object.entries(facilityImages).slice(0, 6);

export function HomePage() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="reference-page">
      <section className="ref-hero" aria-label="British English School hero">
        {slides.map((image, index) => <img key={image} src={image} alt="British English School campus" className={index === slide ? 'is-active' : ''} />)}
        <div className="ref-hero-overlay" />
        <div className="ref-container ref-hero-inner">
          <div className="ref-badge"><Sparkles size={17} /> ADMISSIONS OPEN <span>•</span> 2026-27</div>
          <h1>Learning that builds<br /><em>knowledge,</em><br />character and<br />confidence.</h1>
          <p>British English School, Gere-Manpur, Gaya, creates a disciplined and future-ready environment for academic growth, creativity, technology and co-curricular excellence.</p>
          <div className="ref-actions">
            <Link to="/admission" className="ref-btn ref-btn-primary">Apply for Admission <ArrowRight size={20} /></Link>
            <Link to="/about" className="ref-btn ref-btn-ghost">Explore the School</Link>
          </div>
        </div>
        <div className="ref-slider-controls">
          <button onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} aria-label="Previous slide"><ChevronLeft /></button>
          <div>{slides.map((image, index) => <button key={image} className={index === slide ? 'active' : ''} onClick={() => setSlide(index)} aria-label={`Go to slide ${index + 1}`} />)}</div>
          <button onClick={() => setSlide((slide + 1) % slides.length)} aria-label="Next slide"><ChevronRight /></button>
        </div>
      </section>

      <section className="ref-about">
        <div className="ref-container ref-about-grid">
          <div className="ref-about-image"><img src={schoolImages.campus} alt="British English School building" /><span>25+<small>Years of learning</small></span></div>
          <div className="ref-copy"><div className="ref-kicker">ABOUT OUR SCHOOL</div><h2>A strong start for a<br />lifetime of learning.</h2><p>Education is a life-long journey and the School realizes the importance of a good start. We believe that every child is unique and deserves an environment where knowledge, confidence, discipline and character can grow together.</p><div className="ref-checks"><span>✓ Experienced educators</span><span>✓ Safe learning environment</span><span>✓ Academic excellence</span><span>✓ Activities & sports</span></div><p>British English School provides a balanced learning experience through academics, activities, sports, technology and values.</p><Link to="/about" className="ref-text-link">Read more <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="ref-academics">
        <div className="ref-container"><div className="ref-section-intro"><div className="ref-kicker">ACADEMIC APPROACH</div><h2>An academic experience<br />designed for the whole child.</h2><p>Learning at BES combines strong fundamentals with creativity, technology, discipline and personal growth.</p></div><div className="ref-academic-grid">{academicCards.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><Link to="/academics" className="ref-dark-link">Explore academics <ArrowRight size={15} /></Link></div>
      </section>

      <section className="ref-announcements">
        <div className="ref-container ref-announcement-grid"><div className="ref-copy"><div className="ref-kicker">WHAT'S NEW</div><h2>Announcements &<br />admissions</h2><p>Stay updated with important school notices and admission information.</p><div className="ref-notice-list">{announcements.map((notice, index) => <div key={notice}><b>0{index + 1}</b><span>{notice}</span></div>)}</div></div><aside className="ref-admission-card"><small>ADMISSIONS 2026-27</small><h3>Give your child a<br />confident beginning.</h3><p>Applications are open for Nursery to IX and XI.</p><Link to="/admission">Start an application <ArrowRight size={15} /></Link><strong>Nursery to IX & XI</strong></aside></div>
      </section>

      <section className="ref-facilities">
        <div className="ref-container"><div className="ref-section-intro ref-light"><div className="ref-kicker">CAMPUS & FACILITIES</div><h2>Spaces that support<br />learning, safety and growth.</h2><p>Thoughtfully supported spaces help students learn, participate and grow with confidence.</p></div><div className="ref-facility-grid">{facilityList.map(([title, image]) => <article key={title}><img src={image.src} alt={image.alt} /><div><h3>{title}</h3><p>Built to support students with a practical, engaging school experience.</p></div></article>)}</div><Link to="/facilities" className="ref-light-link">View all facilities <ArrowRight size={15} /></Link></div>
      </section>

      <section className="ref-messages"><div className="ref-container"><div className="ref-section-intro"><div className="ref-kicker">LEADERSHIP</div><h2>Guided by experience, values<br />and purpose.</h2><p>Our leadership team works to build an environment where students can learn with confidence and grow with purpose.</p></div><div className="ref-message-grid"><article><img src={schoolImages.director} alt="Director" /><div><small>DIRECTOR'S MESSAGE</small><h3>Education shapes individuals and strengthens society.</h3><p>We remain committed to creating meaningful opportunities for every learner.</p><Link to="/leadership/director">Read message <ArrowRight size={14} /></Link></div></article><article><img src={schoolImages.principal} alt="Principal" /><div><small>PRINCIPAL'S MESSAGE</small><h3>Opportunity, discipline and strong values for a changing world.</h3><p>We encourage academic excellence, participation and responsible citizenship.</p><Link to="/leadership/principal">Read message <ArrowRight size={14} /></Link></div></article></div></div></section>

      <section className="ref-toppers"><div className="ref-container"><div className="ref-section-intro"><div className="ref-kicker">ACADEMIC ACHIEVEMENT</div><h2>Celebrating our 2025-26<br />toppers.</h2><p>Outstanding performance reflects consistent effort, guidance and a culture of learning.</p></div><div className="ref-topper-grid">{toppers.slice(0, 4).map(([name, cls, score], index) => <article key={name}><div className="ref-rank">#{index + 1}</div><img src={topperImages[name]} alt={`${name}, Class ${cls}`} /><div><strong>{score}</strong><h3>{name}</h3><small>Class {cls}</small></div></article>)}</div><Link to="/toppers" className="ref-text-link">View all toppers <ArrowRight size={16} /></Link></div></section>

      <section className="ref-gallery"><div className="ref-container"><div className="ref-section-intro center"><div className="ref-kicker">LIFE AT BES</div><h2>Moments from campus.</h2><p>Learning, celebration, teamwork and memories from across the school.</p></div><div className="ref-gallery-grid">{galleryImages.slice(0, 5).map((image, index) => <Link to="/gallery" key={image.src} className={`gallery-${index + 1}`}><img src={image.src} alt={image.alt} /></Link>)}</div></div></section>

      <section className="ref-final-cta"><div className="ref-container"><div><div className="ref-kicker">READY WHEN YOU ARE</div><h2>Ready to explore British English School?</h2><p>Discover our academics, facilities, achievements and admission process.</p></div><div><Link to="/admission" className="ref-btn ref-btn-white">Apply Online <ArrowRight size={16} /></Link><Link to="/contact" className="ref-btn ref-btn-outline-white">Contact us</Link></div></div></section>
    </div>
  );
}
