import React from 'react';
import { GoogleAiStudioLogo } from './icons';

export const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center text-xs text-slate-500 mb-6">
                    <GoogleAiStudioLogo />
                    <span className="ml-2">Made with love with Google AI Studio: <a href="https://ai.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ai.dev</a></span>
                </div>

                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 max-w-4xl mx-auto leading-tight">
                        Plan og læringsdesign for gjennomføring av Samling 1 på master of management-programmet
                    </h1>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-blue-700 tracking-tight">
                        Digitalisering, Innovasjon og Forretningsmodeller
                    </h2>
                    <div className="mt-4 text-sm text-slate-500 max-w-lg mx-auto">
                        <p>Handelshøyskolen BI, Nydalen</p>
                        <p>Peder Inge Furseth, programansvarlig & professor i innovasjon.</p>
                        <p>Program oppdatert 29. august 2025. Det tas forbehold om endringer.</p>
                    </div>
                    <div className="mt-8">
                        <img 
                            src="lightbulb.jpeg" 
"
                            alt="Innovation lightbulb"
                            className="w-48 h-auto mx-auto"
                        />
                        <p className="mt-4 text-2xl font-bold tracking-widest text-blue-800">INNOVATION</p>
                    </div>
                </div>
            </div>
        </header>
    );
};
