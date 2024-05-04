import "./main.css";
import { Carousel, GridPopularGames, Navbar } from "../../components"
import { MainCarousel } from "../carousel/MainCarousel";
import { PopularGames } from "../popularGames/PopularGames";
import { PublisherGames } from "../publisherGames/PublisherGames";
import { MainPublisherContainer } from "../../components/publisherGames/MainPublisherContainer";

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
    </>
  )
}