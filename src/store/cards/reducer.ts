import { CardState, SET_CARDS, CardActionType } from "./types";

const initialState: CardState = {
  cards: [],
  loaded: false,
};

const cardReducer = (
  state: CardState = initialState,
  action: CardActionType
): CardState => {
  switch (action.type) {
    case SET_CARDS:
      return { loaded: true, cards: action.payload };
    default:
      return state;
  }
};

export default cardReducer;
