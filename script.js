import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

const webhookUrl = window.config.webhookUrl;

createChat({
  webhookUrl: webhookUrl,
  webhookConfig: {
    method: "POST",
    headers: {},
  },
  target: "#n8n-chat",
  mode: "window",
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  metadata: {},
  showWelcomeScreen: false,
  defaultLanguage: "es",
  initialMessages: [],
  i18n: {
    es: {
      title: "¡Hola! 👋",
      subtitle: "Inicia una conversación. Estamos para ayudarte.",
      footer: "",
      getStarted: "Nueva conversación",
      inputPlaceholder: "Escribe tu pregunta...",
    },
  },
});