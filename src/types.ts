type Suit = "s" | "d" | "h" | "c";

export interface PlayingCard {
  value: string;
  suit: Suit;
  path: string;
}

export type Deck = PlayingCard[];
