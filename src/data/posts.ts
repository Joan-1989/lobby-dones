// src/data/posts.ts

export interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  content: string; // S'ha canviat el nom de 'fullContent' a 'content' per solucionar l'error
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
  {
    id: 4,
    title: "El fòrum generació per a la igualtat conclou a París amb compromisos revolucionaris",
    date: "14 de juliol de 2021",
    category: "Internacional",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2019/06/ag-20192png.png",
    excerpt: "El Fòrum marca un canvi històric positiu de poder i perspectiva. Els defensors de la igualtat de gènere han pressionat per obtenir plans d’estímul i recuperació sensibles al gènere.",
    content: `
      <p>“El Generation Equality Forum marca un canvi històric positiu de poder i perspectiva. Els defensors de la igualtat de gènere han pressionat per obtenir plans d’estímul i recuperació sensibles al gènere per garantir que les dones i les nenes no quedin enrere mentre el món es reconstrueix. Juntes ens hem mobilitzat per diferents sectors de la societat, de sud a nord, per convertir-nos en una força formidable, disposada a obrir un nou capítol en igualtat de gènere”, va dir Phumzile Mlambo-Ngcuka, directora executiva d’ONU Dones.</p>
    `,
  },
];
