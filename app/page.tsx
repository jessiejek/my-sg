import { AlertBox } from '@/components/AlertBox';
import { BudgetSummary } from '@/components/BudgetSummary';
import { DaySection } from '@/components/DaySection';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Legend } from '@/components/Legend';
import { TipCard } from '@/components/TipCard';
import { itinerary } from '@/data/itinerary';

export default function HomePage() {
  return (
    <>
      <Hero hero={itinerary.hero} />

      <main className="container">
        <BudgetSummary cards={itinerary.budgetSummary} />
        <Legend items={itinerary.legend} />

        {itinerary.days.map((day) => (
          <DaySection key={day.day} day={day} />
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
    </>
  );
}
