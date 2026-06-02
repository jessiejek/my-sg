'use client';

import type { ItineraryId, ItineraryPlan } from '@/data/itinerary';

type ItinerarySelectorProps = {
  plans: ItineraryPlan[];
  selectedId: ItineraryId;
  onChange: (id: ItineraryId) => void;
};

export function ItinerarySelector({ plans, selectedId, onChange }: ItinerarySelectorProps) {
  return (
    <section className="itinerary-switch" aria-label="Itinerary selector">
      <div className="itinerary-switch-head">
        <div>
          <div className="section-label">Itinerary</div>
          <div className="itinerary-switch-note">Switch between saved travel plans without changing the layout.</div>
        </div>
      </div>

      <div className="itinerary-switch-grid">
        {plans.map((plan) => {
          const isSelected = plan.id === selectedId;

          return (
            <button
              key={plan.id}
              type="button"
              className="itinerary-switch-btn"
              aria-pressed={isSelected}
              aria-label={`${plan.label}${plan.description ? `, ${plan.description}` : ''}`}
              onClick={() => onChange(plan.id)}
            >
              <div className="itinerary-switch-name">{plan.label}</div>
              {plan.description ? <div className="itinerary-switch-desc">{plan.description}</div> : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
