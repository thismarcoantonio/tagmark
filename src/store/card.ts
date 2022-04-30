import { Module } from "vuex";
import { Card } from "@/declarations/Card";
import { getCards, createCard } from "@/services/card";

interface State {
  cards: Card[];
}

interface RootState {
  root: boolean;
}

const Card: Module<State, RootState> = {
  namespaced: true,
  state: {
    cards: getCards(),
  },
  actions: {
    async setCard(context, payload: Card) {
      const card = await createCard(payload);
      context.commit("SET_CARD", card);
    },
  },
  mutations: {
    SET_CARD(state, payload) {
      state.cards = [...state.cards, payload];
    },
  },
};

export default Card;
