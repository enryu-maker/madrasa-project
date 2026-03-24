import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
    <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] shadow-lg flex items-center justify-center hover:scale-110 transition-transform animate-float"
        aria-label="Chat on WhatsApp"
    >
        <MessageCircle className="h-7 w-7 text-[hsl(0,0%,100%)]" />
    </a>
);

export default WhatsAppButton;
