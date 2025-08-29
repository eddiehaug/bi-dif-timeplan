import React, { useState } from 'react';
import type { Activity } from '../types';
import { ActivityCard } from './ActivityCard';

interface ScheduleViewProps {
  activities: Activity[];
  onSelectActivity: (activity: Activity) => void;
  onViewTeam: () => void;
}

type Day = 'Tirsdag' | 'Onsdag' | 'Torsdag';

const legendItems = [
    { color: 'blue', label: 'Teoriforelesninger' },
    { color: 'yellow', label: 'Innovasjon i praksis' },
    { color: 'orange', label: 'Gjesteforelesere' },
    { color: 'green', label: 'Metode/annet' },
    { color: 'gray', label: 'Pauser/Slutt' },
];

const colorLegendClasses = {
    blue: 'bg-blue-400',
    yellow: 'bg-yellow-400',
    orange: 'bg-orange-400',
    green: 'bg-green-400',
    gray: 'bg-slate-300',
};


export const ScheduleView: React.FC<ScheduleViewProps> = ({ activities, onSelectActivity, onViewTeam }) => {
  const [activeDay, setActiveDay] = useState<Day>('Tirsdag');

  const days: Day[] = ['Tirsdag', 'Onsdag', 'Torsdag'];

  const dayDates = {
    'Tirsdag': '9. september',
    'Onsdag': '10. september',
    'Torsdag': '11. september'
  }

  const filteredActivities = activities.filter(activity => activity.day === activeDay);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 sm:mb-0">Timeplan</h2>
        <button onClick={onViewTeam} className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
          Se programteamet →
        </button>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600 items-center">
          <span className="font-semibold text-slate-700">Fargekoder:</span>
          {legendItems.map(item => (
              <div key={item.label} className="flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-1.5 ${colorLegendClasses[item.color]}`}></span>
                  <span>{item.label}</span>
              </div>
          ))}
      </div>


      <div className="border-b border-slate-200 mb-4">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`${
                activeDay === day
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition`}
            >
              {day}
            </button>
          ))}
        </nav>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">{activeDay} {dayDates[activeDay]}</h3>
        <div className="space-y-3">
          {filteredActivities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} onSelectActivity={onSelectActivity} />
          ))}
        </div>
      </div>
    </div>
  );
};