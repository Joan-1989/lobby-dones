// src/components/NewsSection.tsx

import React from 'react';

// Per evitar els problemes d'importació, he mogut les dades directament a dins d'aquest component.
export interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "La nostra presidenta Rosa Mª Fernández Sansa, homenatjada amb la medalla d'honor de la ciutat de Terrassa",
    date: "21 de març de 2023",
    category: "Reconeixements",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2023/03/img-20230307-wa0038.jpg",
    excerpt: "L'Ajuntament de Terrassa va concedir-li la Medalla d'Honor per les seves aportacions al feminisme, havent creat al 1991 la primera Regidoria per treballar pels objectius d'igualtat d'oportunitats...",
    content: `
      <p>El dia 6 de març l'Ajuntament de Terrassa va concedir-li la Medalla d'Honor de la Ciutat, per les seves aportacions al feminisme havent creat al 1991 la primera Regidoria per treballar pels objectius d'igualtat d'oportunitats per les dones de la ciutat. Aquesta Regidoria va ser la primera de tot Espanya, amb el nom de Regidoria de Promoció de la Dona.</p>
      <p>Una vida dedicada a la lluita pels drets de les dones, i amb altres fundant associacions de dones per Terrassa així com va impulsar juntament amb altres dones el Casal de la Dona d'on va ser la primera presidenta el 1986.</p>
    `,
  },
  {
    id: 2,
    title: "Prostitució: un debat etern",
    date: "27 d'abril de 2022",
    category: "Opinió",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2016/11/iphone-133.jpg",
    excerpt: "La prostitució, abolició o reglamentació, és un debat històric que, de manera més o menys cíclica i amb més o menys intensitat es produeix i recurrentment de la mateixa forma decau.",
    content: `
      <p>La prostitució, abolició o reglamentació, es un debat històric que, de manera mes o menys cíclica i amb mes o menys intensitat es produeix i recurrentment de la mateixa forma decau. Un dels moments històrics en el que aquest debat te especial rellevància a Espanya va ser durant la Segona República.</p>
      <p>Han passat 86 anys, encara no s’ha produït un debat similar, opinions per tots els gustos. Es urgent situar la prostitució com un fet polític, cal saber on som per saber què fer. Si es situa fora del terreny polític es classifica com una elecció personal i es quan ens permet mirat cap un altre costat. La prostitució i l’ús de les dones per part dels homes és una qüestió política, igual com abolir la violència masclista en general.</p>
    `,
  },
  {
    id: 3,
    title: "Resum dels dos seminaris web de la campanya: 'mobilitza't contra el sexisme'",
    date: "23 de novembre de 2020",
    category: "Campanyes",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2020/10/cartel-medios-verde-def.jpg",
    excerpt: "Des d'agost de 2020, el Lobby Europeu de Dones a Espanya participa en la campanya 'Mobilitza't contra el Sexisme' impulsada pel Consell d'Europa. L'objectiu és eradicar el sexisme de tots els sectors.",
    content: `
      <p>Des d'agost de 2020, el Lobby Europeu de Dones a Espanya participa en la campanya "Mobilitza't contra el Sexisme" impulsada pel Consell d'Europa a través de l'acord amb l'European Women's Lobby. L'objectiu és eradicar el sexisme de tots els sectors de la societat. Per això, en LEM Espanya, a més de llançar la campanya en general, hem decidit triar dos sectors per a un major anàlisi: els Mitjans de Comunicació i la Justícia.</p>
      <p>En aquest marc, s'han realitzat dos seminaris web en línia. Les dues trobades van tenir una acollida extraordinària amb més de 350 assistents.</p>
    `,
  },
];

const NewsCard: React.FC<{ post: Post }> = ({ post }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img className="h-48 w-full object-cover" src={post.imageUrl} alt={`Imatge per a ${post.title}`} />
    <div className="p-6">
      <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold">{post.category}</div>
      <p className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">{post.title}</p>
      <p className="mt-2 text-gray-500">{post.excerpt}</p>
      <div className="mt-4">
        <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">Llegeix més &rarr;</a>
      </div>
    </div>
  </div>
);

const NewsSection: React.FC = () => {
  // Mostrem només les 3 primeres notícies per a la pàgina principal
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Actualitat i Notícies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estigues al dia de les nostres últimes activitats, campanyes i articles d'opinió.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
