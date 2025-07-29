export interface NewsItem {
  id: string;
  timestamp: string; // e.g., "10:35:12 AM"
  headline: string;
  summary: string;
  source: string; // e.g., "Reuters"
  sourceUrl: string;
  importanceLevel: 'Critical' | 'High' | 'Normal' | 'None';
}