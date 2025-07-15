import StoreCards from "@/components/pages/website/store/StoreCards/StoreCards";
import StoreHeader from "@/components/pages/website/store/StoreHeader/StoreHeader";
import { Container } from "@/components/ui-library/container";

const StorePage = () => {
  return (
    <div className="bg-gray/20 ">
      <Container className="py-12 md:py-24 space-y-10 md:space-y-32">
        <StoreHeader />
        <StoreCards />
      </Container>
    </div>
  );
};

export default StorePage;
