type Suit = "s" | "d" | "h" | "c";

export interface PlayingCard {
  value: string;
  rank: string;
  suit: Suit;
  image: string;
}

export type Deck = PlayingCard[];
