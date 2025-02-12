/// <reference types="vite/client" />

interface Card {
  id: number;
  name: string;
  imageURL: string;
  rarity: 'epic' | 'rare' | 'normal';
}
