import { createFileRoute } from "@tanstack/react-router";
import { LanguageMarketing, LANG_META } from "@/components/buddycode/LanguageMarketing";
export const Route = createFileRoute("/cpp")({
  head: () => ({ meta: [{ title: LANG_META.cpp.title }, { name: "description", content: LANG_META.cpp.description }, { name: "keywords", content: LANG_META.cpp.keywords }] }),
  component: () => <LanguageMarketing slug="cpp" />,
});
