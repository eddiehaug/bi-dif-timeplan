
import React from 'react';
import type { Activity, Link } from '../types';
import { VideoIcon, LinkIcon } from './icons';

interface DetailsModalProps {
  activity: Activity;
  onClose: () => void;
  onOpenLink: (url: string) => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-4">
        <h4 className="font-semibold text-slate-600 text-sm uppercase tracking-wider mb-2">{title}</h4>
        <div className="text-slate-700 text-base">{children}</div>
    </div>
);


export const DetailsModal: React.FC<DetailsModalProps> = ({ activity, onClose, onOpenLink }) => {
  if (!activity.details) return null;

  const renderLink = (link: Link) => {
    if (link.type === 'profile' || link.type === 'web') {
      return (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
        >
          <LinkIcon /> {link.text}
        </a>
      );
    }
    
    const isVideo = link.type === 'video';
    const Icon = isVideo ? VideoIcon : LinkIcon;
    const url = isVideo && !link.url.includes('embed') 
      ? `https://www.youtube.com/embed/${link.url.split('v=')[1]}`
      : link.url;

    return (
       <button 
         key={link.url}
         onClick={() => onOpenLink(url)} 
         className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
       >
         <Icon/> {link.text}
       </button>
    );
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-slate-200 sticky top-0 bg-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-mono text-sm text-slate-500">{activity.time}</p>
              <h2 className="text-2xl font-bold text-slate-800 mt-1">{activity.title}</h2>
              {activity.presenter && <p className="text-slate-600 mt-1">{activity.presenter}</p>}
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">&times;</button>
          </div>
        </div>
        <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <DetailSection title="Pedagogisk Gjennomføring">
                        <p className="font-bold">{activity.details.pedagogy.title}</p>
                        <p className="text-sm mt-1">{activity.details.pedagogy.description}</p>
                    </DetailSection>
                </div>
                <div>
                    <DetailSection title="Kommentarer og Interaksjon">
                         {activity.details.comments.split('\n').map((line, index) => (
                            <p key={index} className="text-sm mb-2 last:mb-0">{line}</p>
                        ))}
                        {activity.details.links && activity.details.links.map(renderLink)}
                    </DetailSection>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};