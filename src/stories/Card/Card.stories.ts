import type { Meta, StoryObj } from '@storybook/react';
import Card from '../../components/Card';

const meta = {
  title: 'Component/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
    rarity: 'normal',
  },
};

export const Rare: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
    rarity: 'rare',
  },
};
