import { RichText } from '@/components/RichText';
import type { TipCardData } from '@/data/itinerary';

type TipCardProps = {
  tip: TipCardData;
};

export function TipCard({ tip }: TipCardProps) {
  return (
    <div className="tip-card">
      <span className="tip-icon" aria-hidden="true">
        {tip.icon}
      </span>
      <div>
        <RichText segments={tip.description} />
      </div>
    </div>
  );
}
