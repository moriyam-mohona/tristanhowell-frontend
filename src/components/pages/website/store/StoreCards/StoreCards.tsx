import StoreCard from "@/components/shared/Cards/StoreCards";
import { storeData } from "@/utils/dummyData/storeData";

const StoreCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 xl:gap-6">
      {storeData.map((stores) => (
        <StoreCard key={stores?.id} {...stores} />
      ))}
    </div>
  );
};

export default StoreCards;
