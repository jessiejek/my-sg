import type { BudgetCard } from '@/data/itinerary';

type BudgetSummaryProps = {
  cards: BudgetCard[];
};

export function BudgetSummary({ cards }: BudgetSummaryProps) {
  return (
    <>
      <div className="section-label">Budget summary</div>
      <div className="budget-grid">
        {cards.map((card) => (
          <div key={card.label} className={`bcard${card.featured ? ' featured' : ''}`}>
            <div className="bcard-day">{card.label}</div>
            <div className="bcard-rm">{card.amount}</div>
            <div className="bcard-php">{card.php}</div>
          </div>
        ))}
      </div>
    </>
  );
}
