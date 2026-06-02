import { RichText } from '@/components/RichText';
import type { TimelineItemData } from '@/data/itinerary';

type TimelineItemProps = {
  item: TimelineItemData;
  onInfoClick?: (item: TimelineItemData) => void;
};

type BadgeKind = 'walk' | 'hotel' | 'car' | 'bus' | 'train' | 'food' | 'spot';

export function TimelineItem({ item, onInfoClick }: TimelineItemProps) {
  const badgeKind = getBadgeKind(item);

  return (
    <div className={`titem ${item.category}`} aria-label={`${item.time} ${item.title}`}>
      <div className={`timeline-badge badge-${item.category}`} aria-hidden="true">
        <BadgeIcon kind={badgeKind} />
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

function getBadgeKind(item: TimelineItemData): BadgeKind {
  const title = item.title.toLowerCase();
  const text = item.description
    .map((segment) => ('value' in segment ? segment.value : segment.label))
    .join(' ')
    .toLowerCase();

  if (item.category === 'food') return 'food';
  if (item.category === 'train') return 'train';
  if (item.category === 'bus') return 'bus';
  if (item.category === 'spot') return 'spot';
  if (item.category === 'walk' || item.category === 'free') return 'walk';

  if (item.category === 'hotel') {
    if (title.includes('grab') || text.includes('grab')) {
      return 'car';
    }

    return 'hotel';
  }

  return 'spot';
}

function BadgeIcon({ kind }: { kind: BadgeKind }) {
  switch (kind) {
    case 'walk':
      return (
        <svg viewBox="0 0 24 24" className="timeline-badge-icon" aria-hidden="true">
          <path d="M12 4.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Z" />
          <path d="M10.2 8.8 8.9 14.2 7.1 20" fill="none" />
          <path d="M13.8 8.8 15.1 12l2.3 1.8" fill="none" />
          <path d="M8 11.2 10.4 9.6l2.3-.3 2.1.8 1.5 1.8" fill="none" />
          <path d="M9.7 13.9l2.3 1.6 1.2 4.5" fill="none" />
        </svg>
      );
    case 'hotel':
      return (
        <svg viewBox="0 0 24 24" className="timeline-badge-icon" aria-hidden="true">
          <path d="M5 10h14v7H5z" fill="none" />
          <path d="M6.2 10V6.8h3.1a2.7 2.7 0 0 1 2.7 2.7V10" fill="none" />
          <path d="M12 10V8.4a2 2 0 0 1 2-2H18v3.6" fill="none" />
          <path d="M6.2 17v2.2M17.8 17v2.2" fill="none" />
          <path d="M8.2 6.5h2" fill="none" />
        </svg>
      );
    case 'car':
      return (
        <svg viewBox="0 0 24 24" className="timeline-badge-icon" aria-hidden="true">
          <path d="M5.5 14.5 6.9 9.8c.3-.8 1.1-1.3 1.9-1.3h6.4c.8 0 1.6.5 1.9 1.3l1.4 4.7" fill="none" />
          <path d="M4.8 14.5h14.4v3.1H4.8z" fill="none" />
          <path d="M8 17.6a1.2 1.2 0 1 0 0 .1z" />
          <path d="M16 17.6a1.2 1.2 0 1 0 0 .1z" />
          <path d="M8.8 12h6.4" fill="none" />
        </svg>
      );
    case 'bus':
      return (
        <svg viewBox="0 0 24 24" className="timeline-badge-icon" aria-hidden="true">
          <path d="M6 5.5h12A1.5 1.5 0 0 1 19.5 7v9A2 2 0 0 1 17.5 18H6.5A2 2 0 0 1 4.5 16V7A1.5 1.5 0 0 1 6 5.5Z" fill="none" />
          <path d="M7 9h10" fill="none" />
          <path d="M8.2 12h2M13.8 12h2" fill="none" />
          <path d="M7.2 18v1.1M16.8 18v1.1" fill="none" />
        </svg>
      );
    case 'train':
      return (
        <svg viewBox="0 0 24 24" className="timeline-badge-icon" aria-hidden="true">
          <path d="M7 4.8h10a2 2 0 0 1 2 2V16a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 16V6.8a2 2 0 0 1 2-2Z" fill="none" />
          <path d="M8 8.8h8M8 12h8" fill="none" />
          <path d="M8.5 18.5 7 20.5M15.5 18.5 17 20.5" fill="none" />
          <path d="M9 6.3h6" fill="none" />
          <path d="M9.2 15.4h.01M14.8 15.4h.01" />
        </svg>
      );
    case 'food':
      return (
        <svg viewBox="0 0 24 24" className="timeline-badge-icon" aria-hidden="true">
          <path d="M6 4.5v8" fill="none" />
          <path d="M4.8 4.5v4M7.2 4.5v4" fill="none" />
          <path d="M10 4.5v8" fill="none" />
          <path d="M9.2 8.1H10.8" fill="none" />
          <path d="M14 4.8v14.4" fill="none" />
          <path d="M14 4.8c2 0 3.2 1.6 3.2 3.2 0 1.8-1.1 3.2-3.2 3.2M14 11.2h3.2" fill="none" />
        </svg>
      );
    case 'spot':
    default:
      return (
        <svg viewBox="0 0 24 24" className="timeline-badge-icon" aria-hidden="true">
          <path d="M12 20.5s4.7-4.2 4.7-8.1A4.7 4.7 0 1 0 7.3 12.4c0 3.9 4.7 8.1 4.7 8.1Z" fill="none" />
          <path d="M12 10.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Z" />
        </svg>
      );
  }
}
