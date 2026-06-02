import { RichText } from '@/components/RichText';
import type { TimelineItemData } from '@/data/itinerary';

type TimelineItemProps = {
  item: TimelineItemData;
  onInfoClick?: (item: TimelineItemData) => void;
};

type BadgeCategory = 'walk' | 'grab' | 'food' | 'hotel' | 'train' | 'bus' | 'destination';

const CATEGORY_ICON_CLASS: Record<BadgeCategory, string> = {
  walk: 'fa-solid fa-person-walking',
  grab: 'fa-solid fa-car-side',
  food: 'fa-solid fa-utensils',
  hotel: 'fa-solid fa-bed',
  train: 'fa-solid fa-train',
  bus: 'fa-solid fa-bus-side',
  destination: 'fa-solid fa-location-dot',
};

export function TimelineItem({ item, onInfoClick }: TimelineItemProps) {
  const badgeCategory = getBadgeCategory(item);
  const iconClass = CATEGORY_ICON_CLASS[badgeCategory];
  const hasDetails = Boolean(onInfoClick);

  return (
    <div className={`titem ${item.category} ${hasDetails ? 'has-details' : ''}`} aria-label={`${item.time} ${item.title}`}>
      <div className={`timeline-badge badge-${item.category}`} aria-hidden="true">
        <i className={`timeline-badge-icon ${iconClass}`} aria-hidden="true" />
      </div>
      <div className="titem-top">
        <div className="ttime-row">
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

function getBadgeCategory(item: TimelineItemData): BadgeCategory {
  const title = item.title.toLowerCase();
  const text = item.description
    .map((segment) => ('value' in segment ? segment.value : segment.label))
    .join(' ')
    .toLowerCase();

  if (item.category === 'food') return 'food';
  if (item.category === 'train') return 'train';
  if (item.category === 'bus') return 'bus';
  if (item.category === 'spot') return 'destination';
  if (item.category === 'walk' || item.category === 'free') return 'walk';

  if (item.category === 'hotel') {
    if (title.includes('grab') || text.includes('grab')) {
      return 'grab';
    }

    return 'hotel';
  }

  return 'destination';
}
