import { createFileRoute } from "@tanstack/react-router";
import { LanguageMarketing, LANG_META } from "@/components/buddycode/LanguageMarketing";
export const Route = createFileRoute("/javascript")({
  head: () => ({ meta: [{ title: LANG_META.javascript.title }, { name: "description", content: LANG_META.javascript.description }, { name: "keywords", content: LANG_META.javascript.keywords }] }),
  component: () => <LanguageMarketing slug="javascript" />,
});
