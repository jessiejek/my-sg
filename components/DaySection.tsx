import { TimelineItem } from '@/components/TimelineItem';
import type { DaySectionData, TimelineItemData } from '@/data/itinerary';

type DaySectionProps = {
  day: DaySectionData;
  onInfoClick?: (item: TimelineItemData) => void;
};

export function DaySection({ day, onInfoClick }: DaySectionProps) {
  return (
    <section className="day-block">
      <div className="day-head">
        <div className={`day-num d${day.day}`}>{day.day}</div>
        <div className="day-info">
          <div className="day-title">{day.title}</div>
          <div className="day-budget-label">{day.budgetLabel}</div>
        </div>
      </div>

      <div className="timeline">
        {day.items.map((item) => (
          <TimelineItem key={`${day.day}-${item.time}-${item.title}`} item={item} onInfoClick={onInfoClick} />
        ))}
      </div>
    </section>
  );
}
