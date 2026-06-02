'use client';

import { useEffect } from 'react';
import type { DestinationGuide } from '@/data/itinerary';

type DestinationInfoModalProps = {
  guide: DestinationGuide | null;
  onClose: () => void;
};

export function DestinationInfoModal({ guide, onClose }: DestinationInfoModalProps) {
  useEffect(() => {
    if (!guide) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [guide, onClose]);

  if (!guide) {
    return null;
  }

  return (
    <div className="guide-overlay" role="dialog" aria-modal="true" aria-labelledby="guide-title" onClick={onClose}>
      <div className="guide-modal" onClick={(event) => event.stopPropagation()}>
        <div className="guide-header">
          <div>
            <div className="guide-eyebrow">How to do it</div>
            <h2 id="guide-title">{guide.title}</h2>
          </div>
          <button type="button" className="guide-close" aria-label="Close destination guide" onClick={onClose}>
            ×
          </button>
        </div>

        <p className="guide-summary">{guide.summary}</p>

        {guide.service || guide.ticket || guide.whereToBuy?.length ? (
          <div className="guide-facts">
            {guide.service ? (
              <div className="guide-fact">
                <div className="guide-fact-label">Service</div>
                <div className="guide-fact-value">{guide.service}</div>
              </div>
            ) : null}
            {guide.ticket ? (
              <div className="guide-fact">
                <div className="guide-fact-label">Ticket</div>
                <div className="guide-fact-value">{guide.ticket}</div>
              </div>
            ) : null}
            {guide.whereToBuy?.length ? (
              <div className="guide-fact guide-fact-full">
                <div className="guide-fact-label">Where to buy</div>
                <ul className="guide-buy-list">
                  {guide.whereToBuy.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="guide-section">
          <div className="guide-section-title">Easy steps</div>
          <ol className="guide-steps">
            {guide.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="guide-section">
          <div className="guide-section-title">Remember</div>
          <ul className="guide-tips">
            {guide.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
