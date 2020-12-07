import { ReactNode } from "react";

export const SET_CARDS = "SET_CARDS";

export interface Card {
  url: string;
  title: string;
  thumbnail: string;
  description: NonNullable<ReactNode>;
}

export interface CardState {
  cards: Card[];
  loaded: boolean;
}

export interface SetCardAction {
  payload: Card[];
  type: typeof SET_CARDS;
}

export type CardActionType = SetCardAction;
