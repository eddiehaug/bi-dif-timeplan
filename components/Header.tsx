
import React from 'react';
import { GoogleAiStudioLogo } from './icons';

export const Header = () => {
    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center text-xs text-slate-500 pb-6 border-b border-slate-200">
                    <GoogleAiStudioLogo />
                    <span className="ml-2">| Vibe coded with love using Google AI Studio: <a href="https://ai.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ai.dev</a></span>
                </div>

                <div className="text-center mt-6">
                    <h1 className="font-monda text-3xl sm:text-4xl text-blue-700 tracking-tight">
                        Digitalisering, Innovasjon og Forretningsmodeller
                    </h1>
                    <p className="font-quicksand mt-4 text-lg sm:text-xl text-slate-800 max-w-4xl mx-auto leading-tight">
                        Plan og læringsdesign for gjennomføring av Samling 1 på master of management-programmet
                    </p>
                    <div className="font-quicksand mt-4 text-xs sm:text-sm text-slate-400 max-w-4xl mx-auto leading-tight">
                        <p>Handelshøyskolen BI, Nydalen</p>
                        <p>Peder Inge Furseth, programansvarlig & professor i innovasjon.</p>
                        <p>Program oppdatert 29. august 2025. Det tas forbehold om endringer.</p>
                    </div>
                    <div className="mt-8">
                        <img 
                            src="https://i.imgur.com/7GrxGYO.jpeg"
                            alt="Innovation lightbulb"
                            className="w-48 h-auto mx-auto"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
