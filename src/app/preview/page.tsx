import { Button } from "@/src/shared/ui/button/button";
import { Badge } from "@/src/shared/ui/badge/badge";
import { Input } from "@/src/shared/ui/input/input";
import { IconButton } from "@/src/shared/ui/icon-button/icon-button";
import { CartIcon } from "@/src/shared/ui/icons/cart-icon";
import { PlusIcon } from "@/src/shared/ui/icons/plus-icon";
import { SendIcon } from "@/src/shared/ui/icons/send-icon";


export default function PreviewPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 p-8">
      <section className="flex flex-col gap-3">
        <h2>دکمه‌ها</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">primary</Button>
          <Button variant="outline">outline</Button>
          <Button variant="text">text</Button>
          

        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">sm</Button>
          <Button size="md">md</Button>
          <Button size="lg">lg</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>بج‌ها</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="light">light</Badge>
          <Badge variant="accent">accent</Badge>
          <Badge variant="primary">primary</Badge>
          <Badge variant="muted">muted</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>آیکون‌باتن</h2>
        <div className="flex flex-wrap items-center gap-3">
          <IconButton variant="muted">
            <PlusIcon />
          </IconButton>
          <IconButton variant="primary">
            <PlusIcon />
          </IconButton>
          <IconButton variant="accent">
            <PlusIcon />
          </IconButton>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>اینپوت</h2>
        <Input
  placeholder="پیام خود را بنویسید"
  action={
    <button type="button" aria-label="ارسال">
      <SendIcon className="text-primary" />
    </button>
  }
/>
      </section>

      <section className="flex flex-col gap-3">
        <h2>آیکون‌ها</h2>
        <div className="flex gap-4 text-accent">
          <PlusIcon />
          <CartIcon />
          <SendIcon />
        </div>
      </section>
    </main>
  );
}
