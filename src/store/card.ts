import { Module } from "vuex";
import { Card } from "@/declarations/Card";
import { getCards, createCard, updateCard } from "@/services/card";

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
    async setFavorite(context, payload: { id: string; favorite: boolean }) {
      const cards = await updateCard(payload);
      context.commit("SET_CARDS", cards);
    },
  },
  mutations: {
    SET_CARDS(state, payload) {
      state.cards = payload;
    },
    SET_CARD(state, payload) {
      state.cards = [...state.cards, payload];
    },
  },
};

export default Card;
