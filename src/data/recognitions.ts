export interface Recognition {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
}

export const recognitions: Recognition[] = [
    {
        id: 'medal-terrassa',
        title: "Medalla d’Honor de la Ciutat de Terrassa",
        description: "La nostra presidenta, Rosa Maria Fernández Sansa, en reconeixement a la seva tasca en defensa dels drets de les dones.",
        imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2023/03/img-20230307-wa0038.jpg"
    },
    {
        id: 'medal-generalitat',
        title: "Medalla de la Generalitat de Catalunya",
        description: "Amb motiu dels 25 anys de la inscripció de la Plataforma.",
        imageUrl: "/images/medal-catalunya.png"
    }
];
