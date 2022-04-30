import { v4 as uuid } from "uuid";
import { getItem, setItem } from "@/utils/storage";
import { Card } from "@/declarations/Card";

const STORAGE_KEY = "tagmark-cards";

export function getCards(): Card[] {
  return getItem<Card[]>(STORAGE_KEY) || [];
}

export function createCard(data: Omit<Card, "id">): Promise<Card> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const id = uuid();
        const cards = getCards();
        const newCard = { id, ...data };
        setItem<Card[]>(STORAGE_KEY, cards.concat(newCard));
        resolve(newCard);
      } catch (error) {
        return reject(
          "An error ocurred trying to create your card, try again later"
        );
      }
    }, 2000);
  });
}
