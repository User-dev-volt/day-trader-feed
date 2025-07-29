import { Header } from "@/components/Header";
import { NewsFeed } from "@/components/NewsFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <NewsFeed />
    </div>
  );
};

export default Index;
