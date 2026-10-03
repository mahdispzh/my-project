import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { IconButton } from "../icon-button/icon-button";
import { SendIcon } from "../icons/send-icon";

const meta = {
  title: "Shared/Input",
  component: Input,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <div className="w-[420px] rounded-3xl bg-primary p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "نشانی ایمیل شما" },
};

export const WithSendButton: Story = {
  args: {
    placeholder: "نشانی ایمیل شما",
    action: (
      <IconButton variant="accent" aria-label="ارسال">
        <SendIcon />
      </IconButton>
    ),
  },
};