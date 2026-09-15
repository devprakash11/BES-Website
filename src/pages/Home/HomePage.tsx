import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { announcements } from '../../data/content';
import { galleryImages, schoolImages, topperImages } from '../../data/images';
import { school } from '../../data/school';
import { toppers } from '../../data/toppers';
import { useEffect, useState } from 'react';

const slides = [
  schoolImages.hero,
  schoolImages.campusWide,
  schoolImages.campus,
  schoolImages.outdoorAssembly,
  schoolImages.event,
];

const aboutText = `Education is a life-long journey and the School realizes the importance of a good start. We believe that every child is unique and deserves an environment where knowledge, confidence, discipline and character can grow together. British English School provides a balanced learning experience through academics, activities, sports, technology and values.`;

export function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="classic-home">
      <section className="classic-slider" aria-label="British English School campus highlights">
        {slides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="British English School campus"
            className={index === slide ? 'active' : ''}
          />
        ))}
        <div className="classic-slider-overlay" />
        <div className="container classic-slider-content">
          <span className="classic-kicker">British English School, Gere, Manpur, Gaya</span>
          <h1>Welcome to British English School</h1>
          <p>{school.admission}</p>
          <div className="classic-slider-actions">
            <Link to="/admission" className="classic-btn classic-btn-red">Apply Online</Link>
            <Link to="/about" className="classic-btn classic-btn-light">Know More</Link>
          </div>
        </div>
        <button className="slider-arrow left" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} aria-label="Previous slide"><ChevronLeft /></button>
        <button className="slider-arrow right" onClick={() => setSlide((slide + 1) % slides.length)} aria-label="Next slide"><ChevronRight /></button>
        <div className="slider-dots">{slides.map((image, index) => <button key={image} className={index === slide ? 'active' : ''} onClick={() => setSlide(index)} aria-label={`Go to slide ${index + 1}`} />)}</div>
      </section>

      <section className="classic-about section">
        <div className="container classic-two-col">
          <div className="classic-image-frame"><img src={schoolImages.campus} alt="British English School campus" /></div>
          <div className="classic-copy">
            <span className="classic-section-label">About School</span>
            <h2>ABOUT SCHOOL</h2>
            <p>{aboutText}</p>
            <p>Our aim is to nurture responsible, capable and confident learners who are prepared for higher education and the challenges of a changing world.</p>
            <Link to="/about" className="classic-read-more">Read More <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="classic-announcement section">
        <div className="container classic-two-col announcement-cols">
          <div>
            <span className="classic-section-label">Latest Updates</span>
            <h2>ANNOUNCEMENT</h2>
            <div className="classic-notices">
              {announcements.map((notice, index) => <article key={notice}><span>0{index + 1}</span><p>{notice}</p></article>)}
            </div>
            <Link to="/announcements" className="classic-read-more">View All Announcements <ArrowRight size={16} /></Link>
          </div>
          <div className="classic-notice-panel">
            <div className="notice-icon"><PlayCircle size={32} /></div>
            <h3>Admissions Open</h3>
            <p>{school.admission}</p>
            <Link to="/admission" className="classic-btn classic-btn-red">Apply Online</Link>
          </div>
        </div>
      </section>

      <section className="classic-message section">
        <div className="container classic-two-col">
          <article className="classic-message-card">
            <img src={schoolImages.director} alt="Director of British English School" />
            <div><span className="classic-section-label">Director's Message</span><h2>DIRECTOR'S MESSAGE</h2><p>Education should build knowledge, values and the confidence to face life with purpose. We remain committed to creating opportunities for every learner.</p><Link to="/about" className="classic-read-more">Read More <ArrowRight size={16} /></Link></div>
          </article>
          <article className="classic-message-card">
            <img src={schoolImages.principal} alt="Principal of British English School" />
            <div><span className="classic-section-label">Principal's Message</span><h2>PRINCIPAL'S MESSAGE</h2><p>We encourage academic excellence, discipline, participation and respect while helping students discover their strengths and develop into responsible citizens.</p><Link to="/about" className="classic-read-more">Read More <ArrowRight size={16} /></Link></div>
          </article>
        </div>
      </section>

      <section className="classic-gallery section">
        <div className="container">
          <div className="classic-section-heading"><div><span className="classic-section-label">Campus Life</span><h2>PHOTO GALLERY</h2></div><Link to="/gallery" className="classic-read-more">View Gallery <ArrowRight size={16} /></Link></div>
          <div className="classic-gallery-grid">
            {galleryImages.slice(0, 8).map((image) => <Link to="/gallery" key={image.src} className="classic-gallery-item"><img src={image.src} alt={image.alt} /><span>{image.category}</span></Link>)}
          </div>
        </div>
      </section>

      <section className="classic-toppers section">
        <div className="container">
          <div className="classic-section-heading"><div><span className="classic-section-label">Academic Achievement</span><h2>OUR TOPPERS</h2></div><Link to="/toppers" className="classic-read-more">View All Toppers <ArrowRight size={16} /></Link></div>
          <div className="classic-topper-grid">
            {toppers.slice(0, 4).map(([name, cls, score]) => <article key={name} className="classic-topper-card"><div className="classic-topper-image"><img src={topperImages[name]} alt={`${name}, Class ${cls}`} /></div><h3>{name}</h3><p>Class {cls}</p><strong>{score}</strong></article>)}
          </div>
        </div>
      </section>

      <section className="classic-contact section">
        <div className="container classic-contact-grid">
          <div><span className="classic-section-label">Get in Touch</span><h2>CONTACT INFO</h2><p><strong>Address:</strong> {school.address}</p><p><strong>Phone:</strong> {school.phones.join(', ')}</p><p><strong>Email:</strong> {school.email}</p><p><strong>Working Hours:</strong> {school.hours}</p></div>
          <div className="classic-contact-image"><img src={schoolImages.campusWide} alt="British English School campus" /></div>
        </div>
      </section>

      <section className="classic-leave-message section">
        <div className="container classic-form-wrap">
          <div><span className="classic-section-label">Contact Us</span><h2>LEAVE MESSAGE</h2><p>Have a question about admission, academics or the school? Send us a message and the school team can get back to you.</p></div>
          <Link to="/contact" className="classic-btn classic-btn-red">Contact School</Link>
        </div>
      </section>
    </div>
  );
}
