import { Card, SET_CARDS, SetCardAction } from "./types";

export const setCards = (cards: Card[]): SetCardAction => ({
  type: SET_CARDS,
  payload: cards,
});
