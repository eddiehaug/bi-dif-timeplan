
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScheduleView } from './components/ScheduleView';
import { Overview } from './components/Overview';
import { DetailsModal } from './components/DetailsModal';
import { ProfessorsModal } from './components/ProfessorsModal';
import { LinkModal } from './components/LinkModal';
import type { Activity, Professor } from './types';
import { activities, professors } from './components/data';

function App() {
  const [activeView, setActiveView] = useState<'overview' | 'schedule'>('overview');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isProfessorsModalOpen, setIsProfessorsModalOpen] = useState(false);
  const [linkModalUrl, setLinkModalUrl] = useState<string | null>(null);

  const handleSelectActivity = (activity: Activity) => {
    if (activity.details) {
      setSelectedActivity(activity);
    }
  };

  const handleCloseDetailsModal = () => {
    setSelectedActivity(null);
  };

  const handleOpenProfessorsModal = () => {
    setIsProfessorsModalOpen(true);
  };

  const handleCloseProfessorsModal = () => {
    setIsProfessorsModalOpen(false);
  };

  const handleOpenLink = (url: string) => {
    setLinkModalUrl(url);
  };

  const handleCloseLinkModal = () => {
    setLinkModalUrl(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">

        <div className="mb-6 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm bg-white p-1" role="group">
                <button
                    type="button"
                    onClick={() => setActiveView('overview')}
                    className={`px-6 py-2 text-sm font-medium ${
                        activeView === 'overview' ? 'bg-blue-600 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
                    } rounded-md transition-all duration-200`}
                    aria-pressed={activeView === 'overview'}
                >
                    Oversikt
                </button>
                <button
                    type="button"
                    onClick={() => setActiveView('schedule')}
                    className={`px-6 py-2 text-sm font-medium ml-1 ${
                        activeView === 'schedule' ? 'bg-blue-600 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
                    } rounded-md transition-all duration-200`}
                    aria-pressed={activeView === 'schedule'}
                >
                    Timeplan
                </button>
            </div>
        </div>

        {activeView === 'overview' && <Overview />}
        {activeView === 'schedule' && (
            <ScheduleView
              activities={activities}
              onSelectActivity={handleSelectActivity}
              onViewTeam={handleOpenProfessorsModal}
            />
        )}
      </main>
      
      {selectedActivity && (
        <DetailsModal 
          activity={selectedActivity} 
          onClose={handleCloseDetailsModal} 
          onOpenLink={handleOpenLink} 
        />
      )}
      
      {isProfessorsModalOpen && (
        <ProfessorsModal 
          professors={professors} 
          onClose={handleCloseProfessorsModal} 
        />
      )}

      {linkModalUrl && (
        <LinkModal 
          url={linkModalUrl} 
          onClose={handleCloseLinkModal} 
        />
      )}
    </div>
  );
}

export default App;
