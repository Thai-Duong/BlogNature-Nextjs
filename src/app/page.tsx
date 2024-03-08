import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Culture from "@/components/featured/culture/Culture";
import LastStory from "@/components/featured/animals/Animals";

export default function Home() {
  return (
    <div className="py-5">
      <LastStory />
      <Culture />
      <CategoryList />
      <CardList />
    </div>
  );
}
