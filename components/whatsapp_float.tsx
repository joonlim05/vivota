export default function WhatsappFloat() {
    const phoneNumber = '6580357523';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-amber-400 w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-amber-500 hover:scale-110 transition-all duration-300 z-50"
            aria-label="Chat on WhatsApp"
        >
            <img
                className="w-8 h-8 fill-current"
                src="/whatsappDark.svg"
            />
        </a>
    );
}