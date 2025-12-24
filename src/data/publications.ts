export interface Publication {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    excerpt: string;
    fullContent: string;
}

export const publications: Publication[] = [
    {
        id: 'dones-represaliades',
        title: "Dones represaliades a Terrassa",
        category: "Memòria Històrica",
        imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2025/05/portada-llibre-dones-represaliades.png",
        excerpt: "Una investigació per dignificar la memòria de 119 dones que van patir la repressió franquista a la ciutat, fruit de dos anys de recerca.",
        fullContent: `
      <h2 class="text-3xl font-bold mb-4">Un homenatge necessari a la lluita femenina</h2>
      <p class="mb-4">Aquesta obra és un homenatge a les dones que, al final de la Guerra Civil i sota el règim franquista, van ser condemnades i empresonades per defensar les seves idees. És el fruit d'una investigació que inclou una llista de dones represaliades a Terrassa i reconstrueix les seves històries a través dels documents conservats als arxius de tribunals militars i altres fonts.</p>
      <p>Entre acusacions injustes i judicis sumaríssims, emergeixen vides marcades per la valentia i la resistència en un context d'opressió. El llibre posa en relleu la invisibilització d'aquestes dones al llarg de dècades i esdevé una contribució essencial per mantenir viva la memòria històrica.</p>
    `
    },
    {
        id: 'prostitucio-debat',
        title: "La prostitució: un tema de debat",
        category: "Anàlisi",
        imageUrl: "/images/publicacio_prostitucio.jpg",
        excerpt: "Un recull de textos i ponències de diversos seminaris per abordar el complex debat entre l'abolició i la reglamentació de la prostitució.",
        fullContent: `
      <h2 class="text-3xl font-bold mb-4">Documents per a la reflexió: abolició o reglamentació</h2>
      <p class="mb-4">Des de la seva creació, la Plataforma ha tingut com a objectiu propiciar els canvis legals i socials per eliminar tota forma de violència contra les dones. Aquesta publicació recull el material de diversos actes, jornades i seminaris on s'ha tractat el tema de la prostitució des de múltiples perspectives.</p>
      <p>El document busca oferir arguments per a un debat informat, contrastant visions des del periodisme, la psicologia, el treball social i la política, sempre amb el compromís ètic amb la Igualtat i els Drets de les dones com a Drets Humans.</p>
    `
    },
    {
        id: 'publicitat-joc',
        title: "Imaginaris publicitaris, gènere i joc",
        category: "Investigació",
        imageUrl: "/images/publicacio_joc.jpg",
        excerpt: "Anàlisi de la vulnerabilitat femenina i l'addicció conductual en el context de les narratives de consum i la publicitat.",
        fullContent: `
      <h2 class="text-3xl font-bold mb-4">Vulnerabilitat femenina i adicció en les narratives de consum</h2>
      <p class="mb-4">Aquest projecte de investigació aborda l'impacte de gènere en els comportaments de joc de risc des d'una perspectiva innovadora, centrada en l'anàlisi dels imaginaris publicitaris que modelen la vulnerabilitat específica de les dones.</p>
      <p>La hipòtesi central és que la publicitat contemporània reforça models de dependència i un ideal d'autocontrol il·lusori que incideixen directament en la forma en què les dones es vinculen con el joc problemàtic.</p>
    `
    }
];
