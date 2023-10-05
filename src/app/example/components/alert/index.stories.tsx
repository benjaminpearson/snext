import type { Meta, StoryObj } from '@storybook/react';

import { ExampleAlert } from './';

const meta = {
  title: 'Example/ExampleAlert',
  component: ExampleAlert,
  tags: ['autodocs'],
} satisfies Meta<typeof ExampleAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Caution: Story = {
  args: {
    tone: 'caution',
  },
};

export const Promote: Story = {
  args: {
    tone: 'promote',
  },
};
