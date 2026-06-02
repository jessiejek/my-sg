export type Category = 'train' | 'bus' | 'food' | 'spot' | 'hotel' | 'walk' | 'free';
export type TagVariant = 'train' | 'bus' | 'food' | 'walk' | 'spot' | 'hotel' | 'free';

export type TextSegment = {
  kind: 'text';
  value: string;
};

export type StrongSegment = {
  kind: 'strong';
  value: string;
};

export type PlaceSegment = {
  kind: 'place';
  label: string;
  placeType?: string;
  mapQuery: string;
};

export type Segment = TextSegment | StrongSegment | PlaceSegment;

export type ItemTag = {
  label: string;
  variant: TagVariant;
};

export type BudgetCard = {
  label: string;
  amount: string;
  php: string;
  featured?: boolean;
};

export type LegendItem = {
  label: string;
  color: string;
};

export type TimelineItemData = {
  time: string;
  title: string;
  category: Category;
  description: Segment[];
  tags: ItemTag[];
  cost?: string;
  mapQuery?: string;
  image?: string;
};

export type DaySectionData = {
  day: 12 | 13 | 14 | 15;
  title: string;
  budgetLabel: string;
  items: TimelineItemData[];
};

export type HeroData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  meta: string[];
  note: Segment[];
};

export type TipCardData = {
  icon: string;
  description: Segment[];
};

export type AlertBoxData = {
  title: string;
  body: Segment[];
};

const text = (value: string): TextSegment => ({ kind: 'text', value });
const strong = (value: string): StrongSegment => ({ kind: 'strong', value });
const place = (label: string, placeType: string | undefined, mapQuery: string): PlaceSegment => ({
  kind: 'place',
  label,
  placeType,
  mapQuery,
});
const tag = (label: string, variant: TagVariant): ItemTag => ({ label, variant });

