import { PageShell } from '../../components/common/PageShell';
import { galleryImages } from '../../data/images';

export function GalleryPage() {
  return <PageShell eyebrow="Gallery" title="A glimpse of campus life and shared memories.">
    <div className="gallery-mosaic full-gallery">
      {galleryImages.map((image, i) => <figure key={`${image.src}-${i}`} className={`gallery-tile tile-${i % 8}`}>
        <img src={image.src} alt={image.alt} loading="lazy" />
        <figcaption>{image.category || 'School Life'}</figcaption>
      </figure>)}
    </div>
  </PageShell>;
}
