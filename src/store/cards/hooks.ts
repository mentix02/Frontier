import { useSelector } from "react-redux";

import { Card, CardState } from "./types";

interface CardStateType {
  cards: CardState;
}

export const useCards = (): Card[] =>
  useSelector(({ cards }: CardStateType) => cards.cards);

export const useCardsLoaded = (): boolean =>
  useSelector(({ cards }: CardStateType) => cards.loaded);
