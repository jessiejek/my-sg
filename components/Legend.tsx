import type { LegendItem as LegendItemType } from '@/data/itinerary';

type LegendProps = {
  items: LegendItemType[];
};

export function Legend({ items }: LegendProps) {
  return (
    <div className="legend">
      {items.map((item) => (
        <div key={item.label} className="leg">
          <div className="leg-dot" style={{ background: item.color }} />
          {item.label}
        </div>
      ))}
    </div>
  );
}