export const itinerary = {
  hero: {
    eyebrow: 'Travel Itinerary',
    title: 'Malaysia',
    subtitle: 'July 12–15',
    meta: ['2 people', 'Travelodge KL City Centre', 'RM1 ≈ PHP 15.56'],
    note: [
      text('⚠️ Airport Grab on July 12 & July 15 is paid by credit card and is '),
      strong('not'),
      text(' included in the cash/e-wallet budget. · Coffee rule: 1 shared coffee, not 2.'),
    ],
  } satisfies HeroData,
  budgetSummary: [
    { label: 'July 12', amount: 'RM 130–200', php: 'PHP 2,023–3,111' },
    { label: 'July 13', amount: 'RM 165–265', php: 'PHP 2,567–4,123' },
    { label: 'July 14', amount: 'RM 280–393', php: 'PHP 4,356–6,113' },
    { label: 'July 15', amount: 'RM 25–45', php: 'PHP 389–700' },
    { label: 'Total for 2', amount: 'RM 600–903', php: 'PHP 9,334–14,047', featured: true },
    { label: 'Recommended cash', amount: 'RM 1,000', php: '~PHP 15,560', featured: true },
  ] satisfies BudgetCard[],
  legend: [
    { label: 'Train / LRT / MRT', color: '#378ADD' },
    { label: 'Bus', color: '#BA7517' },
    { label: 'Food', color: '#1D9E75' },
    { label: 'Tourist spot', color: '#7F77DD' },
    { label: 'Walk / Free', color: '#888780' },
    { label: 'Hotel / Grab', color: '#D4537E' },
  ] satisfies LegendItem[],
  days: [
    {
      day: 12,
      title: 'Arrival + Chinatown easy day',
      budgetLabel: 'RM 130–200 · walk-only day',
      items: [
        {
          time: '1:30 AM',
          title: 'Arrive KLIA',
          category: 'hotel',
          description: [
            text('Arrive '),
            place('KLIA', '(airport)', 'KLIA'),
            text(' · clear immigration · get baggage · Grab to hotel'),
          ],
          tags: [tag('Grab', 'hotel')],
          cost: 'Credit card — not in cash budget',
          mapQuery: 'KLIA',
        },
        {
          time: '3:00 AM',
          title: 'Check in',
          category: 'hotel',
          description: [
            text('Check in '),
            place('Travelodge', '(hotel)', 'Travelodge Kuala Lumpur City Centre'),
            text(' or leave luggage · rest'),
          ],
          tags: [],
          mapQuery: 'Travelodge Kuala Lumpur City Centre',
        },
        {
          time: '8:00 AM',
          title: 'Breakfast near Chinatown',
          category: 'food',
          description: [
            text('Breakfast near '),
            place('Chinatown', '(walking area)', 'Chinatown, Kuala Lumpur'),
            text(' · 1 shared coffee'),
          ],
          tags: [tag('Food', 'food')],
          cost: 'RM 20–30 for 2',
          mapQuery: 'Chinatown, Kuala Lumpur',
        },
        {
          time: '9:00 AM',
          title: 'Central Market',
          category: 'free',
          description: [
            place('Central Market', '(walking area)', 'Central Market Kuala Lumpur'),
            text(' · free, very near hotel'),
          ],
          tags: [tag('Free', 'free')],
          mapQuery: 'Central Market Kuala Lumpur',
        },
        {
          time: '10:00 AM',
          title: 'Petaling Street',
          category: 'free',
          description: [
            place('Petaling Street', '(walking area)', 'Petaling Street Kuala Lumpur'),
            text(' · shops, street photos, snacks'),
          ],
          tags: [tag('Walk', 'walk')],
          cost: 'Snacks RM 10–20 for 2',
          mapQuery: 'Petaling Street Kuala Lumpur',
        },
        {
          time: '11:30 AM',
          title: 'Kwai Chai Hong',
          category: 'free',
          description: [
            place('Kwai Chai Hong', '(photo spot)', 'Kwai Chai Hong Kuala Lumpur'),
          ],
          tags: [tag('Free', 'free')],
          mapQuery: 'Kwai Chai Hong Kuala Lumpur',
        },
        {
          time: '12:30 PM',
          title: 'Lunch in Chinatown',
          category: 'food',
          description: [
            text('Lunch in '),
            place('Chinatown', '(walking area)', 'Chinatown, Kuala Lumpur'),
            text(' · noodles, rice, kopitiam food'),
          ],
          tags: [tag('Food', 'food')],
          cost: 'RM 35–50 for 2',
          mapQuery: 'Chinatown, Kuala Lumpur',
        },
        {
          time: '5:00 PM',
          title: 'River of Life / Masjid Jamek area',
          category: 'free',
          description: [
            place('River of Life / Masjid Jamek area', '(photo walk)', 'Masjid Jamek, Kuala Lumpur'),
          ],
          tags: [tag('Free', 'free')],
          mapQuery: 'Masjid Jamek, Kuala Lumpur',
        },
        {
          time: '7:00 PM',
          title: 'Dinner in Chinatown',
          category: 'food',
          description: [
            text('Dinner in '),
            place('Chinatown', '(walking area)', 'Chinatown, Kuala Lumpur'),
          ],
          tags: [tag('Food', 'food')],
          cost: 'RM 45–70 for 2',
          mapQuery: 'Chinatown, Kuala Lumpur',
        },
      ],
    },
    {
      day: 13,
      title: 'Batu Caves + KLCC + Saloma Bridge + Jalan Alor',
      budgetLabel: 'RM 165–265',
      items: [
        {
          time: '7:00 AM',
          title: 'Breakfast near hotel',
          category: 'food',
          description: [text('Breakfast near hotel · 1 shared coffee')],
          tags: [tag('Food', 'food')],
          cost: 'RM 20–30 for 2',
          mapQuery: 'Travelodge Kuala Lumpur City Centre',
        },
        {
          time: '8:00 AM',
          title: 'LRT Pasar Seni to KL Sentral',
          category: 'train',
          description: [
            text('LRT · '),
            place('Pasar Seni', '(station, beside hotel)', 'Pasar Seni LRT Station'),
            text(' → '),
            place('KL Sentral', '(station, main hub)', 'KL Sentral Station'),
          ],
          tags: [tag('LRT', 'train')],
          cost: '≈RM 2.60 for 2',
          mapQuery: 'Pasar Seni LRT Station',
        },
        {
          time: '8:30 AM',
          title: 'KTM Komuter to Batu Caves',
          category: 'train',
          description: [
            text('KTM Komuter · '),
            place('KL Sentral', '(station, main hub)', 'KL Sentral Station'),
            text(' → '),
            place('Batu Caves', '(station)', 'Batu Caves'),
            text(' (~29 min)'),
          ],
          tags: [tag('KTM', 'train')],
          cost: 'RM 5.20 for 2 (one-way)',
          mapQuery: 'KL Sentral Station',
        },
        {
          time: '9:15 AM',
          title: 'Batu Caves',
          category: 'spot',
          description: [
            place('Batu Caves', '(tourist spot)', 'Batu Caves'),
            text(' · main stairs & temple · walk from station'),
          ],
          tags: [tag('Spot', 'spot'), tag('Free', 'free')],
          mapQuery: 'Batu Caves',
        },
        {
          time: '11:30 AM',
          title: 'Lunch near Batu Caves',
          category: 'food',
          description: [
            text('Lunch near '),
            place('Batu Caves', '(area)', 'Batu Caves'),
            text(' · roti, thosai, vegetarian rice, curry'),
          ],
          tags: [tag('Food', 'food')],
          cost: 'RM 35–55 for 2',
          mapQuery: 'Batu Caves',
        },
        {
          time: '12:45 PM',
          title: 'KTM Komuter return',
          category: 'train',
          description: [
            text('KTM Komuter · '),
            place('Batu Caves', '(station)', 'Batu Caves'),
            text(' → '),
            place('KL Sentral', '(station, main hub)', 'KL Sentral Station'),
          ],
          tags: [tag('KTM', 'train')],
          cost: 'RM 5.20 for 2 (one-way)',
          mapQuery: 'Batu Caves',
        },
        {
          time: '1:30 PM',
          title: 'LRT to KLCC',
          category: 'train',
          description: [
            text('LRT · '),
            place('KL Sentral', '(station, main hub)', 'KL Sentral Station'),
            text(' → '),
            place('KLCC', '(station, Petronas area)', 'KLCC Station'),
            text(' (~12 min)'),
          ],
          tags: [tag('LRT', 'train')],
          cost: '≈RM 4.40–5.00 for 2',
          mapQuery: 'KL Sentral Station',
        },
        {
          time: '2:00 PM',
          title: 'Petronas Twin Towers / KLCC',
          category: 'spot',
          description: [
            place('Petronas Twin Towers / KLCC', '(tourist spot)', 'Petronas Twin Towers'),
            text(' · outside photo only, no paid entry'),
          ],
          tags: [tag('Spot', 'spot'), tag('Free', 'free')],
          mapQuery: 'Petronas Twin Towers',
        },
        {
          time: '4:30 PM',
          title: 'KLCC Park / Suria KLCC',
          category: 'walk',
          description: [
            place('KLCC Park / Suria KLCC', '(mall)', 'Suria KLCC'),
            text(' · rest, buy water/snack'),
          ],
          tags: [tag('Walk', 'walk')],
          cost: 'Snacks RM 10–20 for 2',
          mapQuery: 'Suria KLCC',
        },
        {
          time: '6:00 PM',
          title: 'Saloma Bridge',
          category: 'spot',
          description: [
            place('Saloma Bridge', '(photo spot)', 'Saloma Link Bridge'),
            text(' · best at sunset / night'),
          ],
          tags: [tag('Spot', 'spot'), tag('Free', 'free')],
          mapQuery: 'Saloma Link Bridge',
        },
        {
          time: '7:00 PM',
          title: 'KLCC to Bukit Bintang Walkway',
          category: 'walk',
          description: [
            place('KLCC–Bukit Bintang Walkway', '(covered elevated path)', 'KLCC-Bukit Bintang Walkway'),
            text(' → '),
            place('Pavilion', '(mall)', 'Pavilion Kuala Lumpur'),
          ],
          tags: [tag('Walk', 'walk'), tag('Free', 'free')],
          mapQuery: 'Pavilion Kuala Lumpur',
        },
        {
          time: '7:45 PM',
          title: 'Jalan Alor',
          category: 'food',
          description: [
            place('Jalan Alor', '(food street)', 'Jalan Alor Kuala Lumpur'),
            text(' · rice/noodles + shared side + drinks · avoid seafood sets & crab'),
          ],
          tags: [tag('Food', 'food')],
          cost: 'RM 60–90 for 2',
          mapQuery: 'Jalan Alor Kuala Lumpur',
        },
        {
          time: '9:15 PM',
          title: 'MRT back to Pasar Seni',
          category: 'train',
          description: [
            text('MRT · '),
            place('Bukit Bintang', '(station)', 'Bukit Bintang MRT Station'),
            text(' → '),
            place('Pasar Seni', '(station, beside hotel)', 'Pasar Seni Station'),
            text(' (~3 min)'),
          ],
          tags: [tag('MRT', 'train')],
          cost: '≈RM 2–3 for 2',
          mapQuery: 'Bukit Bintang MRT Station',
        },
      ],
    },
    {
      day: 14,
      title: 'DIY Malacca day trip',
      budgetLabel: 'RM 280–393 · earliest start',
      items: [
        {
          time: '6:00 AM',
          title: 'Simple breakfast near hotel',
          category: 'food',
          description: [text('Simple breakfast near hotel · 1 shared coffee')],
          tags: [tag('Food', 'food')],
          cost: 'RM 20–30 for 2',
          mapQuery: 'Travelodge Kuala Lumpur City Centre',
        },
        {
          time: '6:45 AM',
          title: 'LRT to KL Sentral',
          category: 'train',
          description: [
            text('LRT · '),
            place('Pasar Seni', '(station, beside hotel)', 'Pasar Seni Station'),
            text(' → '),
            place('KL Sentral', '(station, main hub)', 'KL Sentral Station'),
          ],
          tags: [tag('LRT', 'train')],
          cost: '≈RM 2.60 for 2',
          mapQuery: 'Pasar Seni Station',
        },
        {
          time: '7:15 AM',
          title: 'KLIA Transit to Bandar Tasik Selatan',
          category: 'train',
          description: [
            text('KLIA Transit · '),
            place('KL Sentral', '(station, main hub)', 'KL Sentral Station'),
            text(' → '),
            place('Bandar Tasik Selatan', '(station, beside bus terminal)', 'Bandar Tasik Selatan Station'),
            text(' (~7 min)'),
          ],
          tags: [tag('KLIA Transit', 'train')],
          cost: 'RM 13.00 for 2 · save RM 1.20 via app',
          mapQuery: 'KL Sentral Station',
        },
        {
          time: '7:35 AM',
          title: 'Walk to TBS',
          category: 'walk',
          description: [
            text('Walk to '),
            place('TBS / Terminal Bersepadu Selatan', '(bus terminal, like Cebu South Bus Terminal)', 'TBS Terminal Bersepadu Selatan'),
            text(' · find your bus gate'),
          ],
          tags: [tag('Walk', 'walk'), tag('Free', 'free')],
          mapQuery: 'TBS Terminal Bersepadu Selatan',
        },
        {
          time: '8:00 AM',
          title: 'Bus to Melaka Sentral',
          category: 'bus',
          description: [
            text('Bus · '),
            place('TBS', '(bus terminal, KL)', 'TBS Terminal Bersepadu Selatan'),
            text(' → '),
            place('Melaka Sentral', '(bus terminal, Malacca)', 'Melaka Sentral'),
            text(' (~2 hrs) · book in advance!'),
          ],
          tags: [tag('Bus', 'bus')],
          cost: 'RM 40–56 for 2 round trip',
          mapQuery: 'TBS Terminal Bersepadu Selatan',
        },
        {
          time: '10:30 AM',
          title: 'Grab to Dutch Square',
          category: 'walk',
          description: [
            text('Grab/taxi · '),
            place('Melaka Sentral', '(bus terminal)', 'Melaka Sentral'),
            text(' → '),
            place('Dutch Square', '(tourist area)', 'Dutch Square Malacca'),
          ],
          tags: [tag('Grab', 'hotel')],
          cost: 'RM 12–20 for 2',
          mapQuery: 'Melaka Sentral',
        },
        {
          time: '10:50 AM',
          title: 'Dutch Square / Red Square',
          category: 'spot',
          description: [
            place('Dutch Square / Red Square', '(tourist area)', 'Dutch Square Malacca'),
            text(' · Christ Church, Stadthuys, fountain, clock tower'),
          ],
          tags: [tag('Spot', 'spot'), tag('Free', 'free')],
          mapQuery: 'Dutch Square Malacca',
        },
        {
          time: '11:30 AM',
          title: "St. Paul's Hill",
          category: 'spot',
          description: [
            place("St. Paul's Hill", '(tourist spot)', "St. Paul's Hill Malacca"),
            text(' · ruins & viewpoint'),
          ],
          tags: [tag('Spot', 'spot'), tag('Free', 'free')],
          mapQuery: "St. Paul's Hill Malacca",
        },
        {
          time: '12:15 PM',
          title: 'A Famosa / Porta de Santiago',
          category: 'spot',
          description: [
            place('A Famosa / Porta de Santiago', '(tourist spot)', 'A Famosa Malacca'),
            text(' · photo stop'),
          ],
          tags: [tag('Spot', 'spot'), tag('Free', 'free')],
          mapQuery: 'A Famosa Malacca',
        },
        {
          time: '1:15 PM',
          title: 'Lunch near Jonker / Dutch Square',
          category: 'food',
          description: [
            text('Lunch near '),
            place('Jonker / Dutch Square', '(area)', 'Jonker Street Malacca'),
          ],
          tags: [tag('Food', 'food')],
          cost: 'RM 40–60 for 2',
          mapQuery: 'Jonker Street Malacca',
        },
        {
          time: '2:15 PM',
          title: 'Harmony Street / Jonker Street',
          category: 'walk',
          description: [
            place('Harmony Street / Jonker Street', '(walking area)', 'Jonker Street Malacca'),
            text(' · temples, mosque, shops'),
          ],
          tags: [tag('Walk', 'walk'), tag('Free', 'free')],
          mapQuery: 'Jonker Street Malacca',
        },
        {
          time: '3:15 PM',
          title: 'Cendol / cold drinks',
          category: 'food',
          description: [text('Cendol / cold drinks')],
          tags: [tag('Snack', 'food')],
          cost: 'RM 20–35 for 2',
          mapQuery: 'Jonker Street Malacca',
        },
        {
          time: '4:00 PM',
          title: 'Melaka River Walk',
          category: 'walk',
          description: [
            place('Melaka River Walk', '(walking area)', 'Melaka River Walk'),
            text(' · free photos'),
          ],
          tags: [tag('Walk', 'walk'), tag('Free', 'free')],
          mapQuery: 'Melaka River Walk',
        },
        {
          time: '5:30 PM',
          title: 'Early dinner in Malacca',
          category: 'food',
          description: [text('Early dinner in Malacca before return')],
          tags: [tag('Food', 'food')],
          cost: 'RM 50–70 for 2',
          mapQuery: 'Jonker Street Malacca',
        },
        {
          time: '6:30 PM',
          title: 'Grab back to Melaka Sentral',
          category: 'walk',
          description: [
            text('Grab/taxi · '),
            place('Jonker area', '(tourist area)', 'Jonker Street Malacca'),
            text(' → '),
            place('Melaka Sentral', '(bus terminal)', 'Melaka Sentral'),
          ],
          tags: [tag('Grab', 'hotel')],
          cost: 'RM 12–20 for 2',
          mapQuery: 'Jonker Street Malacca',
        },
        {
          time: '7:00 PM',
          title: 'Bus to TBS',
          category: 'bus',
          description: [
            text('Bus · '),
            place('Melaka Sentral', '(bus terminal)', 'Melaka Sentral'),
            text(' → '),
            place('TBS', '(bus terminal, KL)', 'TBS Terminal Bersepadu Selatan'),
            text(' (~2 hrs)'),
          ],
          tags: [tag('Bus', 'bus')],
          cost: 'Included in round trip',
          mapQuery: 'Melaka Sentral',
        },
        {
          time: '9:30 PM',
          title: 'KLIA Transit back to KL Sentral',
          category: 'train',
          description: [
            text('KLIA Transit · '),
            place('Bandar Tasik Selatan', '(station, beside bus terminal)', 'Bandar Tasik Selatan Station'),
            text(' → '),
            place('KL Sentral', '(station, main hub)', 'KL Sentral Station'),
          ],
          tags: [tag('KLIA Transit', 'train')],
          cost: 'RM 13.00 for 2',
          mapQuery: 'Bandar Tasik Selatan Station',
        },
        {
          time: '9:45 PM',
          title: 'LRT back to Pasar Seni',
          category: 'train',
          description: [
            text('LRT · '),
            place('KL Sentral', '(station, main hub)', 'KL Sentral Station'),
            text(' → '),
            place('Pasar Seni', '(station, beside hotel)', 'Pasar Seni Station'),
          ],
          tags: [tag('LRT', 'train')],
          cost: '≈RM 2.60 for 2',
          mapQuery: 'KL Sentral Station',
        },
      ],
    },
    {
      day: 15,
      title: 'KL → Singapore flight day',
      budgetLabel: 'RM 25–45 · early checkout',
      items: [
        {
          time: '3:15 AM',
          title: 'Wake up',
          category: 'hotel',
          description: [text('Wake up · final packing · check passports')],
          tags: [],
          mapQuery: 'Travelodge Kuala Lumpur City Centre',
        },
        {
          time: '3:45 AM',
          title: 'Check out Travelodge',
          category: 'hotel',
          description: [
            text('Check out '),
            place('Travelodge', '(hotel)', 'Travelodge Kuala Lumpur City Centre'),
            text(' · go to lobby'),
          ],
          tags: [],
          mapQuery: 'Travelodge Kuala Lumpur City Centre',
        },
        {
          time: '4:00 AM',
          title: 'Grab to KLIA',
          category: 'hotel',
          description: [
            text('Grab · '),
            place('Travelodge', '(hotel)', 'Travelodge Kuala Lumpur City Centre'),
            text(' → '),
            place('KLIA', '(airport)', 'KLIA'),
          ],
          tags: [tag('Grab', 'hotel')],
          cost: 'Credit card — not in cash budget',
          mapQuery: 'Travelodge Kuala Lumpur City Centre',
        },
        {
          time: '5:00 AM',
          title: 'KLIA check-in',
          category: 'free',
          description: [
            place('KLIA', '(airport)', 'KLIA'),
            text(' · check in, bag drop, immigration & security'),
          ],
          tags: [],
          mapQuery: 'KLIA',
        },
        {
          time: '6:30 AM',
          title: 'Airport breakfast',
          category: 'food',
          description: [
            text('Airport breakfast / snack at '),
            place('KLIA', '(airport)', 'KLIA'),
          ],
          tags: [tag('Food', 'food')],
          cost: 'RM 25–45 for 2',
          mapQuery: 'KLIA',
        },
        {
          time: '8:00 AM',
          title: 'Flight departs',
          category: 'spot',
          description: [text('✈️ Flight departs · Kuala Lumpur → Singapore')],
          tags: [],
          mapQuery: 'Kuala Lumpur International Airport',
        },
      ],
    },
  ] satisfies DaySectionData[],
  alert: {
    title: '📌 Fact-check note — bus fare correction',
    body: [
      text('The original itinerary listed RM 64–72 for the KL ↔ Malacca round trip bus for 2. Actual fares start from RM 10/person one-way — expect '),
      strong('RM 40–56 for 2 round trip'),
      text(' depending on operator. Book in advance on BusOnlineTicket.com or Easybook.com.'),
    ],
  } satisfies AlertBoxData,
  tips: [
    {
      icon: '💳',
      description: [
        text("Get a "),
        strong("Touch 'n Go card"),
        text(' at any train station on arrival — discounts on LRT/MRT and faster boarding.'),
      ],
    },
    {
      icon: '🗓️',
      description: [
        strong('Book the Malacca bus in advance'),
        text(' — July 14 is a Sunday and buses fill up fast.'),
      ],
    },
    {
      icon: '⏰',
      description: [
        text('KTM Komuter to Batu Caves runs ~every '),
        strong('30 minutes'),
        text(' — check the schedule before leaving.'),
      ],
    },
    {
      icon: '📱',
      description: [
        text('Download the '),
        strong('KLIA Ekspres app'),
        text(' for 10% off KLIA Transit tickets (saves RM 1.20).'),
      ],
    },
    {
      icon: '🦀',
      description: [
        text('At Jalan Alor: '),
        strong('avoid seafood platters, crab, and big tourist sets'),
        text(' to stay on budget.'),
      ],
    },
    {
      icon: '☕',
      description: [
        text('Coffee rule: '),
        strong('1 shared coffee only'),
        text(' — not 2 separate orders — per the budget.'),
      ],
    },
  ] satisfies TipCardData[],
  footer: 'Malaysia Itinerary · July 12–15 · 2 people · RM 600–903 estimated total',
};

export const hero = itinerary.hero;
export const budgetSummary = itinerary.budgetSummary;
export const legend = itinerary.legend;
export const days = itinerary.days;
export const alert = itinerary.alert;
export const tips = itinerary.tips;
export const footer = itinerary.footer;
