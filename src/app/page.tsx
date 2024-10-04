import CardList from "@/components/cardList/CardList";
import LastStory from "@/components/featured/animals/Animals";
import Culture from "@/components/featured/culture/Culture";

export default function Home() {
  return (
    <div className="py-5">
      <LastStory />
      <Culture />
      <CardList />
    </div>
  );
}
