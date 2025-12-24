import React from 'react';
import { objectives } from '../data/objectives';

interface ObjectivesSectionProps {
    onNavigate: (page: string) => void;
}

const ObjectivesSection: React.FC<ObjectivesSectionProps> = ({ onNavigate }) => {
    return (
        <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="h-full w-full text-purple-100" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" />
                </svg>
            </div>

            <div className="relative container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Objectius</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {objectives.map((obj) => (
                        <div key={obj.id} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                                {/* Generic icon based on ID, or we could add icon paths to data */}
                                {obj.id === 'abolition' && (
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                )}
                                {obj.id === 'violence' && (
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                )}
                                {obj.id === 'equality' && (
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{obj.title}</h3>
                            <p className="text-gray-600">{obj.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); onNavigate('ambits'); }}
                        className="bg-purple-100 text-purple-700 hover:bg-purple-200 font-semibold py-3 px-8 rounded-lg shadow-sm transition-colors duration-300 flex items-center gap-2"
                    >
                        Descobreix què fem
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ObjectivesSection;
