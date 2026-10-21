import { MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lg transition-colors hover:bg-[#178a45]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
