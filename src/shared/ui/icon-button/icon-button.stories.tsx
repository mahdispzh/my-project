import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconButton } from "./icon-button";
import { PlusIcon } from "../icons/plus-icon";
import { SendIcon } from "../icons/send-icon";

const meta = {
  title: "Shared/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["muted", "primary", "accent"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plus: Story = {
  args: { children: <PlusIcon />, "aria-label": "افزودن" },
};

export const Primary: Story = {
  args: { children: <PlusIcon />, variant: "primary", "aria-label": "افزودن" },
};

export const Send: Story = {
  args: { children: <SendIcon />, variant: "accent", "aria-label": "ارسال" },
};


export const CustomColor: Story = {
  args: {
    children: <PlusIcon />,
    className: "bg-secondary text-primary-light",
    "aria-label": "افزودن",
  },
};