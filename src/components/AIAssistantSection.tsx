import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

// La clau API es carrega de manera segura des de les variables d'entorn.
// El fitxer vite.config.ts s'encarrega d'injectar el valor d'API_KEY
// des del teu arxiu .env durant el procés de 'build'.
const API_KEY = process.env.API_KEY;

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const AIAssistantSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (prompt: string) => {
    if (!prompt.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: prompt }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      if (!API_KEY) {
        throw new Error("API key is not configured.");
      }
      const ai = new GoogleGenAI({ apiKey: API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: "Ets una assistent virtual per a la 'Plataforma Catalana de Suport al Lobby Europeu de Dones'. La teva missió és respondre preguntes sobre els objectius de l'organització, el feminisme, els drets de les dones a Catalunya i com involucrar-se. El teu to ha de ser proper, informatiu, empoderador i alineat amb els principis feministes. Sigues concisa i clara en les teves respostes."
        }
      });
      
      const aiText = response.text;
      if (!aiText) {
          throw new Error("No s'ha pogut obtenir una resposta. Intenta-ho de nou.");
      }
      setMessages(prev => [...prev, { sender: 'ai', text: aiText }]);

    } catch (e: any) {
      console.error(e);
      const errorMessage = e.message.includes("API key is not configured") 
        ? "La clau API no està configurada correctament. Assegura't que l'arxiu .env existeix i conté la variable API_KEY."
        : "Hi ha hagut un error en contactar amb l'assistent. Si us plau, intenta-ho més tard.";
      setMessages(prev => [...prev, { sender: 'ai', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const exampleQuestions = [
    "Quina és la missió del Lobby?",
    "Com puc col·laborar?",
    "Què és la bretxa salarial?",
  ];

  return (
    <section id="assistant" className="bg-neutral-light py-20 lg:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-text mb-4">Tens Preguntes?</h2>
          <p className="font-sans text-lg text-neutral-text-subtle leading-relaxed">
            La nostra assistent virtual t'ajuda a resoldre dubtes sobre la nostra missió, projectes i el feminisme.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-neutral-background rounded-xl border border-neutral-border shadow-md">
          <div
            ref={chatContainerRef}
            aria-live="polite"
            className="h-96 p-6 overflow-y-auto flex flex-col gap-4 scroll-smooth"
          >
            {messages.length === 0 && (
                 <div className="flex-grow flex flex-col justify-center items-center text-center text-neutral-text-subtle">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     <p className="font-medium">Fes una pregunta per començar.</p>
                     <p className="text-sm">O prova un dels nostres exemples.</p>
                 </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">♀</div>}
                <div className={`max-w-md md:max-w-lg p-3 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-text'}`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
             {isLoading && (
              <div className="flex items-end gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">♀</div>
                  <div className="max-w-md md:max-w-lg p-3 rounded-lg bg-neutral-light text-neutral-text-subtle">
                      <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                          <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                      </div>
                  </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-neutral-border">
              <div className="flex flex-wrap gap-2 mb-3 justify-center">
                  {exampleQuestions.map(q => (
                       <button
                         key={q}
                         onClick={() => handleSendMessage(q)}
                         disabled={isLoading}
                         className="bg-primary/10 hover:bg-primary/20 text-primary-dark text-xs font-semibold py-1.5 px-3 rounded-full transition-colors duration-fast disabled:opacity-50"
                       >
                         {q}
                       </button>
                  ))}
              </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="flex items-center gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escriu la teva pregunta..."
                aria-label="La teva pregunta"
                className="w-full bg-neutral-light border border-neutral-border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-neutral-text placeholder:text-neutral-text-subtle"
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading} aria-label="Enviar pregunta" className="bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white font-semibold p-2.5 rounded-lg transition-all duration-normal ease-in-out transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
