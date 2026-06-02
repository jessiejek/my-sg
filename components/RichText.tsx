import type { Segment } from '@/data/itinerary';

type RichTextProps = {
  segments: Segment[];
};

export function RichText({ segments }: RichTextProps) {
  return (
    <>
      {segments.map((segment, index) => {
        if (segment.kind === 'text') {
          return <span key={`${segment.kind}-${index}`}>{segment.value}</span>;
        }

        if (segment.kind === 'strong') {
          return <strong key={`${segment.kind}-${index}`}>{segment.value}</strong>;
        }

        return (
          <a
            key={`${segment.kind}-${index}`}
            className="place-link"
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(segment.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="place-name">{segment.label}</span>
            {segment.placeType ? <span className="place-type"> {segment.placeType}</span> : null}
          </a>
        );
      })}
    </>
  );
}
