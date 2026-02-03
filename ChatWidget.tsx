
import React, { useState, useRef, useEffect } from 'react';
import { HispabotHead, PaperAirplaneIcon, XCircleIcon, BriefcaseIcon, HomeModernIcon, HeartIcon } from './IconComponents';
import { askHispabot } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola! Soy Hispabot. Tu compañero de WP News. ¿En qué te ayudo hoy con la info de White Plains? ¡Elvis y el equipo me tienen al día!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (customQuery?: string) => {
    const queryToUse = customQuery || input.trim();
    if (!queryToUse || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: queryToUse }]);
    setIsLoading(true);

    try {
      const response = await askHispabot(queryToUse);
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'No lo tengo en mi base de datos por ahora, pero Elvis y el equipo de WP News están investigando para ti. ¡Vuelve pronto! White Plains News, noticias que te empoderan.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { label: 'Buscar Empleo', query: '¿Qué trabajos hay disponibles hoy?', icon: BriefcaseIcon },
    { label: 'Buscar Vivienda', query: '¿Qué cuartos o apartamentos hay en renta?', icon: HomeModernIcon },
    { label: 'Salud y Recursos', query: 'Necesito ayuda médica o recursos comunitarios', icon: HeartIcon },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-[#0f172a] w-[350px] md:w-[400px] h-[550px] shadow-[0_0_50px_rgba(56,189,248,0.2)] rounded-3xl flex flex-col overflow-hidden border border-[#1e293b] animate-in fade-in zoom-in duration-300">
          {/* Custom Header with "Hispabot Head" Aesthetic */}
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-5 flex items-center justify-between text-white border-b border-[#38bdf8]/30 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-sky-500/10 p-1.5 rounded-xl border border-sky-400/20 backdrop-blur-md">
                <HispabotHead className="h-10 w-10 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tighter text-sky-400">HISPABOT</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">WP News Official AI</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-slate-800/50 hover:bg-red-500/20 p-2 rounded-full transition-all border border-slate-700 hover:border-red-500/50 group">
              <XCircleIcon className="h-5 w-5 text-slate-400 group-hover:text-red-400" />
            </button>
          </div>

          {/* Conversation Window */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-[#0f172a] scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-sky-600 text-white rounded-tr-none border border-sky-400/30' 
                    : 'bg-[#1e293b] text-slate-200 border border-slate-700 rounded-tl-none font-medium'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Quick Actions */}
            {messages.length < 5 && !isLoading && (
              <div className="flex flex-col space-y-2 mt-4">
                <p className="text-[10px] text-sky-400/60 font-black uppercase tracking-widest ml-1 mb-1">Acciones Rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(action.query)}
                      className="flex items-center space-x-2 bg-[#1e293b]/50 border border-slate-700 text-slate-300 hover:text-sky-400 px-3 py-2.5 rounded-xl text-[11px] font-bold hover:bg-sky-400/10 hover:border-sky-400/50 transition-all active:scale-95"
                    >
                      <action.icon className="h-3.5 w-3.5" />
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1e293b] p-4 rounded-2xl rounded-tl-none border border-slate-700">
                  <div className="flex space-x-2">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Minimalist Input Area */}
          <div className="p-4 bg-[#0f172a] border-t border-slate-800">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregúntame lo que sea..."
                className="w-full bg-[#1e293b] border border-slate-700 text-slate-200 rounded-2xl pl-5 pr-12 py-4 text-sm focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all placeholder:text-slate-500 font-medium"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-2.5 top-2.5 bg-sky-600 text-white p-2.5 rounded-xl hover:bg-sky-500 transition-all disabled:opacity-50 shadow-[0_0_15px_rgba(2,132,199,0.3)] active:scale-90"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </form>
            <p className="text-[9px] text-center text-slate-600 mt-4 font-bold tracking-widest uppercase">
              White Plains News AI • News that empowers you
            </p>
          </div>
        </div>
      ) : (
        /* Floating Head Icon (Official Isotype) */
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="p-1 rounded-3xl shadow-[0_20px_60px_rgba(56,189,248,0.3)] hover:shadow-[0_25px_80px_rgba(56,189,248,0.5)] hover:scale-110 transition-all duration-500 animate-float"
          >
            <div className="bg-[#0f172a] rounded-3xl p-3 border-2 border-sky-400/40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <HispabotHead className="h-12 w-12 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
            </div>
            {/* Notification Pulse */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-sky-400 rounded-full border-2 border-[#0f172a] animate-pulse"></div>
          </button>
          
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
            <div className="bg-[#1e293b] text-sky-400 px-5 py-3 rounded-2xl text-xs font-black whitespace-nowrap shadow-2xl border border-sky-400/20 flex items-center space-x-3 uppercase tracking-tighter">
              <span>Hola, soy Hispabot</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
