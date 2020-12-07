import authReducer from "./auth/reducer";

import { combineReducers } from "redux";
import cardReducer from "./cards/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  cards: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
