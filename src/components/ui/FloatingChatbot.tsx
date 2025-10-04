import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente virtual de Nexus Coin. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'proyectos': 'Tenemos varios proyectos en desarrollo: Torre Nexus, Residencial Green Valley y Centro Comercial Plaza. ¿Te interesa alguno en particular?',
    'contacto': 'Puedes contactarnos al +1 234 567 8900 o enviar un email a contacto@nexuscoin.com. También puedes llenar el formulario de contacto en nuestra página.',
    'precios': 'Los precios varían según el proyecto y las características. ¿Qué tipo de propiedad te interesa? Puedo conectarte con un asesor para información específica.',
    'financiación': 'Ofrecemos diferentes opciones de financiación a través de nuestros aliados bancarios. ¿Te gustaría conocer más detalles sobre las opciones disponibles?',
    'ubicación': 'Nuestros proyectos están ubicados en las mejores zonas de la ciudad. ¿Hay alguna zona específica de tu interés?'
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (message.includes(keyword)) {
        return response;
      }
    }
    
    if (message.includes('hola') || message.includes('hello')) {
      return '¡Hola! Gracias por contactarnos. ¿En qué puedo ayudarte? Puedo darte información sobre nuestros proyectos, precios, financiación y más.';
    }
    
    if (message.includes('gracias')) {
      return '¡De nada! ¿Hay algo más en lo que pueda ayudarte?';
    }
    
    return 'Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto. Mientras tanto, ¿hay algo específico que te gustaría saber sobre nuestros proyectos?';
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    'Ver proyectos',
    'Información de precios',
    'Opciones de financiación',
    'Contactar asesor'
  ];

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center group ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Asistente Nexus Coin</h3>
                <p className="text-sm opacity-90">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' ? 'bg-primary text-white' : 'bg-white border-2 border-gray-200'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className={`px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Respuestas rápidas:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-colors duration-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-primary text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensaje"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingChatbot;