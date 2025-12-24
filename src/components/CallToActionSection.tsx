import React from 'react';

interface CallToActionSectionProps {
    onNavigate: (page: string) => void;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onNavigate }) => {
    return (
        <section className="relative py-20 bg-gray-900 overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/cta-bg.jpg"
                    alt="Manifestació feminista"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="relative container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
                    Uneix-te a la Plataforma
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                    La teva implicació és clau per aconseguir una societat més justa i igualitària.
                    <br />
                    Fes-te sòcia, col·labora o fes un donatiu.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => onNavigate('contacte')}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        Contacta amb nosaltres
                    </button>
                    <button
                        onClick={() => onNavigate('contacte')} // Assuming 'contacte' handles this or new page needed
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300"
                    >
                        Fes-te sòcia
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
