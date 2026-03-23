import { RiMailLine } from "react-icons/ri";

type MessageItem = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  status: "new" | "read" | "replied" | "archived";
  createdAt: Date;
};

export default function MessagesList({
  title = "Latest Messages",
  messages,
}: {
  title?: string;
  messages: MessageItem[];
}) {
  return (
    <section className="bg-white rounded-2xl p-6 border border-stone-200">
      <h2 className="text-xl font-semibold text-stone-900 mb-3 underline underline-offset-4">
        <span className="inline-flex items-center gap-2">
          <RiMailLine className="text-lg" />
          {title}
        </span>
      </h2>
      {messages.length === 0 ? (
        <p className="text-sm text-stone-500">No messages received yet.</p>
      ) : (
        <div className="space-y-3">
          {messages.map((message) => (
            <div key={message.id} className="rounded-xl border border-stone-200 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-stone-900 break-words">
                    {message.subject?.trim() || "No subject"}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    From <span className="break-all">{message.name}</span> (
                    <span className="break-all">{message.email}</span>)
                  </p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border font-medium capitalize bg-stone-100 text-stone-700 border-stone-200">
                  {message.status}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Received on{" "}
                {new Intl.DateTimeFormat("en-KE", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(message.createdAt)}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
