import { createFileRoute } from "@tanstack/react-router";
import { LanguageMarketing, LANG_META } from "@/components/buddycode/LanguageMarketing";
export const Route = createFileRoute("/python")({
  head: () => ({ meta: [{ title: LANG_META.python.title }, { name: "description", content: LANG_META.python.description }, { name: "keywords", content: LANG_META.python.keywords }] }),
  component: () => <LanguageMarketing slug="python" />,
});
