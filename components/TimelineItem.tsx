import { RichText } from '@/components/RichText';
import type { TimelineItemData } from '@/data/itinerary';

type TimelineItemProps = {
  item: TimelineItemData;
};

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className={`titem ${item.category}`} aria-label={`${item.time} ${item.title}`}>
      <div className="ttime">{item.time}</div>
      <div className="tdesc">
        <RichText segments={item.description} />
      </div>
      {(item.tags.length > 0 || item.cost) && (
        <div className="titem-bottom">
          {item.tags.map((tag) => (
            <span key={`${tag.variant}-${tag.label}`} className={`tag tag-${tag.variant}`}>
              {tag.label}
            </span>
          ))}
          {item.cost ? <span className="tcost">{item.cost}</span> : null}
        </div>
      )}
    </div>
  );
}
