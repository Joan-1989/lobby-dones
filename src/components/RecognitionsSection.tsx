import React from 'react';
import { recognitions } from '../data/recognitions';

const RecognitionsSection: React.FC = () => {
    return (
        <section className="bg-purple-50 py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Reconeixements</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        La nostra trajectòria i compromís han estat distingits per diverses institucions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {recognitions.map((rec) => (
                        <div key={rec.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-full md:w-1/3 h-64 md:h-full relative bg-gray-200">
                                <img
                                    src={rec.imageUrl}
                                    alt={rec.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{rec.title}</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {rec.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecognitionsSection;
