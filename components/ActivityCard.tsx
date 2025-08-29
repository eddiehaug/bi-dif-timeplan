import React from 'react';
import type { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  onSelectActivity: (activity: Activity) => void;
}

const colorClasses = {
  blue: 'bg-blue-50 border-l-4 border-blue-400',
  yellow: 'bg-yellow-50 border-l-4 border-yellow-400',
  orange: 'bg-orange-50 border-l-4 border-orange-400',
  green: 'bg-green-50 border-l-4 border-green-400',
  gray: 'bg-slate-100 border-l-4 border-slate-300',
};

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onSelectActivity }) => {
  const isInteractive = !!activity.details;

  return (
    <div className={`p-4 rounded-md flex items-center space-x-4 ${colorClasses[activity.color]}`}>
      <div className="w-24 text-left pr-4 border-r border-slate-200">
        <p className="font-mono text-sm font-semibold text-slate-700">{activity.time}</p>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{activity.title}</h4>
        {activity.presenter && <p className="text-sm text-slate-500">{activity.presenter}</p>}
      </div>
      {isInteractive && (
        <button
          onClick={() => onSelectActivity(activity)}
          className="bg-white text-slate-700 hover:bg-slate-50 border border-slate-300 rounded-md px-3 py-1.5 text-sm font-medium transition shadow-sm"
        >
          Detaljer
        </button>
      )}
    </div>
  );
};