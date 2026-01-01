import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "javascript" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-neutral-800 bg-black">
      <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2 text-xs text-neutral-400">
        <span className="font-mono uppercase tracking-[0.18em]">
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded border border-neutral-700 px-2 py-1 text-[11px] font-medium text-neutral-200 transition hover:border-neutral-400 hover:bg-neutral-900"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Скопировано
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Копировать
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto bg-black px-4 py-3 text-xs leading-relaxed text-neutral-100 sm:text-[13px]">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
