import { RichText } from '@/components/RichText';
import type { HeroData } from '@/data/itinerary';

type HeroProps = {
  hero: HeroData;
};

export function Hero({ hero }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">{hero.eyebrow}</div>
        <h1>
          {hero.title}
          <br />
          <em>{hero.subtitle}</em>
        </h1>
        <div className="hero-meta">
          {hero.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="hero-note">
          <RichText segments={hero.note} />
        </div>
      </div>
    </header>
  );
}
