
import React from 'react';
import type { Professor } from '../types';

interface ProfessorsModalProps {
  professors: Professor[];
  onClose: () => void;
}

export const ProfessorsModal: React.FC<ProfessorsModalProps> = ({ professors, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-slate-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-800">Programteam</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl">&times;</button>
          </div>
          <p className="text-slate-500 mt-1">Et samkjørt team fra BI leverer master of management-programmet Digitalisering, Innovasjon og Forretningsmodeller 2025-2026. Programmets koordinator er Elisabeth Margot Lund.</p>
        </div>
        <div className="overflow-x-auto flex-grow">
          <div className="inline-block min-w-full p-6 align-middle">
            <div className="overflow-hidden border border-slate-200 rounded-lg">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Navn/Epost</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Rolle på programmet</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Stilling på BI</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Samling nr</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {professors.map((prof, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={prof.imageUrl} alt={prof.name} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-slate-900">
                                {prof.linkedinUrl ? (
                                    <a href={prof.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                                        {prof.name}
                                    </a>
                                ) : (
                                    prof.name
                                )}
                            </div>
                            <div className="text-sm text-slate-500">{prof.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{prof.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{prof.position}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{prof.sessions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
