import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta = {
  title: "Shared/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["light", "accent", "primary", "muted"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = { args: { children: "محبوب" } };
export const Accent: Story = { args: { children: "تازه", variant: "accent" } };
export const Primary: Story = {
  args: { children: "پیشنهاد باریستا", variant: "primary" },
};
export const Muted: Story = { args: { children: "جدید", variant: "muted" } };

export const CustomColor: Story = {
  args: { children: "رنگ دلخواه", className: "bg-secondary text-primary" },
};
