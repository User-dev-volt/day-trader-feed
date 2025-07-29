import { NewsItem } from "@/types/news";
import { NewsCard } from "./NewsCard";

// Mock data for demonstration
const mockNewsData: NewsItem[] = [
  {
    id: '1',
    timestamp: '09:15:23 AM',
    headline: 'Federal Reserve Signals Potential Rate Cut in Q4 2024',
    summary: 'Fed Chairman Jerome Powell indicates growing confidence in inflation trends, suggesting monetary policy adjustments may be warranted to support economic growth.',
    source: 'Reuters',
    sourceUrl: 'https://reuters.com',
    importanceLevel: 'Critical'
  },
  {
    id: '2',
    timestamp: '09:22:15 AM',
    headline: 'Tech Giants Report Strong Q3 Earnings',
    summary: 'Major technology companies exceed analyst expectations with robust revenue growth, driven by AI investments and cloud services expansion.',
    source: 'Bloomberg',
    sourceUrl: 'https://bloomberg.com',
    importanceLevel: 'High'
  },
  {
    id: '3',
    timestamp: '09:28:42 AM',
    headline: 'Oil Prices Surge 3% on Supply Concerns',
    summary: 'Brent crude oil jumps following reports of potential supply disruptions in key producing regions.',
    source: 'CNBC',
    sourceUrl: 'https://cnbc.com',
    importanceLevel: 'High'
  },
  {
    id: '4',
    timestamp: '09:35:18 AM',
    headline: 'Dollar Strengthens Against Major Currencies',
    summary: 'The US Dollar Index rises to multi-week highs as investors seek safety amid global economic uncertainty.',
    source: 'MarketWatch',
    sourceUrl: 'https://marketwatch.com',
    importanceLevel: 'Normal'
  },
  {
    id: '5',
    timestamp: '09:41:57 AM',
    headline: 'Crypto Market Shows Recovery Signs',
    summary: 'Bitcoin and Ethereum post modest gains as institutional interest returns with regulatory clarity.',
    source: 'CoinDesk',
    sourceUrl: 'https://coindesk.com',
    importanceLevel: 'Normal'
  },
  {
    id: '6',
    timestamp: '09:48:33 AM',
    headline: 'Manufacturing PMI Beats Expectations',
    summary: 'Latest purchasing managers index readings show stronger than anticipated factory activity across major economies.',
    source: 'Financial Times',
    sourceUrl: 'https://ft.com',
    importanceLevel: 'Normal'
  },
  {
    id: '7',
    timestamp: '09:55:12 AM',
    headline: 'Weekly Jobless Claims Fall to March Lows',
    summary: 'US unemployment benefit applications drop unexpectedly, indicating continued strength in the labor market.',
    source: 'Wall Street Journal',
    sourceUrl: 'https://wsj.com',
    importanceLevel: 'High'
  },
  {
    id: '8',
    timestamp: '10:02:45 AM',
    headline: 'ECB Maintains Current Interest Rate Policy',
    summary: 'European Central Bank holds rates steady as expected, with President Lagarde emphasizing data-dependent approach.',
    source: 'Reuters',
    sourceUrl: 'https://reuters.com',
    importanceLevel: 'Critical'
  },
  {
    id: '9',
    timestamp: '10:09:28 AM',
    headline: 'Semiconductor Stocks Rally on Industry Outlook',
    summary: 'Chip manufacturers gain ground following positive guidance from major players in AI and automotive sectors.',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    importanceLevel: 'High'
  },
  {
    id: '10',
    timestamp: '10:16:33 AM',
    headline: 'Gold Prices Steady as Investors Weigh Data',
    summary: 'Precious metals maintain recent levels while traders analyze latest consumer price index figures.',
    source: 'Kitco News',
    sourceUrl: 'https://kitco.com',
    importanceLevel: 'None'
  },
  {
    id: '11',
    timestamp: '10:23:17 AM',
    headline: 'Renewable Energy Attracts Record Investment',
    summary: 'Clean energy projects receive unprecedented funding levels, driven by policy incentives and corporate commitments.',
    source: 'Energy Voice',
    sourceUrl: 'https://energyvoice.com',
    importanceLevel: 'Normal'
  },
  {
    id: '12',
    timestamp: '10:30:51 AM',
    headline: 'Retail Sales Show Consumer Resilience',
    summary: 'Monthly retail figures exceed forecasts, demonstrating continued consumer confidence despite economic headwinds.',
    source: 'Commerce Department',
    sourceUrl: 'https://commerce.gov',
    importanceLevel: 'High'
  },
  {
    id: '13',
    timestamp: '10:37:24 AM',
    headline: 'Healthcare Stocks Decline on Pricing Concerns',
    summary: 'Pharmaceutical companies face pressure following proposed regulatory changes affecting profit margins.',
    source: 'BioPharma Dive',
    sourceUrl: 'https://biopharmadive.com',
    importanceLevel: 'Normal'
  },
  {
    id: '14',
    timestamp: '10:44:08 AM',
    headline: 'Asian Markets Close Higher',
    summary: 'Regional indices advance across major Asian trading centers, with technology and financials leading gains.',
    source: 'Nikkei Asia',
    sourceUrl: 'https://asia.nikkei.com',
    importanceLevel: 'Normal'
  },
  {
    id: '15',
    timestamp: '10:51:42 AM',
    headline: 'Transportation Stocks Benefit from Infrastructure Bill',
    summary: 'Logistics companies rally following passage of major infrastructure legislation affecting railroads and trucking.',
    source: 'Transport Topics',
    sourceUrl: 'https://ttnews.com',
    importanceLevel: 'Normal'
  },
  {
    id: '16',
    timestamp: '10:58:15 AM',
    headline: 'Bank Earnings Preview: Strong Q3 Expected',
    summary: 'Financial sector poised for solid quarterly performance as net interest margins remain healthy.',
    source: 'American Banker',
    sourceUrl: 'https://americanbanker.com',
    importanceLevel: 'High'
  },
  {
    id: '17',
    timestamp: '11:05:29 AM',
    headline: 'Supply Chain Disruptions Ease',
    summary: 'Major shipping routes report reduced delays and improved cargo flow affecting manufacturing and retail.',
    source: 'Supply Chain Dive',
    sourceUrl: 'https://supplychaindive.com',
    importanceLevel: 'Normal'
  },
  {
    id: '18',
    timestamp: '11:12:03 AM',
    headline: 'Fed Officials Signal Cautious Approach',
    summary: 'Multiple Fed officials emphasize need for careful assessment of economic data before policy changes.',
    source: 'Federal Reserve',
    sourceUrl: 'https://federalreserve.gov',
    importanceLevel: 'Critical'
  }
];

export const NewsFeed = () => {
  return (
    <div className="flex-1 bg-background p-6 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {mockNewsData.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};