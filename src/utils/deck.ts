import Ac from "../assets/svg-cards/ace_of_clubs.svg";
import Ad from "../assets/svg-cards/ace_of_diamonds.svg";
import Ah from "../assets/svg-cards/ace_of_hearts.svg";
import As from "../assets/svg-cards/ace_of_spades.svg";
import { PlayingCard } from "../types";

const deck = new Map<string, PlayingCard>();

deck.set("Ac", {
  value: "Ac",
  rank: "A",
  suit: "c",
  image: Ac,
});

deck.set("Ad", {
  value: "Ad",
  rank: "A",
  suit: "d",
  image: Ad,
});

deck.set("Ah", {
  value: "Ah",
  rank: "A",
  suit: "h",
  image: Ah,
});

deck.set("As", {
  value: "As",
  rank: "A",
  suit: "s",
  image: As,
});

export default deck;
