export interface Objective {
  id: string;
  title: string;
  description: string;
}

export const objectives: Objective[] = [
  {
    id: 'abolition',
    title: "Abolició del sistema prostitucional",
    description: "Com a forma de violència i explotació contra les dones.",
  },
  {
    id: 'violence',
    title: "Erradicació de la violència masclista",
    description: "En totes les seves formes, contra dones i nenes.",
  },
  {
    id: 'equality',
    title: "Igualtat de drets i participació",
    description: "A través de l’educació feminista, la incidència política i l’empoderament de les dones.",
  },
];
