import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "mb-4 flex w-full animate-in fade-in-50 slide-in-from-bottom-3",
        role === "user" ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
          role === "user"
            ? "bg-chat-user text-chat-user-foreground"
            : "bg-chat-assistant text-chat-assistant-foreground"
        )}
      >
        {content}
      </div>
    </div>
  );
};
