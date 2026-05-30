export interface Language {
  value: string;
  label: string;
  extension: string;
  defaultCode: string;
  monaco: string;
  emoji: string;
  accent: string;
}

export const LANGUAGES: Language[] = [
  {
    value: "python",
    label: "Python",
    extension: ".py",
    monaco: "python",
    emoji: "🐍",
    accent: "from-emerald-400 to-sky-500",
    defaultCode: `# Welcome to BuddyCode — Python\nprint("Hello, World!")\n`,
  },
  {
    value: "javascript",
    label: "JavaScript",
    extension: ".js",
    monaco: "javascript",
    emoji: "⚡",
    accent: "from-amber-400 to-orange-500",
    defaultCode: `// Welcome to BuddyCode — JavaScript\nconsole.log("Hello, World!");\n`,
  },
  {
    value: "java",
    label: "Java",
    extension: ".java",
    monaco: "java",
    emoji: "☕",
    accent: "from-rose-400 to-pink-500",
    defaultCode: `// Welcome to BuddyCode — Java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n`,
  },
  {
    value: "cpp",
    label: "C++",
    extension: ".cpp",
    monaco: "cpp",
    emoji: "⚙️",
    accent: "from-indigo-400 to-violet-500",
    defaultCode: `// Welcome to BuddyCode — C++\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}\n`,
  },
  {
    value: "c",
    label: "C",
    extension: ".c",
    monaco: "c",
    emoji: "🔧",
    accent: "from-slate-400 to-zinc-500",
    defaultCode: `// Welcome to BuddyCode — C\n#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}\n`,
  },
];
