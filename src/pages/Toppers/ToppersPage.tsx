import { PageShell } from '../../components/common/PageShell';
import { topperImages } from '../../data/images';
import { toppers } from '../../data/toppers';

export function ToppersPage() {
  return <PageShell eyebrow="Achievement" title="Celebrating academic excellence.">
    <div className="topper-grid page-toppers">
      {toppers.map(([name, cls, score], i) => <article key={name} className="topper-card topper-card-image">
        <span>0{i + 1}</span>
        <img src={topperImages[name]} alt={`${name}, Class ${cls}, ${score}`} loading="lazy" />
        <h3>{name}</h3>
        <p>Class {cls}</p>
        <strong>{score}</strong>
        <small>2025-2026</small>
      </article>)}
    </div>
  </PageShell>;
}
