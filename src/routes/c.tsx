import { createFileRoute } from "@tanstack/react-router";
import { LanguageMarketing, LANG_META } from "@/components/buddycode/LanguageMarketing";
export const Route = createFileRoute("/c")({
  head: () => ({ meta: [{ title: LANG_META.c.title }, { name: "description", content: LANG_META.c.description }, { name: "keywords", content: LANG_META.c.keywords }] }),
  component: () => <LanguageMarketing slug="c" />,
});
