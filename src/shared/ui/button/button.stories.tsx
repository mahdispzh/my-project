import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
// مسیر آیکون خودت رو اینجا بذار
import { ArrowLeftIcon } from "@/src/shared/ui/icons/arrow-left-icon";

const meta = {
  title: "Shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline", "text"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "دکمه اصلی" },
};

export const Large: Story = {
  args: { children: "دکمه اصلی بزرگ", size: "lg", icon: <ArrowLeftIcon /> },
};

export const Small: Story = {
  args: { children: "دکمه کوچک", size: "sm" },
};

export const Outline: Story = {
  args: { children: "دکمه خطی", variant: "outline" },
};

export const Text: Story = {
  args: { children: "دکمه متنی", variant: "text", icon: <ArrowLeftIcon /> },
};

export const Disabled: Story = {
  args: { children: "دکمه غیرفعال", disabled: true },
};