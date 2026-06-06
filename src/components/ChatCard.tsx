import type { Conversation } from "../lib/data";

function AkayaAvatar() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-700 text-sm font-bold text-white shadow-[0_0_18px_-2px_rgba(128,102,255,0.9)]">
      A
    </div>
  );
}

export default function ChatCard({
  conversation,
  primary = false,
  className = "",
}: {
  conversation: Conversation;
  primary?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border border-white/10 bg-card/90 backdrop-blur-sm ${
        primary
          ? "p-5 shadow-[0_40px_120px_-30px_rgba(128,102,255,0.55)] sm:p-7"
          : "p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
      } ${className}`}
    >
      {/* window chrome */}
      <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.2em] text-tertiary">
          {conversation.label}
        </span>
      </div>

      {/* User message — right aligned */}
      <div className="mb-5 flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-white/[0.08] px-4 py-3 text-right">
          <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-tertiary">
            You
          </span>
          <p
            className={`text-white ${
              primary ? "text-base sm:text-lg" : "text-sm sm:text-base"
            }`}
          >
            {conversation.question}
          </p>
        </div>
      </div>

      {/* Akaya message — left aligned */}
      <div className="flex items-start gap-3">
        <AkayaAvatar />
        <div className="max-w-[88%] rounded-2xl rounded-tl-md border-l-2 border-purple-600 bg-elevated/70 px-4 py-3">
          <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-purple-500">
            Akaya
          </span>
          <div
            className={`space-y-3 text-white/85 ${
              primary ? "text-[15px] sm:text-base" : "text-sm"
            } leading-relaxed`}
          >
            {conversation.answer.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
