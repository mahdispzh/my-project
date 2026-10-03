import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowLeftIcon } from "./arrow-left-icon";
import { LeafIcon } from "./leaf-icon";

// لیست همه‌ی آیکون‌ها
const icons = [
  { name: "ArrowLeftIcon", Icon: ArrowLeftIcon },
  { name: "LeafIcon", Icon: LeafIcon },
];

const meta = {
  title: "Shared/Icons",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      {icons.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-3 rounded-2xl bg-muted p-6"
        >
          <Icon className="size-8 text-primary" />
          <span className="text-sm">{name}</span>
        </div>
      ))}
    </div>
  ),
};