import { createFileRoute } from "@tanstack/react-router";
import { LanguageMarketing, LANG_META } from "@/components/buddycode/LanguageMarketing";
export const Route = createFileRoute("/java")({
  head: () => ({ meta: [{ title: LANG_META.java.title }, { name: "description", content: LANG_META.java.description }, { name: "keywords", content: LANG_META.java.keywords }] }),
  component: () => <LanguageMarketing slug="java" />,
});
