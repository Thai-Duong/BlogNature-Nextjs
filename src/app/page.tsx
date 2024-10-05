import CardList from "@/components/cardList/CardList";
import LastStory from "@/components/featured/animals/Animals";
import Culture from "@/components/featured/culture/Culture";
import Travel from "@/components/featured/travel/Travel";

export default function Home() {
  return (
    <div className="py-5">
      <LastStory />
      <Culture />
      <Travel />
      <CardList />
    </div>
  );
}
