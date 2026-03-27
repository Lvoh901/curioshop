import MessagesList from "../_components/MessagesList";
import { getLatestMessages } from "../_lib/data";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  const messages = await getLatestMessages(20);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 underline underline-offset-4">Messages</h1>
        <p className="text-stone-600 mt-1 font-medium">View contact form submissions and statuses.</p>
      </div>
      <MessagesList title="All Recent Messages" messages={messages} />
    </div>
  );
}
