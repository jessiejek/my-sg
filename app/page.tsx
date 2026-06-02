'use client';

import { useState } from 'react';
import { AlertBox } from '@/components/AlertBox';
import { BudgetSummary } from '@/components/BudgetSummary';
import { DaySection } from '@/components/DaySection';
import { DestinationInfoModal } from '@/components/DestinationInfoModal';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Legend } from '@/components/Legend';
import { TipCard } from '@/components/TipCard';
import {
  buildGuideForItem,
  DEFAULT_ITINERARY_ID,
  ITINERARIES_BY_ID,
  type TimelineItemData,
} from '@/data/itinerary';

export default function HomePage() {
  const [selectedGuide, setSelectedGuide] = useState<ReturnType<typeof buildGuideForItem> | null>(null);
  const selectedItinerary = ITINERARIES_BY_ID[DEFAULT_ITINERARY_ID];

  const handleOpenGuide = (item: TimelineItemData) => {
    setSelectedGuide(buildGuideForItem(item));
  };

  return (
    <>
      <Hero hero={selectedItinerary.hero} />

      <main className="container">
        <BudgetSummary cards={selectedItinerary.budgetSummary} />
        <Legend items={selectedItinerary.legend} />

        {selectedItinerary.days.map((day) => (
          <DaySection key={day.day} day={day} onInfoClick={handleOpenGuide} />
        ))}

        <AlertBox alert={selectedItinerary.alert} />

        <div className="section-label">Tips</div>
        <div className="tips-grid">
          {selectedItinerary.tips.map((tip, index) => (
            <TipCard key={`${tip.icon}-${index}`} tip={tip} />
          ))}
        </div>
      </main>

      <Footer text={selectedItinerary.footer} />

      <DestinationInfoModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
    </>
  );
}
