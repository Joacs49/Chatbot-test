# 💇‍♀️ Chatbot para Peluquería - Estilo Chic

Este es un proyecto simple de una página web para una peluquería, que incluye un chatbot embebido usando **n8n** y **Ollama** como backend de IA.

# 🚀 Funcionalidades

- Página web responsive para una peluquería
- Diseño limpio y moderno con HTML + CSS
- Chatbot embebido con `@n8n/chat` conectado a un flujo de n8n
- Envío de mensajes desde la web hacia n8n usando webhook

# 📦 Estructura

/pruebaia

- styles.css            # Estilos principales para la interfaz de la página
- scripts.js            # Lógica del chatbot y la interacción con el webhook
- config.js             # Configuración del webhook de n8n
- index.html            # Página principal con el chatbot embebido
- README.md             # Documentación del proyecto

# 🛠️ Requisitos para el chatbot

- Tener corriendo un flujo de n8n con un webhook POST configurado
- Tener Ollama instalado (por ejemplo, vía Docker) para ejecutar el modelo

# 📖 Cómo usar

1. Clona el repositorio: https://github.com/Joacs49/Chatbot-test.git
2. Crea un archivo con el nombre: config.js dentro de la carpeta de scripts.
3. Agrega el siguiente fragmento de código al archivo config.js:

    window.config = {
        webhookUrl: ""  // Aquí debes ingresar la URL del webhook de tu flujo en n8n
    };

4. En el campo webhookUrl, agrega el webhook generado por tu flujo de n8n. Este webhook se usará para enviar los mensajes desde el chatbot hacia el     backend de n8n.
5. Abre el archivo index.html en tu navegador para visualizar y probar tu chatbot.
    
# Proyecto
Para poder utilizar el proyecto, importar el archivo Agente_IA.json desde n8n.

# 🔄 Flujo Utilizado

<img src="/images/Flujo-ChatBot.png" alt="Logo del proyecto" width="600"/>