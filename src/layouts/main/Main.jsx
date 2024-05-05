import "./main.css";
import { Carousel, Footer, GridPopularGames, HotDealsMarket, Navbar } from "../../components"
import { MainCarousel } from "../carousel/MainCarousel";
import { PopularGames } from "../popularGames/PopularGames";
import { PublisherGames } from "../publisherGames/PublisherGames";
import { MainPublisherContainer } from "../../components/publisherGames/MainPublisherContainer";
import { HotDealsMarketLayout } from "../hotdealsMarket/HotDealsMarketLayout";

export const Main = () => {
  return (
    <>
      <Navbar />
      <MainCarousel>
        <Carousel />
      </MainCarousel>
      <PopularGames>
        <GridPopularGames />
      </PopularGames>
      <PublisherGames>
        <MainPublisherContainer />
      </PublisherGames>
      <HotDealsMarketLayout>
        <HotDealsMarket />
      </HotDealsMarketLayout>
      <Footer />
    </>
  )
}