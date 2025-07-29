import { FixedSizeList as List } from 'react-window';
import { NewsItem } from "@/types/news";
import { NewsCard } from "./NewsCard";

// Mock data for demonstration
const mockNewsData: NewsItem[] = [
  {
    id: '1',
    timestamp: '09:15:23 AM',
    headline: 'Federal Reserve Signals Potential Rate Cut in Q4 2024',
    summary: 'Fed Chairman Jerome Powell indicates growing confidence in inflation trends, suggesting monetary policy adjustments may be warranted to support economic growth. Markets respond positively to dovish signals.',
    source: 'Reuters',
    sourceUrl: 'https://reuters.com',
    importanceLevel: 'Critical'
  },
  {
    id: '2',
    timestamp: '09:22:15 AM',
    headline: 'Tech Giants Report Strong Q3 Earnings Despite Market Concerns',
    summary: 'Major technology companies exceed analyst expectations with robust revenue growth, driven by AI investments and cloud services expansion. Stock futures climb in pre-market trading.',
    source: 'Bloomberg',
    sourceUrl: 'https://bloomberg.com',
    importanceLevel: 'High'
  },
  {
    id: '3',
    timestamp: '09:28:42 AM',
    headline: 'Oil Prices Surge 3% on Middle East Supply Concerns',
    summary: 'Brent crude oil jumps following reports of potential supply disruptions in key producing regions. Energy sector stocks lead morning gainers as traders assess geopolitical risks.',
    source: 'CNBC',
    sourceUrl: 'https://cnbc.com',
    importanceLevel: 'High'
  },
  {
    id: '4',
    timestamp: '09:35:18 AM',
    headline: 'Dollar Strengthens Against Major Currencies Amid Safe Haven Demand',
    summary: 'The US Dollar Index rises to multi-week highs as investors seek safety amid global economic uncertainty. EUR/USD and GBP/USD pairs decline in early trading.',
    source: 'MarketWatch',
    sourceUrl: 'https://marketwatch.com',
    importanceLevel: 'Normal'
  },
  {
    id: '5',
    timestamp: '09:41:57 AM',
    headline: 'Cryptocurrency Market Shows Signs of Recovery',
    summary: 'Bitcoin and Ethereum post modest gains as institutional interest returns. Regulatory clarity in key markets drives increased trading volumes and investor confidence.',
    source: 'CoinDesk',
    sourceUrl: 'https://coindesk.com',
    importanceLevel: 'Normal'
  },
  {
    id: '6',
    timestamp: '09:48:33 AM',
    headline: 'Manufacturing PMI Data Beats Expectations Across Major Economies',
    summary: 'Latest purchasing managers index readings show stronger than anticipated factory activity, suggesting economic resilience despite previous concerns about industrial slowdown.',
    source: 'Financial Times',
    sourceUrl: 'https://ft.com',
    importanceLevel: 'Normal'
  },
  {
    id: '7',
    timestamp: '09:55:12 AM',
    headline: 'Weekly Jobless Claims Fall to Lowest Level Since March',
    summary: 'US unemployment benefit applications drop unexpectedly, indicating continued strength in the labor market. The data supports Fed officials confidence in economic fundamentals.',
    source: 'Wall Street Journal',
    sourceUrl: 'https://wsj.com',
    importanceLevel: 'High'
  },
  {
    id: '8',
    timestamp: '10:02:45 AM',
    headline: 'European Central Bank Maintains Current Interest Rate Policy',
    summary: 'ECB holds rates steady as expected, with President Lagarde emphasizing data-dependent approach to future monetary policy decisions. Euro remains stable following announcement.',
    source: 'Reuters',
    sourceUrl: 'https://reuters.com',
    importanceLevel: 'Critical'
  },
  {
    id: '9',
    timestamp: '10:09:28 AM',
    headline: 'Semiconductor Stocks Rally on Strong Industry Outlook',
    summary: 'Chip manufacturers gain ground following positive guidance from major players. AI demand and automotive electronics drive optimistic revenue projections for upcoming quarters.',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    importanceLevel: 'High'
  },
  {
    id: '10',
    timestamp: '10:16:33 AM',
    headline: 'Gold Prices Steady as Investors Weigh Inflation Data',
    summary: 'Precious metals maintain recent levels while traders analyze latest consumer price index figures. Safe haven demand remains elevated amid ongoing market volatility.',
    source: 'Kitco News',
    sourceUrl: 'https://kitco.com',
    importanceLevel: 'None'
  },
  {
    id: '11',
    timestamp: '10:23:17 AM',
    headline: 'Renewable Energy Sector Attracts Record Investment in Q3',
    summary: 'Clean energy projects receive unprecedented funding levels, driven by policy incentives and corporate sustainability commitments. Solar and wind stocks outperform broader market.',
    source: 'Energy Voice',
    sourceUrl: 'https://energyvoice.com',
    importanceLevel: 'Normal'
  },
  {
    id: '12',
    timestamp: '10:30:51 AM',
    headline: 'Retail Sales Data Shows Consumer Spending Resilience',
    summary: 'Monthly retail figures exceed forecasts, demonstrating continued consumer confidence despite economic headwinds. Discretionary spending categories show particular strength.',
    source: 'Commerce Department',
    sourceUrl: 'https://commerce.gov',
    importanceLevel: 'High'
  },
  {
    id: '13',
    timestamp: '10:37:24 AM',
    headline: 'Healthcare Stocks Decline on Drug Pricing Legislation Concerns',
    summary: 'Pharmaceutical and biotech companies face pressure following proposed regulatory changes. Investors reassess sector valuations amid potential policy impacts on profit margins.',
    source: 'BioPharma Dive',
    sourceUrl: 'https://biopharmadive.com',
    importanceLevel: 'Normal'
  },
  {
    id: '14',
    timestamp: '10:44:08 AM',
    headline: 'Asian Markets Close Higher Following Wall Street Gains',
    summary: 'Regional indices advance across major Asian trading centers, with technology and financials leading gains. Positive sentiment carries over from US market performance.',
    source: 'Nikkei Asia',
    sourceUrl: 'https://asia.nikkei.com',
    importanceLevel: 'Normal'
  },
  {
    id: '15',
    timestamp: '10:51:42 AM',
    headline: 'Transportation Stocks Benefit from Infrastructure Spending Bill',
    summary: 'Logistics and shipping companies rally following passage of major infrastructure legislation. Railroad and trucking firms expected to see increased demand and investment.',
    source: 'Transport Topics',
    sourceUrl: 'https://ttnews.com',
    importanceLevel: 'Normal'
  },
  {
    id: '16',
    timestamp: '10:58:15 AM',
    headline: 'Bank Earnings Preview: Analysts Expect Strong Q3 Results',
    summary: 'Financial sector poised for solid quarterly performance as net interest margins remain healthy. Credit quality metrics show improvement across major banking institutions.',
    source: 'American Banker',
    sourceUrl: 'https://americanbanker.com',
    importanceLevel: 'High'
  },
  {
    id: '17',
    timestamp: '11:05:29 AM',
    headline: 'Supply Chain Disruptions Ease as Port Congestion Clears',
    summary: 'Major shipping routes report reduced delays and improved cargo flow. Manufacturing and retail sectors anticipate benefits from normalized logistics operations.',
    source: 'Supply Chain Dive',
    sourceUrl: 'https://supplychaindive.com',
    importanceLevel: 'Normal'
  },
  {
    id: '18',
    timestamp: '11:12:03 AM',
    headline: 'Federal Reserve Regional Bank Presidents Signal Cautious Approach',
    summary: 'Multiple Fed officials emphasize need for careful assessment of economic data before policy changes. Comments suggest measured approach to future interest rate decisions.',
    source: 'Federal Reserve',
    sourceUrl: 'https://federalreserve.gov',
    importanceLevel: 'Critical'
  },
  {
    id: '19',
    timestamp: '11:18:37 AM',
    headline: 'Space Technology Stocks Gain on Commercial Launch Success',
    summary: 'Private space companies see stock price increases following successful satellite deployment missions. Growing commercial space market attracts increased investor attention.',
    source: 'SpaceNews',
    sourceUrl: 'https://spacenews.com',
    importanceLevel: 'None'
  },
  {
    id: '20',
    timestamp: '11:25:14 AM',
    headline: 'Automotive Industry Adapts to Electric Vehicle Transition',
    summary: 'Traditional automakers accelerate EV production plans while charging infrastructure expands rapidly. Battery technology advances support growing consumer adoption rates.',
    source: 'Automotive News',
    sourceUrl: 'https://autonews.com',
    importanceLevel: 'Normal'
  }
];

interface NewsRowProps {
  index: number;
  style: React.CSSProperties;
}

const NewsRow = ({ index, style }: NewsRowProps) => {
  const item = mockNewsData[index];
  
  return (
    <div style={style} className="px-6 py-2">
      <NewsCard item={item} />
    </div>
  );
};

export const NewsFeed = () => {
  return (
    <div className="flex-1 bg-background">
      <List
        height={window.innerHeight - 64} // Full height minus header
        itemCount={mockNewsData.length}
        itemSize={200} // Approximate height of each news card
        width="100%"
      >
        {NewsRow}
      </List>
    </div>
  );
};