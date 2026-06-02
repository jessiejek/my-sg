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
import { buildGuideForItem, itinerary, type TimelineItemData } from '@/data/itinerary';

export default function HomePage() {
  const [selectedGuide, setSelectedGuide] = useState<ReturnType<typeof buildGuideForItem> | null>(null);

  const handleOpenGuide = (item: TimelineItemData) => {
    setSelectedGuide(buildGuideForItem(item));
  };

  return (
    <>
      <Hero hero={itinerary.hero} />

      <main className="container">
        <BudgetSummary cards={itinerary.budgetSummary} />
        <Legend items={itinerary.legend} />

        {itinerary.days.map((day) => (
          <DaySection key={day.day} day={day} onInfoClick={handleOpenGuide} />
        ))}

        <AlertBox alert={itinerary.alert} />

        <div className="section-label">Tips</div>
        <div className="tips-grid">
          {itinerary.tips.map((tip, index) => (
            <TipCard key={`${tip.icon}-${index}`} tip={tip} />
          ))}
        </div>
      </main>

      <Footer text={itinerary.footer} />

      <DestinationInfoModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
    </>
  );
}
