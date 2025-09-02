
import React from 'react';
import { YouTubeIcon, GoogleDriveIcon } from './icons';

const notebookContent = [
    {
        book: 'All in on AI',
        videoUrl: 'https://youtu.be/_K0UTiiIlw8',
        audioUrl: 'https://drive.google.com/file/d/14EW4uYRraR8Sib5Je8u4a_vvagzmJ3SF/view',
    },
    {
        book: 'Business Model Generation',
        videoUrl: 'https://youtu.be/c8fdGhmtD-A',
        audioUrl: 'https://drive.google.com/file/d/1NcV8ErFEWosjfWYJ9QWtB3r0UfPFcmlh/view',
    },
    {
        book: 'Ten types of Innovation',
        videoUrl: 'https://youtu.be/7C-HFbFaSD0',
        audioUrl: 'https://drive.google.com/file/d/1CAg0eDav6WWfOaiyeVwc3-lEKHcOTukl/view',
    },
    {
        book: 'Omstillingsbarometer 2025',
        videoUrl: 'https://youtu.be/4yPgaW3ihcA',
        audioUrl: 'https://drive.google.com/file/d/1PPFo9PodwXr3uCljV9Oo0s6_Bfi_hpHY/view',
    },
    {
        book: 'Generative AI for Business',
        videoUrl: 'https://youtu.be/ZDQZ4UpaszE',
        audioUrl: 'https://drive.google.com/file/d/18k8GmrnvVahZMYHgXeaeNf0JSU-900GG/view',
    },
    {
        book: 'Generative Models Explained (for Non-Technical People)',
        videoUrl: 'https://youtu.be/wTSxJJ63Kfs',
        audioUrl: 'https://drive.google.com/file/d/1pjZ2REe365yW8j0iIbWH4ZF_mWoRZ_3I/view',
    }
];

export const NotebookLMView = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
                NotebookLM Video and Audio Deep Dives (Podcasts)
            </h2>
            <div className="space-y-8">
                {notebookContent.map((item, index) => (
                    <div key={index} className="p-4 border border-slate-200 rounded-lg bg-slate-50">
                        <h3 className="text-xl font-semibold text-slate-700 mb-4">{item.book}</h3>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                            <a 
                                href={item.videoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                            >
                                <YouTubeIcon />
                                Video Overview
                            </a>
                            <a 
                                href={item.audioUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
                            >
                                <GoogleDriveIcon />
                                Podcast
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
