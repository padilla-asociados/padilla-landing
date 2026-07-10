'use client';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/523319544459?text=Hola%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition transform hover:scale-110"
    >
      <img 
        src="/whatsapp.png" 
        alt="WhatsApp"
        className="w-10 h-10 object-contain"
      />
    </a>
  );
}