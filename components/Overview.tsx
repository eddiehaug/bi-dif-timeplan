
import React from 'react';

const CheckIcon = () => (
    <svg className="h-6 w-6 text-blue-500 flex-shrink-0 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const Overview = () => {
  const goals = [
    'Bli kjent med fagfeltet innovasjon',
    'Oversikt over nye modeller og perspektiver innen innovasjon og KI',
    'Innsikt i å lede utvikling og kommersialisering innen produkter, prosesser og tjenester',
    'Eksempler på innovasjon; drøfte hvorfor noen lykkes og andre ikke',
    'Gruppearbeid/ - diskusjon: Oppøve evnen til å anvende forskjellig modeller og perspektiver for innovasjon',
  ];

  const topics = [
    'Sentrale perspektiv og modeller innen innovasjon og KI',
    'Drivere for utviklingen i økonomien: tjenester, og digitalisering',
    'Typer og grader av innovasjon',
    'Betydning av innovasjon og digital/KI transformasjon for utvikling av konkurransefortrinn i egen bedrift',
    'Produkt-, prosess- og tjenesteinnovasjoner',
    'Suksessfaktorer for innovasjon',
    'De 10 sentrale spørsmålene i programmet',
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
            Samling 1 – Introduksjon til Digitalisering, Innovasjon og Forretningsmodeller <span className="block text-lg font-normal text-slate-500 mt-1">9.-11. september 2025</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Mål for samlingen</h3>
                <ul className="space-y-3">
                    {goals.map((goal, i) => (
                        <li key={i} className="flex items-start">
                           <CheckIcon />
                           <span className="text-slate-600">{goal}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Emneoversikt</h3>
                <ul className="space-y-3">
                    {topics.map((topic, i) => (
                       <li key={i} className="flex items-start">
                           <CheckIcon />
                           <span className="text-slate-600">{topic}</span>
                       </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};
