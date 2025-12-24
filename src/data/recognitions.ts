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
        imageUrl: "/images/medal-terrassa.png"
    },
    {
        id: 'medal-generalitat',
        title: "Medalla de la Generalitat de Catalunya",
        description: "Amb motiu dels 25 anys de la inscripció de la Plataforma.",
        // Placeholder image
        imageUrl: "/images/recon-2.jpg"
    }
];
