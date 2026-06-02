import { RichText } from '@/components/RichText';
import type { AlertBoxData } from '@/data/itinerary';

type AlertBoxProps = {
  alert: AlertBoxData;
};

export function AlertBox({ alert }: AlertBoxProps) {
  return (
    <div className="alert">
      <div className="alert-title">{alert.title}</div>
      <p>
        <RichText segments={alert.body} />
      </p>
    </div>
  );
}
