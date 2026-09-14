// Single source of truth for the WhatsApp link used across the site.
export const WHATSAPP_NUMBER = "252618777691";

export const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
