import { ItemGridPopularGames } from "./";
import "./gridPopularGames.css";

export const GridPopularGames = () => {
  return (
    <div className="grid-popular-games">
      <ItemGridPopularGames 
        texto="World of Warcraft" 
        nombreIcono="wofw.png" 
        nombreImagen="carousel1.webp" 
      />
      <ItemGridPopularGames 
        texto="Team Fortress 2" 
        nombreIcono="teamFortress.png" 
        nombreImagen="carousel2.webp" 
      />
      <ItemGridPopularGames 
        texto="Dota 2" 
        nombreIcono="dota2.jpeg" 
        nombreImagen="carousel3.webp" 
      />
      <ItemGridPopularGames 
        texto="Counter-Strike: Global offensive" 
        nombreIcono="counterStrike.png" 
        nombreImagen="carousel4.webp"
      />
      <ItemGridPopularGames 
        texto="Overwatch" 
        nombreIcono="overwatch.jpg" 
        nombreImagen="carousel5.webp" 
      />
      <ItemGridPopularGames 
        texto="Eve Online" 
        nombreIcono="eve.jpg" 
        nombreImagen="carousel6.webp" 
      />
      <ItemGridPopularGames 
        texto="Heroes of the storm" 
        nombreIcono="heroesStorm.png" 
        nombreImagen="carousel7.webp" 
      />
      <ItemGridPopularGames 
        texto="League of Legends" 
        nombreIcono="leagueLegends.jpg" 
        nombreImagen="carousel8.webp"
      />
      <ItemGridPopularGames 
        texto="The elders scrolls online" 
        nombreIcono="elderScrolls.png" 
        nombreImagen="carousel9.webp" 
      />
      <ItemGridPopularGames 
        texto="Lineage 2" 
        nombreIcono="lineage.jpeg" 
        nombreImagen="carousel10.webp" 
      />
    </div>
  )
}
