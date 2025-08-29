
import React from 'react';

interface LinkModalProps {
  url: string;
  onClose: () => void;
}

export const LinkModal: React.FC<LinkModalProps> = ({ url, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-[60] flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex justify-end p-2 bg-slate-100 rounded-t-lg">
          <button onClick={onClose} className="text-slate-600 hover:text-slate-900 font-bold text-2xl">&times;</button>
        </div>
        <iframe
          src={url}
          title="External Content"
          className="w-full h-full border-0 rounded-b-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
