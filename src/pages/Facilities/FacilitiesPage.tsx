import { PageShell } from '../../components/common/PageShell';
import { facilityImages } from '../../data/images';
import { facilities } from '../../data/school';

export function FacilitiesPage() {
  return <PageShell eyebrow="Facilities" title="The infrastructure behind a complete school experience.">
    <div className="facility-grid facilities-page-grid">
      {facilities.map((x, i) => {
        const image = facilityImages[x];
        return <article className="facility-card facility-card-image" key={x}>
          {image && <img src={image.src} alt={image.alt} loading="lazy" />}
          <div className="facility-card-body">
            <span>0{i + 1}</span>
            <h3>{x}</h3>
            <p>Designed to support learning, safety, wellbeing and student development.</p>
          </div>
        </article>;
      })}
    </div>
  </PageShell>;
}
