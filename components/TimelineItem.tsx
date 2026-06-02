import { RichText } from '@/components/RichText';
import type { TimelineItemData } from '@/data/itinerary';

type TimelineItemProps = {
  item: TimelineItemData;
  onInfoClick?: (item: TimelineItemData) => void;
};

export function TimelineItem({ item, onInfoClick }: TimelineItemProps) {
  return (
    <div className={`titem ${item.category}`} aria-label={`${item.time} ${item.title}`}>
      <div className="titem-top">
        <div className="ttime">{item.time}</div>
        <button
          type="button"
          className="info-btn"
          aria-label={`How to do ${item.title}`}
          onClick={() => onInfoClick?.(item)}
        >
          i
        </button>
      </div>
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
