import React, { useState } from 'react';

// --- Components de Reemplaçament (Placeholders) ---
// Perquè aquest arxiu funcioni de manera independent, he creat
// versions simples del Header i Footer aquí.
// Quan integris aquest codi al teu projecte, pots esborrar
// aquestes dues seccions i tornar a activar les línies d'importació originals.

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Lobby de Dones</h1>
      <nav>
        <a href="/" className="px-3 hover:text-gray-300">Inici</a>
        <a href="/denuncia" className="px-3 hover:text-gray-300 font-bold text-pink-400">Denuncia un Atac</a>
      </nav>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Lobby de Dones. Tots els drets reservats.</p>
    </div>
  </footer>
);
// --- Fi dels Components de Reemplaçament ---


const DenunciaPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // IMPORTANT: Enganxa aquí l'URL del Webhook que has copiat de Make.com
  const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/uy74p85y3a6uyrz0ihjf04jgckc448pl";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setResponse(null);
    setError(null);

    if (MAKE_WEBHOOK_URL === "https://hook.eu2.make.com/uy74p85y3a6uyrz0ihjf04jgckc448pl" || !MAKE_WEBHOOK_URL) {
        setError("Error de configuració: L'URL del webhook no està definida. Edita el fitxer DenunciaPage.tsx i substitueix el text 'URL_DEL_TEU_WEBHOOK_AQUI' per l'URL real.");
        setIsLoading(false);
        return;
    }

    if (!url.startsWith('http')) {
        setError("Si us plau, introdueix un URL vàlid (ha de començar amb http:// o https://).");
        setIsLoading(false);
        return;
    }

    try {
      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        throw new Error(`Error en la comunicació amb el servidor: ${res.statusText}`);
      }

      const data = await res.json();
      
      // El nostre Blueprint retorna un objecte com { "response": "text de la IA" }
      setResponse(data.response);

    } catch (err) {
      console.error(err);
      setError("Hi ha hagut un problema en processar la teva sol·licitud. Si us plau, intenta-ho de nou més tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eina de Suport contra l'Odi Online</h1>
          <p className="text-lg text-gray-300 mb-8">
            Has rebut un missatge d'odi, discriminació o violència? Enganxa l'enllaç aquí. La nostra assistent d'IA l'analitzarà i et proporcionarà una resposta amb consells i recursos per fer-hi front.
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="url-input" className="block text-left text-xl font-medium mb-2">
                Enllaç (URL) del missatge o publicació
              </label>
              <input
                id="url-input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://x.com/usuari/status/12345..."
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:bg-gray-500"
            >
              {isLoading ? 'Analitzant...' : 'Analitzar i rebre suport'}
            </button>
          </form>

          {error && (
            <div className="mt-8 bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-left">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {isLoading && (
            <div className="mt-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mx-auto"></div>
              <p className="mt-4 text-gray-400">Processant... Això pot trigar uns segons.</p>
            </div>
          )}

          {response && (
            <div className="mt-12 p-8 bg-gray-800 rounded-lg shadow-lg text-left">
              <h2 className="text-2xl font-bold mb-4 text-pink-400">Resposta i Recomanacions</h2>
              <div 
                className="prose prose-invert max-w-none" 
                dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br />') }}
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DenunciaPage;
