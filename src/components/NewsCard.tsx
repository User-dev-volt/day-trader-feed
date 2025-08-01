import { NewsItem } from "@/types/news";
import { ExternalLink } from "lucide-react";

interface NewsCardProps {
  item: NewsItem;
}

const getBorderColor = (importance: NewsItem['importanceLevel']) => {
  switch (importance) {
    case 'Critical':
      return 'border-border-critical shadow-border-critical/20';
    case 'High':
      return 'border-border-high shadow-border-high/20';
    case 'Normal':
      return 'border-border-normal shadow-border-normal/20';
    default:
      return 'border-border shadow-border/10';
  }
};

export const NewsCard = ({ item }: NewsCardProps) => {
  const borderClasses = getBorderColor(item.importanceLevel);
  
  return (
    <article className={`
      bg-card border-2 rounded-lg p-6 transition-all duration-200 
      hover:shadow-lg hover:shadow-black/30 cursor-pointer h-full
      flex flex-col ${borderClasses}
    `}>
      <a 
        href={item.sourceUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-4 text-sm text-secondary">
            <time>{item.timestamp}</time>
            <span>•</span>
            <span>{item.source}</span>
          </div>
          <ExternalLink size={16} className="text-secondary flex-shrink-0" />
        </div>
        
        <h2 className="text-lg font-bold text-foreground mb-3 leading-tight line-clamp-2">
          {item.headline}
        </h2>
        
        <p className="text-foreground text-sm leading-relaxed flex-1 line-clamp-3">
          {item.summary}
        </p>
      </a>
    </article>
  );
};